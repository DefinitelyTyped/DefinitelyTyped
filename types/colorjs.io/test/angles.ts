import { adjust, constrain } from 'colorjs.io/src/angles';

// @ts-expect-error
adjust();
// @ts-expect-error
adjust('increasing');
// @ts-expect-error
adjust('increasing', [123]);
// @ts-expect-error
adjust('foo', [90, 180]);

adjust('increasing', [90, 180]); // $ExpectType [number, number]

// @ts-expect-error
constrain();
constrain(720); // $ExpectType number
