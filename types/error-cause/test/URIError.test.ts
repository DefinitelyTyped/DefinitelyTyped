import URIError from 'error-cause/URIError';

declare const Ø: any;

// $ExpectType URIError
new (Ø as URIError)();
// $ExpectType URIError
new (Ø as URIError)('reason');
// $ExpectType URIError
new (Ø as URIError)('reason', {});
// $ExpectType URIError
new (Ø as URIError)('reason', { cause: null });
// $ExpectType URIError
new (Ø as URIError)('reason', { cause: 'stupidity' });
// $ExpectType URIError
new (Ø as URIError)('reason', { cause: Ø as Error });
