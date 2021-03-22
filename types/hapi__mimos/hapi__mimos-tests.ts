import Mimos = require('@hapi/mimos');

let mimos: Mimos;

// new Mimos([options])

const options: Mimos.MimosOptions = {
    override: {
        'node/module': {
            source: 'iana',
            compressible: true,
            extensions: ['node', 'module', 'npm'],
            type: 'node/module',
        },
        'application/javascript': {
            source: 'iana',
            charset: 'UTF-8',
            compressible: true,
            extensions: ['js', 'javascript'],
            type: 'text/javascript',
        },
        'text/html': {
            predicate: mime => {
                mime.foo = mime.source === 'iana' ? 'test' : 'bar';
                return mime;
            },
        },
    },
};
mimos = new Mimos(options); // $ExpectType Mimos

// mimos.path

mimos = new Mimos();
mimos.path('/static/public/app.js'); // $ExpectType MimosOptionsValue

// mimos.type

mimos = new Mimos();
const mime = mimos.type('text/plain'); // $ExpectType MimeEntry
