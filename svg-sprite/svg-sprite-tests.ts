/// <reference path="svg-sprite.d.ts" />

import SVGSpriter = require('svg-sprite');
import * as fs from 'fs';

var config: any = null;

// Create spriter instance (see below for `config` examples)
var spriter       = new SVGSpriter(config);

// Add SVG source files — the manual way ...
spriter.add('assets/svg-1.svg', null, fs.readFileSync('assets/svg-1.svg', {encoding: 'utf-8'}));
spriter.add('assets/svg-2.svg', null, fs.readFileSync('assets/svg-2.svg', {encoding: 'utf-8'}));
/* ... */

// Compile the sprite
spriter.compile(function(error: any, result: any) {
    /* ... Write `result` files to disk or do whatever with them ... */
});
