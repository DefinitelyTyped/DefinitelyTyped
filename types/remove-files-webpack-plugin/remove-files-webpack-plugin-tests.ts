import RemovePlugin = require("remove-files-webpack-plugin");


new RemovePlugin({
    before: {
        root: ".",
        include: ["./path/to/file/include.ts"],
        exclude: ["./path/to/file/exclude.ts"],
        test: [
            {
                folder: "./path/to/folder",
                method: (filePath) => {
                    return filePath.length > 15;
                },
                recursive: true
            }
        ]
    },
    after: {
        log: false,
        emulate: false,
        allowRootAndOutside: true
    }
});
