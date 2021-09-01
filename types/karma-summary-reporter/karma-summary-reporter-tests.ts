import karma = require('karma');

module.exports = (config: karma.Config) => {
    config.set({
        reporters: ['progress', 'summary'],
        summaryReporter: {
            show: 'failed',
            specLength: 50,
            overviewColumn: true,
            browserList: 'ifneeded',
        },
    });
};
