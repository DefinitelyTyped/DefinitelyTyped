import fs = require('fs');
import PngImg = require('png-img');

const buf = fs.readFileSync('path/to/img.png');
const img = new PngImg(buf);
const otherImg = new PngImg(buf);
img.size(); // $ExpectType Size
img.get(0, 0); // $ExpectType Color
img.fill(0, 0, 16, 16, '#00ffFF') // fill with cyan
    .fill(16, 16, 16, 16, { r: 0, g: 255, b: 255, a: 127 });
img.crop(0, 0, 16, 16).crop(8, 8, 8, 8);
img.setSize(img.size().width, img.size().height + otherImg.size().height).insert(otherImg, 0, img.size().height);

img.save('path/to/file.png', error => {
    if (error) {
        console.error('Error:', error);
    } else {
        console.log('OK');
    }
});
