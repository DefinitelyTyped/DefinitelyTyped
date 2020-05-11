import httperr = require('httperr');

// ----------------------------------------
// Basic usage example from: https://github.com/pluma/httperr/blob/1.0.0/README.md
var err = httperr[404]('The path "/example" could not be resolved');
console.log(err);
/*
{ [NotFound: The path "/example" could not be resolved]
  title: 'Not Found',
  name: 'NotFound',
  code: 'NOT_FOUND',
  statusCode: 404,
  message: 'The path "/example" could not be resolved'
}
*/
/*
NotFound: The path "/example" could not be resolved
    at ...
*/

console.log(httperr.methodNotAllowed({allowed: ['GET', 'POST']}));
/*
{ [MethodNotAllowed]
  title: 'Method Not Allowed',
  name: 'MethodNotAllowed',
  code: 'METHOD_NOT_ALLOWED',
  statusCode: 405,
  message: '',
  allowed: ['GET', 'POST']
}
*/

err = new httperr.NotFound();
console.log(err);
/*
{ [NotFound]
  title: 'Not Found',
  name: 'NotFound',
  code: 'NOT_FOUND',
  statusCode: 404,
  message: 'The path "/example" could not be resolved'
}
*/

console.log(err instanceof httperr.NotFound); // true
console.log(err instanceof httperr.notFound); // true
console.log(err instanceof httperr['404']); // true
console.log(err instanceof httperr.MethodNotAllowed); // false
console.log(err instanceof httperr.HttpError); // true
console.log(err instanceof Error); // true


// ----------------------------------------
// Advanced usage: creating custom Error subclasses
var Custom404Error = httperr.createHttpError(404, 'Not Found', function (config) {
    this.message = 'The resource was not found';
    this['some custom property'] = config.parameters['some custom parameter'];
});
err = new Custom404Error();

var Custom500Error = httperr.createHttpError(500, 'Something went wrong');
err = new Custom500Error();


// ----------------------------------------
// Advanced usage: returning a JSON serializable representation of an error
var err = httperr.notFound('File Not Found');
console.log(err.toObject());
/*
{
  name: 'NotFound',
  code: 'NOT_FOUND',
  title: 'Not Found',
  statusCode: 404,
  message: 'File Not Found',
  stack: '…'
}
*/
console.log(err.toObject('stack', /^title$/));
/*
{
  name: 'NotFound',
  code: 'NOT_FOUND',
  statusCode: 404,
  message: 'File Not Found'
}
*/
