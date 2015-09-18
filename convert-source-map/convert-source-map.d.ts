// Type definitions for convert-source-map
// Project: https://github.com/thlorenz/convert-source-map
// Definitions by: Andrew Gaspar <https://github.com/AndrewGaspar/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare module "convert-source-map" {
	export interface SourceMapConverter {
		toObject(): any;
		toJSON(space?: any): string;
		toBase64(): string;
		toComment(): string;

		addProperty(key: string, value: any): SourceMapConverter;
		setProperty(key: string, value: any): SourceMapConverter;

		getProperty(key: string): any;
	}

	export function removeComments(src: string): string;
	export var commentRegex: RegExp;

	export function fromObject(obj: any): SourceMapConverter;
	export function fromJSON(json: string): SourceMapConverter;
	export function fromBase64(base64: string): SourceMapConverter;
	export function fromComment(comment: string): SourceMapConverter;
	export function fromSource(source: string): SourceMapConverter;
}
