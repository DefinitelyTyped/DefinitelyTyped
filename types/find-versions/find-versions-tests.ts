import findVersions = require('find-versions');

findVersions('node v1.0.0'); // $ExpectType string[]
findVersions('1.0', { loose: true }); // $ExpectType string[]
