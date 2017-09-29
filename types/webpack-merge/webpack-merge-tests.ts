import merge = require("webpack-merge");
import { Configuration } from "webpack";

const a: Configuration = {
    entry: "test.js"
}
const b: Configuration = {
    devtool: "source-map"
}

const c = merge(a, b);
const d = merge.smart(a, b);
