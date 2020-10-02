import readJsonSync = require("read-json-sync");

readJsonSync("file.json", "utf8");
readJsonSync(1, { encoding: "utf8" });
