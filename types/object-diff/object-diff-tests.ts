import diff = require('object-diff');

// from the package README.md, typescriptified:

var a = {
    speed: 4,
    power: 54,
    level: 1,
};

var b = {
    speed: 4, // unchanged
    power: 22, // changed
    weight: 10, // added
};

var d: any = diff(a, b);

var e = {
    speed: 4,
    power: 54,
    height: undefined,
    level: 1,
};

var f = {
    speed: 4, // unchanged
    power: 22, // changed
    level: undefined, // changed
    weight: 10, // added
};

var g = {
    speed: 5, // changed
    power: 54, // unchanged
    level: 100, // changed
    material: 'steel', // added
    location: undefined, // added but undefined
};

diff(e, f, g);

var h = { ...g };

diff(e, f, g, h);
