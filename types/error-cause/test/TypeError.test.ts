import TypeError from 'error-cause/TypeError';

declare const Ø: any;

// $ExpectType TypeError
new (Ø as TypeError)();
// $ExpectType TypeError
new (Ø as TypeError)('reason');
// $ExpectType TypeError
new (Ø as TypeError)('reason', {});
// $ExpectType TypeError
new (Ø as TypeError)('reason', { cause: null });
// $ExpectType TypeError
new (Ø as TypeError)('reason', { cause: 'stupidity' });
// $ExpectType TypeError
new (Ø as TypeError)('reason', { cause: Ø as Error });
