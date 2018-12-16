import * as ZipPlugin from "zip-webpack-plugin";

new ZipPlugin();

const options: ZipPlugin.Options = {
    include: "include.string",
    exclude: "exclude.string",
};
new ZipPlugin(options);

new ZipPlugin({
    path: "path",
    filename: "filename",
    extension: "ext",
    pathPrefix: "prefix",
    pathMapper: (assetPath) => `pathMapper/${assetPath}`,
    include: ["include.string", /include\.regexp/],
    exclude: ["exclude.string", /exclude\.regexp/],
    fileOptions: {
        mtime: new Date(),
        mode: parseInt("0100664", 8),
        compress: false,
        forceZip64Format: true,
    },
    zipOptions: {
        forceZip64Format: true,
    }
});
