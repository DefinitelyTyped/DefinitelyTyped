import meow = require('meow');

const cli = meow('Help text', {
    flags: {
        unicorn: {
            type: 'boolean',
            alias: 'u'
        },
        fooBar: {
            type: 'string',
            default: 'foo'
        }
    }
});

const input: string = cli.input[0];
const version: string = cli.pkg.version;

const cli2 = meow('Help text');

const args: ReadonlyArray<string> = ['foo', 'bar'];

const cli3 = meow({
    description: 'version string',
    help: 'help string',
    version: '1.0.0',
    pkg: {},
    argv: args,
    inferType: true,
    autoHelp: true,
    autoVersion: true,
    flags: {
        unicorn: {
            type: 'boolean',
            alias: 'u'
        },
        fooBar: {
            type: 'string',
            default: 'foo'
        }
    }
});
