import Color from 'colorjs.io/src/color';
import deltaE from 'colorjs.io/src/deltaE';

const c1 = new Color('red');
const c2 = new Color('blue');

// @ts-expect-error
deltaE();
// @ts-expect-error
deltaE(c1);
// @ts-expect-error
deltaE(c1, c2);

deltaE(c1, c2, '2000'); // $ExpectType number
deltaE(c1, c2, { method: '2000' }); // $ExpectType number
