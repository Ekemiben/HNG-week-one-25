# Backend Wizards — Stage 0: Dynamic Profile Endpoint

This repository contains a Node.js/Express API that implements the Stage 0 task:
A `GET /me` endpoint returning your profile plus a dynamic cat fact from `https://catfact.ninja/fact`.

## Features
- `GET /me` returns JSON:
```json
{
  "status": "success",
  "user": { "email": "<your email>", "name": "<your full name>", "stack": "<your backend stack>" },
  "timestamp": "<UTC ISO 8601>",
  "fact": "<cat fact or fallback>"
}


Requirements

Node.js 18+ recommended

npm

Setup (local)

1. Clone repo

git clone https://github.com/Ekemiben/HNG-week-one-25
cd backend-wizards-stage0

2. Install dependencies
npm install

3. Copy .env.example to .env and edit values:
PORT=3000
CATFACT_TIMEOUT_MS=3000
USER_EMAIL=ekemiben.4@gmail.com
USER_NAME=Ekemini Sunday Ben
USER_STACK=Node.js/Express

4. Start the server
npm run dev

5. Test the endpoint
curl -i http://localhost:3000/me

A correct response will be 200 OK with Content-Type: application/json and the JSON payload described above.

Notes

External request timeout (CATFACT_TIMEOUT_MS) defaults to 3000 ms. Increase if your environment needs it.

Current behavior: if the Cat Facts API call fails, we return a fallback fact but still a 200 with the same JSON shape. If you prefer, change to return 502 Bad Gateway.

Consider adding rate limiting if you deploy publicly.