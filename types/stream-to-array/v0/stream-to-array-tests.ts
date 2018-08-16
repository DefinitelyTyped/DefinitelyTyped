import toArray = require('stream-to-array');

const rs: NodeJS.ReadableStream = process.stdin;

toArray(rs, (err, arr) => {});
