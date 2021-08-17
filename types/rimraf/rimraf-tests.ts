import rimraf = require('rimraf');

rimraf('./xyz', (_: Error | null) => {});
rimraf.sync('./xyz');

rimraf('./xyz', { glob: { ignore: '' } }, (_: Error | null) => {});
rimraf.sync('./xyz', { glob: { ignore: '' } });
