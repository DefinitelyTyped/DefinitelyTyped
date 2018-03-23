import cosmiconfig = require("cosmiconfig");

const asyncExplorer = cosmiconfig("yourModuleName", {
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
    asyncExplorer.load(),
    asyncExplorer.load("start/search/here"),
    asyncExplorer.load(null, "load/this/file.json")
]).then(result => result);

asyncExplorer.load().then(({ config, filePath }) => ({ config, filePath }));

asyncExplorer.clearFileCache();
asyncExplorer.clearDirectoryCache();
asyncExplorer.clearCaches();

const syncExplorer = cosmiconfig("yourModuleName", {
    packageProp: "yourModuleName",
    rc: ".yourModuleNamerc",
    js: "yourModuleName.config.js",
    rcStrictJson: false,
    rcExtensions: false,
    stopDir: "someDir",
    cache: true,
    sync: true,
    transform: ({ config, filePath }) => ({ config, filePath }),
    format: "js"
});

const { config, filePath } = syncExplorer.load();
