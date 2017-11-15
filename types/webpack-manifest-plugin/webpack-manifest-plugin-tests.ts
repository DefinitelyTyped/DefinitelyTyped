import { Configuration } from 'webpack';
import * as WebpackManifestPlugin from 'webpack-manifest-plugin';

const c: Configuration = {
    plugins: [
        new WebpackManifestPlugin(),
        new WebpackManifestPlugin({
            filename: 'my-manifest.json',
            basePath: '/app/',
            seed: {
                name: 'My Manifest',
            },
        }),
    ],
};
