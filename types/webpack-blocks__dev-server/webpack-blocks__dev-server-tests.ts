import { createConfig, env } from '@webpack-blocks/webpack';
import devServer from '@webpack-blocks/dev-server';

createConfig([
    env('development', [
        devServer({
            overlay: true,
            proxy: {
                '/api': { target: 'http://localhost:3000' },
            },
        }),
    ]),
]);
