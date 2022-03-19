import ReferenceError from 'error-cause/ReferenceError';

// $ExpectType ReferenceError
new ReferenceError();
// $ExpectType ReferenceError
new ReferenceError('reason');
// $ExpectType ReferenceError
new ReferenceError('reason', {});
// $ExpectType ReferenceError
new ReferenceError('reason', { cause: undefined });
// $ExpectType ReferenceError
new ReferenceError('reason', { cause: new Error() });
// $ExpectType ReferenceError
new ReferenceError('reason', { cause: new ReferenceError() });
