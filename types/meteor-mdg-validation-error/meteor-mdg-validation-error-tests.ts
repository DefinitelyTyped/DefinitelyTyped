// Tests based on https://github.com/meteor/validation-error/blob/master/validation-error-tests.js

import { ValidationError } from "meteor/mdg:validation-error";

// $ExpectError
new ValidationError([{ name: 'name' }]);

const error = new ValidationError([{
    name: 'name',
    type: 'required'
}], 'Name is required');

// $ExpectType string | number
error.error;

// $ExpectType string
error.message;
