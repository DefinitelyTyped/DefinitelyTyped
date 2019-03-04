import dv = require('dv');
import fs = require('fs');

const image = new dv.Image('png', fs.readFileSync('textpage300.png'));
const tesseract = new dv.Tesseract('eng', image);
console.log(tesseract.findText('plain'));

const barcodes = new dv.Image('png', fs.readFileSync('form2.png'));
const open = barcodes.thin('bg', 8, 5).dilate(3, 3);
const openMap = open.distanceFunction(8);
const openMask = openMap.threshold(10).erode(22, 22);
const boxes = openMask.invert().connectedComponents(8);
for (const i in boxes) {
	const boxImage = barcodes.crop(
		boxes[i].x, boxes[i].y,
		boxes[i].width, boxes[i].height);
	// Do something useful with our image.
}
