import { detect } from 'fast9';
import * as fs from 'fs';
import { PNG } from 'pngjs';

const pngfile = 'example.png';

fs.createReadStream(pngfile)
	.pipe(new PNG({
		filterType: -1,
	}))
	.on('parsed', function() {
		const data = this.data;
		const width = this.width;
		const height = this.height;

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
		// corners.sort((a,b)=>b.score-a.score); //lamda
		corners.sort((a, b) => {
			return b.score - a.score;
		});

		// print corners
		console.log(corners.slice(0, 100));
	})
	.on('error', (e) => {
		console.log(e);
	});
