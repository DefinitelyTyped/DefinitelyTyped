import colorCheck, { RGB, Color } from 'color-check';

const r1: RGB = { r: 1, g: 2, b: 3 };
const r2: RGB = { r: '1', g: '2', b: '3' };
const c1: Color = { r: 3, g: '5', b: 244 };
const c2: Color = '#ffffff';

// $ExpectType boolean
colorCheck.colorDifference(r1, c1);
// $ExpectType boolean
colorCheck.colorDifference(c1, r1);
// @ts-expect-error
colorCheck.colorDifference(r1, undefined);

// $ExpectType number
colorCheck.colorContrast(r2, c2);
// $ExpectType number
colorCheck.colorContrast(c2, r2);

// $ExpectType number
colorCheck.colorGetLuminance([1, 2, 3]);
// @ts-expect-error
colorCheck.colorGetLuminance(r1);
// @ts-expect-error
colorCheck.colorGetLuminance([1, 2, 3, 4]);
