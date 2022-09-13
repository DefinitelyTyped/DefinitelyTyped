import PurifyPlugin from 'purifycss-webpack';

new PurifyPlugin({
    styleExtensions: ['.css'],
    minimize: true,
    moduleExtensions: ['.js'],
    paths: [''],
    verbose: true,
    purifyOptions: {
        minify: false,
        output: '',
        info: false,
        rejected: false,
        whitelist: [''],
    },
});
