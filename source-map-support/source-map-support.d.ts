// Type definitions for source-map-support 0.2.6
// Project: https://github.com/evanw/source-map-support
// Definitions by: Bart van der Schoor <https://github.com/Bartvds>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare module 'source-map-support' {
	/**
	 * Output of retrieveSourceMap().
	 */
	export interface UrlAndMap {
		url: string;
		map: any; // string or Buffer
	}

	/**
	 * Options to install().
	 */
	export interface Options {
		handleUncaughtExceptions?: boolean;
		emptyCacheBetweenOperations?: boolean;
		retrieveFile?: (path: string) => string;
		retrieveSourceMap?: (source: string) => UrlAndMap;
	}

	export interface Position {
		source: string;
		line: number;
		column: number;
	}

	export function wrapCallSite(frame: any /* StackFrame */): any /* StackFrame */;
	export function getErrorSource(error: Error): string;
	export function mapSourcePosition(position: Position): Position;
	export function retrieveSourceMap(source: string): UrlAndMap;

	/**
	 * Install SourceMap support.
	 * @param options Can be used to e.g. disable uncaughtException handler.
	 */
	export function install(options?: Options): void;
}
