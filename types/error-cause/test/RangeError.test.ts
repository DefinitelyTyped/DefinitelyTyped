import RangeError from 'error-cause/RangeError';

// $ExpectType RangeError
new RangeError();
// $ExpectType RangeError
new RangeError('reason');
// $ExpectType RangeError
new RangeError('reason', {});
// $ExpectType RangeError
new RangeError('reason', { cause: undefined });
// $ExpectType RangeError
new RangeError('reason', { cause: new Error() });
// $ExpectType RangeError
new RangeError('reason', { cause: new RangeError() });
