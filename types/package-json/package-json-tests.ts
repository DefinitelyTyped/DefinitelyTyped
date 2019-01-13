import packageJson = require('package-json');

packageJson('package-json'); // $ExpectType Promise<PackageJson>
packageJson('package-json', { version: '1.2.3' }); // $ExpectType Promise<PackageJson>
packageJson('package-json', { fullMetadata: true }); // $ExpectType Promise<PackageJson>
packageJson('package-json', { allVersions: true }); // $ExpectType Promise<PackageJson>
