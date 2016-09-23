
import emailValidator = require('email-validator');
import { validate } from 'email-validator';

var result: boolean;

// Trivial code requires trivial tests
result = validate('some email');
result = validate(null);

result = emailValidator.validate('some email');
result = emailValidator.validate(null);
