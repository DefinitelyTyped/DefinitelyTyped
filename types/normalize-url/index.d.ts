// Type definitions for normalize-url 1.10
// Project: https://github.com/sindresorhus/normalize-url
// Definitions by: xenux <https://github.com/xenux>
//                 odin3 <https://github.com/odin3>
//                 BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace normalizeUrl {
    interface Options {
		defaultProtocol?: string;
		normalizeProtocol?: boolean;
		forceHttp?: boolean;
		forceHttps?: boolean;
		stripHash?: boolean;
		stripWWW?: boolean;
		removeQueryParameters?: Array<RegExp | string>;
		removeTrailingSlash?: boolean;
		removeDirectoryIndex?: Array<RegExp | string> | true;
		sortQueryParameters?: boolean;
    }
}

declare function normalizeUrl(url: string, options?: normalizeUrl.Options): string;

export = normalizeUrl;
