import json = require('rollup-plugin-json');

json(); // $ExpectType Plugin

json({preferConst: true, indent: '  '}); // $ExpectType Plugin
