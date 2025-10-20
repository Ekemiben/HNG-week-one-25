const express = require('express');
const router = express.Router();
const { fetchCatFact } = require('../services/catFactService');
const config = require('../config');

const FALLBACK_FACT = 'Could not fetch a cat fact at this time — but cats are awesome!';

/**
 * GET /me
 * Returns profile info and a dynamic cat fact.
 */
router.get('/', async (req, res) => {
  try {
    const fact = await fetchCatFact(config.catFactTimeoutMs);
    const payload = {
      status: 'success',
      user: {
        email: config.user.email,
        name: config.user.name,
        stack: config.user.stack
      },
      timestamp: new Date().toISOString(),
      fact
    };
    res.setHeader('Content-Type', 'application/json');
    return res.status(200).json(payload);
  } catch (err) {
    console.error('Error fetching cat fact:', err.message || err);
    // Fallback behavior: still return success shape with fallback fact.
    const payload = {
      status: 'success',
      user: {
        email: config.user.email,
        name: config.user.name,
        stack: config.user.stack
      },
      timestamp: new Date().toISOString(),
      fact: FALLBACK_FACT
    };
    res.setHeader('Content-Type', 'application/json');
    return res.status(200).json(payload);
  }
});

module.exports = router;
