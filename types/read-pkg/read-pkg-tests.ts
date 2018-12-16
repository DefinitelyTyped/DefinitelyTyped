import ReadPkg = require('read-pkg');

ReadPkg().then(pkg => pkg.name); // $ExpectType Promise<string>
ReadPkg({normalize: true}).then(pkg => pkg.name); // $ExpectType Promise<string>
ReadPkg({normalize: false}).then(pkg => pkg['name']); // $ExpectType Promise<any>
ReadPkg.sync().name; // $ExpectType string
ReadPkg.sync({normalize: true}).name; // $ExpectType string
ReadPkg.sync({normalize: false})['name']; // $ExpectType any
ReadPkg.sync('package.json', {normalize: false})['name']; // $ExpectType any
