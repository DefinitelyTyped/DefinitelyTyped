import * as path from "path";
import Config = require("@npmcli/config");

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
