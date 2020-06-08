import * as webpack from 'webpack';
import * as TerserPlugin from "terser-webpack-plugin";

const compiler = webpack({
    plugins: [
        new TerserPlugin(),
    ],
});

const compilerOptions = webpack({
    plugins: [
        new TerserPlugin({
            // Uncomment lines below for cache invalidation correctly
            cache: true,
            cacheKeys: (defaultCacheKeys) => {
                delete defaultCacheKeys.terser;

                return {
                    ...defaultCacheKeys,
                    'uglify-js': require('uglify-js/package.json').version,
                };
            },
            minify: (file, sourceMap) => {
                // https://github.com/mishoo/UglifyJS2#minify-options
                const uglifyJsOptions = {
                    /* your `uglify-js` package options */
                };
                return require('uglify-js').minify(file, uglifyJsOptions);
            },
            include: /src\//,
            exclude: /node_modules\//,
            sourceMap: true,
            terserOptions: { mangle: true }
        }),
    ],
});
