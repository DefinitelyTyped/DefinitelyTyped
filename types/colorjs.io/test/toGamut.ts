import Color from 'colorjs.io/src';
import toGamut from 'colorjs.io/src/toGamut';
import sRGB from 'colorjs.io/src/spaces/srgb';

// @ts-expect-error
toGamut();
// @ts-expect-error
toGamut('red');

toGamut(new Color('red')); // $ExpectType Color
toGamut(new Color('red'), { method: 'clip', space: 'srgb' }); // $ExpectType Color
toGamut(new Color('red'), { method: 'clip', space: sRGB }); // $ExpectType Color
