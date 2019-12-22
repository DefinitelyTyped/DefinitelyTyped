import RemovePlugin = require("remove-files-webpack-plugin");

new RemovePlugin({
    before: {
        root: ".",
        include: [
            "./test"
        ],
        exclude: [
            "./test/test.txt"
        ],
        trash: false,
        log: false,
        emulate: true,
        allowRootAndOutside: true
    },
    after: {
        test: [
            {
                folder: "./",
                method: (filePath) => {
                    return filePath.includes('.map');
                }
            },
            {
                folder: "./test",
                method: (filePath) => {
                    return filePath.includes('.map');
                },
                recursive: true
            }
        ],
        logWarning: true,
        logError: true,
        logDebug: true
    }
});
