import karma = require("karma");

module.exports = (config: karma.Config) => {
    config.set({
        files: [{ pattern: "test/**/*.spec.js", watched: false }],
        preprocessors: {
            "test/**/*.spec.js": ["rollup"],
        },

        // $ExpectType { output: { format: "iife"; name: string; sourcemap: "inline"; }; }
        rollupPreprocessor: {
            // plugins: [require('rollup-plugin-buble')()],
            output: {
                format: "iife",
                name: "<your_project>",
                sourcemap: "inline",
            },
        },
    });
};
