// Type definitions for Code-Highlighter v2.2.0
// Project: https://github.com/avielfedida/Code-Highlighter
// Definitions by: Aviel Fedida <https://github.com/avielfedida/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

interface IHighlighter {
	lateInit(delay?: number): void;
}

declare module "code-highlighter" {
	var Highlighter: IHighlighter;
	export = Highlighter;
}
