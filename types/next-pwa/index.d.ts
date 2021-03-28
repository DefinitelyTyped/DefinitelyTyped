// Type definitions for next-pwa 5.0
// Project: https://github.com/shadowwalker/next-pwa
// Definitions by: James Simon <https://github.com/jsmon>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.7

import { GenerateSW, InjectManifest, RuntimeCacheRule } from 'workbox-webpack-plugin';

interface ConfigOptions extends Partial<GenerateSW>, Partial<InjectManifest> {
    pwa: {
        dest: string;
        swSrc?: string;
        disable?: boolean;
        register?: boolean;
        scope?: string;
        sw?: string;
        publicExcludes?: string[];
        buildExcludes?: Array<string | RegExp | (() => string | RegExp)>;
        runtimeCaching?: RuntimeCacheRule;
        subdomainPrefix?: string;
    };
}

declare function withPwa(nextConfig: ConfigOptions): {
    webpack(config: ConfigOptions, options?: {
        buildId: string;
        dev: boolean;
        isServer: boolean;
        defaultLoaders: { babel: {
            cacheDirectory: boolean;
            cacheIdentifier: string;
            cacheCompression: boolean;
            customize: string | null;
        } }
    }): ConfigOptions;
};

export = withPwa;
