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

class JSONEditorHistory {	
	constructor(editor: JSONEditor);	
	onChange(): void;
	add(action: string, params: Object);
	clear(): void;
	canUndo(): bool;
	canRedo(): bool;
	undo(): void;
	redo(): void;
}

class JSONEditorNode {
	constructor(editor: JSONEditor, params: Object);
	setParent(parent: JSONEditorNode): void;
	getParent(): JSONEditorNode;
	setField(field: string, fieldEditable: bool): void;
	getField(): string;
	setValue(value: any): void;
	getValue(): any;
	getLevel(): number;
	clone(): JSONEditorNode;
	expand(recurse: bool): void;
	collapse(recurse: bool): void;
	showChilds(): void;
	hide(): void;
	hideChilds(): void;
	appendChild(node: JSONEditorNode): void;
	moveBefore(node: JSONEditorNode, beforeNode: JSONEditorNode): void;
	moveTo(node: JSONEditorNode, index: number): void;
	insertBefore(node: JSONEditorNode, beforeNode: JSONEditorNode): void;
	search(text: string): JSONEditorNode[];
	scrollTo(): void;
	focus(): void;
	blur(): void;
	containsNode(node: JSONEditorNode): bool;
	removeChild(node: JSONEditorNode): JSONEditorNode;
	changeType(newType: string): void;
	clearDom(): void;
	getDom(): HTMLElement;
	setHighlight(highlight: bool): void;
	updateValue(value: any): void;
}

class JSONEditor {
	constructor(container: HTMLElement, options?: JSONEditorOptions, json?: Object);
	set(json: Object, name?: string): void;
	setName(name?: string): void;
	get(): Object;
	getName(): string;
	clear(): void;
	search(text: string): any[];
	expandAll(): void;
	collapseAll(): void;
	onAction(action: string, params: Object);
	focus(): void;
	scrollTo(top: number): void;
	History: JSONEditorHistory;
}

interface JSONFormatterOptions {
	change?: () => void;
	indentation?: number;
}

class JSONFormatter {
	constructor(container: HTMLElement, options?: JSONFormatterOptions, json?: Object);
	constructor(container: HTMLElement, options?: JSONFormatterOptions, json?: string);
	set(json: JSON);
	get(): JSON;
	setText(jsonString: string);
	getText(): string;
}