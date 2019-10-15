import { createConfig, match, env } from '@webpack-blocks/webpack';
import extractText from '@webpack-blocks/extract-text';
import { css } from '@webpack-blocks/assets';

module.exports = createConfig([
    extractText('path/to/output.file')
]);

module.exports = createConfig([
    match('*.css', [
        css(),
        env('production', [extractText()])
    ])
]);
