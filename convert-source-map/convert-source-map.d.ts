declare module "convert-source-map" {
	export interface SourceMapConverter {
		toObject(): any;
		toJSON(space?): string;
		toBase64(): string;
		toComment(): string;

		addProperty(key, value): SourceMapConverter;
		setProperty(key, value): SourceMapConverter;

		getProperty(key): any;
	}

	export function removeComments(src): string;
	export var commentRegex: RegExp;

	export function fromObject(obj): SourceMapConverter;
	export function fromJSON(json: string): SourceMapConverter;
	export function fromBase64(base64: string): SourceMapConverter;
	export function fromComment(comment: string): SourceMapConverter;
	export function fromSource(source: string): SourceMapConverter;
}