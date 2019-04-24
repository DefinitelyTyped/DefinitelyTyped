import toSemver = require('to-semver');

toSemver(['v1.3.16', 'v1.7.0', 'test', 'v1.6.9']); // $ExpectType string[]
