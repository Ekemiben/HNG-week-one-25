import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { setTimeout as wait } from "timers/promises";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors()); // allow cross-origin. Customize origins for production.
app.use(express.json());

// Basic request logging
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url} - ${req.ip}`);
  next();
});

const USER_EMAIL = process.env.USER_EMAIL || "ekemiben.4@gmail.com";
const USER_NAME = process.env.USER_NAME || "Ekemini Sunday Ben";
const USER_STACK = process.env.USER_STACK || "Node.js/Express";

const CATFACT_URL = process.env.CATFACT_URL || "https://catfact.ninja/fact";
const CATFACT_TIMEOUT_MS = Number(process.env.CATFACT_TIMEOUT_MS) || 3000;

async function fetchCatFact(url, timeoutMs) {
  // Use AbortController for timeout
  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), timeoutMs);

  try {
    const res = await fetch(url, { signal: controller.signal });
    clearTimeout(id);

    if (!res.ok) {
      throw new Error(`Cat Facts API returned ${res.status}`);
    }
    const data = await res.json();
    // catfact.ninja/fact returns { fact: "string", length: 123 }
    if (data && typeof data.fact === "string" && data.fact.length > 0) {
      return data.fact;
    }
    throw new Error("Unexpected Cat Facts API response format");
  } catch (err) {
    clearTimeout(id);
    // bubble up an error so caller can decide fallback
    throw err;
  }
}

app.get("/me", async (req, res) => {
  const timestamp = new Date().toISOString(); // current UTC ISO 8601 timestamp

  let fact = null;
  try {
    fact = await fetchCatFact(CATFACT_URL, CATFACT_TIMEOUT_MS);
  } catch (err) {
    // Log the error for debugging
    console.error("Failed to fetch cat fact:", err?.message || err);

    // Fallback message — still conform to required response schema
    fact = "Could not fetch a cat fact at this time. Please try again later.";
    // We intentionally still return 200 OK and a valid JSON response per guidance.
    // If you'd prefer an error status when external API fails, replace below with res.status(502).json(...)
  }

  const responseBody = {
    status: "success",
    user: {
      email: USER_EMAIL,
      name: USER_NAME,
      stack: USER_STACK
    },
    timestamp,
    fact
  };

  // Explicitly set Content-Type
  res.setHeader("Content-Type", "application/json");
  return res.status(200).json(responseBody);
});

// Healthcheck
app.get("/healthz", (req, res) => res.status(200).json({ status: "ok", uptime: process.uptime() }));

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
