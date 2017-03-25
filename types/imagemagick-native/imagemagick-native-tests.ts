import imagemagick = require('imagemagick-native');
import fs = require('fs');


// Examples

// * Convert formats
// Convert from one format to another with quality control:
fs.writeFileSync('after.png', imagemagick.convert({
    srcData: fs.readFileSync('before.jpg'),
    format: 'PNG',
    quality: 100 // (best) to 1 (worst)
}));

// * Blur
// Blur image:
fs.writeFileSync('after.jpg', imagemagick.convert({
    srcData: fs.readFileSync('before.jpg'),
    blur: 5
}));

// * Resize
// Resized images by specifying width and height. There are three resizing styles:
// - aspectfill: Default. The resulting image will be exactly the specified size, and may be cropped.
// - aspectfit: Scales the image so that it will not have to be cropped.
// - fill: Squishes or stretches the image so that it fills exactly the specified size.
fs.writeFileSync('after_resize.jpg', imagemagick.convert({
    srcData: fs.readFileSync('before_resize.jpg'),
    width: 100,
    height: 100,
    resizeStyle: 'aspectfill', // is the default, or 'aspectfit' or 'fill'
    gravity: 'Center' // optional: position crop area when using 'aspectfill'
}));

// * Rotate, flip, and mirror
// Rotate and flip images, and combine the two to mirror:
fs.writeFileSync('after_rotateflip.jpg', imagemagick.convert({
    srcData: fs.readFileSync('before_rotateflip.jpg'),
    rotate: 180,
    flip: true
}));


// API Reference

// * convert(options, [callback])
// Convert a buffer provided as options.srcData and return a Buffer.
var options = {
    srcData: fs.readFileSync('source.jpg'),
    srcFormat: 'jpeg',
    quality: 90,
    trim: true,
    trimFuzz: 0.25,
    width: 100,
    height: 100,
    density: 96,
    resizeStyle: 'aspectfill',
    gravity: 'NorthWest',
    format: 'png',
    filter: 'Lnaczos',
    blur: 3,
    strip: true,
    rotate: 30,
    flip: true,
    debug: true,
    ignoreWarnings: false
};

imagemagick.convert(options, (err: any, buffer: Buffer) => {
    // check err, use buffer
});
fs.createReadStream('input.png')
  .pipe(imagemagick.streams.convert({
    quality: 75,
    width: 160,
    height: 160
  }))
  .pipe(fs.createWriteStream('output.png'));


// * identify(options, [callback])
// Identify a buffer provided as srcData and return an object.
imagemagick.identify({
    srcData: fs.readFileSync('target.jpg'),
    debug: true,
    ignoreWarnings: false
}, (err: any, result: imagemagick.IIdentifyResult) => {
    // check err, use result
});

// * quantizeColors(options)
// Quantize the image to a specified amount of colors from a buffer provided as srcData and return an array.
var colors = imagemagick.quantizeColors({
    srcData: fs.readFileSync('target.jpg'),
    colors: 3,
    debug: true,
    ignoreWarnings: false
});

// * composite(options, [callback])
// Composite a buffer provided as options.compositeData on a buffer provided as options.srcData with gravity specified by options.gravity and return a Buffer
imagemagick.composite({
    srcData: fs.readFileSync('target.jpg'),
    compositeData: fs.readFileSync('composite.jpg'),
    gravity: 'NorthWestGravity',
    debug: true,
    ignoreWarnings: false
}, (err: any, buffer: Buffer) => {
    // check err, use buffer
});

// * getConstPixels(options)
// Get pixels of provided rectangular region.
var pixels = imagemagick.getConstPixels({
    srcData: fs.readFileSync('target.jpg'),
    x: 0,
    y: 0,
    columns: 1,
    rows: 1
});

// * quantumDepth
// Return ImageMagick's QuantumDepth, which is defined in compile time.
var depth: number = imagemagick.quantumDepth();

// * version
// Return ImageMagick's version as string.
var version: string = imagemagick.version();

