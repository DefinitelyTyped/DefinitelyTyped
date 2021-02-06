import { Config } from 'karma';

module.exports = (config: Config) => {
    config.set({
        plugins: ['karma-notify-reporter'],

        reporters: ['notify'],

        notifyReporter: {
            reportEachFailure: true,
            reportSuccess: false,
            reportBackToSuccess: false,
        },
    });
};
