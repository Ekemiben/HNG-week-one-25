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
