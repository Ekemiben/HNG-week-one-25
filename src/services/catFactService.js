const axios = require('axios');
const CATFACT_URL = 'https://catfact.ninja/fact';

/**
 * Fetch a random cat fact from external API.
 * Returns the fact string on success.
 * Throws an error on network failure or non-200.
 * Timeout must be passed in ms.
 */
async function fetchCatFact(timeoutMs = 3000) {
  const response = await axios.get(CATFACT_URL, {
    timeout: timeoutMs,
    headers: {
      'Accept': 'application/json'
    }
  });
  if (response && response.status === 200 && response.data && response.data.fact) {
    return response.data.fact;
  }
  throw new Error('Unexpected response from Cat Facts API');
}

module.exports = { fetchCatFact };
