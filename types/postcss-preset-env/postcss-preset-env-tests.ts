/// <reference types="node" />

import * as postcss from 'postcss';
import * as postcssPresetEnv from 'postcss-preset-env';

postcss([postcssPresetEnv({ autoprefixer: true })])
    .process('transform: skew(30deg, 20deg)')
    .then((result: any) => {
        console.log(result.css);
    });
