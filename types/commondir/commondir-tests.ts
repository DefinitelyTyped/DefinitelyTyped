import commondir = require('commondir');

// $ExpectType string
commondir('wwwroot', [
    'static_files/png/',
    '../gif/image.gif',
]);

// $ExpectType string
commondir([
    '/x/y/z',
    '/x/y',
    '/x/y/w/q',
]);
