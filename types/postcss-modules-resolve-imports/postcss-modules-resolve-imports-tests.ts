/// <reference types="node" />

import path = require("path");
import resolveImports = require("postcss-modules-resolve-imports");
import { Transformer } from "postcss";

const ap1: Transformer = resolveImports();

const ap2: Transformer = resolveImports({
    icssExports: false,
    resolve: {
        alias: {
            lib: path.resolve(__dirname, "lib"),
        },
        extensions: [".css"],
        modules: [path.resolve(__dirname, "lib")],
        mainFile: "index.css",
        preserveSymlinks: false
    }
});
