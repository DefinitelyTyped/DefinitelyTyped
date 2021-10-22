// Type definitions for generate-json-webpack-plugin 0.3
// Project: https://github.com/elliottsj/generate-json-webpack-plugin
// Definitions by: Ryan Clark <https://github.com/rynclark>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.7

import { Plugin } from 'webpack';

export = GenerateJsonWebpackPlugin;

declare class GenerateJsonWebpackPlugin extends Plugin {
    constructor(fileName: string, value: object, replacer?: ((key: string, value: any) => any) | null, space?: string | number | null);
}
