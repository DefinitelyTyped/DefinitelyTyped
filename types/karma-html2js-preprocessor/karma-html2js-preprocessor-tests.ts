import karma = require("karma");

// Mocha reporter options tests
const mochaReporter: karma.HTML2JSPreprocessorOptions = {
    stripPrefix: "strip",
    prependPrefix: "prepend",
    processPath: (filePath) => filePath,
};

module.exports = (config: karma.Config) => {
    config.set({
        preprocessors: {
            "**/*.json": ["json"],
        },
        files: ["**/*.js", "**/*.json"],
        html2JsPreprocessor: {
            stripPrefix: "strip",
            prependPrefix: "$json",
            processPath: (filePath) => filePath,
        },
    });
};

window.__html__["fixture"];
