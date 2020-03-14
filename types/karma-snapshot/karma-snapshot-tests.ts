// karma.conf.js
import karma = require('karma');
import path = require('path');

const resolver: karma.SnapshotPathResolver = (basePath, suiteName) => {
    return path.join(basePath, '__snapshots__', suiteName + '.md');
};

module.exports = (config: karma.Config) => {
    config.set({
        browsers: ['ChromeHeadless'],
        frameworks: ['mocha', 'snapshot', 'mocha-snapshot'],
        reporters: ['mocha'],
        preprocessors: {
            '**/__snapshots__/**/*.md': ['snapshot'],
        },
        files: ['**/__snapshots__/**/*.md', '__tests__/index.js'],
        snapshot: {
            update: true,
            prune: false,
            format: 'indented-md',
            checkSourceFile: true,
            pathResolver: resolver,
            limitUnusedSnapshotsInWarning: -1,
        },
    });
};
