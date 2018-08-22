import * as Imagemin from 'imagemin';

const buffer = Buffer.from('Hello World!');
const input = ['fileA.jpg', 'fileB.png'];
const output = 'output';
const options = { plugins: [] };

Imagemin(input);
Imagemin(input, output);
Imagemin(input, options);
Imagemin(input, output, options);

Imagemin.buffer(buffer);
Imagemin.buffer(buffer, options);
