import LoadablePlugin from "@loadable/webpack-plugin";
import { Configuration } from "webpack";

let config: Configuration;

// With no argument.
config = {
    plugins: [new LoadablePlugin()],
};

// With no required properties.
config = {
    plugins: [new LoadablePlugin({})],
};

// With optional properties.
config = {
    plugins: [
        new LoadablePlugin({
            filename: "stats.json",
            writeToDisk: true,
            outputAsset: false,
        }),
    ],
};

// arg.writeToDisk can be an object.
config = {
    plugins: [
        new LoadablePlugin({
            writeToDisk: {
                filename: "stats.json",
            },
        }),
    ],
};
