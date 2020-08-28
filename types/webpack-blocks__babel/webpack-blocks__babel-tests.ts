import { createConfig, match } from '@webpack-blocks/webpack';
import babel from '@webpack-blocks/babel';

createConfig([match(['*.js', '!*node_modules*'], [babel()])]);

createConfig([match(['*.js', '!*node_modules*'], [babel({ presets: [''], cacheDirectory: false, plugins: [''] })])]);
