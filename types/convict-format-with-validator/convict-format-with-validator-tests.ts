import convictValidators = require('convict-format-with-validator');

// $ExpectType string | undefined
convictValidators.email.name;
// $ExpectType ((val: any) => void) | undefined
convictValidators.email.validate;
// $ExpectType ((val: any) => any) | undefined
convictValidators.email.coerce;

// $ExpectType string | undefined
convictValidators.ipAddress.name;
// $ExpectType ((val: any) => void) | undefined
convictValidators.ipAddress.validate;
// $ExpectType ((val: any) => any) | undefined
convictValidators.ipAddress.coerce;

// $ExpectType string | undefined
convictValidators.url.name;
// $ExpectType ((val: any) => void) | undefined
convictValidators.url.validate;
// $ExpectType ((val: any) => any) | undefined
convictValidators.url.coerce;
