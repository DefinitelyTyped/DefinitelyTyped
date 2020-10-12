import { WebpackConfigOptions, WebpackConfig } from 'grumbler-scripts/config/types';
import { getCurrentVersion, getNextVersion, getWebpackConfig } from 'grumbler-scripts/config/webpack.config';
import karma, { getKarmaConfig } from 'grumbler-scripts/config/karma.conf';

// $ExpectError
getCurrentVersion();
getCurrentVersion({ version: 'foo' });
// $ExpectError
getNextVersion({ version: 'foo' }, 2);
getNextVersion({ version: 'foo' }, 'bar');

const FILE_NAME = 'mylibrary';
const MODULE_NAME = 'mylibrary';

const WEBPACK_CONFIG: WebpackConfig = {};
const BASE_CONFIG: WebpackConfigOptions = {
    entry: './foo/bar.js',
    filename: `${FILE_NAME}.min.js`,
    modulename: MODULE_NAME,
    libraryTarget: 'window',
    path: './foo',
    test: true,
    debug: true,
    minify: true,
};

getWebpackConfig(BASE_CONFIG);

karma({});
(k: any) => k.set(getKarmaConfig(k, { basePath: 'foo', webpack: getWebpackConfig() }));
