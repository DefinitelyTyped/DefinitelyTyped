const resizer = pica();
const picaOptions: pica.PicaOptions = {
    features: ['js', 'wasm', 'ww', 'cib'],
    createCanvas(width: number, height: number) {
        const canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = height;
        return canvas;
    },
};
const resizerWithOptions: pica.Pica = pica(picaOptions);

const image: HTMLImageElement = document.createElement('img');
image.width = 100;
image.height = 100;

const canvas: HTMLCanvasElement = document.createElement('canvas');
canvas.width = 100;
canvas.height = 100;

const imageBitmapPromise: Promise<ImageBitmap> = createImageBitmap(image);

// Resize image
resizer.resize(image, canvas);
resizerWithOptions.resize(image, canvas);
imageBitmapPromise.then(imageBitmap => {
    resizer.resize(imageBitmap, canvas);
    resizerWithOptions.resize(imageBitmap, canvas);
});

// Resize image with options
const resizeOptions: pica.PicaResizeOptions = {
    quality: 1,
};
const resizeOptionsError: pica.PicaResizeOptions = {
    // @ts-expect-error
    quality: 9,
};
resizer.resize(image, canvas, resizeOptions);
resizerWithOptions.resize(image, canvas, resizeOptions);

const resizeOptionsFilter: pica.PicaResizeOptions = {
    filter: 'box',
};
resizer.resize(image, canvas, resizeOptionsFilter);
resizerWithOptions.resize(image, canvas, resizeOptionsFilter);

// Blob canvas
resizer.toBlob(canvas, 'image/png');
resizerWithOptions.toBlob(canvas, 'image/png');

// Blob canvas with quality
resizer.toBlob(canvas, 'image/png', 9);
resizerWithOptions.toBlob(canvas, 'image/png', 9);

// Resize buffer
const resizeBufferSrc = Uint8Array.of(21, 31);
const resizeBufferOptions: pica.PicaResizeBufferOptions = {
    src: resizeBufferSrc,
    width: 100,
    height: 100,
    toWidth: 50,
    toHeight: 50,
};
resizer.resizeBuffer(resizeBufferOptions);
resizerWithOptions.resizeBuffer(resizeBufferOptions);

resizer.resize(image, canvas, {
    cancelToken: new Promise((resolve, reject) => setTimeout(resolve, 1_000)),
});
