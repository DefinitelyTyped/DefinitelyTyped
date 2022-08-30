import path = require('path');
import SVGSpritemapPlugin = require('svg-spritemap-webpack-plugin');
import { Configuration } from 'webpack';

(config: Configuration) => {
    // tests
    config.plugins = [
        new SVGSpritemapPlugin(),
        new SVGSpritemapPlugin('images/sprites/**/*.svg'),
        new SVGSpritemapPlugin(['images/logos/**/*.svg', 'images/icons/**/*.svg']),
        new SVGSpritemapPlugin('src/**/*.svg', {
            styles: 'src/scss/_sprites.scss',
        }),
        new SVGSpritemapPlugin('src/**/*.svg', {
            input: {
                options: {
                    cwd: process.cwd(),
                    root: path.resolve(process.cwd(), '/'),
                    absolute: true,
                },
                allowDuplicates: true,
            },
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
                prefix: 'sprie-prefix-',
                prefixStylesSelectors: true,
            },
            styles: {
                format: 'fragment',
                keepAttributes: true,
                filename: 'src/scss/_sprites.scss',
                variables: {
                    sprites: 'sprites',
                    sizes: 'sizes',
                    variables: 'variables',
                    mixin: 'sprite',
                },
                callback: content => `[class*="sprite-"] { background-size: cover; } ${content}`,
            },
        }),
        new SVGSpritemapPlugin('src/**/*.svg', {
            output: {
                svg: {
                    attributes: {
                        class: 'test-custom-class',
                        id: 'test-custom-id',
                        'data-test': 'test-custom-data-attr',
                        hidden: true,
                    },
                },
            },
        }),
    ];
};
