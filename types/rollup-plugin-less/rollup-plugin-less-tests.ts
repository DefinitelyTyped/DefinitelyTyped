import less = require('rollup-plugin-less');

less(); // $ExpectType Plugin

less({ output: "dist/file.css" }); // $ExpectType Plugin
