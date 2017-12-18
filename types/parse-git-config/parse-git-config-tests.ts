import parse = require('parse-git-config');

function test_parse_options() {
    parse({ cwd: 'foo', path: '.git/config' }, (err, config) => {
        if (err) {
            throw err;
        }

        const origin = config['remote "origin"'];
        if (origin && origin.url) {
            origin.url.split('/');
        }
    });
}

function test_parse_cwd() {
    parse('foo', (err, config) => {
        if (err) {
            throw err;
        }

        const origin = config['remote "origin"'];
        if (origin && origin.url) {
            origin.url.split('/');
        }
    });
}

function test_parse() {
    parse((err, config) => {
        if (err) {
            throw err;
        }

        const origin = config['remote "origin"'];
        if (origin && origin.url) {
            origin.url.split('/');
        }
    });
}

function test_sync_options() {
    const config = parse.sync({ cwd: 'foo', path: '.git/config' });

    const origin = config['remote "origin"'];
    if (origin && origin.url) {
        origin.url.split('/');
    }
}

function test_sync_cwd() {
    const config = parse.sync('foo');

    const origin = config['remote "origin"'];
    if (origin && origin.url) {
        origin.url.split('/');
    }
}

function test_sync() {
    const config = parse.sync();

    const origin = config['remote "origin"'];
    if (origin && origin.url) {
        origin.url.split('/');
    }
}

function test_keys() {
    const config = {
        'foo "bar"': { doStuff: true },
        'foo "baz"': { doStuff: true }
    };
    const keys = parse.keys(config);

    keys.foo.bar.doStuff === true;
    keys.foo.baz.doStuff === true;
}
