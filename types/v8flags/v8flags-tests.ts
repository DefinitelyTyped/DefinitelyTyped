import v8flags = require('v8flags');

v8flags((err, results) => {
    // $ExpectType string[]
    results;
});
