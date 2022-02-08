import PreactRefreshPlugin = require('@prefresh/webpack');

import { Configuration } from 'webpack';

const config: Configuration = {
    plugins: [
        new PreactRefreshPlugin(),
        new PreactRefreshPlugin({}),
        new PreactRefreshPlugin({ overlay: true, runsInNextJs: false }),
        new PreactRefreshPlugin({ overlay: true }),
        new PreactRefreshPlugin({ runsInNextJs: true }),
    ],
};
