
import createCustomError = require('custom-error-generator');
var HTTPError = createCustomError('HTTPError', { 'code' : 500, 'status' : 'Server Error' });
var error = new HTTPError('Uh oh');
console.log(error.code, error.status);
