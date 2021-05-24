/// <reference types="../next"/>

/**
 * Tests for the `next` (v5) version of webpack
 */
import webpack = require('webpack');

let configuration: webpack.Configuration = {
    stats: {
        preset: false,
    },
};

configuration = {
    stats: {
        preset: 'none',
    },
};
