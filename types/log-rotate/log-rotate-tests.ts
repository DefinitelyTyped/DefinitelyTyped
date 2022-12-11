import LogRotate = require('log-rotate');

// $ExpectType void
LogRotate('file', (err, rotate) => {});

// $ExpectType void
LogRotate('file', {}, (err, rotate) => {});
