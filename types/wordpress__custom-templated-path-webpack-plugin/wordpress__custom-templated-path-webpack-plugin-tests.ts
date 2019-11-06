import CustomTemplatedPathPlugin = require('@wordpress/custom-templated-path-webpack-plugin');

new CustomTemplatedPathPlugin({
    basename(path, data) {
        return data.chunk && data.chunk.name === 'foo' ? 'FOO' : path;
    },
});
