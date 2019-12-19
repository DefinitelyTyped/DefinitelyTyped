import FaviconsWebpackPlugin = require('favicons-webpack-plugin');

new FaviconsWebpackPlugin();

new FaviconsWebpackPlugin('/path/to/logo.png');

const optionsArray: FaviconsWebpackPlugin.Options[] = [
    // Default parameters
    {
        logo: '/path/to/logo.png',
        cache: true,
        inject: true,
        favicons: {},
        prefix: 'assets/',
    },
    // "Advanced Usage" example from documentation
    {
        logo: '/path/to/logo.png',
        cache: true,
        publicPath: '/static',
        outputPath: '/public/static',
        prefix: 'assets/',
        inject: true,
        favicons: {},
    },
    // "Basic" example from documentation
    {
        logo: '/path/to/logo.png',
        mode: 'webapp',
        devMode: 'webapp',
        favicons: {
            appName: 'my-app',
            appDescription: 'My awesome App',
            developerName: 'Me',
            developerURL: null,
            background: '#ddd',
            theme_color: '#333',
            icons: {
                coast: false,
                yandex: false,
            },
        },
    },
    // "Handling Multiple HTML Files" example from documentation
    {
        logo: 'logo.svg',
        inject: htmlPlugin => htmlPlugin.options.filename === 'a.html',
    },
];

const plugins: FaviconsWebpackPlugin[] = optionsArray.map(options => new FaviconsWebpackPlugin(options));
