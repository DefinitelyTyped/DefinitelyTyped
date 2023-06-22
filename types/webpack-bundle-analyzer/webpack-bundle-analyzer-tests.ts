import * as webpack from 'webpack';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';

const config: webpack.Configuration = {
    plugins: [
        new BundleAnalyzerPlugin(),
        new BundleAnalyzerPlugin({
            analyzerMode: 'static',
        }),
        new BundleAnalyzerPlugin({
            analyzerMode: 'json',
            analyzerPort: 'auto',
            reportTitle: () => 'title',
        }),
        new BundleAnalyzerPlugin({
            analyzerMode: 'server',
            analyzerHost: '127.0.0.1',
            analyzerPort: 8888,
            analyzerUrl: (options) => {
                const {listenHost, boundAddress} = options;
                return `http://${listenHost}:${boundAddress.port}`;
            },
            reportFilename: 'report.html',
            reportTitle: 'title',
            defaultSizes: 'parsed',
            openAnalyzer: true,
            generateStatsFile: true,
            statsFilename: 'stats.json',
            statsOptions: {
                source: false,
            },
            excludeAssets: ['foo', /foo/, assetName => assetName.indexOf('foo') !== -1],
            logLevel: 'info',
        }),
        new BundleAnalyzerPlugin({
            analyzerMode: 'static',
            statsOptions: {
                ids: true
            }
        }),
    ],
};

// from https://github.com/webpack-contrib/webpack-bundle-analyzer/blob/ee6c7a942/test/stats/extremely-optimized-webpack-5-bundle/expected-chart-data.js
const report: BundleAnalyzerPlugin.JsonReport = [
    {
        label: 'bundle.js',
        isAsset: true,
        statSize: 142,
        parsedSize: 58,
        gzipSize: 71,
        groups: [
            {
                label: 'src',
                path: './src',
                statSize: 142,
                groups: [
                    {
                        id: 602,
                        label: 'index.js + 2 modules (concatenated)',
                        path: './src/index.js + 2 modules (concatenated)',
                        statSize: 142,
                        parsedSize: 58,
                        gzipSize: 71,
                        concatenated: true,
                        groups: [
                            {
                                label: 'src',
                                path: './src/index.js + 2 modules (concatenated)/src',
                                statSize: 142,
                                groups: [
                                    {
                                        id: null,
                                        label: 'index.js',
                                        path: './src/index.js + 2 modules (concatenated)/src/index.js',
                                        statSize: 62,
                                        parsedSize: 25,
                                        gzipSize: 30,
                                        inaccurateSizes: true,
                                    },
                                    {
                                        id: null,
                                        label: 'a.js',
                                        path: './src/index.js + 2 modules (concatenated)/src/a.js',
                                        statSize: 40,
                                        parsedSize: 16,
                                        gzipSize: 20,
                                        inaccurateSizes: true,
                                    },
                                    {
                                        id: null,
                                        label: 'b.js',
                                        path: './src/index.js + 2 modules (concatenated)/src/b.js',
                                        statSize: 40,
                                        parsedSize: 16,
                                        gzipSize: 20,
                                        inaccurateSizes: true,
                                    },
                                ],
                                parsedSize: 58,
                                gzipSize: 71,
                                inaccurateSizes: true,
                            },
                        ],
                    },
                ],
                parsedSize: 58,
                gzipSize: 71,
            },
        ],
    },
];

const plugin = new BundleAnalyzerPlugin();

plugin.apply;
plugin.server;
plugin.startAnalyzerServer;
plugin.generateJSONReport;
plugin.generateStatsFile;
plugin.generateStaticReport;
plugin.getBundleDirFromCompiler;
