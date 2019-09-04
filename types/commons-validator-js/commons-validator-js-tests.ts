import commonsValidatorJs = require('commons-validator-js');

const emailValidator = new commonsValidatorJs.EmailValidator();
const domainValidator = new commonsValidatorJs.DomainValidator();

// $ExpectType boolean
emailValidator.isValid('a@a.com');

// $ExpectType string | null
domainValidator.extractTld('a@a.com');

// $ExpectType boolean
domainValidator.isValid('a@a.com');

// $ExpectType boolean
domainValidator.isValidCountryCodeTld('de');

// $ExpectType boolean
domainValidator.isValidGenericTld('com');

// $ExpectType boolean
domainValidator.isValidInfrastructureTld('com');

// $ExpectType boolean
domainValidator.isValidTld('com');
