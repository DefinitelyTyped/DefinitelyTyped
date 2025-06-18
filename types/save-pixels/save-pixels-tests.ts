import savePixels = require("save-pixels");
import ndarray = require("ndarray");

const pixels = ndarray(new Float64Array([1, 0, 0, 1]), [2, 2]);

// Save PNG.
const pngChunks: Buffer[] = [];
let pngContent: Buffer;
savePixels(pixels, "png")
    .on("data", (d: Buffer) => pngChunks.push(d))
    .on("end", () => (pngContent = Buffer.concat(pngChunks)));

// Save GIF.
const gifChunks: Buffer[] = [];
let gifContent: Buffer;
savePixels(pixels, "png")
    .on("data", (d: Buffer) => gifChunks.push(d))
    .on("end", () => (gifContent = Buffer.concat(gifChunks)));

// Save JPEG.
const jpgChunks: Buffer[] = [];
let jpgContent: Buffer;
savePixels(pixels, "jpeg", { quality: 50 })
    .on("data", (d: Buffer) => jpgChunks.push(d))
    .on("end", () => (jpgContent = Buffer.concat(jpgChunks)));

// Save Canvas.
const canvas: HTMLCanvasElement = savePixels(pixels, "canvas");
