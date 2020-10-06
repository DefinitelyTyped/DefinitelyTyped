import grumbler_scripts = require('grumbler-scripts');

grumbler_scripts.getCurrentVersion({ version: 'foo' });
grumbler_scripts.getNextVersion({ version: 'foo' }, 'bar');

const FILE_NAME = 'mylibrary';
const MODULE_NAME = 'mylibrary';

const BASE_CONFIG: grumbler_scripts.WebpackConfigOptions = {
    entry: './foo/bar.js',
    filename: `${FILE_NAME}.min.js`,
    modulename: MODULE_NAME,
    libraryTarget: 'window',
    path: './foo',
    test: true,
    debug: true,
    minify: true,
};

grumbler_scripts.getWebpackConfig(BASE_CONFIG);

(karma: object) =>
    grumbler_scripts.getKarmaConfig(karma, { basePath: 'foo', webpack: grumbler_scripts.getWebpackConfig() });
