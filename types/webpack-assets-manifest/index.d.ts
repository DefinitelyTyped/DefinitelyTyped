// Type definitions for webpack-assets-manifest 3.0
// Project: https://github.com/webdeveric/webpack-assets-manifest
// Definitions by: Franklin Tse <https://github.com/FranklinWhale>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import { Plugin } from "webpack";
import { SyncHook, SyncWaterfallHook } from "tapable";

declare class WebpackAssetsManifest extends Plugin {
	constructor(options?: WebpackAssetsManifest.Options);
	hooks: {
		apply: SyncHook<WebpackAssetsManifest>;
		customize: SyncWaterfallHook<WebpackAssetsManifest.Entry, object, WebpackAssetsManifest>;
		transform: SyncWaterfallHook<object, WebpackAssetsManifest>;
		done: SyncHook<WebpackAssetsManifest, object>;
		options: SyncWaterfallHook<WebpackAssetsManifest.Options>;
		afterOptions: SyncHook<WebpackAssetsManifest.Options>;
	};
	options: WebpackAssetsManifest.Options;
	defaultOptions: WebpackAssetsManifest.Options;
	isMerging: boolean;
	getExtension(filename: string): string;
	fixKey<T>(key: T): T;
	isHMR(filename: string): boolean;
	setRaw(key: string, value: string): this;
	set(key: string, value: string): this;
	has(key: string): boolean;
	get(key: string, defaultValue?: string): any;
	delete(key: string): boolean;
	getOutputPath(): string;
	getPublicPath(filename: string): string;
	getProxy(raw?: boolean): ProxyHandler<WebpackAssetsManifest>;
}

declare namespace WebpackAssetsManifest {
	interface Options {
		assets?: object;
		output?: string;
		replacer?: null | string[] | ((key: string, value: string) => number | string | boolean | null | object | undefined);
		space?: number;
		writeToDisk?: boolean;
		fileExtRegex?: RegExp | null | false;
		sortManifest?: boolean | ((a: any, b: any) => number);
		merge?: boolean | "customize";
		publicPath?: string | boolean | null | (((filename: string, manifest: WebpackAssetsManifest) => string));
		apply?: ((manifest: WebpackAssetsManifest) => void) | null;
		customize?: ((entry: Entry, original: object, manifest: WebpackAssetsManifest, asset: object) => Entry | false) | null;
		transform?: ((assets: object, manifest: WebpackAssetsManifest) => any) | null;
		done?: ((manifest: WebpackAssetsManifest, stats: object) => void) | null;
		entrypoints?: boolean;
		entrypointsKey?: string | false;
		integrity?: boolean;
		integrityHashes?: string[];
		integrityPropertyName?: string;
	}

	interface Entry {
		key: string;
		value: string;
	}
}

export = WebpackAssetsManifest;
