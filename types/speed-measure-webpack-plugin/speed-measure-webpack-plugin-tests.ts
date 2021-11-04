import SpeedMeasurePlugin = require("speed-measure-webpack-plugin");
import { LoaderBuild, Options } from "speed-measure-webpack-plugin";
import UglifyJSPlugin = require("uglifyjs-webpack-plugin");
import HtmlWebpackPlugin = require("html-webpack-plugin");
import { Configuration } from "webpack";

const uglify = new UglifyJSPlugin();

new SpeedMeasurePlugin();

const names: {
    [name: string]: object;
} = {
    customUglifyName: uglify,
};

const loadersBuilds: LoaderBuild = {
    filePath: "./buildInfo.json",
};

const options: Options = {
    disable: true,
    granularLoaderData: true,
    pluginNames: names,
    loaderTopFiles: 10,
    compareLoadersBuild: loadersBuilds,
    outputFormat: "human",
    outputTarget: console.log,
};

const smp = new SpeedMeasurePlugin(options);
// $ExpectType Configuration
smp.wrap({
    plugins: [new HtmlWebpackPlugin()],
});

// basic

const basic: Configuration = {
    entry: {
        app: ["./app.js"],
    },
    output: {
        filename: "someLibName.js",
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: [{ loader: "babel-loader" }],
            },
        ],
    },
};
// $ExpectType Configuration
smp.wrap(basic);
