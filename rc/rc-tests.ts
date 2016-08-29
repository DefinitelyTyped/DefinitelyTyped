import rc = require("rc")

let confA = rc("appname", {
    port: 2468,

    views: {
        engine: "jade"
    }
});

let appCfg = rc("appname", {}, null, function parse(s) {
    return JSON.parse(s.toLowerCase());
});
appCfg.configs[0];
appCfg.configs[1];
appCfg.config;