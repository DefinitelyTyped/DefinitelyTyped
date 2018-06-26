import cosmiconfig = require("cosmiconfig");
import { CosmiconfigResult } from "cosmiconfig";
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

const result = explorer.searchSync();
if (result) {
  const config = result.config;
  const filepath = result.filepath;
  const isEmpty = result.isEmpty;
}

explorer.clearLoadCache();
explorer.clearSearchCache();
explorer.clearCaches();
