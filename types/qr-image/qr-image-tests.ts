import * as qr from 'qr-image';
import * as fs from 'fs';

const qr_svg = qr.image('I love QR!', { type: 'svg' });
qr_svg.pipe(fs.createWriteStream('i_love_qr.svg'));

const svg_string = qr.imageSync('I love QR!', { type: 'svg' });
