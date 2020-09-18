/// <reference types="node" />

import maki = require('@elastic/maki');
import { IconName, SvgContent, Sprite } from '@elastic/maki';
import fs = require('fs');

maki.layouts; // $ExpectType { all: string[]; }
maki.layouts.all; // $ExpectType string[]
maki.svgArray; // $ExpectType string[]
maki.spritesheet; // $ExpectType { 1: SpriteSheet; 2: SpriteSheet; 4: SpriteSheet; }
maki.spritesheet[1]; // $ExpectType SpriteSheet
maki.spritesheet[2]; // $ExpectType SpriteSheet
maki.spritesheet[4]; // $ExpectType SpriteSheet

// api usage

const files: string[] = [];

files.forEach(fileName => {
    maki.layouts.all.forEach((icon: IconName) => {
        fs.readFile(`${__dirname}/icons/${icon}-11.svg`, 'utf8', (err, file) => {
            console.log(file);
        });
    });
});

maki.svgArray.forEach((svg: SvgContent) => console.log(svg));
maki.spritesheet[1]['aerialway-15']; // $ExpectType Sprite
