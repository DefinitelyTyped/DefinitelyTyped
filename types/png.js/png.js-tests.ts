/// <reference types="node" />

import PNGReader = require('png.js');

const buffer = new Buffer([]);
const reader1 = new PNGReader(buffer);

reader1.parse((err, png) => {
  if (err) throw err;

    png.getWidth();
  png.getHeight();
  png.getPixel(1, 0)[0];
  png.getBitDepth();
  png.getColorType();
  png.getCompressionMethod();
  png.getFilterMethod();
  png.getInterlaceMethod();
  png.getPalette();
});

const bytes = new Uint8Array(0);
const reader2 = new PNGReader(bytes);

reader2.parse({data: false}, (err, png) => {
  if (err) throw err;

    png.getWidth();
  png.getHeight();
  png.getPixel(1, 0)[2];
  png.getBitDepth();
  png.getColorType();
  png.getCompressionMethod();
  png.getFilterMethod();
  png.getInterlaceMethod();
  png.getPalette();
});
