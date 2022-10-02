import Color from 'colorjs.io/src/color';
import equals from 'colorjs.io/src/equals';

const c1 = new Color('red');
const c2 = new Color('blue');

// @ts-expect-error
equals();
// @ts-expect-error
equals(c1);

equals(c1, c2); // $ExpectType boolean
