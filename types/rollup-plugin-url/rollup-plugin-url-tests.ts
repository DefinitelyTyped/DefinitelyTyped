import url from 'rollup-plugin-url';

url(); // $ExpectType Plugin

url({ emitFile: true, limit: 0 }); // $ExpectType Plugin
