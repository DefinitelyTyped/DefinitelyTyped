import karma = require('karma');

module.exports = (config: karma.Config) => {
    config.set({
        frameworks: ['jasmine', 'jasmine-spec-tags'],

        client: {
            tagPrefix: '@',
            tags: 'smoke',
            skipTags: 'slow',
        },
    });
};

module.exports = (config: karma.Config) => {
    config.set({
        frameworks: ['jasmine', 'jasmine-spec-tags'],

        client: {
            tags: ['smoke'],
            skipTags: ['slow'],
        },
    });
};

module.exports = (config: karma.Config) => {
    config.set({
        frameworks: ['jasmine', 'jasmine-spec-tags'],

        client: {
            tags: false,
            skipTags: true,
        },
    });
};
