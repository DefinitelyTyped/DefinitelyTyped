import BrowserSyncPlugin = require('browser-sync-webpack-plugin');

new BrowserSyncPlugin({
    proxy: 'localhost:8080',
    open: false,
    reloadDebounce: 2000,
    notify: false,
});
