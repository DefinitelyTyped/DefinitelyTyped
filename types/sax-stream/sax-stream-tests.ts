import saxStream = require('sax-stream');

// $ExpectType Transform
saxStream({ tag: '' });

// $ExpectType Transform
saxStream({
    tag: '',
    highWaterMark: 1,
    strict: true,
    trim: true,
    normalize: true,
    lowercase: true,
    xmlns: true,
    trackPosition: true,
    strictEntities: true,
    noscript: true
});

// @ts-expect-error
saxStream({});

// @ts-expect-error
saxStream();
