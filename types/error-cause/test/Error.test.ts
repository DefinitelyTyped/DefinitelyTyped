import Error from 'error-cause/Error';

// $ExpectType Error
new Error();
// $ExpectType Error
new Error('reason');
// $ExpectType Error
new Error('reason', {});
// $ExpectType Error
new Error('reason', { cause: null });
// $ExpectType Error
new Error('reason', { cause: 'stupidity' });
// $ExpectType Error
new Error('reason', { cause: new Error() });
