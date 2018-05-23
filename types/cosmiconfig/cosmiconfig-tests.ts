import cosmiconfig, { CosmiconfigResult } from "cosmiconfig";
import * as path from "path";

const explorer = cosmiconfig("yourModuleName", {
  searchPlaces: [],
  loaders: {},
  packageProp: "yourModuleName",
  stopDir: "someDir",
  cache: true,
  transform: (result: CosmiconfigResult) => result,
  ignoreEmptySearchPlaces: false,
});

const explorer2 = cosmiconfig("yourModuleName");

Promise.all([
  explorer.search(),
  explorer.search(path.join(__dirname)),
  explorer.searchSync(),
  explorer.searchSync(path.join(__dirname)),
  explorer.load(path.join(__dirname, "sample-config.json")),
  explorer.loadSync(path.join(__dirname, "sample-config.json")),
]).then(result => result);

explorer.clearLoadCache();
explorer.clearSearchCache();
explorer.clearCaches();
