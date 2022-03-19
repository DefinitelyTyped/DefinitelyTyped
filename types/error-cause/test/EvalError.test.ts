import EvalError from 'error-cause/EvalError';

// $ExpectType EvalError
new EvalError();
// $ExpectType EvalError
new EvalError('reason');
// $ExpectType EvalError
new EvalError('reason', {});
// $ExpectType EvalError
new EvalError('reason', { cause: undefined });
// $ExpectType EvalError
new EvalError('reason', { cause: new Error() });
// $ExpectType EvalError
new EvalError('reason', { cause: new EvalError() });
