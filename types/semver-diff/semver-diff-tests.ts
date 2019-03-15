import semverDiff = require('semver-diff');

semverDiff('1.1.1', '1.1.2'); // => 'patch'

semverDiff('0.0.1', '1.0.0'); // => 'major'

semverDiff('0.0.1', '0.1.0'); // => 'minor'

semverDiff('0.0.1-foo', '0.0.1-foo.bar'); // => 'prerelease'

semverDiff('0.1.0', '0.1.0+foo'); // => 'build'

semverDiff('0.0.1', '0.0.1'); // => null

semverDiff('0.0.2', '0.0.1'); // => null
