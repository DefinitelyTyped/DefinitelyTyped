import LoadablePlugin from '@loadable/webpack-plugin';

// No options
new LoadablePlugin();

// With options
new LoadablePlugin({
    filename: './loadable-stats.json',
    writeToDisk: false
});
