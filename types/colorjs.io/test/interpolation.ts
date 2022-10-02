import Color from 'colorjs.io/src/color';
import { sRGB, sRGB_Linear } from 'colorjs.io/src/index-fn';
import { isRange, range, mix, steps, register } from 'colorjs.io/src/interpolation';

isRange('foo'); // $ExpectType boolean

// @ts-expect-error
range();
// @ts-expect-error
range('red');

const r = range('red', 'blue'); // $ExpectType Range
range('red', 'blue', {}); // $ExpectType Range
range(r); // $ExpectType Range
range(r, {}); // $ExpectType Range
range('red', 'blue', { space: 'srgb', outputSpace: 'srgb_linear' }); // $ExpectType Range
range('red', 'blue', { space: sRGB, outputSpace: 'srgb' }); // $ExpectType Range
range('red', 'blue', { space: 'srgb', outputSpace: sRGB_Linear }); // $ExpectType Range
// $ExpectType Range
range('red', 'blue', {
    space: 'srgb',
    outputSpace: 'srgb_linear',
    progression: (_: number) => 1,
    premultiplied: false,
});

// @ts-expect-error
mix();
// @ts-expect-error
mix('red');

mix('red', 'blue'); // $ExpectType number
mix('red', 'blue', 0.5); // $ExpectType number
mix('red', 'blue', {}); // $ExpectType number
mix('red', 'blue', 0.5, {}); // $ExpectType number
mix('red', 'blue', { space: 'srgb', outputSpace: 'srgb_linear' }); // $ExpectType number

steps('red', 'blue'); // $ExpectType Color[]
steps(r, ' blue'); // $ExpectType Color[]

// @ts-expect-error
register();
// @ts-expect-error
register(new Color('red'));

register(Color);
