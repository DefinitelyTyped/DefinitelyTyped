import { createConfig, match } from '@webpack-blocks/webpack';
import { css } from '@webpack-blocks/assets';
import postcss from '@webpack-blocks/postcss';

createConfig([match(['*.css', '!*node_modules*'], [css(), postcss()])]);

createConfig([
    css(),
    postcss({
        plugins: [],
    }),
]);
