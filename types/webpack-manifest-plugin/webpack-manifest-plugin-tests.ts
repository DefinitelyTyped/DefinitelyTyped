import { Configuration } from "webpack";
import path = require("path");
import { Options, WebpackManifestPlugin } from "webpack-manifest-plugin";

const options: Options = {
    basePath: "/src/",
    fileName: "manifest.json",
    filter: file => file.isInitial,
    generate: (seed, files, entries) =>
        files.reduce((manifest, { name, path }) => (name ? { ...manifest, [name]: path } : manifest), seed),
    map: file => {
        if (file.name) {
            file.name = path.join(path.dirname(file.path), file.name);
        }
        return file;
    },
    publicPath: "prod",
    removeKeyHash: /[a-Z0-9]/g,
    seed: {
        name: "Hello world",
    },
    serialize: manifest => JSON.stringify(manifest, null, 2),
    sort: (a, b) => a.path.localeCompare(b.path),
    useEntryKeys: true,
    writeToFileEmit: false,
};

const c: Configuration = {
    plugins: [
        new WebpackManifestPlugin(),
        new WebpackManifestPlugin({
            basePath: "/app/",
            fileName: "my-manifest.json",
            seed: {
                name: "My Manifest",
            },
        }),
    ],
};
