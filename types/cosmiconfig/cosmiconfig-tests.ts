import cosmiconfig = require("cosmiconfig");

const explorer = cosmiconfig("yourModuleName", {
    packageProp: "yourModuleName",
    rc: ".yourModuleNamerc",
    js: "yourModuleName.config.js",
    rcStrictJson: false,
    rcExtensions: false,
    stopDir: "someDir",
    cache: true,
    sync: false,
    transform: ({ config, filePath }) => ({ config, filePath }),
    format: "js"
});

Promise.all([
    explorer.load(),
    explorer.load("start/search/here"),
    explorer.load(null, "load/this/file.json")
]).then(result => result);

explorer.load().then(({ config, filePath }) => ({ config, filePath }));

explorer.clearFileCache();
explorer.clearDirectoryCache();
explorer.clearCaches();
