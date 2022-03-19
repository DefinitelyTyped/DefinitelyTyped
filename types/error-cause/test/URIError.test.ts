import URIError from 'error-cause/URIError';

// $ExpectType URIError
new URIError();
// $ExpectType URIError
new URIError('reason');
// $ExpectType URIError
new URIError('reason', {});
// $ExpectType URIError
new URIError('reason', { cause: undefined });
// $ExpectType URIError
new URIError('reason', { cause: new Error() });
// $ExpectType URIError
new URIError('reason', { cause: new URIError() });
