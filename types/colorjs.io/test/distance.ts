import Color from 'colorjs.io/src/color';
import distance from 'colorjs.io/src/distance';

const c1 = new Color('red');
const c2 = new Color('blue');
const space = c1.space;

// @ts-expect-error
distance();
// @ts-expect-error
distance(c1);

distance(c1, c2); // $ExpectType number
distance(c1, c2, space); // $ExpectType number
distance(c1, c2, 'srgb'); // $ExpectType number
