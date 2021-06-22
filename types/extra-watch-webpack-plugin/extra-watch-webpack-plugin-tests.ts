import ExtraWatchWebpackPlugin = require("extra-watch-webpack-plugin");

new ExtraWatchWebpackPlugin();
new ExtraWatchWebpackPlugin({});
new ExtraWatchWebpackPlugin({ files: "string", dirs: "string" });
new ExtraWatchWebpackPlugin({ files: ["array"], dirs: ["array"] });
