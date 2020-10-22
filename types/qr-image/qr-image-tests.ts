import * as qr from 'qr-image';
import * as fs from 'fs';

const qr_svg = qr.image('I love QR!', { type: 'svg' });
qr_svg.pipe(fs.createWriteStream('i_love_qr.svg'));

const svg_string = qr.imageSync('I love QR!', { type: 'svg' });

// customize

function coord2offset(x: number, y: number, size: number) {
    return (size + 1) * y + x + 1;
}

qr.image('Customize PNG', {
    type: 'png',
    customize: bitmap => {
        const size = bitmap.size;
        const data = bitmap.data;
        for (let x = 0; x < size; x++) {
            for (let y = 0; y < x; y++) {
                const offset = coord2offset(x, y, size);
                if (data[offset]) {
                    data[offset] = 255 - Math.abs(x - y);
                }
            }
        }
    },
}).pipe(fs.createWriteStream('custom.png'));
