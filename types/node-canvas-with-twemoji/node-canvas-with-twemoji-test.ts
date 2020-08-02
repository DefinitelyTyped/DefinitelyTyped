import fillTextWithTwemoji = require('node-canvas-with-twemoji');
import { createCanvas } from 'canvas';
const canvas = createCanvas(200, 200);
const ctx = canvas.getContext('2d');
async function GenerateCanvas() {
    fillTextWithTwemoji(ctx, 'This is a test', 20, 20);
    return canvas.toBuffer();
}
GenerateCanvas();
