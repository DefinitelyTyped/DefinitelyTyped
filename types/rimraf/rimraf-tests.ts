import rimraf = require('rimraf');

rimraf('./xyz', (_: Error | null | undefined) => {});
rimraf.sync('./xyz');

rimraf('./xyz', { glob: { ignore: '' } }, (_: Error | null | undefined) => {});
rimraf.sync('./xyz', { glob: { ignore: '' } });
