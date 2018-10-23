// Type definitions for MarkdownItAnchor (markdown-it-anchor) 4.0
// Project: https://github.com/valeriangalliat/markdown-it-anchor
// Definitions by: Josh Toft <https://github.com/seryl>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import { MarkdownIt, Core, Token } from 'markdown-it';

declare namespace anchor {
	interface AnchorInfo {
		slug: string;
		title: string;
	}

	interface AnchorOptions {
		level?: number;
		slugify?(str: string): string;
		permalink?: boolean;
		renderPermalink?(slug: string, opts: AnchorOptions, state: Core, idx: number): void;
		permalinkClass?: string;
		permalinkSymbol?: string;
		permalinkBefore?: boolean;
		permalinkHref?(slug: string): string;
		callback?(token: Token, anchor_info: AnchorInfo): void;
	}
}

declare function anchor(md: MarkdownIt, opts: anchor.AnchorOptions): void;

export = anchor;
