const snooze = ms => new Promise(resolve => setTimeout(resolve, ms));

const fetchWithRetry = async (url, options = { retries: 1, retryDelay: 3000 }, debugLog) => {

  const { retries, retryDelay, ...restOpts } = options;

  let attempts = Math.max(Number(retries) || 1, 1);
  const delay = Math.max(Number(retryDelay) || 3000, 0);

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
