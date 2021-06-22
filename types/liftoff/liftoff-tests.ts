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

new Liftoff().launch(
    {
        cwd: '',
        configPath: '',
        require: '',
        completion: '',
    },
    env => {
        // $ExpectType LiftoffEnv
        env;

        // $ExpectType string
        env.cwd;
        // $ExpectType string[]
        env.require;
        // $ExpectType string[]
        env.configNameSearch;
        // $ExpectType string | undefined
        env.configPath;
        // $ExpectType string | undefined
        env.configBase;
        // $ExpectType string | undefined
        env.modulePath;
        // $ExpectType { [key: string]: any; } | undefined
        env.modulePackage;
        // $ExpectType { [extensions: string]: { [path: string]: string | null; }; } | undefined
        env.configFiles;
    }
);
new Liftoff().launch({ cwd: '' }, () => {});
new Liftoff().launch({ configPath: '' }, () => {});
new Liftoff().launch({ require: '' }, () => {});
new Liftoff().launch({ forcedFlags: ['--trace-deprecation'] }, () => {});
new Liftoff().launch({ forcedFlags: '--trace-deprecation' }, () => {});
new Liftoff().launch(
    {
        forcedFlags: env => {
            // $ExpectType LiftoffEnv
            env;
            return ['--trace-deprecation'];
        },
    },
    () => {}
);
new Liftoff().launch(
    {
        forcedFlags: env => {
            return '--trace-deprecation';
        },
    },
    () => {}
);
new Liftoff().launch({ completion: '' }, () => {});

new Liftoff().on('require', (name, module) => {
    // $ExpectType string
    name;
    // $ExpectType ExtensionDescriptor
    module;
});
new Liftoff().on('requireFail', (name, err) => {
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
