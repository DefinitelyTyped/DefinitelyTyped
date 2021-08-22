import favicons = require('favicons');
import { FaviconCallback } from 'favicons';

const source = 'test/logo.png';
const options: Partial<favicons.FaviconOptions> = {
    path: '/foo/bar',
    appName: null,
    appShortName: null,
    appDescription: null,
    developerName: null,
    developerURL: null,
    dir: 'auto',
    lang: 'en-US',
    background: '#fff',
    theme_color: '#fff',
    appleStatusBarStyle: 'black-translucent',
    display: 'standalone',
    orientation: 'any',
    scope: '/',
    start_url: '/?homescreen=1',
    version: '1.0',
    logging: false,
    pixel_art: false,
    loadManifestWithCredentials: false,
    icons: {
        android: true,
        appleIcon: ['apple-touch-icon.png'],    // Test string array
        appleStartup: true,
        coast: true,
        favicons: true,
        firefox: true,
        windows: true,
        yandex: true,
    },
};

const callback: FaviconCallback = (error, response) => {
    if (error) {
        error.message; // $ExpectType string
        return;
    }
    response.images; // $ExpectType FaviconImage[]
    response.files; // $ExpectType FaviconFile[]
    response.html; // $ExpectType string[]
};

let html = '';
favicons(source, options, (err, res) => {
    html = res.html.join('');

    for (const { name, contents } of [...res.files, ...res.images]) {
        html = name + contents.toString();
    }
});

favicons(source, (err: any, res: any) => {
    html = res.html.join('');

    for (const { name, contents } of [...res.files, ...res.images]) {
        html = name + contents.toString();
    }
});

favicons(source).then(res => {
    html = res.html.join('');

    for (const { name, contents } of [...res.files, ...res.images]) {
        html = name + contents.toString();
    }
});

(async () => {
    // $ExpectType FaviconResponse
    await favicons(source);
})();
