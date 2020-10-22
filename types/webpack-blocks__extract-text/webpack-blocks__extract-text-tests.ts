import { createConfig, match, env } from '@webpack-blocks/webpack';
import extractText from '@webpack-blocks/extract-text';
import { css } from '@webpack-blocks/assets';

createConfig([extractText('path/to/output.file')]);

createConfig([match('*.css', [css(), env('production', [extractText()])])]);
