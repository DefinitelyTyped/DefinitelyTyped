import nhsNumberValdiator = require('nhs-number-validator');

nhsNumberValdiator.validate(''); // $ExpectType boolean
nhsNumberValdiator.validate(123); // $ExpectType boolean
