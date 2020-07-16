import search = require('libnpmsearch');

const opts: search.Options = {
    limit: 20,
    from: 0,
    detailed: false,
    sortBy: 'optimal',

    registry: 'https://registry.npmjs.org',
    token: 'token',
};

search('libnpm'); // $ExpectType Promise<Result[]>
search('libnpm', opts); // $ExpectType Promise<Result[]>
search('libnpm', { detailed: true }); // $ExpectType Promise<DetailedResult[]>
search.stream('libnpm'); // $ExpectType ReadWriteStream
search.stream('libnpm', opts); // $ExpectType ReadWriteStream
