import xmlNameValidator = require("xml-name-validator");

xmlNameValidator.name(""); // $ExpectType boolean
xmlNameValidator.qname(""); // $ExpectType boolean
