import AssetsPlugin, { Assets, Options, ProcessOutputFn } from "assets-webpack-plugin";
import { Configuration } from "webpack";

const config: Configuration = {
    plugins: [
        new AssetsPlugin(),
        new AssetsPlugin({
            filename: "assets.json",
        }),
        new AssetsPlugin({
            entrypoints: true,
            filename: "assets.json",
            fullPath: false,
            fileTypes: ["css"],
            includeManifest: ["manifest"],
            includeAllFileTypes: false,
            includeAuxiliaryAssets: true,
            includeDynamicImportedAssets: true,
            includeFilesWithoutChunk: true,
            integrity: true,
            keepInMemory: true,
            manifestFirst: true,
            path: "/foo/bar",
            prettyPrint: true,
            processOutput: (assets) => (
                "window.assets = " + JSON.stringify(assets)
            ),
            removeFullPathAutoPrefix: true,
            update: true,
            useCompilerPath: true,
            metadata: {
                meta: "data",
            },
        }),
    ],
};
