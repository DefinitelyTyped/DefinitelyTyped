// Type definitions for normalize-url 3.3
// Project: https://github.com/sindresorhus/normalize-url
// Definitions by: odin3 <https://github.com/odin3>
//                 BendingBender <https://github.com/BendingBender>
//                 Mathieu M-Gosselin <https://github.com/mathieumg>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace normalizeUrl {
    interface Options {
        defaultProtocol?: string;
        forceHttp?: boolean;
        forceHttps?: boolean;
        normalizeProtocol?: boolean;
        normalizeHttps?: boolean;
        sortQueryParameters?: boolean;
        stripFragment?: boolean;
        stripHash?: boolean;
        stripWWW?: boolean;
        removeQueryParameters?: Array<RegExp | string>;
        removeTrailingSlash?: boolean;
        removeDirectoryIndex?: Array<RegExp | string>;
    }
}

declare function normalizeUrl(url: string, options?: normalizeUrl.Options): string;

export = normalizeUrl;
