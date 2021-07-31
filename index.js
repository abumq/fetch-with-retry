/**
 * Bismillah ar-Rahmaan ar-Raheem
 *
 * (c) 2021-present Amrayn Web Services
 *
 * This library is released under the Apache-2.0 Licence.
 *
 * https://amrayn.com
 */

const snooze = ms => new Promise(resolve => setTimeout(resolve, ms));

const fetchWithRetry = async (url, options = { retries: 1, retryDelay: 3000 }, debugLog) => {

  const { retries, retryDelay, ...restOpts } = options;

  let attempts = Number(retries) || 1;
  const delay = Number(retryDelay) || 0;

  while (attempts) {
    attempts -= 1;
    try {
      return await fetch(url, restOpts);
    } catch (e) {
      if (attempts === 0) {
        throw e;
      }
    }

    if (typeof debugLog === 'function') {
      debugLog('Retrying [%s/%s] - delay %s...', retries - attempts, retries, delay)
    }
    if (delay) {
      await snooze(delay);
    }
  }
}

module.exports = fetchWithRetry;
