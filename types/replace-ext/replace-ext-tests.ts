import replaceExt = require('replace-ext');

const path = '/some/dir/file.js';
const newPath = replaceExt(path, '.coffee'); // $ExpectType string
