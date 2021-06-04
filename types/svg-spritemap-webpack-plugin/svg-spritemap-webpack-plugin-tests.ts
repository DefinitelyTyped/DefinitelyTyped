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
                callback: content => `[class*="sprite-"] { background-size: cover; } ${content}`,
            },
        }),
    ];
};
