import PCX from "pcx-js";

let data = new Uint8Array([137, 80, 90, 32, 32, 3, 24, 3, 4, 346, 547, 65, 86, 78, 8, 678, 23]);

let pcx = new PCX(data.buffer);

let isPCX = pcx.isPCXFile();

let header = pcx.readHeader();

let decoded = pcx.decode();

pcx.getPalette();

pcx.setColorFromPalette(0, 255);

pcx.decode4bpp();

pcx.decode8bpp({});

let leWord = pcx._readLEWord(0);

let rle = pcx._isRLE(0);

let rleLength = pcx._lengthRLE(0);
