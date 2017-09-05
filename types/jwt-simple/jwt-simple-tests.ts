
import jwt = require('jwt-simple');
var payload = { foo: 'bar' };
var secret:string = 'xxx';

// encode
var token = jwt.encode(payload, secret);

// decode
var decoded = jwt.decode(token, secret);
console.log(decoded); //=> { foo: 'bar' }