import { createConfig, match, env } from '@webpack-blocks/webpack';
import { css } from '@webpack-blocks/assets';
import sass from '@webpack-blocks/sass';
import extractText from '@webpack-blocks/extract-text';
import postcss from '@webpack-blocks/postcss';

createConfig([match('*.scss', [css(), sass(), postcss({ plugins: [] })])]);

createConfig([match('*.scss', [css.modules(), sass()])]);

createConfig([match('*.scss', [css(), sass(), env('production', [extractText()])])]);

createConfig([match(['*.scss', '!*node_modules*'], [css(), sass()])]);
