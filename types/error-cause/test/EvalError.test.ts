import EvalError from 'error-cause/EvalError';

// $ExpectType EvalError
new EvalError();
// $ExpectType EvalError
new EvalError('reason');
// $ExpectType EvalError
new EvalError('reason', {});
// $ExpectType EvalError
new EvalError('reason', { cause: null });
// $ExpectType EvalError
new EvalError('reason', { cause: 'stupidity' });
// $ExpectType EvalError
new EvalError('reason', { cause: new EvalError() });
