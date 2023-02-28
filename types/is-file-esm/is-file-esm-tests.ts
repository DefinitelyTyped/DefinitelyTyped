import isFileEsm = require('is-file-esm');

(async () => {
    const result = await isFileEsm('/path/to/file.js'); // $ExpectType Result
})();

isFileEsm('/path/to/file.js', (err, result) => {
    err; // $ExpectType Error | null
    result; // $ExpectType Result | undefined
});

// $ExpectType Result
const result = isFileEsm.sync('/path/to/file.js');
