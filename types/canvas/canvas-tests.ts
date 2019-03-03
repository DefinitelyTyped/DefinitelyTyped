import { createCanvas } from 'canvas';

const canvas = createCanvas(200, 200);
const ctx = canvas.getContext('2d');

console.log(canvas.toBuffer());
