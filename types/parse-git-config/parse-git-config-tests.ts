import parse = require('parse-git-config');

parse({ cwd: 'foo' });
parse({ path: '.git/config' });
parse({ type: 'global' });
parse({ type: 'foo' }); // $ExpectError
parse({ include: true });
parse({ expandKeys: true });

parse(); // $ExpectType Promise<Config | null>
parse('foo'); // $ExpectType Promise<Config | null>
parse({ cwd: 'foo' }); // $ExpectType Promise<Config | null>
// $ExpectType void
parse((err, config) => {
    err; // $ExpectType Error | null
    config; // $ExpectType Config
});
// $ExpectType void
parse('foo', (err, config) => {
    err; // $ExpectType Error | null
    config; // $ExpectType Config
});
// $ExpectType void
parse({ cwd: 'foo' }, (err, config) => {
    err; // $ExpectType Error | null
    config; // $ExpectType Config
});

parse.promise(); // $ExpectType Promise<Config | null>
parse.promise('foo'); // $ExpectType Promise<Config | null>
parse.promise({ cwd: 'foo' }); // $ExpectType Promise<Config | null>

parse.sync(); // $ExpectType Config
parse.sync('foo'); // $ExpectType Config
parse.sync({ cwd: 'foo' }); // $ExpectType Config

function test_expandKeys() {
    const config = {
        'foo "bar"': { doStuff: true },
        'foo "baz"': { doStuff: true },
    };
    const keys = parse.expandKeys(config);

    keys.foo.bar.doStuff === true;
    keys.foo.baz.doStuff === true;
}

parse.resolveConfigPath('foo'); // $ExpectType string | null
parse.resolveConfigPath({ cwd: 'foo' }); // $ExpectType string | null
parse.resolveConfigPath({ path: '.git/config' }); // $ExpectType string | null
parse.resolveConfigPath({ type: 'global' }); // $ExpectType string | null
parse.resolveConfigPath({ type: 'foo' }); // $ExpectError
parse.resolveConfigPath({ include: true }); // $ExpectError
