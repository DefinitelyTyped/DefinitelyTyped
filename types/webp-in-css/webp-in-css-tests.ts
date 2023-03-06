// tslint:disable-next-line no-var-requires testing polyfill inclusion
require('webp-in-css/polyfill');
import plugin = require('webp-in-css/plugin');

plugin.postcss; // $ExpectType true
plugin();
plugin({});
plugin({
    modules: true,
    webpClass: 'webp',
    noWebpClass: 'no-webp',
    addNoJs: true,
    noJsClass: 'no-js',
    check: decl => /\.jpg/.test(decl.value) && !decl.value.includes('as=webp'),
    rename: url => url.replace('.jpg', '.jpg?as=webp'),
});
