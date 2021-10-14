import RangeError from 'error-cause/RangeError';

// $ExpectType RangeError
new RangeError();
// $ExpectType RangeError
new RangeError('reason');
// $ExpectType RangeError
new RangeError('reason', {});
// $ExpectType RangeError
new RangeError('reason', { cause: null });
// $ExpectType RangeError
new RangeError('reason', { cause: 'stupidity' });
// $ExpectType RangeError
new RangeError('reason', { cause: new RangeError() });
