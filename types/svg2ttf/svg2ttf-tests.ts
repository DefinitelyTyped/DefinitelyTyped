/// <reference types="node" />
import fs = require('fs');
import svg2ttf = require('svg2ttf');

const ttf = svg2ttf(fs.readFileSync('myfont.svg', 'utf8'), {});

ttf; // $ExpectType MicroBuffer
ttf.buffer; // $ExpectType Uint8Array

fs.writeFileSync('myfont.ttf', new Buffer(ttf.buffer));
