import SyntaxError from 'error-cause/SyntaxError';

// $ExpectType SyntaxError
new SyntaxError();
// $ExpectType SyntaxError
new SyntaxError('reason');
// $ExpectType SyntaxError
new SyntaxError('reason', {});
// $ExpectType SyntaxError
new SyntaxError('reason', { cause: null });
// $ExpectType SyntaxError
new SyntaxError('reason', { cause: 'stupidity' });
// $ExpectType SyntaxError
new SyntaxError('reason', { cause: new SyntaxError() });
