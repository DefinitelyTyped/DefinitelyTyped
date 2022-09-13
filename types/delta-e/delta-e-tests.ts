import { getDeltaE76, getDeltaE94, getDeltaE00, LAB } from 'delta-e';

const red: LAB = { L: 53, A: 80, B: 67 };
const green: LAB = { L: 46, A: -51, B: 49 };
const blue: LAB = { L: 32, A: 79, B: -107 };

// $ExpectType number
getDeltaE76(red, green);

// $ExpectType number
getDeltaE94(green, blue);

// $ExpectType number
getDeltaE00(blue, red);

// @ts-expect-error
getDeltaE00('#f00', '#00f');

// @ts-expect-error
getDeltaE00({ l: 1, a: 2, b: 3 }, { l: 2, a: 3, b: 4 });

// @ts-expect-error
getDeltaE00({ r: 1, g: 2, b: 3 }, { r: 2, g: 3, b: 4 });
