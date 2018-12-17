import pathType = require('path-type');

// $ExpectType Promise<boolean>
pathType.file('package.json');
// $ExpectType Promise<boolean>
pathType.dir('package.json');
// $ExpectType Promise<boolean>
pathType.symlink('package.json');

// $ExpectType boolean
pathType.fileSync('package.json');
// $ExpectType boolean
pathType.dirSync('package.json');
// $ExpectType boolean
pathType.symlinkSync('package.json');
