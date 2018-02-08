import meow = require('meow');

const cli = meow("Help text",
    {
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
    }
);

const cli2 = meow("Help text");

const cli3 = meow({
    description: "version string",
    help: "help string",
    version: "1.0.0",
    pkg: {},
    argv: ['foo', 'bar'],
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
