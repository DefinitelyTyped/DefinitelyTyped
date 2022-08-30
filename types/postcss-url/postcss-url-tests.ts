import postcss from 'postcss';
import * as url from 'postcss-url';

postcss().use(url());

postcss().use(url({ url: 'copy', assetsPath: 'img', useHash: true }));

postcss().use(
    url([
        { filter: '**/assets/copy/*.png', url: 'copy', assetsPath: 'img', useHash: true },
        { filter: '**/assets/inline/*.svg', url: 'inline', optimizeSvgEncode: true },
        { filter: '**/assets/**/*.gif', url: 'rebase' },
        { filter: 'cdn/**/*', url: asset => `https://cdn.url/${asset.url}` },
    ]),
);
