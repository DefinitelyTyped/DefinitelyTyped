// Type definitions for detect-indent 0.1.3
// Project: https://github.com/sindresorhus/detect-indent
// Definitions by: Bart van der Schoor <https://github.com/Bartvds>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare module 'detect-indent' {
	interface DetectIndent {
		(dir: string, alt?: string): string;
	}
	var _: DetectIndent;
	export = _;
}

