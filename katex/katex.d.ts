// Type definitions for KaTeX v.0.5.0
// Project: http://khan.github.io/KaTeX/
// Definitions by: Michael Randolph <https://github.com/mrand01>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare module "katex" {
	interface KatexOptions {
		displayMode?: boolean;
		breakOnUnsupportedCmds?: boolean;
		errorColor?: string;
	}

	class ParseError implements Error {
		constructor(message: string, lexer: any, position: number);
		name: string;
		message: string;
		position: number;
	}
	
	/**
	 * Renders a TeX expression into the specified DOM element
	 * @param tex A TeX expression
	 * @param element The DOM element to render into
	 * @param options KaTeX options
	 */
	function render(tex: string, element: HTMLElement, options?:KatexOptions): void;
	/**
	 * Renders a TeX expression into an HTML string
	 * @param tex A TeX expression
	 * @param options KaTeX options
	 */
	function renderToString(tex: string, options?:KatexOptions): string;
}