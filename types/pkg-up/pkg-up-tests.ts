import pkgUp = require('pkg-up');

pkgUp().then(filepath => {
    filepath;
    // => '/Users/sindresorhus/foo/package.json'
});
