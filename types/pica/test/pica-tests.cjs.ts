import pica = require('pica');

const resizer = pica();

const picaOptions = { features: ['js', 'wasm', 'ww', 'cib'] };
const resizerWithOptions: pica.Pica = pica(picaOptions);

const image: HTMLImageElement = document.createElement('img');
image.width = 100;
image.height = 100;

const canvas: HTMLCanvasElement = document.createElement('canvas');
canvas.width = 100;
canvas.height = 100;

// Resize image
resizer.resize(image, canvas);
resizerWithOptions.resize(image, canvas);

// Resize image with options
const resizeOptions: pica.PicaResizeOptions = {
    quality: 9,
};
resizer.resize(image, canvas, resizeOptions);
resizerWithOptions.resize(image, canvas, resizeOptions);

// Blob canvas
resizer.toBlob(canvas, 'image/png');
resizerWithOptions.toBlob(canvas, 'image/png');

// Blob canvas with quality
resizer.toBlob(canvas, 'image/png', 9);
resizerWithOptions.toBlob(canvas, 'image/png', 9);

// Resize buffer
const resizeBufferSrc: number[] = [21, 31];
const resizeBufferOptions: pica.PicaResizeBufferOptions = {
    src: resizeBufferSrc,
    width: 100,
    height: 100,
    toWidth: 50,
    toHeigh: 50,
};
resizer.resizeBuffer(resizeBufferOptions);
resizerWithOptions.resizeBuffer(resizeBufferOptions);

resizer.resize(image, canvas, {
    cancelToken: new Promise((resolve, reject) => setTimeout(resolve, 1_000)),
});
