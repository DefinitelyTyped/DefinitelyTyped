import * as path from "path";
import Config = require("@npmcli/config");
import definitionsModule = require("@npmcli/config/lib/definitions");

const conf = new Config({
    npmPath: path.resolve(__dirname, ".."),
    definitions: {
        str: { type: String },
        num: { type: Number },
    },
    shorthands: {
        help: ["--usage"],
    },
    flatten: (data, flattened) => {
        Object.assign(flattened, data);
    },
});

conf.load(); // $ExpectType Promise<void>

conf.get("str"); // $ExpectType string
conf.get("num"); // $ExpectType number

definitionsModule.defaults; // $ExpectType Record<string, any>
definitionsModule.definitions; // $ExpectType DefinitionsObject
definitionsModule.flatten({ "save-dev": true }); // $ExpectType Record<string, any>
definitionsModule.nerfDarts; // $ExpectType string[]
definitionsModule.proxyEnv; // $ExpectType string[]
definitionsModule.shorthands; // $ExpectType ShortFlags

const confFromDefinitions = new Config({
    npmPath: path.resolve(__dirname, ".."),
    definitions: definitionsModule.definitions,
    shorthands: definitionsModule.shorthands,
    flatten: definitionsModule.flatten,
});

confFromDefinitions.load(); // $ExpectType Promise<void>
