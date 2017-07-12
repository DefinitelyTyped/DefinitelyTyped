import * as Webpack from "webpack";
import FailPlugin = require("webpack-fail-plugin");

const config: Webpack.Configuration = {
    plugins: [
        FailPlugin
    ]
}
