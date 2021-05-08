/// <reference types='node' />

import { detect } from 'fast9';

const pngImg = 'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN89Z/hPwAHrgLqdyqw1QAAAABJRU5ErkJggg==';

const data = Buffer.from(pngImg, 'base64');
const width = 480;
const height = 640;

// data is 'RGBA buffer'

// make grayscale buffer (byte array)
const gs = new Uint8Array(width * height);
let gs_index = 0;
for (let y = 0; y < height; y++) {
	for (let x = 0; x < width; x++) {
		const idx = (width * y + x) << 2;
		// data[idx] is red
		// data[idx+1] is green
		// data[idx+2] is blue
		// data[idx+3] is alpha
		const gray = Math.floor(data[idx] * 0.3 + data[idx + 1] * 0.6 + data[idx + 2] * 0.11);
		gs[gs_index++] = gray;
	}
}

const threshold = 20;
const corners = detect(gs, width, height, threshold, true);

// sort by score
corners.sort((a, b) => b.score - a.score);
