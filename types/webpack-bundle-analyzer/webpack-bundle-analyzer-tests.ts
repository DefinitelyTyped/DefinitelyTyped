import * as webpack from 'webpack';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';

const config: webpack.Configuration = {
    plugins: [
        new BundleAnalyzerPlugin(),
        new BundleAnalyzerPlugin({
            analyzerMode: 'static'
        }),
        new BundleAnalyzerPlugin({
            analyzerMode: 'server',
            analyzerHost: '127.0.0.1',
            analyzerPort: 8888,
            reportFilename: 'report.html',
            defaultSizes: 'parsed',
            openAnalyzer: true,
            generateStatsFile: true,
            statsFilename: 'stats.json',
            statsOptions: {
                source: false
            },
            excludeAssets: [
                'foo',
                /foo/,
                assetName => assetName.indexOf('foo') !== -1
            ],
            logLevel: 'info'
        })
    ]
};
