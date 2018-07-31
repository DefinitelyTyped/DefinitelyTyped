import rc = require("rc")

let confA = rc("appname1", {
    port: 2468,
    views: {
        engine: "jade"
    }
});

////////////////////

let appCfg = rc("appname2", {}, null, function parse(s) {
    return JSON.parse(s.toLowerCase());
});

appCfg.configs[0];
appCfg.configs[1];
appCfg.config;

////////////////////

let customArgv = rc("appname3", {
    option: true
},
{
    option: false,
    envOption: 24,
    argv: {
        remain: [],
        cooked: ['--no-option', '--envOption', '24'],
        original: ['--no-option', '--envOption=24']
    }
});
