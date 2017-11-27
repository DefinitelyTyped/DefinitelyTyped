import * as webpack from 'webpack';
import * as DotenvPlugin from 'webpack-dotenv-plugin';

const config: webpack.Configuration = {
    plugins: [
        new DotenvPlugin(),
        new DotenvPlugin({
            sample: './.env.default',
            path: './.env'
        }),
        new DotenvPlugin({
            sample: './.env.default',
            path: './.env',
            silent: true,
            encoding: 'utf-8',
            allowEmptyValues: true
        })
    ]
};
