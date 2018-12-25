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

async function test_promise_options() {
    let config = await parse({ cwd: 'foo', path: '.git/config' });
    config = await parse.promise({ cwd: 'foo', path: '.git/config' });
    if (!config) return null;

    const origin = config['remote "origin"'];
    if (origin && origin.url) {
        origin.url.split('/');
    }
}

async function test_promise_cwd() {
    let config = await parse('foo');
    config = await parse.promise('foo');
    if (!config) return null;

    const origin = config['remote "origin"'];
    if (origin && origin.url) {
        origin.url.split('/');
    }
}

async function test_promise() {
    let config = await parse();
    config = await parse.promise();
    if (!config) return null;

    const origin = config['remote "origin"'];
    if (origin && origin.url) {
        origin.url.split('/');
    }
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

function test_expandKeys() {
    const config = {
        'foo "bar"': { doStuff: true },
        'foo "baz"': { doStuff: true }
    };
    const keys = parse.expandKeys(config);

    keys.foo.bar.doStuff === true;
    keys.foo.baz.doStuff === true;
}
