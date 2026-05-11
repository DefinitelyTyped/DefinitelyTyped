import validateNpmPackage = require("validate-npm-package");

// $ExpectType ValidNames | InvalidNames | LegacyNames
const results = validateNpmPackage({
    name: "FooABC",
    version: "a.b.c",
});

if (results.validForNewPackages) {
    // $ExpectType ValidNames
    results;
} else {
    if (results.validForOldPackages) {
        results.warnings; // $ExpectType string[]
    } else {
        results.errors; // $ExpectType string[]
    }
}
