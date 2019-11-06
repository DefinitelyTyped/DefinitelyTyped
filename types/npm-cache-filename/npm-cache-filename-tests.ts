import cf = require('npm-cache-filename');

cf('/tmp/cache', 'https://registry.npmjs.org:1234/foo/bar'); // $ExpectType string

const getFile = cf('/tmp/cache');
getFile('https://registry.npmjs.org:1234/foo/bar'); // $ExpectType string
