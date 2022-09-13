import WebpackCleanupPlugin = require('webpack-cleanup-plugin');

new WebpackCleanupPlugin({
    exclude: ["stats.json", "important.js", "folder/**/*"],
    preview: true,
    quiet: true
});
