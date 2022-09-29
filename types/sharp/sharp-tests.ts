import sharp = require('sharp');

import { createReadStream, createWriteStream } from 'fs';

// Test samples taken from the official documentation

const input: Buffer = Buffer.alloc(0);
const readableStream: NodeJS.ReadableStream = createReadStream(input);
const writableStream: NodeJS.WritableStream = createWriteStream(input);

sharp(input)
    .extractChannel('green')
    .toFile('input_green.jpg', (err, info) => {
        // info.channels === 1
        // input_green.jpg contains the green channel of the input image
    });

sharp('3-channel-rgb-input.png')
    .bandbool(sharp.bool.and)
    .toFile('1-channel-output.png', (err, info) => {
        // The output will be a single channel image where each pixel `P = R & G & B`.
        // If `I(1,1) = [247, 170, 14] = [0b11110111, 0b10101010, 0b00001111]`
        // then `O(1,1) = 0b11110111 & 0b10101010 & 0b00001111 = 0b00000010 = 2`.
    });

sharp('input.png')
    .rotate(180)
    .resize(300)
    .flatten({ background: '#ff6600' })
    .composite([{ input: 'overlay.png', gravity: sharp.gravity.southeast }])
    .sharpen()
    .withMetadata()
    .withMetadata({
        density: 96,
        orientation: 8,
        icc: 'some/path',
        exif: { IFD0: { Copyright: 'Wernham Hogg' } },
    })
    .webp({
        quality: 90,
    })
    .toBuffer()
    .then((outputBuffer: Buffer) => {
        // outputBuffer contains upside down, 300px wide, alpha channel flattened
        // onto orange background, composited with overlay.png with SE gravity,
        // sharpened, with metadata, 90% quality WebP image data. Phew!
    });

sharp('input.jpg')
    .resize(300, 200)
    .toFile('output.jpg', (err: Error) => {
        // output.jpg is a 300 pixels wide and 200 pixels high image
        // containing a scaled and cropped version of input.jpg
    });

sharp('input.jpg').resize({ width: 300 }).blur(false).blur(true).toFile('output.jpg');

sharp({
    create: {
        width: 300,
        height: 200,
        channels: 4,
        background: { r: 255, g: 0, b: 0, alpha: 128 },
    },
})
    .png()
    .toBuffer();

let transformer = sharp()
    .resize(300)
    .on('info', (info: sharp.OutputInfo) => {
        console.log('Image height is ' + info.height);
    });
readableStream.pipe(transformer).pipe(writableStream);

console.log(sharp.format);
console.log(sharp.versions);
console.log(sharp.vendor.current);
console.log(sharp.vendor.installed.join(', '));

sharp.queue.on('change', (queueLength: number) => {
    console.log(`Queue contains ${queueLength} task(s)`);
});

let pipeline: sharp.Sharp = sharp().rotate();
pipeline.clone().resize(800, 600).pipe(writableStream);
pipeline.clone().extract({ left: 20, top: 20, width: 100, height: 100 }).pipe(writableStream);
readableStream.pipe(pipeline);
// firstWritableStream receives auto-rotated, resized readableStream
// secondWritableStream receives auto-rotated, extracted region of readableStream

const image: sharp.Sharp = sharp(input);
image
    .metadata()
    .then<Buffer | undefined>((metadata: sharp.Metadata) => {
        if (metadata.width) {
            return image
                .resize(Math.round(metadata.width / 2))
                .webp()
                .toBuffer();
        }
    })
    .then((data: Buffer) => {
        // data contains a WebP image half the width and height of the original JPEG
    });

pipeline = sharp()
    .rotate()
    .resize(undefined, 200)
    .toBuffer((err: Error, outputBuffer: Buffer, info: sharp.OutputInfo) => {
        // outputBuffer contains 200px high JPEG image data,
        // auto-rotated using EXIF Orientation tag
        // info.width and info.height contain the dimensions of the resized image
    });
readableStream.pipe(pipeline);

sharp(input)
    .extract({ left: 0, top: 0, width: 100, height: 100 })
    .toFile('output', (err: Error) => {
        // Extract a region of the input image, saving in the same format.
    });

sharp(input)
    .extract({ left: 0, top: 0, width: 100, height: 100 })
    .resize(200, 200)
    .extract({ left: 0, top: 0, width: 100, height: 100 })
    .toFile('output', (err: Error) => {
        // Extract a region, resize, then extract from the resized image
    });

// Resize to 140 pixels wide, then add 10 transparent pixels
// to the top, left and right edges and 20 to the bottom edge
sharp(input)
    .resize(140, null, { background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .extend({ top: 10, bottom: 20, left: 10, right: 10 });

sharp(input)
    .convolve({
        width: 3,
        height: 3,
        kernel: [-1, 0, 1, -2, 0, 2, -1, 0, 1],
    })
    .raw()
    .toBuffer((err: Error, data: Buffer, info: sharp.OutputInfo) => {
        // data contains the raw pixel data representing the convolution
        // of the input image with the horizontal Sobel operator
    });

sharp('input.tiff')
    .png()
    .tile({
        size: 512,
    })
    .toFile('output.dz', (err: Error, info: sharp.OutputInfo) => {
        // output.dzi is the Deep Zoom XML definition
        // output_files contains 512x512 tiles grouped by zoom level
    });

sharp('input.tiff')
    .png()
    .tile({
        size: 512,
        center: true,
        layout: 'iiif3',
        id: 'https://my.image.host/iiif',
    })
    .toFile('output');

sharp(input)
    .resize(200, 300, {
        fit: 'contain',
        position: 'north',
        kernel: sharp.kernel.lanczos2,
        background: 'white',
    })
    .toFile('output.tiff')
    .then(() => {
        // output.tiff is a 200 pixels wide and 300 pixels high image
        // containing a lanczos2/nohalo scaled version, embedded on a white canvas,
        // of the image data in inputBuffer
    });

transformer = sharp()
    .resize(200, 200, {
        fit: 'cover',
        position: sharp.strategy.entropy,
    })
    .on('error', (err: Error) => {
        console.log(err);
    });
// Read image data from readableStream
// Write 200px square auto-cropped image data to writableStream
readableStream.pipe(transformer).pipe(writableStream);

sharp('input.gif')
    .resize(200, 300, {
        fit: 'contain',
        position: 'north',
        background: { r: 0, g: 0, b: 0, alpha: 0 },
    })
    .toFormat(sharp.format.webp)
    .toBuffer((err: Error, outputBuffer: Buffer) => {
        if (err) {
            throw err;
        }
        // outputBuffer contains WebP image data of a 200 pixels wide and 300 pixels high
        // containing a scaled version, embedded on a transparent canvas, of input.gif
    });

sharp(input)
    .resize(200, 200, { fit: 'inside' })
    .toFormat('jpeg')
    .toBuffer()
    .then((outputBuffer: Buffer) => {
        // outputBuffer contains JPEG image data no wider than 200 pixels and no higher
        // than 200 pixels regardless of the inputBuffer image dimensions
    });

sharp(input)
    .resize(100, 100)
    .toFormat('jpg')
    .toBuffer({ resolveWithObject: false })
    .then((outputBuffer: Buffer) => {
        // Resolves with a Buffer object when resolveWithObject is false
    });

sharp(input)
    .resize(100, 100)
    .toBuffer({ resolveWithObject: true })
    .then((object: { data: Buffer; info: sharp.OutputInfo }) => {
        // Resolve with an object containing data Buffer and an OutputInfo object
        // when resolveWithObject is true
    });

sharp(input)
    .resize(640, 480, { withoutEnlargement: true })
    .toFormat('jpeg')
    .toBuffer()
    .then((outputBuffer: Buffer) => {
        // outputBuffer contains JPEG image data no larger than the input
    });

sharp(input)
    .resize(640, 480, { withoutReduction: true })
    .toFormat('jpeg')
    .toBuffer()
    .then((outputBuffer: Buffer) => {
        // outputBuffer contains JPEG image data no smaller than the input
    });

// Output to tif
sharp(input)
    .resize(100, 100)
    .toFormat('tif')
    .toFormat('tiff')
    .toFormat(sharp.format.tif)
    .toFormat(sharp.format.tiff)
    .toBuffer();

const stats = sharp.cache();

sharp.cache({ items: 200 });
sharp.cache({ files: 0 });
sharp.cache(false);

const threads = sharp.concurrency(); // 4
sharp.concurrency(2); // 2
sharp.concurrency(0); // 4

const counters = sharp.counters(); // { queue: 2, process: 4 }

let simd: boolean = sharp.simd();
// simd is `true` if SIMD is currently enabled

simd = sharp.simd(true);
// attempts to enable the use of SIMD, returning true if available

const vipsVersion: string = sharp.versions.vips;

if (sharp.versions.cairo) {
    const cairoVersion: string = sharp.versions.cairo;
}

sharp('input.gif')
    .linear(1)
    .linear(1, 0)
    .linear(null, 0)
    .linear([0.25, 0.5, 0.75], [150, 100, 50])

    .recomb([
        [0.3588, 0.7044, 0.1368],
        [0.299, 0.587, 0.114],
        [0.2392, 0.4696, 0.0912],
    ])

    .modulate({ brightness: 2 })
    .modulate({ hue: 180 })
    .modulate({ lightness: 10 })
    .modulate({ brightness: 0.5, saturation: 0.5, hue: 90 });

// From https://sharp.pixelplumbing.com/api-output#examples-9
// Extract raw RGB pixel data from JPEG input
sharp('input.jpg')
    .raw()
    .toBuffer({ resolveWithObject: true })
    .then(({ data, info }) => {
        console.log(data);
        console.log(info);
    });

sharp(input).jpeg().jpeg({}).jpeg({
    progressive: false,
    chromaSubsampling: '4:4:4',
    trellisQuantisation: false,
    overshootDeringing: false,
    optimiseScans: false,
    optimizeScans: false,
    optimiseCoding: false,
    optimizeCoding: false,
    quantisationTable: 10,
    quantizationTable: 10,
    mozjpeg: false,
    quality: 10,
    force: false,
});

sharp(input).png().png({}).png({
    progressive: false,
    compressionLevel: 10,
    adaptiveFiltering: false,
    force: false,
    quality: 10,
    palette: false,
    colours: 10,
    colors: 10,
    dither: 10,
});

sharp(input)
    .avif()
    .avif({})
    .avif({ quality: 50, lossless: false, effort: 5, chromaSubsampling: '4:2:0' })
    .heif()
    .heif({})
    .heif({ quality: 50, compression: 'hevc', lossless: false, effort: 5 })
    .toBuffer({ resolveWithObject: true })
    .then(({ data, info }) => {
        console.log(data);
        console.log(info);
    });

sharp(input)
    .gif()
    .gif({})
    .gif({ loop: 0, delay: [], force: true })
    .gif({ delay: 30 })
    .gif({ reoptimise: true })
    .gif({ reoptimize: false })
    .toBuffer({ resolveWithObject: true })
    .then(({ data, info }) => {
        console.log(data);
        console.log(info);
    });

sharp(input)
    .tiff({ compression: 'packbits' })
    .toBuffer({ resolveWithObject: true })
    .then(({ data, info }) => {
        console.log(data);
        console.log(info);
    });

sharp('input.jpg')
    .stats()
    .then(stats => {
        const {
            sharpness,
            dominant: { r, g, b },
        } = stats;
        console.log(sharpness);
        console.log(`${r}, ${g}, ${b}`);
    });

// From https://sharp.pixelplumbing.com/api-output#examples-9
// Extract alpha channel as raw pixel data from PNG input
sharp('input.png').ensureAlpha().ensureAlpha(0).extractChannel(3).toColourspace('b-w').raw().toBuffer();

// From https://sharp.pixelplumbing.com/api-constructor#examples-4
// Convert an animated GIF to an animated WebP
sharp('in.gif', { animated: true }).toFile('out.webp');

// From https://github.com/lovell/sharp/issues/2701
// Type support for limitInputPixels
sharp({
    create: {
        background: 'red',
        channels: 4,
        height: 25000,
        width: 25000,
    },
    limitInputPixels: false,
})
    .toFormat('png')
    .toBuffer()
    .then(largeImage => sharp(input).composite([{ input: largeImage, limitInputPixels: false }]));

// Taken from API documentation at
// https://sharp.pixelplumbing.com/api-operation#clahe
// introducted
sharp('input.jpg').clahe({ width: 10, height: 10 }).toFile('output.jpg');

sharp('input.jpg').clahe({ width: 10, height: 10, maxSlope: 5 }).toFile('outfile.jpg');

// Support `unlimited` input option
sharp('input.png', { unlimited: true }).resize(320, 240).toFile('outfile.png');

// Support `subifd` input option for tiffs
sharp('input.tiff', { subifd: 3 }).resize(320, 240).toFile('outfile.png');

// Support creating with noise
sharp({
    create: {
        background: 'red',
        channels: 4,
        height: 100,
        width: 100,
        noise: {
            type: 'gaussian',
            mean: 128,
            sigma: 30,
        },
    },
})
    .png()
    .toFile('output.png');

sharp(new Uint8Array(input.buffer)).toFile('output.jpg');

// Support for negate options
sharp('input.png').negate({ alpha: false }).toFile('output.png');

// From https://github.com/lovell/sharp/pull/2704
// Type support for pipelineColourspace
sharp(input)
    .pipelineColourspace('rgb16')
    .resize(320, 240)
    .gamma()
    .toColourspace('srgb') // this is the default, but included here for clarity
    .toBuffer();

// Support for raw depth specification
sharp('16bpc.png')
    .toColourspace('rgb16')
    .raw({ depth: 'ushort' })
    .toBuffer((error, data, { width, height, channels, size }) => {
        console.log((size / width / height / channels) * 8);
        console.log(new Uint16Array(data.buffer));
    });

// Output channels are constrained from 1-4, can be used as raw input
sharp(input)
    .toBuffer({ resolveWithObject: true })
    .then(result => {
        const newImg = sharp(result.data, {
            raw: {
                channels: result.info.channels,
                width: result.info.width,
                height: result.info.height,
            },
        });

        return newImg.toBuffer();
    });

// Support for specifying a timeout
sharp('someImage.png').timeout({ seconds: 30 }).resize(300, 300).toBuffer();

// Support for `effort` in different formats
sharp('input.tiff').png({ effort: 9 }).toFile('out.png');
sharp('input.tiff').webp({ effort: 9 }).toFile('out.webp');
sharp('input.tiff').avif({ effort: 9 }).toFile('out.avif');
sharp('input.tiff').heif({ effort: 9 }).toFile('out.heif');
sharp('input.tiff').gif({ effort: 9 }).toFile('out.gif');

// Support for `colors`/`colours` for gif output
sharp('input.gif').gif({ colors: 16 }).toFile('out.gif');
sharp('input.gif').gif({ colours: 16 }).toFile('out.gif');

// Support for `dither` for gif/png output
sharp('input.gif').gif({ dither: 0.5 }).toFile('out.gif');
sharp('input.gif').png({ dither: 0.5 }).toFile('out.png');

// Support for `resolutionUnit` for tiff output
sharp('input.tiff').tiff({ resolutionUnit: 'cm' }).toFile('out.tiff');

// Support for `jp2` output with different options
sharp('input.tiff').jp2().toFile('out.jp2');
sharp('input.tiff').jp2({ quality: 50 }).toFile('out.jp2');
sharp('input.tiff').jp2({ lossless: true }).toFile('out.jp2');
sharp('input.tiff').jp2({ tileWidth: 128, tileHeight: 128 }).toFile('out.jp2');
sharp('input.tiff').jp2({ chromaSubsampling: '4:2:0' }).toFile('out.jp2');

// Support `minSize` and `mixed` webp options
sharp('input.tiff').webp({ minSize: 1000, mixed: true }).toFile('out.gif');

// 'failOn' input param
sharp('input.tiff', { failOn: 'none' });
sharp('input.tiff', { failOn: 'truncated' });
sharp('input.tiff', { failOn: 'error' });
sharp('input.tiff', { failOn: 'warning' });

// Sharpen operation taking an object instead of three params
sharp('input.tiff').sharpen().toBuffer();
sharp('input.tiff').sharpen({ sigma: 2 }).toBuffer();
sharp('input.tiff')
    .sharpen({
        sigma: 2,
        m1: 0,
        m2: 3,
        x1: 3,
        y2: 15,
        y3: 15,
    })
    .toBuffer();

// Affine operator + interpolator hash
sharp().affine(
    [
        [1, 0.3],
        [0.1, 0.7],
    ],
    {
        background: 'white',
        interpolator: sharp.interpolators.nohalo,
    },
);

sharp().affine([1, 1, 1, 1], {
    background: 'white',
    idx: 0,
    idy: 0,
    odx: 0,
    ody: 0,
});

const bicubic: string = sharp.interpolators.bicubic;
const bilinear: string = sharp.interpolators.bilinear;
const locallyBoundedBicubic: string = sharp.interpolators.locallyBoundedBicubic;
const nearest: string = sharp.interpolators.nearest;
const nohalo: string = sharp.interpolators.nohalo;
const vertexSplitQuadraticBasisSpline: string = sharp.interpolators.vertexSplitQuadraticBasisSpline;

// Triming
sharp(input).trim('#000').toBuffer();
sharp(input).trim(10).toBuffer();
sharp(input).trim({ background: '#bf1942', threshold: 30 }).toBuffer();

// Text input
sharp({
    text: {
        text: 'Hello world',
        align: 'centre',
        dpi: 72,
        font: 'Arial',
        fontfile: 'path/to/arial.ttf',
        height: 500,
        width: 500,
        rgba: true,
        justify: true,
        spacing: 10,
    },
})
    .png()
    .toBuffer({ resolveWithObject: true })
    .then(out => {
        console.log(out.info.textAutofitDpi);
    });

// Text composite
sharp('input.png').composite([
    {
        input: {
            text: {
                text: 'Okay then',
                font: 'Comic Sans',
            },
        },
    },
]);
