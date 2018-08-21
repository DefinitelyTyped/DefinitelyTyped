import * as Imagemin from 'imagemin';

const input = ['fileA.jpg', 'fileB.png'];
const output = 'output';
const options = { plugins: [] };

Imagemin(input);
Imagemin(input, output);
Imagemin(input, options);
Imagemin(input, output, options);
