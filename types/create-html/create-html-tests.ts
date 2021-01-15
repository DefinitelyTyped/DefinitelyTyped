import createHtml = require('create-html');

const html1 = createHtml({
    title: 'example',
});

const html2 = createHtml({
    title: 'example',
    script: 'example.js',
    scriptAsync: true,
    css: 'example.css',
    lang: 'en',
    dir: 'rtl',
    head: '<meta name="description" content="example">',
    body: '<p>example</p>',
    favicon: 'favicon.png',
});

const html3 = createHtml({
    css: ['sheet1.css', 'sheet2.css'],
    script: ['script1.js', 'script2.js'],
});
