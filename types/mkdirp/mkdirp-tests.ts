import mkdirp = require('mkdirp');

// return value is a Promise resolving to the first directory created
mkdirp('/tmp/foo/bar/baz').then(made => console.log(`made directories, starting with ${made}`));
// return value is the first directory created
const made = mkdirp.sync('/tmp/foo/bar/baz');
console.log(`made directories, starting with ${made}`);

async () => {
    await mkdirp('some dir');
};
