import makeDir = require('make-dir');

makeDir('path/to/somewhere').then(dirname => {
    // do something
});

const dirname = makeDir.sync('path/to/somewhere');
