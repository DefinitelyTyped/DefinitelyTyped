import sourcemaps = require('rollup-plugin-sourcemaps');
import * as fs from 'fs';

 // $ExpectType Plugin
sourcemaps();

 // $ExpectType Plugin
sourcemaps({});

 // $ExpectType Plugin
sourcemaps({
    include: 'node_modules/**',
    exclude: [ 'node_modules/foo/**', 'node_modules/bar/**' ],
    readFile: fs.readFile
});
