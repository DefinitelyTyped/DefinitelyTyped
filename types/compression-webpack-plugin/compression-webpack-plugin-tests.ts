import { Configuration } from 'webpack';
import CompressionPlugin = require('compression-webpack-plugin');

new CompressionPlugin();

const config: Configuration = {
    plugins: [
        new CompressionPlugin({
            filename: "[path].gz[query]",
            algorithm: "gzip",
            cache: true,
            test: /\.js$|\.html$/,
            threshold: 10240,
            minRatio: 0.8
        })
    ]
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
                level: 7
            }
        })
    ]
};

const badZlib: Configuration = {
    plugins: [
        // $ExpectError
        new CompressionPlugin({
            algorithm: "deflate",
            compressionOptions: 5
        })
    ]
};

function customAlgorithm(input: string, options: number, callback: (err: Error, result: Buffer) => void) {
}

const custom: Configuration = {
    plugins: [
        new CompressionPlugin({
            algorithm: customAlgorithm,
            compressionOptions: 5
        })
    ]
};

const badCustom: Configuration = {
    plugins: [
        // $ExpectError
        new CompressionPlugin({
            algorithm: customAlgorithm,
            compressionOptions: { flush: 5 }
        })
    ]
};
