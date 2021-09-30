import RangeError from 'error-cause/RangeError';

declare const Ø: any;

// $ExpectType RangeError
new (Ø as RangeError)();
// $ExpectType RangeError
new (Ø as RangeError)('reason');
// $ExpectType RangeError
new (Ø as RangeError)('reason', {});
// $ExpectType RangeError
new (Ø as RangeError)('reason', { cause: null });
// $ExpectType RangeError
new (Ø as RangeError)('reason', { cause: 'stupidity' });
// $ExpectType RangeError
new (Ø as RangeError)('reason', { cause: Ø as Error });
