import Color from 'colorjs.io/src/color';
import getAll from 'colorjs.io/src/getAll';
import sRGB from 'colorjs.io/src/spaces/srgb';

// @ts-expect-error
getAll();
// @ts-expect-error
getAll(new Color('red'));

getAll(new Color('red'), 'srgb'); // $ExpectType [number, number, number]
getAll(new Color('red'), sRGB); // $ExpectType [number, number, number]
