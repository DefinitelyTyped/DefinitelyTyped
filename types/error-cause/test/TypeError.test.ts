import TypeError from 'error-cause/TypeError';

// $ExpectType TypeError
new TypeError();
// $ExpectType TypeError
new TypeError('reason');
// $ExpectType TypeError
new TypeError('reason', {});
// $ExpectType TypeError
new TypeError('reason', { cause: undefined });
// $ExpectType TypeError
new TypeError('reason', { cause: new TypeError() });
