import camelcaseKeysDeep = require('camelcase-keys-deep');

interface Point {
    point_x: number;
    point_y: number;
}

const foo: Point = {
    point_x: 1,
    point_y: 2,
};

camelcaseKeysDeep(foo) as Point; // => {pointX: 1, pointY: 2}

camelcaseKeysDeep({ unicorn_rainbow: { foo_bar: 1 } }); // => unicornRainbow: {fooBar: 1}
