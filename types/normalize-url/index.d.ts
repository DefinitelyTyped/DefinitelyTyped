// Type definitions for normalize-url 1.9
// Project: https://github.com/sindresorhus/normalize-url
// Definitions by: odin3 <https://github.com/odin3>
//                 BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace normalizeUrl {
    interface Options {
        normalizeProtocol?: boolean;
        normalizeHttps?: boolean;
        stripFragment?: boolean;
        stripWWW?: boolean;
        removeQueryParameters?: Array<RegExp | string>;
        removeTrailingSlash?: boolean;
        removeDirectoryIndex?: Array<RegExp | string>;
    }
}

declare function normalizeUrl(url: string, options?: normalizeUrl.Options): string;

export = normalizeUrl;
