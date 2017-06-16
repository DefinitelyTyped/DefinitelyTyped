// Type definitions for normalize-url 1.9
// Project: https://github.com/sindresorhus/normalize-url
// Definitions by: odin3 <https://github.com/odin3>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace NormalizeUrl {
  interface NormalizeUrlArgs {
		normalizeProtocol?: boolean;
		normalizeHttps?: boolean;
		stripFragment?: boolean;
		stripWWW?: boolean;
		removeQueryParameters?: string[];
		removeTrailingSlash?: boolean;
		removeDirectoryIndex?: RegExp[];
	}

  // tslint:disable-next-line align
	function normalizeUrl(url: string, args?: NormalizeUrlArgs): string;
}

export = NormalizeUrl.normalizeUrl;
