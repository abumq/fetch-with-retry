# fetch-with-retry
Fetch with retry is simple utility that retries when `fetch()` fails. You must have `fetch` function pre-defined.

<p align="center">
    •   •   •
</p>

<p align="center">
  <a aria-label="NPM version" href="https://www.npmjs.com/package/fetch-with-retry">
    <img alt="" src="https://img.shields.io/npm/v/fetch-with-retry.svg?style=for-the-badge&labelColor=000000">
  </a>
  <a aria-label="License" href="https://github.com/amrayn/fetch-with-retry/blob/master/LICENSE">
    <img alt="" src="https://img.shields.io/npm/l/fetch-with-retry?style=for-the-badge&labelColor=000000">
  </a>
</p>

<p align="center">
    •   •   •
</p>

## Installation

```bash
npm i fetch-with-retry -S
```

```bash
yarn add fetch-with-retry
```

## Example
```js
const fetch = require('fetch-with-retry')

(async () => {
  try {
    const response = await fetch('https://myworld.com/api/quote', {
      headers: { 'Content-Type': 'application/json' },
      retries: 5,
      retryDelay: 500,
    })

    const json = await response.json();
    console.log('Successfully fetched', json);
  } catch(e) {
    console.error('Errored', e)
  }
})()

```

NOTE: If you want to log retry attempts, specify log function as third parameter, e.g,

```js
  fetchWithRetry('https://myworld.com/api/quote', {
    headers: { 'Content-Type': 'application/json' },
    retries: 5,
    retryDelay: 500,
  }, console.debug)
```

## License
```
Copyright (c) 2021-present @abumq (Majid Q.)

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
```
