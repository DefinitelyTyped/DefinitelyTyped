import list = require('npm-list-author-packages');

const opts: list.Options = {
    port: 80,
    protocol: 'http',
    registry: 'my.favorite.npm/registry',
    username: 'kgryte',
};

list(opts, (error, data) => {
    data; // $ExpectType string[]
});

const get = list.factory({ username: 'kgryte' }, (error, data) => {
    data; // $ExpectType string[]
});

get();
