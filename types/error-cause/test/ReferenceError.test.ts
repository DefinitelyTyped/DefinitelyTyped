import ReferenceError from 'error-cause/ReferenceError';

declare const Ø: any;

// $ExpectType ReferenceError
new (Ø as ReferenceError)();
// $ExpectType ReferenceError
new (Ø as ReferenceError)('reason');
// $ExpectType ReferenceError
new (Ø as ReferenceError)('reason', {});
// $ExpectType ReferenceError
new (Ø as ReferenceError)('reason', { cause: null });
// $ExpectType ReferenceError
new (Ø as ReferenceError)('reason', { cause: 'stupidity' });
// $ExpectType ReferenceError
new (Ø as ReferenceError)('reason', { cause: Ø as Error });
