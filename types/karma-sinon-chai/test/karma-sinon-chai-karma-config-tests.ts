import karma = require("karma");

// Ref: https://github.com/kmees/karma-sinon-chai#installation
export default function(config: karma.Config): void {
    config.set({
        frameworks: ["mocha", "sinon-chai"],

        // chai config
        client: {
            chai: {
                includeStack: true,
            },
        },
    });
}
