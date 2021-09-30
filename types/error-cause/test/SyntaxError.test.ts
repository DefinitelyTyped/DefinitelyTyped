import SyntaxError from 'error-cause/SyntaxError';

declare const Ø: any;

// $ExpectType SyntaxError
new (Ø as SyntaxError)();
// $ExpectType SyntaxError
new (Ø as SyntaxError)('reason');
// $ExpectType SyntaxError
new (Ø as SyntaxError)('reason', {});
// $ExpectType SyntaxError
new (Ø as SyntaxError)('reason', { cause: null });
// $ExpectType SyntaxError
new (Ø as SyntaxError)('reason', { cause: 'stupidity' });
// $ExpectType SyntaxError
new (Ø as SyntaxError)('reason', { cause: Ø as Error });
