import * as jsonValidator from 'json-dup-key-validator';

jsonValidator.parse('{}'); // $ExpectType object
jsonValidator.parse('{}', false); // $ExpectType object
jsonValidator.validate('{}'); // $ExpectType string | undefined
jsonValidator.validate('{}', false); // $ExpectType string | undefined
