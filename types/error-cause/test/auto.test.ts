import 'error-cause/auto';

declare const Ø: any;

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
new Error('reason', { cause: Ø as Error });
