import makeDir = require('make-dir');
import * as fs from 'fs';
import * as gfs from 'graceful-fs';

makeDir('path/to/somewhere').then(dirname => {
    // do something
});

const dirname = makeDir.sync('path/to/somewhere');

makeDir('path/to/somewhere', {mode: parseInt('777', 8)});
makeDir('path/to/somewhere', {fs});
makeDir('path/to/somewhere', {fs: gfs});
