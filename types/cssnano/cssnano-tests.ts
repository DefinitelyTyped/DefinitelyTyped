import cssnano = require('cssnano');
import { Transformer } from 'postcss';

const nano1: Transformer = cssnano();
const nano2: Transformer = cssnano({
    configFile: '/path/to/config',
});
const nano3: Transformer = cssnano({
    preset: 'default',
});
const nano4: Transformer = cssnano({
    preset: ['default', {
        discardComments: {
            removeAll: true,
        },
    }],
});
