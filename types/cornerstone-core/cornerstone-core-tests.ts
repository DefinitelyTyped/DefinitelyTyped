import cornerstone from 'cornerstone-core';

const element = document.createElement('div');

// $ExpectType void
cornerstone.enable(element);
// $ExpectError
cornerstone.enable();

cornerstone.loadImage('IMAGE_ID').then(image => {
    cornerstone.displayImage(element, image);
});
