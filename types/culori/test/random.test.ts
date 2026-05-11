import { random } from "culori/fn";

random(); // $ExpectType Rgb
random("rgb"); // $ExpectType Rgb
random(undefined, { r: 1 }); // $ExpectType Rgb
random(undefined, { r: [0, 1] }); // $ExpectType Rgb

random("hsi"); // $ExpectType Hsi

random("yiq"); // $ExpectType Yiq
random("yiq", { y: 1 }); // $ExpectType Yiq
random("yiq", { y: [0, 1] }); // $ExpectType Yiq

// @ts-expect-error
random("1");

// @ts-expect-error
random("yiq", { r: [1, 2] }); // 'r' is not correct when 'mode' argument is 'yiq'. Should be 'y' or 'i' or 'q'

// @ts-expect-error
random("yiq", { y: [] }); // '[]' is no correct here. 'number | [number, number]' expected

// @ts-expect-error
random("yiq", { y: [1] }); // '[1]' is no correct here. 'number | [number, number]' expected

// @ts-expect-error
random(undefined, { h: [0, 1] }); // 'h' is not correct when 'mode' argument is 'undefined'. Should be 'r' or 'g' or 'b'
