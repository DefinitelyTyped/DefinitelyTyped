let resizer: Pica = new Pica();

let picaOptions: PicaOptions = { features: ['js', 'wasm', 'ww', 'cib'] };
let resizerWithOptions: Pica = new Pica(picaOptions);

let image: HTMLImageElement = document.createElement('img');
image.width = 100;
image.height = 100;

let canvas: HTMLCanvasElement = document.createElement('canvas');
canvas.width = 100;
canvas.height = 100;

// Resize image
resizer.resize(image, canvas);
resizerWithOptions.resize(image, canvas);

// Resize image with options
let resizeOptions: PicaResizeOptions = {
    quality: 9
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
let resizeBufferSrc: number[] = [21, 31];
let resizeBufferOptions: PicaResizeBufferOptions = {
    src: resizeBufferSrc,
    width: 100,
    height: 100,
    toWidth: 50,
    toHeigh: 50,
};
resizer.resizeBuffer(resizeBufferOptions);
resizerWithOptions.resizeBuffer(resizeBufferOptions);
