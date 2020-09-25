/// <reference types="node" />

import maki = require('@mapbox/maki');
import { IconName, SvgContent } from '@mapbox/maki';
import fs = require('fs');

maki.layouts; // $ExpectType { all: string[]; }
maki.layouts.all; // $ExpectType string[]
maki.svgArray; // $ExpectType string[]

// api usage

const files: string[] = [];

files.forEach(fileName => {
    maki.layouts.all.forEach((icon: IconName) => {
        fs.readFile(`${__dirname}/icons/${icon}-11.svg`, 'utf8', (err, file) => {
            console.log(file);
        });
    });
    maki.svgArray.forEach((svg: SvgContent) => console.log(svg));
});
