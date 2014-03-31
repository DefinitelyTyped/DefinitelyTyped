// Type definitions for detect-indent 0.1.3
// Project: https://github.com/sindresorhus/detect-indent
// Definitions by: Bart van der Schoor <https://github.com/Bartvds>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare module 'detect-indent' {
	function DetectIndent (dir: string, alt?: string): string;
	export = DetectIndent;
}
