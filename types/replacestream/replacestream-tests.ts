/// <reference types="node"/>

import * as fs from 'fs';
import * as path from 'path';
import replaceStream = require('replacestream');

fs.createReadStream(path.join(__dirname, 'happybirthday.txt'))
    .pipe(replaceStream('birthday', 'earthday'))
    .pipe(process.stdout);

fs.createReadStream(path.join(__dirname, 'happybirthday.txt'))
    .pipe(replaceStream('birthday', 'earthday', { limit: 2 }))
    .pipe(process.stdout);

fs.createReadStream(path.join(__dirname, 'happybirthday.txt'))
    .pipe(replaceStream(/birthday/, 'earthday'))
    .pipe(process.stdout);

const words = ['Awesome', 'Good', 'Super', 'Joyous'];

function replaceFn(match: string, p1: string, offset: number, string: string): string {
    return words.shift() || 'Happy';
}

fs.createReadStream(path.join(__dirname, 'happybirthday.txt'))
    .pipe(replaceStream('Happy', replaceFn))
    .pipe(process.stdout);
