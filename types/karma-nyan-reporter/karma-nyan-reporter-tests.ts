import karma = require('karma');

module.exports = (config: karma.Config) => {
    config.set({
        reporters: ['nyan'],
        nyanReporter: {
            suppressErrorReport: true,
            suppressErrorHighlighting: true,
            numberOfRainbowLines: 100,
            renderOnRunCompleteOnly: true,
        },
    });
};
