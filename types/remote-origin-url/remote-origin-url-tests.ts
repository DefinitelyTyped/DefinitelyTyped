import origin = require('remote-origin-url');

origin(); // $ExpectType Promise<string | undefined>
origin('foo'); // $ExpectType Promise<string | undefined>
origin({ path: 'foo' }); // $ExpectType Promise<string | undefined>
// $ExpectType void
origin((err, url) => {
    err; // $ExpectType Error | null
    url; // $ExpectType string | undefined
});
// $ExpectType void
origin({ path: 'foo' }, (err, url) => {
    err; // $ExpectType Error | null
    url; // $ExpectType string | undefined
});

origin.promise(); // $ExpectType Promise<string | undefined>
origin.promise('foo'); // $ExpectType Promise<string | undefined>
origin.promise({ path: 'foo' }); // $ExpectType Promise<string | undefined>

origin.sync(); // $ExpectType string | undefined
origin.sync('foo'); // $ExpectType string | undefined
origin.sync({ path: 'foo' }); // $ExpectType string | undefined
