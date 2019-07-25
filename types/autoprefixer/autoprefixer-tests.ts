import autoprefixer = require('autoprefixer');
import { Transformer } from 'postcss';

// No options
const ap1: Transformer = autoprefixer();

// Default options
const ap2: Transformer = autoprefixer({
    browsers: [],
    env: 'test',
    cascade: true,
    add: true,
    remove: true,
    supports: true,
    flexbox: true,
    grid: false,
    stats: {},
    ignoreUnknownVersions: false
});
