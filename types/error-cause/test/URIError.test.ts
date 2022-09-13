import URIError from 'error-cause/URIError';

// $ExpectType URIError
new URIError();
// $ExpectType URIError
new URIError('reason');
// $ExpectType URIError
new URIError('reason', {});
// $ExpectType URIError
new URIError('reason', { cause: null });
// $ExpectType URIError
new URIError('reason', { cause: 'stupidity' });
// $ExpectType URIError
new URIError('reason', { cause: new URIError() });
