import Color from 'colorjs.io/src/color';
import get from 'colorjs.io/src/get';

// @ts-expect-error
get();
// @ts-expect-error
get(new Color('red'));

get(new Color('red'), 'p3.r'); // $ExpectType number
get(new Color('red'), ['p3', 'r']); // $ExpectType number
get(new Color('red'), { space: 'p3', coordId: 'r' }); // $ExpectType number
