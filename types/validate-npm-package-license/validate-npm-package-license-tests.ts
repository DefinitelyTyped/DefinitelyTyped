import validateLicense = require('validate-npm-package-license');

validateLicense('MIT'); // $ExpectType Result
validateLicense('BSD-2-Clause'); // $ExpectType Result
validateLicense('Apache-2.0'); // $ExpectType Result
validateLicense('ISC'); // $ExpectType Result
validateLicense('UNLICENSED'); // $ExpectType Result
validateLicense('(GPL-3.0-only OR BSD-2-Clause)'); // $ExpectType Result
validateLicense('LicenseRef-Made-Up'); // $ExpectType Result
