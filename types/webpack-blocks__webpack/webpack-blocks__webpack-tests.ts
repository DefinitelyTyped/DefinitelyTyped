import { addPlugins, createConfig, entryPoint, env, setMode, setOutput, sourceMaps } from '@webpack-blocks/webpack';
import { css } from '@webpack-blocks/assets';

module.exports = createConfig([
    setMode(process.env.NODE_ENV || 'development'),
    entryPoint('./src/main.js'),
    setOutput('./build/bundle.js'),
    css(),
    addPlugins([]),
    env('development', [sourceMaps()]),
]);
