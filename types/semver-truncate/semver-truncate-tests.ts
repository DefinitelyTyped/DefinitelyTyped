import semverTruncate = require('semver-truncate');

semverTruncate('1.2.3-foo', 'patch'); // $ExpectType string
semverTruncate('1.2.3', 'minor'); // $ExpectType string
semverTruncate('1.2.3', 'major'); // $ExpectType string
