import less = require('rollup-plugin-less');

less(); // $ExpectType Plugin

less({}); // $ExpectType Plugin

less({ output: 'dist/file.css' }); // $ExpectType Plugin
less({ include: 'styles/file.css' }); // $ExpectType Plugin
less({ include: ['styles/file.css'] }); // $ExpectType Plugin
less({ exclude: 'styles/file.css' }); // $ExpectType Plugin
less({ exclude: ['styles/file.css'] }); // $ExpectType Plugin
