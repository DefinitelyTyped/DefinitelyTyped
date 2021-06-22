import AppCachePlugin = require('appcache-webpack-plugin');

// $ExpectType AppCachePlugin
new AppCachePlugin({
    cache: ['someOtherAsset.jpg'],
    network: null, // No network access allowed!
    fallback: ['failwhale.jpg'],
    settings: ['prefer-online'],
    exclude: ['file.txt', /.*\.js$/], // Exclude file.txt and all .js files
    output: 'my-manifest.appcache',
    comment: '##NOCOMMENT##',
});
