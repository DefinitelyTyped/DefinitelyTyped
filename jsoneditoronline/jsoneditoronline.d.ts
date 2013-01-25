// Type definitions for JSONEditorOnline
// JSON Editor Online is a tool to easily edit and format JSON online. JSON is displayed in a clear, editable treeview and in formatted plain text.
// Project: https://github.com/josdejong/jsoneditoronline
// Definitions by: Vincent Bortone <https://github.com/vbortone/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

interface JSONEditorOptions {
	change?: () => void;
	history?: bool;
	mode?: string;
	name?: string;
	search?: bool;
}

interface JSONEditor {
	(container:HTMLElement, options?: JSONEditorOptions, json?: JSON): JSONEditor;
	set(json: JSON, name?: string): void;
	setName(name?: string): void;
	get(): JSON;
	getName(): string;
	expandAll(): void;
	collapseAll(): void;
}

interface JSONFormatterOptions {
	change?: () => void;
	indentation?: number;
}

interface JSONFormatter {
	(container:HTMLElement, options?: JSONFormatterOptions, json?: JSON): JSONEditor;
}