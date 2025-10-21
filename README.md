# 🧙‍♂️ Backend Wizards — Stage 0 Task  
**Build a Dynamic Profile Endpoint**

This project implements a simple RESTful API endpoint `/me` that returns your profile information and a dynamic cat fact fetched from the public [Cat Facts API](https://catfact.ninja/fact).

---

## 🚀 Features
- GET `/me` returns profile information in the required JSON structure  
- Fetches a **new cat fact** dynamically on each request  
- Returns **current UTC timestamp** in ISO 8601 format  
- Handles external API failures gracefully with a **fallback fact**  
- Includes **logging**, **CORS**, and **environment variable** configuration  


---

## 🧩 Technologies Used
- **Node.js**
- **Express.js**
- **Axios** (for external API requests)
- **dotenv**
- **CORS**
- **Nodemon** (for development)

---

## ⚙️ Installation & Setup

### 1️⃣ Clone Repository
```bash
git clone https://github.com/Ekemiben/HNG-week-one-25
cd week-one

2️⃣ Install Dependencies
    npm install

3️⃣ Configure Environment
    Create a .env file in the project root (copy from .env.example)
    :
PORT=3000
CATFACT_TIMEOUT_MS=3000
USER_EMAIL=ekemiben.4@gmail.com
USER_NAME=Ekemini Sunday Ben
USER_STACK=Node.js/Express

4️⃣ Start the Server
  npm start

🧠 API Endpoint Documentation
GET /me

URL: /me
Method: GET
Content-Type: application/json
Description: Returns your profile details, the current UTC timestamp, and a dynamic cat fact.

✅ Successful Response — 200 OK

{
  "status": "success",
  "user": {
    "email": "ekemiben.4@gmail.com",
    "name": "Ekemini Sunday Ben",
    "stack": "Node.js/Express"
  },
  "timestamp": "2025-10-21T12:34:56.789Z",
  "fact": "A group of cats is called a clowder."
}
🐾 Fallback Response (if Cat Facts API fails)
{
  "status": "success",
  "user": {
    "email": "ekemiben.4@gmail.com.com",
    "name": "Ekemini Sunday Ben",
    "stack": "Node.js/Express"
  },
  "timestamp": "2025-10-21T12:34:56.789Z",
  "fact": "Could not fetch a cat fact at this time — but cats are awesome!"
}

🧾 Acceptance Criteria Checklist ✅

 GET /me endpoint accessible and returns 200 OK

 Response JSON strictly follows the required schema

 Content-Type: application/json header set

 timestamp updates dynamically in UTC ISO 8601 format

 fact fetched live from Cat Facts API (not cached)

 Graceful handling if external API fails

 Proper code structure, logging, and CORS

 Works on any host (Railway, Heroku, AWS, PXXL App, etc.)

 

🧪 Testing

Run locally:

 http://localhost:3000/me


Expected output:

HTTP 200 OK

Header: Content-Type: application/json

Body matches the specified JSON format

🧑‍💻 Example Local Output
$ curl http://localhost:3000/me
{
  "status":"success",
  "user":{
    "email":"ekemiben.4@gmail.com",
    "name":"Ekemini Sunday Ben",
    "stack":"Node.js/Express"
  },
  "timestamp":"2025-10-21T09:30:45.123Z",
  "fact":"Cats sleep for 70% of their lives."
}


🪄 Author

Name: Ekemini Sunday Ben
Email: ekemiben.4@gmail.com

Stack: Node.js / Express
GitHub: https://github.com/Ekemiben/HNG-week-one-25

💡 License

This project is released under the MIT License
 — feel free to use and modify for educational purposes.