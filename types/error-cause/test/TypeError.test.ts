import TypeError from 'error-cause/TypeError';

// $ExpectType TypeError
new TypeError();
// $ExpectType TypeError
new TypeError('reason');
// $ExpectType TypeError
new TypeError('reason', {});
// $ExpectType TypeError
new TypeError('reason', { cause: null });
// $ExpectType TypeError
new TypeError('reason', { cause: 'stupidity' });
// $ExpectType TypeError
new TypeError('reason', { cause: new TypeError() });
