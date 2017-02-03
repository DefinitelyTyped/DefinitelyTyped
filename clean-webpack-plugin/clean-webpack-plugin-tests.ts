import * as CleanWebpackPlugin from 'clean-webpack-plugin';

// Simple use case
new CleanWebpackPlugin(['path']);
// Multiple paths
new CleanWebpackPlugin(['pathOne', 'pathTwo']);
// Option usage
new CleanWebpackPlugin(['pathOne', 'pathTwo'], {
    root: './root',
    verbose: true,
    dry: false,
    exclude: ['anotherPath'],
});
