import Error from 'error-cause/Error';

declare const Ø: any;

// $ExpectType Error
new (Ø as Error)();
// $ExpectType Error
new (Ø as Error)('reason');
// $ExpectType Error
new (Ø as Error)('reason', {});
// $ExpectType Error
new (Ø as Error)('reason', { cause: null });
// $ExpectType Error
new (Ø as Error)('reason', { cause: 'stupidity' });
// $ExpectType Error
new (Ø as Error)('reason', { cause: Ø as Error });
