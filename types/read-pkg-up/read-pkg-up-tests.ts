import ReadPkgUp = require('read-pkg-up');

ReadPkgUp().then(pkg => pkg.name); // $ExpectType Promise<string>
ReadPkgUp({cwd: '.', normalize: true}).then(pkg => pkg.name); // $ExpectType Promise<string>
ReadPkgUp({cwd: '.', normalize: false}).then(pkg => pkg['name']); // $ExpectType Promise<any>
ReadPkgUp.sync().name; // $ExpectType string
ReadPkgUp.sync({cwd: '.', normalize: true}).name; // $ExpectType string
ReadPkgUp.sync({cwd: '.', normalize: false})['name']; // $ExpectType any
