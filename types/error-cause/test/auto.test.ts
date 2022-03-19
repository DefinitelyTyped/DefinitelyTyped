import 'error-cause/auto';

// $ExpectType Error
new Error();
// $ExpectType Error
new Error('reason');
// $ExpectType Error
new Error('reason', {});
// $ExpectType Error
new Error('reason', { cause: undefined });
// $ExpectType Error
new Error('reason', { cause: new Error() });
