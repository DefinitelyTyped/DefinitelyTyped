import { Configuration } from 'webpack';
import CompressionPlugin = require('compression-webpack-plugin');

new CompressionPlugin();

new CompressionPlugin({
    include: ["a"],
    exclude: [/a/g],
    test: "a",
});

const config: Configuration = {
    plugins: [
        new CompressionPlugin({
            algorithm: "gzip",
            cache: true,
            filename: "[path].gz[query]",
            minRatio: 0.8,
            test: /\.js$|\.html$/,
            threshold: 10240,
            deleteOriginalAssets: true,
        }),
        new CompressionPlugin({
            filename: pathData => {
                pathData.file; // $ExpectType string
                pathData.path; // $ExpectType string
                pathData.query; // $ExpectType string
                return `${pathData.path}.gz${pathData.query}`;
            },
            deleteOriginalAssets: 'keep-source-map',
        }),
    ],
};

const configDefaultAlgo = new CompressionPlugin({
    compressionOptions: { level: 7 }
});

// $ExpectError
new CompressionPlugin({ asset: "[path].gz[query]" });

const zlib: Configuration = {
    plugins: [
        new CompressionPlugin({
            algorithm: "deflate",
            compressionOptions: {
                flush: 5,
                windowBits: 20,
                level: 7,
            },
        }),
    ],
};

const badZlib: Configuration = {
    plugins: [
        // $ExpectError
        new CompressionPlugin({ algorithm: "deflate", compressionOptions: 5 })
    ]
};

const custom: Configuration = {
    plugins: [
        new CompressionPlugin({
            algorithm: (input: string, options: number, callback: (err: Error, result: Buffer) => void) => {},
            compressionOptions: 5
        }),
        new CompressionPlugin({
            algorithm: (input: string, options: number, callback: (err: Error, result: Uint8Array) => void) => {},
            compressionOptions: 5
        })
    ]
};

const badCustom: Configuration = {
    plugins: [
        // $ExpectError
        new CompressionPlugin({ algorithm: customAlgorithm, compressionOptions: { flush: 5 } })
    ]
};
