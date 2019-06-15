// Type definitions for istanbul-lib-hook 2.0
// Project: https://istanbul.js.org, https://github.com/istanbuljs/istanbuljs
// Definitions by: Jason Cheatham <https://github.com/jason0x43>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.4

export interface Options {
	verbose: boolean;
}

export interface HookRequireOptions extends Options {
	extensions: string[];
	postLoadHook(filename: string): void;
}

export function hookRequire(
	matcher: Matcher,
	transformer: Transformer,
	options?: Partial<HookRequireOptions>
): () => void;

export function hookCreateScript(
	matcher: Matcher,
	transformer: Transformer,
	options?: Partial<Options>
): void;

export function unhookCreateScript(): void;

export function hookRunInThisContext(
	matcher: Matcher,
	transformer: Transformer,
	options?: Partial<Options>
): void;

export function unhookRunInThisContext(): void;

export function hookRunInContext(
	matcher: Matcher,
	transformer: Transformer,
	options?: Partial<HookRunInContextOptions>
): void;

export function unhookRunInContext(): void;

export function unloadRequireCache(matcher: Matcher): void;

export type Matcher = (filename: string) => boolean;
export type Transformer = (code: string, options: TransformerOptions) => string;

export interface TransformerOptions {
	filename: string;
}

export interface HookRunInContextOptions extends Options {
	coverageVariable: string;
}
