import { PNG } from 'pngjs';
import { createDeflate } from 'zlib';

const pngs = [
	new PNG(),
	new PNG({}),
	new PNG({ width: 1 }),
	new PNG({ checkCRC: false }),
	new PNG({ deflateChunkSize: 3 }),
	new PNG({
		width: 1,
		height: 1,
		fill: false,
		checkCRC: true,
		deflateChunkSize: 1,
		deflateLevel: 1,
		deflateStrategy: 1,
		deflateFactory: createDeflate,
		colorType: 4,
		bitDepth: 8,
		inputHasAlpha: false,
		filterType: 4
	}),
	new PNG({ filterType: [1, 2, 3] })
];

const png = pngs[0];

if (png.readable) {
	console.log('readable');
}
if (png.writable) {
	console.log('writable');
}
png.width === 1;
png.height === 1;
png.gamma === 1;
png.adjustGamma();

png.bitblt(pngs[1]);
png.bitblt(pngs[1], 1);
png.bitblt(pngs[1], 1, 1);
png.bitblt(pngs[1], 1, 1, 1, 1, 1, 1);

png.on('metadata', metadata => {
	metadata.bpp === 1;
});
png.on('parsed', data => {
	data.byteLength === 1;
});
png.on('error', error => {
	error === new Error('testing');
});
png.on('foo', () => {});

png.pack().adjustGamma();

png.parse('foo').adjustGamma();
png.parse(Buffer.from('foo')).adjustGamma();
png.parse('foo', (error, data) => {
	error.stack;
	data.adjustGamma();
}).adjustGamma();

PNG.adjustGamma(png);

PNG.bitblt(png, pngs[1]);
PNG.bitblt(png, pngs[1], 1, 1, 1, 1, 1, 1);
