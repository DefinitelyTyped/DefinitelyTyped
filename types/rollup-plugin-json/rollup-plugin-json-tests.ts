import json from 'rollup-plugin-json';

json(); // $ExpectType Plugin

json({preferConst: true, indent: '  '}); // $ExpectType Plugin
