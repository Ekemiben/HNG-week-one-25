const dotenv = require('dotenv');
dotenv.config();

const config = {
  port: process.env.PORT ? Number(process.env.PORT) : 3000,
  catFactTimeoutMs: process.env.CATFACT_TIMEOUT_MS ? Number(process.env.CATFACT_TIMEOUT_MS) : 3000,
  user: {
    email: process.env.USER_EMAIL || 'ekeminben.4@gmail.com',
    name: process.env.USER_NAME || 'Ekemini Sunday Ben',
    stack: process.env.USER_STACK || 'Node.js/Express'
  }
};

module.exports = config;
