import Liftoff = require('liftoff');
import v8flags = require('v8flags');

new Liftoff({
    name: 'hacker',
    processTitle: 'hacker',
    moduleName: 'hacker',
    configName: 'hackerfile',
    extensions: {
        '.js': null,
        '.json': null,
        '.coffee': 'coffee-script/register',
    },
    v8flags: ['--harmony'],
});
new Liftoff({
    name: 'hacker',
    processTitle: 'hacker',
    moduleName: 'hacker',
    configName: 'hackerfile',
    extensions: {
        '.js': null,
        '.json': null,
        '.coffee': 'coffee-script/register',
    },
    v8flags,
});
new Liftoff({ name: 'hacker' });
new Liftoff({
    name: 'myapp',
    extensions: {
        '.js': null,
        '.json': null,
        '.coffee': 'coffee-script/register',
    },
});
new Liftoff({
    name: 'myapp',
    configName: '.myapp',
    extensions: {
        rc: null,
    },
});
new Liftoff({
    name: 'myapp',
    extensions: require('interpret').jsVariants,
});
new Liftoff({
    v8flags: ['--trace-deprecation'],
});
new Liftoff({
    v8flags(cb) {
        cb(null, ['--trace-deprecation']);
    },
});
new Liftoff({
    name: 'hacker',
    configFiles: {
        '.hacker': {
            cwd: '.',
        },
    },
});
new Liftoff({
    name: 'hacker',
    configFiles: {
        '.hacker': {
            home: {
                path: '~',
                extensions: {
                    rc: null,
                },
            },
        },
    },
});
new Liftoff({
    name: 'hacker',
    configFiles: {
        '.hacker': {
            up: {
                path: '.',
                findUp: true,
            },
        },
    },
});
new Liftoff({
    name: 'hacker',
    configFiles: {
        hacker: {
            override: {
                path: '.',
                name: '.override',
            },
        },
    },
});
new Liftoff({
    name: 'hacker',
    configFiles: {
        '.hacker': {
            home: {
                path: '.',
                cwd: '~',
            },
        },
    },
});

const Hacker = new Liftoff({
    name: 'hacker',
    processTitle: 'hacker',
    moduleName: 'hacker',
    configName: 'hackerfile',
    extensions: {
        '.js': null,
        '.json': null,
        '.coffee': 'coffee-script/register',
    },
    v8flags: ['--harmony'], // or v8flags: require('v8flags')
});

Hacker.prepare({}, (env) => {
    Hacker.execute(env, (env) => {
        // Do post-execute things
    });
});

new Liftoff().on('preload:before', (name, module) => {
    // $ExpectType string
    name;
    // $ExpectType any
    module;
});
new Liftoff().on('preload:failure', (name, err) => {
    // $ExpectType string
    name;
    // $ExpectType any
    err;
});
new Liftoff().on('respawn', (flags, child) => {
    // $ExpectType string[]
    flags;
    // $ExpectType Process
    child;
});
