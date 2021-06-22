import isEmail = require('sane-email-validation');

const is: boolean = isEmail('foo@bar.com');
const isNot: boolean = isEmail.isNotEmail('foo@bar.com');

// $ExpectError
isEmail(10);
// $ExpectError
isEmail.isNotEmail(10);
