import * as path from "path";
import Config = require("@npmcli/config");
import definitionsModule = require("@npmcli/config/lib/definitions");
import nerfDart = require("@npmcli/config/lib/nerf-dart");

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

conf.loadBuiltinConfig(); // $ExpectType Promise<void>
conf.loadProjectConfig(); // $ExpectType Promise<void>
conf.loadUserConfig(); // $ExpectType Promise<void>
conf.loadGlobalConfig(); // $ExpectType Promise<void>

conf.setCredentialsByURI("https://registry.npmjs.org/", { token: "sekret" }); // $ExpectType void
conf.clearCredentialsByURI("https://registry.npmjs.org/"); // $ExpectType void
conf.clearCredentialsByURI("https://registry.npmjs.org/", "user"); // $ExpectType void
conf.getCredentialsByURI("https://registry.npmjs.org/"); // $ExpectType Credentials

definitionsModule.defaults; // $ExpectType Record<string, any>
definitionsModule.definitions; // $ExpectType DefinitionsObject
definitionsModule.flatten({ "save-dev": true }); // $ExpectType Record<string, any>
definitionsModule.nerfDarts; // $ExpectType string[]
definitionsModule.proxyEnv; // $ExpectType string[]
definitionsModule.shorthands; // $ExpectType ShortFlags

nerfDart("https://registry.npmjs.org/"); // $ExpectType string

const confFromDefinitions = new Config({
    npmPath: path.resolve(__dirname, ".."),
    definitions: definitionsModule.definitions,
    shorthands: definitionsModule.shorthands,
    flatten: definitionsModule.flatten,
});

confFromDefinitions.load(); // $ExpectType Promise<void>
