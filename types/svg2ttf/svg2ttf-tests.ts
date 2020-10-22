/// <reference types="node" />
import fs = require('fs');
import svg2ttf = require('svg2ttf');
import { MicroBuffer, FontOptions } from 'svg2ttf';

const ttf = svg2ttf(fs.readFileSync('myfont.svg', 'utf8'), {});

ttf; // $ExpectType MicroBuffer
ttf.buffer; // $ExpectType Uint8Array

const ttfWithOptions = svg2ttf(fs.readFileSync('myfont.svg', 'utf8'), {
    version: '1.2',
    copyright: 'Yes',
    ts: 1000,
    description: 'A nice font',
});

ttfWithOptions; // $ExpectType MicroBuffer
ttfWithOptions.buffer; // $ExpectType Uint8Array

fs.writeFileSync('myfont.ttf', new Buffer(ttf.buffer));
