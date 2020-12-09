/// <reference types="node" />

import isbn = require('node-isbn');

isbn.resolve('0735619670', (err, book) => {
    if (err) {
        console.log('Book not found', err);
    } else {
        console.log('Book found %j', book);
    }
});

isbn.resolve('0735619670', { timeout: 15000 }, (err, book) => {
    if (err) {
        console.log('Book not found', err);
    } else {
        console.log('Book found %j', book);
    }
});

isbn.resolve('0735619670')
    .then(book => {
        console.log('Book found %j', book);
    })
    .catch(err => {
        console.log('Book not found', err);
    });

isbn.provider(['openlibrary', 'google'])
    .resolve('0735619670')
    .then(book => {
        console.log('Book found %j', book);
    })
    .catch(err => {
        console.log('Book not found', err);
    });

isbn.provider(['google'])
    .resolve('0735619670')
    .then(book => {
        console.log('Book found %j', book);
    })
    .catch(err => {
        console.log('Book not found', err);
    });

isbn.provider([isbn.PROVIDER_NAMES.GOOGLE])
    .resolve('0735619670')
    .then(book => {
        console.log('Book found %j', book);
    })
    .catch(err => {
        console.log('Book not found', err);
    });

const input = process.argv.slice(2)[0] || '0735619670';

isbn.resolve(input, (err, book) => {
    if (err) {
        console.log(`Book isbn:${input} not found`, err);
    } else {
        console.log(`Book isbn:${input} found %j`, book);
    }
});
