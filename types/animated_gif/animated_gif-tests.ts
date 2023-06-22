import Animated_GIF = require('animated_gif');

const ag = new Animated_GIF();

// set Animated_GIF size
ag.setSize(320, 240);
// @ts-expect-error
ag.setSize(320);

// set Animated_GIF delay
ag.setDelay(1000);
// @ts-expect-error
ag.setDelay();

// set Animated_GIF repeat
ag.setRepeat(1);
ag.setRepeat(null);
// @ts-expect-error
ag.setRepeat();

// add an image element
declare const imageElement: HTMLImageElement;
ag.addFrame(imageElement); // $ExpectType void

// add an image data
declare const imageData: ImageData;
ag.addFrameImageData(imageData); // $ExpectType void

ag.onRenderProgress(percent => {
    console.log(percent);
});

ag.isRendering(); // $ExpectType boolean

ag.getBase64GIF(image => {
    imageElement.src = image;
});

ag.getBlobGIF(blob => {
    window.open(URL.createObjectURL(blob));
});

ag.destroy(); // $ExpectType void
