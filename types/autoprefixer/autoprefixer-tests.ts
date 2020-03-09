import autoprefixer = require('autoprefixer');
import { Transformer } from 'postcss';

// No options
const ap1: Transformer = autoprefixer();

// Default options
const ap2: Transformer = autoprefixer({
    overrideBrowserslist: [],
    env: 'test',
    cascade: true,
    add: true,
    remove: true,
    supports: true,
    flexbox: true,
    grid: false,
    stats: {},
    ignoreUnknownVersions: false,
});

autoprefixer.info(); // $ExpectedType () => void
autoprefixer.data; // $ExpectType { browsers: any; prefixes: any; }
autoprefixer.defaults; // $ExpectedType string

// Using environment map in "overrideBrowserslist"
const ap3: Transformer = autoprefixer({
    overrideBrowserslist: {
        production: ['> 1%', 'ie 10'],
        modern: ['last 1 chrome version', 'last 1 firefox version'],
        ssr: ['node 12'],
    },
});
