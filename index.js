const express = require('express');
const cors = require('cors');
const config = require('./src/config');
const logger = require('./src/middleware/logger');
const meRoute = require('./src/routes/me');

const app = express();

app.use(cors());
app.use(express.json());
app.use(logger);

// mount /me
app.use('/me', meRoute);

// healthcheck
app.get('/', (req, res) => res.send('OK'));

const server = app.listen(config.port, () => {
  console.log(`Server running on port ${config.port}`);
});

// graceful shutdown handling
process.on('SIGINT', () => {
  console.log('Shutting down server...');
  server.close(() => process.exit(0));
});
