import { Configuration } from "webpack";
import validate = require("webpack-validator");

const a: Configuration = {
    entry: "test"
}

const b = validate(a);
const c = validate(b, {
    "no-root-files-node-modules-nameclash": true
});
const d = validate(b, {
    "loader-enforce-include-or-exclude": false,
    "loader-prefer-include": true
});
