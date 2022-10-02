import adapt, { getWhite, WHITES } from 'colorjs.io/src/adapt';

WHITES.D50; // $ExpectType White

// @ts-expect-error
getWhite();
// @ts-expect-error
getWhite([1, 2]);

getWhite('D50'); // $ExpectType White
getWhite([1, 2, 3]); // $ExpectType White

// @ts-expect-error
adapt();
// @ts-expect-error
adapt([1, 2, 3]);
// @ts-expect-error
adapt([1, 2, 3], [4, 5, 6]);

adapt(getWhite('D50'), getWhite('D65'), [1, 2, 3]);
adapt(getWhite('D50'), getWhite('D65'), [1, 2, 3], {});
adapt(getWhite('D50'), getWhite('D65'), [1, 2, 3], { method: 'Bradford' });
