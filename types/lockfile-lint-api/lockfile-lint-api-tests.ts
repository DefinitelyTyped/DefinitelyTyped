import { ValidateHost, ValidateHttps, ValidateScheme, ValidateUrl, ParseLockfile } from 'lockfile-lint-api';

const validator = new ValidateHost({ packages: { name: { version: 'v1.0.0' } } });
let result;
try {
    result = validator.validate(['npm', 'meow']);
} catch (error) {
    // something bad happened during validation and the validation
    // process couldn't take place
}
console.log('✔ ValidateHost', result);

const yarnLockfilePath = './yarn.test.lock';
const options = {
    lockfilePath: yarnLockfilePath,
    lockfileType: 'yarn',
};

// instantiate a new parser with options object
const parser = new ParseLockfile(options);

// read the file synchronously and parse it
// providing an object that is compatible
// with the @yarn/lockfile library which has
// all the packages listed in `lockfile.object`
const lockfile = parser.parseSync();
console.log('✔ parseSync', lockfile);

// now instantiate a validator object with those
// list of packages
const hostValidator = new ValidateHost({ packages: lockfile.object });
let hostResult;
try {
    // validation is synchronous and is being called
    // with 'npm' as a shortcut for the npm registry
    // host to validate all lockfile resources are
    // whitelisted to the npm host
    hostResult = hostValidator.validate(['npm']);
} catch (error) {
    // couldn't process the validation
}

// in this case we expect the validation to fail because
// we validate a yarnpkg lock file for the npm registry
if (hostResult?.type === 'success') {
    console.log('✔ ValidateHost', hostResult);
} else {
    console.log('X ValidateHost', hostResult);
}

const hostValidatorSingle = new ValidateHost({ packages: lockfile.object });
hostResult = hostValidatorSingle.validateSingle('@types/node@^9.6.5', ['npm']);
console.log('✔ validateSingle', hostResult);

const httpsValidator = new ValidateHttps({ packages: lockfile.object });
let httpsResult;
try {
    httpsResult = httpsValidator.validate();
} catch (error) {
    // couldn't process the validation
}
console.log('✔ ValidateHttps', httpsResult);

const schemeValidator = new ValidateScheme({ packages: lockfile.object });
let schemeResult;
try {
    schemeResult = schemeValidator.validate(['git']);
} catch (error) {
    // couldn't process the validation
}
console.log('X ValidateScheme', schemeResult);

const urlValidator = new ValidateUrl({ packages: lockfile.object });
let urlResult;
let urlSingleResult;
try {
    urlResult = urlValidator.validate(['git']);
    urlSingleResult = urlValidator.validateSingle('@types/node@^9.6.5', [
        'https://registry.yarnpkg.com/@types/node/-/node-9.6.5.tgz#ee700810fdf49ac1c399fc5980b7559b3e5a381d',
    ]);
} catch (error) {
    // couldn't process the validation
}
console.log('X ValidateUrl', urlResult);
console.log('✔ ValidateUrlSingle', urlSingleResult);
