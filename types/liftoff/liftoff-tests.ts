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

Hacker.prepare({}, env => {
    env; // $ExpectType LiftoffEnv
    env.cwd; // $ExpectType string
    env.preload; // $ExpectType string[]
    env.configNameSearch; // $ExpectType string[]
    env.configPath; // $ExpectType string | undefined
    env.configBase; // $ExpectType string | undefined
    env.modulePath; // $ExpectType string | undefined
    env.modulePackage; // $ExpectType { [key: string]: any; }
    env.configFiles; // $ExpectType { [extensions: string]: { [path: string]: string | null; }; }
    env.config; // $ExpectType { [key: string]: any; }
    env.completion; // $ExpectType boolean | undefined

    Hacker.execute(env, function(env, argv) {
        this; // $ExpectType Liftoff
        env; // $ExpectType LiftoffEnv
        argv; // $ExpectType string[]
    });
    Hacker.execute(env, ['--foo'], function(env, argv) {
        this; // $ExpectType Liftoff
        env; // $ExpectType LiftoffEnv
        argv; // $ExpectType string[]
    });
});

const liftoff = new Liftoff();

liftoff.addListener('preload:before', name => {
    name; // $ExpectType string
});
liftoff.addListener('preload:success', (name, module) => {
    name; // $ExpectType string
    module; // $ExpectType unknown
});
liftoff.addListener('preload:failure', (name, err) => {
    name; // $ExpectType string
    err; // $ExpectType Error
});
liftoff.addListener('loader:success', (name, module) => {
    name; // $ExpectType string
    module; // $ExpectType unknown
});
liftoff.addListener('loader:failure', (name, err) => {
    name; // $ExpectType string
    err; // $ExpectType Error
});
liftoff.addListener('respawn', (flags, child) => {
    flags; // $ExpectType string[]
    child; // $ExpectType Process
});
liftoff.addListener('foo', (...args) => {
    args; // $ExpectType any[]
});

liftoff.on('preload:before', name => {
    name; // $ExpectType string
});
liftoff.on('preload:success', (name, module) => {
    name; // $ExpectType string
    module; // $ExpectType unknown
});
liftoff.on('preload:failure', (name, err) => {
    name; // $ExpectType string
    err; // $ExpectType Error
});
liftoff.on('loader:success', (name, module) => {
    name; // $ExpectType string
    module; // $ExpectType unknown
});
liftoff.on('loader:failure', (name, err) => {
    name; // $ExpectType string
    err; // $ExpectType Error
});
liftoff.on('respawn', (flags, child) => {
    flags; // $ExpectType string[]
    child; // $ExpectType Process
});
liftoff.on('foo', (...args) => {
    args; // $ExpectType any[]
});

liftoff.once('preload:before', name => {
    name; // $ExpectType string
});
liftoff.once('preload:success', (name, module) => {
    name; // $ExpectType string
    module; // $ExpectType unknown
});
liftoff.once('preload:failure', (name, err) => {
    name; // $ExpectType string
    err; // $ExpectType Error
});
liftoff.once('loader:success', (name, module) => {
    name; // $ExpectType string
    module; // $ExpectType unknown
});
liftoff.once('loader:failure', (name, err) => {
    name; // $ExpectType string
    err; // $ExpectType Error
});
liftoff.once('respawn', (flags, child) => {
    flags; // $ExpectType string[]
    child; // $ExpectType Process
});
liftoff.once('foo', (...args) => {
    args; // $ExpectType any[]
});

liftoff.prependListener('preload:before', name => {
    name; // $ExpectType string
});
liftoff.prependListener('preload:success', (name, module) => {
    name; // $ExpectType string
    module; // $ExpectType unknown
});
liftoff.prependListener('preload:failure', (name, err) => {
    name; // $ExpectType string
    err; // $ExpectType Error
});
liftoff.prependListener('loader:success', (name, module) => {
    name; // $ExpectType string
    module; // $ExpectType unknown
});
liftoff.prependListener('loader:failure', (name, err) => {
    name; // $ExpectType string
    err; // $ExpectType Error
});
liftoff.prependListener('respawn', (flags, child) => {
    flags; // $ExpectType string[]
    child; // $ExpectType Process
});
liftoff.prependListener('foo', (...args) => {
    args; // $ExpectType any[]
});

liftoff.prependOnceListener('preload:before', name => {
    name; // $ExpectType string
});
liftoff.prependOnceListener('preload:success', (name, module) => {
    name; // $ExpectType string
    module; // $ExpectType unknown
});
liftoff.prependOnceListener('preload:failure', (name, err) => {
    name; // $ExpectType string
    err; // $ExpectType Error
});
liftoff.prependOnceListener('loader:success', (name, module) => {
    name; // $ExpectType string
    module; // $ExpectType unknown
});
liftoff.prependOnceListener('loader:failure', (name, err) => {
    name; // $ExpectType string
    err; // $ExpectType Error
});
liftoff.prependOnceListener('respawn', (flags, child) => {
    flags; // $ExpectType string[]
    child; // $ExpectType Process
});
liftoff.prependOnceListener('foo', (...args) => {
    args; // $ExpectType any[]
});

liftoff.removeListener('preload:before', name => {
    name; // $ExpectType string
});
liftoff.removeListener('preload:success', (name, module) => {
    name; // $ExpectType string
    module; // $ExpectType unknown
});
liftoff.removeListener('preload:failure', (name, err) => {
    name; // $ExpectType string
    err; // $ExpectType Error
});
liftoff.removeListener('loader:success', (name, module) => {
    name; // $ExpectType string
    module; // $ExpectType unknown
});
liftoff.removeListener('loader:failure', (name, err) => {
    name; // $ExpectType string
    err; // $ExpectType Error
});
liftoff.removeListener('respawn', (flags, child) => {
    flags; // $ExpectType string[]
    child; // $ExpectType Process
});
liftoff.removeListener('foo', (...args) => {
    args; // $ExpectType any[]
});

liftoff.off('preload:before', name => {
    name; // $ExpectType string
});
liftoff.off('preload:success', (name, module) => {
    name; // $ExpectType string
    module; // $ExpectType unknown
});
liftoff.off('preload:failure', (name, err) => {
    name; // $ExpectType string
    err; // $ExpectType Error
});
liftoff.off('loader:success', (name, module) => {
    name; // $ExpectType string
    module; // $ExpectType unknown
});
liftoff.off('loader:failure', (name, err) => {
    name; // $ExpectType string
    err; // $ExpectType Error
});
liftoff.off('respawn', (flags, child) => {
    flags; // $ExpectType string[]
    child; // $ExpectType Process
});
liftoff.off('foo', (...args) => {
    args; // $ExpectType any[]
});

liftoff.listeners('preload:before'); // $ExpectType ((name: string) => void)[]
liftoff.listeners('preload:success'); // $ExpectType ((name: string, module: unknown) => void)[]
liftoff.listeners('preload:failure'); // $ExpectType ((name: string, err: Error) => void)[]
liftoff.listeners('loader:success'); // $ExpectType ((name: string, module: unknown) => void)[]
liftoff.listeners('loader:failure'); // $ExpectType ((name: string, err: Error) => void)[]
liftoff.listeners('respawn'); // $ExpectType ((flags: string[], child: Process) => void)[]
liftoff.listeners('foo'); // $ExpectType ((...args: any[]) => void)[]

liftoff.rawListeners('preload:before'); // $ExpectType ((name: string) => void)[]
liftoff.rawListeners('preload:success'); // $ExpectType ((name: string, module: unknown) => void)[]
liftoff.rawListeners('preload:failure'); // $ExpectType ((name: string, err: Error) => void)[]
liftoff.rawListeners('loader:success'); // $ExpectType ((name: string, module: unknown) => void)[]
liftoff.rawListeners('loader:failure'); // $ExpectType ((name: string, err: Error) => void)[]
liftoff.rawListeners('respawn'); // $ExpectType ((flags: string[], child: Process) => void)[]
liftoff.rawListeners('foo'); // $ExpectType ((...args: any[]) => void)[]

liftoff.emit<'preload:before'>('preload:before', 'foo'); // $ExpectType boolean
liftoff.emit<'preload:success'>('preload:success', 'foo', 'bar'); // $ExpectType boolean
liftoff.emit<'preload:failure'>('preload:failure', 'foo', new Error('foo')); // $ExpectType boolean
liftoff.emit<'loader:success'>('loader:success', 'foo', 'bar'); // $ExpectType boolean
liftoff.emit<'loader:failure'>('loader:failure', 'foo', new Error('foo')); // $ExpectType boolean
liftoff.emit<'respawn'>('respawn', ['foo'], null as any as NodeJS.Process); // $ExpectType boolean
liftoff.emit('foo', 'bar'); // $ExpectType boolean
