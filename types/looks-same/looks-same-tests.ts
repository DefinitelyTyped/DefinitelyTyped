import looksSame = require('looks-same');

looksSame('image1.png', 'image2.png', (error, equal) => {
    // equal will be true, if images looks the same
});

looksSame('image1.png', 'image2.png', {strict: true}, (error, equal) => {
    // ...
});

looksSame('image1.png', 'image2.png', {tolerance: 5}, (error, equal) => {
    // ...
});

looksSame('image1.png', 'image2.png', {pixelRatio: 2}, (error, equal) => {
    // ...
});

looksSame('image1.png', 'image2.png', {ignoreCaret: true}, (error, equal) => {
    // ...
});

looksSame('image1.png', 'image2.png', {ignoreAntialiasing: true}, (error, equal) => {
    // ...
});

looksSame('image1.png', 'image2.png', {ignoreAntialiasing: true, antialiasingTolerance: 3}, (error, equal) => {
    // ...
});

looksSame.createDiff({
    reference: '/path/to/reference/image.png',
    current: '/path/to/current/image.png',
    diff: '/path/to/save/diff/to.png',
    highlightColor: '#ff00ff',  // color to highlight the differences
    strict: false,              // strict comparsion
    tolerance: 2.5
}, (error) => {
});

looksSame.createDiff({
    // exactly same options as above, but without diff
    reference: '/path/to/reference/image.png',
    current: '/path/to/current/image.png',
    highlightColor: '#ff00ff',  // color to highlight the differences
    strict: false,              // strict comparsion
    tolerance: 2.5
}, (error, buffer) => {
    // ...
});

looksSame.colors(
    {R: 255, G: 0, B: 0},
    {R: 254, G: 1, B: 1},
    {tolerance: 2.5}
);
