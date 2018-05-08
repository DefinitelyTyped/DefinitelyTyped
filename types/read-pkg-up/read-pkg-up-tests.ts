import ReadPkgUp = require('read-pkg-up');

ReadPkgUp().then(pkg => pkg.pkg.name); // $ExpectType Promise<string>
ReadPkgUp({cwd: '.', normalize: true}).then(pkg => pkg.pkg.name); // $ExpectType Promise<string>
ReadPkgUp({cwd: '.', normalize: false}).then(pkg => pkg.pkg['name']); // $ExpectType Promise<any>
ReadPkgUp.sync().pkg.name; // $ExpectType string
ReadPkgUp.sync({cwd: '.', normalize: true}).pkg.name; // $ExpectType string
ReadPkgUp.sync({cwd: '.', normalize: false}).pkg['name']; // $ExpectType any
