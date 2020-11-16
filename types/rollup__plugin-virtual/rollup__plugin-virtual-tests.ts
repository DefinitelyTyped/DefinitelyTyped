import virtual = require('@rollup/plugin-virtual');

virtual(); // $ExpectType Plugin

const options: virtual.Options = { 'path/to/file': '//hi' };
virtual(options); // $ExpectType Plugin
