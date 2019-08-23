import * as postcss from 'postcss';
import * as url from 'postcss-url';

const standard: postcss.Transformer = url();

const single: postcss.Transformer = url({ url: 'copy', assetsPath: 'img', useHash: true });

const multiple: postcss.Transformer = url([
    { filter: '**/assets/copy/*.png', url: 'copy', assetsPath: 'img', useHash: true },
    { filter: '**/assets/inline/*.svg', url: 'inline', optimizeSvgEncode: true },
    { filter: '**/assets/**/*.gif', url: 'rebase' },
    { filter: 'cdn/**/*', url: (asset) => `https://cdn.url/${asset.url}` },
]);

postcss().use(standard);
postcss().use(single);
postcss().use(multiple);
