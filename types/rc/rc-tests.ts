import rc = require('rc');

// without any arg
// @ts-expect-error
rc();

// with appname arg only
rc('appname');

// with default values object
const confA = rc('appname', {
    port: 2468,
    views: {
        engine: 'jade',
    },
});

// with default config file
rc('appname', './default-config.json');

// with parsed argv
rc('appname', null, {
    option: false,
    envOption: 24,
    argv: {
        remain: [],
        cooked: ['--no-option', '--envOption', '24'],
        original: ['--no-option', '--envOption=24'],
    },
});

// with both default values AND parsed argv
rc(
    'appname',
    {
        option: true,
    },
    {
        option: false,
        envOption: 24,
        argv: {
            remain: [],
            cooked: ['--no-option', '--envOption', '24'],
            original: ['--no-option', '--envOption=24'],
        },
    }
);

// with parse function
rc('appname', null, null, content => JSON.parse(content.toLowerCase()));

// with defaults and parse but not argv
rc('appname', { option: true }, null, content => JSON.parse(content.toLowerCase()));

// call with interface
interface AppConfig {
    port: number;
    views: {
        engine: string,
    };
}
rc<AppConfig>('appname', {
    port: 1234,
    views: {
        engine: 'jade'
    }
});

// calling with type definition
rc<{
    port: number;
    views: {
        engine: string,
    };
}>('appname', {
    port: 1234,
    views: {
        engine: 'jade'
    }
});

// return type
const appCfg = rc('appname');
appCfg.configs; // $ExpectType string[] | undefined
if (appCfg.configs) {
    appCfg.configs[0]; // $ExpectType string
    appCfg.configs[1]; // $ExpectType string
///   actually, when configs is defined as string[], config have to be string
///       but I don't known how to write this in `index.d.ts`, sorry...
//    appCfg.config; // $ExpectType string
}
