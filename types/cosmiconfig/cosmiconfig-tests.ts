import cosmiconfig = require("cosmiconfig");

const explorer = cosmiconfig("yourModuleName", {
    searchPlaces: [],
    loaders: {},
    packageProp: "yourModuleName",
    stopDir: "someDir",
    cache: true,
    transform: ({ config, filePath, isEmpty }) => ({ config, filePath, isEmpty }),
    ignoreEmptySearchPlaces: false
});

Promise.all([
    explorer.search("start/search/here"),
    explorer.searchSync("start/search/here"),
    explorer.load("load/this/file.json"),
    explorer.loadSync("load/this/file.json")
]).then(result => result);

explorer.clearLoadCache();
explorer.clearSearchCache();
explorer.clearCaches();
