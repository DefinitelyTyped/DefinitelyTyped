// Type definitions for MarkdownItContainer (markdown-it-container) 2.0
// Project: https://github.com/markdown-it/markdown-it-container
// Definitions by: Vyacheslav Demot <https://github.com/hronex>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import MarkdownIt = require('markdown-it');
import Renderer = require('markdown-it/lib/renderer');
import Token = require('markdown-it/lib/token');

declare namespace markdownItContainer {
	interface ContainerOpts {
		marker?: string;
		validate?(params: string): boolean;
		render?(tokens: Token[], index: number, options: any, env: any, self: Renderer): void;
	}

	function container_plugin(md: MarkdownIt, name: string, opts: ContainerOpts): void;
}

declare var MarkdownItContainer: typeof markdownItContainer.container_plugin;
export = MarkdownItContainer;
