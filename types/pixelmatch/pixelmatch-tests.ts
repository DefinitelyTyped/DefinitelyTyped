/**
 * This test code taken from pixelmatch example usage.
 * https://github.com/mapbox/pixelmatch#example-usage
 */

import * as fs from 'fs';
import pixelmatch = require('pixelmatch');
import { PNG } from 'pngjs';

const img1 = fs.createReadStream('img1.png')
  .pipe(new PNG())
  .on('parsed', doneReading);

const img2 = fs.createReadStream('img2.png')
  .pipe(new PNG())
  .on('parsed', doneReading);

let filesRead = 0;

function doneReading() {
    if (++filesRead < 2) return;
    const diff = new PNG({width: img1.width, height: img1.height});

    pixelmatch(img1.data, img2.data, diff.data, img1.width, img1.height, {threshold: 0.1});

    diff.pack().pipe(fs.createWriteStream('diff.png'));
}
