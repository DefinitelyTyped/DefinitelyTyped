// Type definitions for webpack-subresource-integrity 1.2
// Project: https://github.com/waysact/webpack-subresource-integrity
// Definitions by: Jeow Li Huan <https://github.com/huan086>
// Definitions: https://github.com/huan086/webpack-subresource-integrity-typings
// TypeScript Version: 3.7

import { Plugin } from 'webpack';

declare namespace WebpackSubresourceIntegrityPlugin {
    interface Options {
        /**
         * Default value: true
         * When this value is falsy, the plugin doesn't run and no integrity values are calculated. It is recommended to disable the plugin in development mode.
         */
        enabled?: boolean;

        /**
         * An array of strings, each specifying the name of a hash function to be used for calculating integrity hash values. For example, ['sha256', 'sha512'].
         */
        hashFuncNames: string[];
    }
}

declare class WebpackSubresourceIntegrityPlugin extends Plugin {
    constructor(options?: WebpackSubresourceIntegrityPlugin.Options);
}

export = WebpackSubresourceIntegrityPlugin;
