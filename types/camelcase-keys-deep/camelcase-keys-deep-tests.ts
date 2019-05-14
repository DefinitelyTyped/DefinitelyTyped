import * as camelcaseKeysDeep from "camelcase-keys-deep";

interface Point {
    point_x: string;
    point_y: string;
}

const foo: Point = {
    point_x: "",
    point_y: "",
};

camelcaseKeysDeep(foo) as Point; // => {pointX: 1, pointY: 2}

camelcaseKeysDeep({ unicorn_rainbow: { foo_bar: 1 } }); // => unicornRainbow: {fooBar: 1}
