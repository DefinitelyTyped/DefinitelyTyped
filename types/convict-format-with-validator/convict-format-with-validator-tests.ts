import convictValidators = require('convict-format-with-validator');

// $ExpectType string | undefined
convictValidators.email.name;
// $ExpectType ((val: any, schema: SchemaObj<any>) => void) | undefined
convictValidators.email.validate;
// $ExpectType ((val: any) => any) | undefined
convictValidators.email.coerce;

// $ExpectType string | undefined
convictValidators.ipaddress.name;
// $ExpectType ((val: any, schema: SchemaObj<any>) => void) | undefined
convictValidators.ipaddress.validate;
// $ExpectType ((val: any) => any) | undefined
convictValidators.ipaddress.coerce;

// $ExpectType string | undefined
convictValidators.url.name;
// $ExpectType ((val: any, schema: SchemaObj<any>) => void) | undefined
convictValidators.url.validate;
// $ExpectType ((val: any) => any) | undefined
convictValidators.url.coerce;
