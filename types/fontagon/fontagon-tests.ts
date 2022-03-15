import Fontagon = require('fontagon');

// $ExpectType Promise<Options>
Fontagon({
    files: ['path/**/*.svg'],
});

Fontagon({
    files: ['path/**/*.svg'],
    dist: 'dist/',
    fontName: 'fontagon-icons',
    style: 'all',
    classOptions: {
        baseClass: 'fontagon-icons',
        classPrefix: 'ft',
    },
    writeFiles: true,
    styleTemplate: {
        css: 'css.hbs',
        sass: 'sass.hbs',
        less: 'less.hbs',
        stylus: 'styl.hbs',
    },
    html: false,
    htmlTemplate: '<p>Hello world!</p>',
    types: ['eot', 'woff', 'woff2'],
    order: ['eot', 'woff2', 'woff', 'ttf', 'svg'],
    rename: file => file,
    logs: true,
    formatOptions: {
        svg: {
            normalize: true,
            fontHeight: 1000,
        },
    },
    startCodepoint: 0xf101,
    normalize: true,
    codepoints: {},
})
    .then(opts => {
        opts; // $ExpectType Options
    })
    .catch(err => {
        err; // $ExpectType any
    });
