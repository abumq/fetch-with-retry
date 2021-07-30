/**
 * Bismillah ar-Rahmaan ar-Raheem
 *
 * (c) 2021-present Amrayn Web Services
 *
 * This library is released under the MIT Licence.
 *
 * https://amrayn.com
 */

 const snooze = ms => new Promise(resolve => setTimeout(resolve, ms));

 const fetchWithRetry = async (url, options = { retries: 1, retryDelay: 3000 }, debugLog) => {
   let retryCount = 0;

   const { retries, retryDelay, ...restOpts } = options;

   while (retryCount <= retries) {
     retryCount += 1;
     try {
       return await fetch(url, restOpts)
     } catch (e) {
       if (retryCount > retries) {
         throw e;
       }
     }

     if (typeof debugLog === 'function') {
       debugLog('Retrying [%s/%s] - delay %s...', retryCount, retries, retryDelay)
    }
     await snooze(retryDelay);
   }
 }

module.exports = fetchWithRetry;
