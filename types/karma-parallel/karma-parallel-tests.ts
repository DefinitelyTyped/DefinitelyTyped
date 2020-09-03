import karma = require('karma');

const configTest = (config: karma.Config) => {
    config.set({
        // NOTE: 'parallel' must be the first framework in the list
        frameworks: ['parallel', 'mocha' /* or 'jasmine' */],
        files: ['test/**/*.js'],
        plugins: [
            // add karma-parallel to the plugins if you encounter something like "karma parallel No provider for framework:parallel"
            require('karma-parallel'),
        ],
        parallelOptions: {
            executors: 4, // Defaults to cpu-count - 1
            shardStrategy: 'round-robin',
            customShardStrategy: config => {
                config.executors; // $ExpectType number
                config.shardIndex; // $ExpectType number
                config.description; // $ExpectType string
                window.parallelDescribeCount = window.parallelDescribeCount || 0;
                window.parallelDescribeCount++;
                return window.parallelDescribeCount % config.executors === config.shardIndex;
            },
            aggregatedReporterTest: /coverage|istanbul|junit/i,
        },
    });
};

// required by window prop definition
declare global {
    interface Window {
        parallelDescribeCount?: number;
    }
}
