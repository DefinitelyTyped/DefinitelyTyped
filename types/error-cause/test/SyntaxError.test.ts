import SyntaxError from 'error-cause/SyntaxError';

// $ExpectType SyntaxError
new SyntaxError();
// $ExpectType SyntaxError
new SyntaxError('reason');
// $ExpectType SyntaxError
new SyntaxError('reason', {});
// $ExpectType SyntaxError
new SyntaxError('reason', { cause: undefined });
// $ExpectType SyntaxError
new SyntaxError('reason', { cause: new Error() });
// $ExpectType SyntaxError
new SyntaxError('reason', { cause: new SyntaxError() });
