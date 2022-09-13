import * as path from 'path';
import LicenseCheckerWebpackPlugin = require('license-checker-webpack-plugin');

// $ExpectType LicenseCheckerWebpackPlugin
new LicenseCheckerWebpackPlugin({
    allow: '(Apache-2.0 OR BSD-2-Clause OR BSD-3-Clause OR MIT)',
    ignore: ['@microsoft/*'],
    override: {
        'assignment@2.0.0': { licenseName: 'MIT' },
        'intersection-observer@0.5.0': { licenseName: 'MIT' },
        'querystring-es3@0.2.1': { licenseName: 'MIT' },
    },
    emitError: true,
    outputWriter: path.resolve(__dirname, 'customTemplate.ejs'),
    outputFilename: 'ThirdPartyNotices.txt',
});

// $ExpectType LicenseCheckerWebpackPlugin
new LicenseCheckerWebpackPlugin({
    filter: /.*/,
    outputWriter: ({ dependencies }) => {
        dependencies; // $ExpectType Dependency[]
        return dependencies.map(d => `${d.name} - v${d.version} - ${d.author}\n${d.licenseName}`).join('\n');
    },
});

// $ExpectType LicenseCheckerWebpackPlugin
new LicenseCheckerWebpackPlugin();
