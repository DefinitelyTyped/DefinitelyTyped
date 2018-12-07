import rimraf = require('rimraf');

rimraf('./xyz', (err: Error) => { });
rimraf.sync('./xyz');

rimraf('./xyz', { glob: { ignore: '' } }, (err: Error) => { });
rimraf.sync('./xyz', { glob: { ignore: '' } });

rimraf.EMFILE_MAX = 0;
rimraf.BUSYTRIES_MAX = 0;
