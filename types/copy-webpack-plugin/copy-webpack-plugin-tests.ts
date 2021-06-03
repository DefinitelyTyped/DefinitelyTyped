import CopyPlugin = require("copy-webpack-plugin");

// check type exports
// tslint:disable-next-line:no-unused-variable
import { ObjectPattern, CopyPluginOptions, Options, StringPattern } from "copy-webpack-plugin";

import fs = require("fs");
import path = require("path");
import { Configuration } from "webpack";

const _: Configuration = {
    plugins: [
        // basic
        new CopyPlugin(),
        new CopyPlugin({
            patterns: [
                { from: "source", to: "dest" },
                { from: "other", to: "public" },
            ],
        }),
        // basic options
        new CopyPlugin({
            patterns: [
                { from: "source", to: "dest" },
                { from: "other", to: "public" },
            ],
            options: {
                concurrency: 100,
            },
        }),
        // sample
        new CopyPlugin({
            patterns: [
                "relative/path/to/file.ext",
                "relative/path/to/dir",
                path.resolve(__dirname, "src", "file.ext"),
                path.resolve(__dirname, "src", "dir"),
                "**/*",
                {
                    from: "**/*",
                },
                path.posix.join(path.resolve(__dirname, "src").replace(/\\/g, "/"), "*.txt"),
            ],
        }),
        // from
        new CopyPlugin({
            patterns: [
                "relative/path/to/file.ext",
                "relative/path/to/dir",
                path.resolve(__dirname, "src", "file.ext"),
                path.resolve(__dirname, "src", "dir"),
                "**/*",
                {
                    from: "**/*",
                },
                // If absolute path is a `glob` we replace backslashes with forward slashes, because only forward slashes can be used in the `glob`
                path.posix.join(path.resolve(__dirname, "src").replace(/\\/g, "/"), "*.txt"),
            ],
        }),
        new CopyPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, "file.txt"),
                },
            ],
        }),
        new CopyPlugin({
            patterns: [
                {
                    // If absolute path is a `glob` we replace backslashes with forward slashes,
                    // because only forward slashes can be used in the `glob`
                    from: path.posix.join(path.resolve(__dirname, "fixtures").replace(/\\/g, "/"), "*.txt"),
                },
            ],
        }),
        // filter
        new CopyPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, "file.txt"),
                    filter: resourcePath => {
                        const data = fs.readFileSync(resourcePath);
                        const content = data.toString();
                        if (content === "my-custom-content") {
                            return false;
                        }
                        return true;
                    },
                },
            ],
        }),
        // to
        new CopyPlugin({
            patterns: [
                {
                    from: "**/*",
                    to: "relative/path/to/dest/",
                },
                {
                    from: "**/*",
                    to: "/absolute/path/to/dest/",
                },
                {
                    from: "**/*",
                    to: "[path][name].[contenthash].[ext]",
                },
            ],
        }),
        new CopyPlugin({
            patterns: [
                {
                    from: "src/*.png",
                    to: ({ context, absoluteFilename }) => {
                        return "dest/newPath";
                    },
                },
            ],
        }),
        // context
        new CopyPlugin({
            patterns: [
                {
                    from: "src/*.txt",
                    to: "dest/",
                    context: "app/",
                },
            ],
        }),
        // globOptions
        new CopyPlugin({
            patterns: [
                {
                    from: "public/**/*",
                    globOptions: {
                        dot: true,
                        gitignore: true,
                        ignore: ["**/file.*", "**/ignored-directory/**"],
                    },
                },
            ],
        }),
        // toType
        new CopyPlugin({
            patterns: [
                {
                    from: "path/to/file.txt",
                    to: "directory/with/extension.ext",
                    toType: "dir",
                },
            ],
        }),
        new CopyPlugin({
            patterns: [
                {
                    from: "path/to/file.txt",
                    to: "file/without/extension",
                    toType: "file",
                },
            ],
        }),
        new CopyPlugin({
            patterns: [
                {
                    from: "src/",
                    to: "dest/[name].[hash].[ext]",
                    toType: "template",
                },
            ],
        }),
        // force
        new CopyPlugin({
            patterns: [
                {
                    from: "src/**/*",
                    to: "dest/",
                    force: true,
                },
            ],
        }),
        // flatten
        new CopyPlugin({
            patterns: [
                {
                    from: "src/**/*",
                    to({ context, absoluteFilename }) {
                        return "dest/newPath/[name][ext]";
                    },
                    force: true,
                },
            ],
        }),
        // transform
        new CopyPlugin({
            patterns: [
                {
                    from: "src/*.png",
                    to: "dest/",
                    transform(content, absoluteFrom) {
                        return Promise.resolve("optimized content");
                    },
                },
            ],
        }),
        new CopyPlugin({
            patterns: [
                {
                    from: "src/*.png",
                    to: "dest/",
                    transform(content, path) {
                        return Promise.resolve("optimized content");
                    },
                },
            ],
        }),
        // cacheTransform
        new CopyPlugin({
            patterns: [
                {
                    from: "src/*.png",
                    to: "dest/",
                    transform(content, path) {
                        return Promise.resolve("optimized content");
                    },
                },
            ],
        }),
        new CopyPlugin({
            patterns: [
                {
                    from: "src/*.png",
                    to: "dest/",
                    transform(content, path) {
                        return Promise.resolve("optimized content");
                    },
                },
            ],
        }),
        new CopyPlugin({
            patterns: [
                {
                    from: "src/*.png",
                    to: "dest/",
                    transform(content, path) {
                        return Promise.resolve("optimized content");
                    },
                },
            ],
        }),
        new CopyPlugin({
            patterns: [
                {
                    from: "src/*.png",
                    to: "dest/",
                    transform(content, path) {
                        return Promise.resolve("optimized content");
                    },
                },
            ],
        }),
        new CopyPlugin({
            patterns: [
                {
                    from: "src/*.png",
                    to: "dest/",
                    transform(content, path) {
                        return Promise.resolve("optimized content");
                    },
                },
            ],
        }),
        // transformPath
        new CopyPlugin({
            patterns: [
                {
                    from: "src/*.png",
                    to: "dest/",
                },
            ],
        }),
        // noErrorOnMissing
        new CopyPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, "missing-file.txt"),
                    noErrorOnMissing: true,
                },
            ],
        }),
        // concurrency
        new CopyPlugin({
            patterns: [
                {
                    from: "src/*.png",
                    to: "dest/",
                },
            ],
            options: { concurrency: 50 },
        }),
        // info
        new CopyPlugin({
            patterns: [
                "relative/path/to/file.ext",
                {
                    from: "**/*",
                    // Terser skip this file for minimization
                    info: { minimized: true },
                },
            ],
        }),
        new CopyPlugin({
            patterns: [
                "relative/path/to/file.ext",
                {
                    from: "**/*",
                    // Terser skip this file for minimization
                    info: file => ({ minimized: true }),
                    priority: 2,
                },
            ],
        }),
        new CopyPlugin({
            patterns: [
                "relative/path/to/file.ext",
                {
                    from: "**/*",
                    priority: 2,
                },
            ],
        }),
        new CopyPlugin({
            patterns: [
                {
                    from: "dir_1/file.txt",
                    to: "new_file.txt",
                    force: true,
                    priority: 10,
                },
                {
                    from: "dir_2/file.txt",
                    to: "new_file.txt",
                    priority: 5,
                },
            ],
        }),
    ],
};
