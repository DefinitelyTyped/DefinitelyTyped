import og = require('open-graph');

const url = 'http://github.com/samholmes/node-open-graph/raw/master/test.html';

og(url, (err, meta) => {
    if (meta) {
        meta.custom;
        meta.description; // $ExpectType string | string[] | undefined
    }
});

og.parse('content', {
    strict: true,
});

og.getHTML('http://github.com/samholmes/node-open-graph/raw/master/test.html', (err, data) => {
    data; // $ExpectType string | undefined
});
