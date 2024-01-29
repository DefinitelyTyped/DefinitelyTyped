import logRotate = require("log-rotate");

// $ExpectType void
logRotate("file", (err, rotate) => {});

// $ExpectType void
logRotate("file", {}, (err, rotate) => {});
