import ReferenceError from 'error-cause/ReferenceError';

// $ExpectType ReferenceError
new ReferenceError();
// $ExpectType ReferenceError
new ReferenceError('reason');
// $ExpectType ReferenceError
new ReferenceError('reason', {});
// $ExpectType ReferenceError
new ReferenceError('reason', { cause: null });
// $ExpectType ReferenceError
new ReferenceError('reason', { cause: 'stupidity' });
// $ExpectType ReferenceError
new ReferenceError('reason', { cause: new ReferenceError() });
