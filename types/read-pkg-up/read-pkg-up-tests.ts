import ReadPkgUp = require('read-pkg-up');

ReadPkgUp().then(pkg => typeof pkg === 'object');
ReadPkgUp({cwd: '.', normalize: false}).then(pkg => typeof pkg === 'object');
typeof ReadPkgUp.sync() === 'object';
typeof ReadPkgUp.sync({cwd: '.', normalize: false}) === 'object';
