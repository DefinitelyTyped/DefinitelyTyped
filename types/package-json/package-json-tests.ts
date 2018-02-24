import packageJson = require('package-json');

let pkg: {};
packageJson('package-json', {
    version: '1.2.3',
    fullMetadata: true,
    allVersions: true,
}).then(x => {
    pkg = x;
});
