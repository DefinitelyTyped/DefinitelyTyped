import Color from 'colorjs.io/src/color';
import { uv, xy, register } from 'colorjs.io/src/chromaticity';

// @ts-expect-error
uv();
// @ts-expect-error
uv('red');

uv(new Color('red')); // $ExpectType number

// @ts-expect-error
xy();
// @ts-expect-error
xy('red');

xy(new Color('red')); // $ExpectType [number, number]

// @ts-expect-error
register();
// @ts-expect-error
register(new Color('red'));

register(Color);
