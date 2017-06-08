// Type definitions for normalize-url v1.9.1
// Project: https://github.com/sindresorhus/normalize-url
// Definitions by: odin3 <https://github.com/odin3>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare module NormalizeUrl {
  interface INormalizeUrlArgs {
		normalizeProtocol: boolean;
		normalizeHttps: boolean;
		stripFragment: boolean;
		stripWWW: boolean;
		removeQueryParameters: string[];
		removeTrailingSlash: boolean;
		removeDirectoryIndex: RegExp[];
	}

	function normalizeUrl(url: string, args?: INormalizeUrlArgs): string;
}

export = NormalizeUrl.normalizeUrl;
