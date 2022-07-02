import validate = require('validate-npm-package-name');

validate('some-package'); // $ExpectType ValidNames | InvalidNames | LegacyNames
validate('example.com'); // $ExpectType ValidNames | InvalidNames | LegacyNames
validate('under_score'); // $ExpectType ValidNames | InvalidNames | LegacyNames
validate('123numeric'); // $ExpectType ValidNames | InvalidNames | LegacyNames
validate('@npm/thingy'); // $ExpectType ValidNames | InvalidNames | LegacyNames
validate('@jane/foo.js'); // $ExpectType ValidNames | InvalidNames | LegacyNames

const results = validate('@jane/foo.js');

// backward compatibility check
const { validForNewPackages, validForOldPackages, errors, warnings } = results;

validForNewPackages; // $ExpectType boolean
validForOldPackages; // $ExpectType boolean
errors; // $ExpectType string[] | undefined
warnings; // $ExpectType string[] | undefined

if (results.validForNewPackages) {
    results.validForOldPackages; // $ExpectType true
} else {
    if (results.validForOldPackages) {
        results.warnings; // $ExpectType string[]
    } else {
        results.errors; // $ExpectType string[]
    }
}
