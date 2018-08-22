import imagemin = require('imagemin');

const input = ['/input/**/*'];
const output = '/output/dir';
const options = { plugins: [] };
const handler = (result: imagemin.Result[]) => {
    // ...
};

imagemin(input).then(handler);
imagemin(input, output).then(handler);
imagemin(input, options).then(handler);
imagemin(input, output, options).then(handler);

const buffer = Buffer.from([ /* File content */ ]);
const bufferHandler = (result: Buffer) => {
    // ...
};

imagemin.buffer(buffer).then(bufferHandler);
imagemin.buffer(buffer, options).then(bufferHandler);
