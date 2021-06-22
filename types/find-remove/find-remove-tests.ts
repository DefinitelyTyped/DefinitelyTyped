import findRemoveSync = require('find-remove');
const options = { dir: 'zzzz', files: '*.zzzz', age: { seconds: 3600 } };

const result = findRemoveSync('./', options); // $ExpectType number | Record<string, boolean>
