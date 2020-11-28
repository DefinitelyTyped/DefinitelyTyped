import validate = require('validate-npm-package-name');

validate('some-package'); // $ExpectType ValidNames | InvalidNames | LegacyNames
validate('example.com'); // $ExpectType ValidNames | InvalidNames | LegacyNames
validate('under_score'); // $ExpectType ValidNames | InvalidNames | LegacyNames
validate('123numeric'); // $ExpectType ValidNames | InvalidNames | LegacyNames
validate('@npm/thingy'); // $ExpectType ValidNames | InvalidNames | LegacyNames
validate('@jane/foo.js'); // $ExpectType ValidNames | InvalidNames | LegacyNames

validate.scopedPackagePattern; // $ExpectType RegExp

const results = validate('@jane/foo.js');

if (results.validForNewPackages) {
    results.validForOldPackages; // $ExpectType true
    // $ExpectError
    results.errors;
    // $ExpectError
    results.warnings;
} else {
    if (results.validForOldPackages) {
        results.warnings; // $ExpectType string[]
    } else {
        results.errors; // $ExpectType string[]
    }
}
