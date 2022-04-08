import og = require('open-graph');

const url = 'https://github.com/samholmes/node-open-graph/raw/master/test.html';

og(url, (err, meta) => {
    if (meta) {
        meta.custom;
        meta.description; // $ExpectType string | string[] | undefined
    }
});

og.parse('content', {
    strict: true,
});

og.getHTML('https://github.com/samholmes/node-open-graph/raw/master/test.html', (err, data) => {
    data; // $ExpectType string | undefined
});
