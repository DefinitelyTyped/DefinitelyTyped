import EvalError from 'error-cause/EvalError';

declare const Ø: any;

// $ExpectType EvalError
new (Ø as EvalError)();
// $ExpectType EvalError
new (Ø as EvalError)('reason');
// $ExpectType EvalError
new (Ø as EvalError)('reason', {});
// $ExpectType EvalError
new (Ø as EvalError)('reason', { cause: null });
// $ExpectType EvalError
new (Ø as EvalError)('reason', { cause: 'stupidity' });
// $ExpectType EvalError
new (Ø as EvalError)('reason', { cause: Ø as Error });
