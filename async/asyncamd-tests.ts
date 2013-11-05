import async = require("async");

async.map(["a", "b", "c"], (item, cb) => cb(null, [item.toUpperCase()]), (err, results) => { });