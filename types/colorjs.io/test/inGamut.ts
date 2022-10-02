import Color from 'colorjs.io/src/color';
import inGamut from 'colorjs.io/src/inGamut';
import sRGB from 'colorjs.io/src/spaces/srgb';

// @ts-expect-error
inGamut();

inGamut('red'); // $ExpectType boolean
inGamut(new Color('red')); // $ExpectType boolean
inGamut('red', 'srgb'); // $ExpectType boolean
inGamut('red', sRGB); // $ExpectType boolean
inGamut('red', sRGB, { epsilon: 123 }); // $ExpectType boolean
