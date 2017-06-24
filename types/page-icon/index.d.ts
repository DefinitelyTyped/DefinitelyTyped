// Type definitions for page-icon 0.3.0
// Project: https://github.com/jiahaog/page-icon
// Definitions by: rhysd <https://rhysd.github.io>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

declare namespace PageIcon {
	interface Icon {
		source: string;
		name: string;
		data: Buffer;
		size: number;
		ext: string;
		mime: string;
	}
	interface FetchOptions {
		ext?: string;
	}
}

declare module "page-icon" {
	const mod: (url: string, opts?: PageIcon.FetchOptions) => Promise<PageIcon.Icon>;
	export = mod;
}
