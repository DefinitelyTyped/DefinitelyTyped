import packageJson = require('package-json');

const pkg = packageJson('package-json', {
    version: '1.2.3',
    fullMetadata: true,
    allVersions: true,
});
