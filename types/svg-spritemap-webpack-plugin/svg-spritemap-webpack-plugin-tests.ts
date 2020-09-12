/// <reference types="node" />
import SVGSpritemapPlugin = require('svg-spritemap-webpack-plugin');
import { Configuration } from 'webpack';
import path = require('path');

(config: Configuration) => {
    // tests
    config.plugins = [
        new SVGSpritemapPlugin(),
        new SVGSpritemapPlugin('images/sprites/**/*.svg'),
        new SVGSpritemapPlugin(['images/logos/**/*.svg', 'images/icons/**/*.svg']),
        new SVGSpritemapPlugin('src/**/*.svg', {
            styles: path.join(__dirname, 'src/scss/_sprites.scss'),
        }),
        new SVGSpritemapPlugin('src/**/*.svg', {
            output: {
                svg: {
                    sizes: false,
                },
            },
            sprite: {
                generate: {
                    use: true,
                    view: '-fragment',
                    symbol: true,
                },
            },
            styles: {
                format: 'fragment',
                filename: path.join(__dirname, 'src/scss/_sprites.scss'),
            },
        }),
    ];
};
