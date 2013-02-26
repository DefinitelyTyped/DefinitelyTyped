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

interface JSONEditorNodeUpdateDomOptions {
	recurse?: bool;
	updateIndexes?: bool;
}

interface JSONEditorNodeType {
	value: string;
	className: string;
	title: string;
}

interface JSONEditorConstructorParams {
	field?: string;
	fieldEditable?: bool;
	value?: any;
}

class JSONEditorNode {
	constructor(editor: JSONEditor, params: JSONEditorConstructorParams);
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
	updateField(field: string): void;
	updateDom(options): void;
	onEvent(event: Event): void;
	types: JSONEditorNodeType[];
	getAppend(): HTMLElement;
}

class JSONEditorAppendNode extends JSONEditorNode {
	constructor(editor: JSONEditor);
}

interface JSONEditorShowDropDownListParams {
	x: number;
	y: number;
	node: JSONEditorNode;
	value: string;
	values: Object[];
	optionSelectedClassName: string;
	optionClassName: string;
	callback: (value: any) => void;
}

class JSONEditorSearchBox {
	constructor(editor: JSONEditor, container: HTMLElement);
	next(): void;
	previous(): void;
	setActiveResult(index: number): void;
	focusActiveResult(): void;
	clearDelay(): void;
	onDelayedSearch(event: Event): void;
	onSearch(event: Event, forcedSearch: bool): void;
	onKeyDown(event: Event): void;
	onKeyUp(event: Event): void;
}

interface JSONEditorBuffer {
	text: string;
	flush(): string;
	set(text: string): void;
}

interface JSONEditorActionParams {
	node?: JSONEditorNode;
	oldValue?: string;
	newValue?: string;
	startParent?: JSONEditorNode;
	endParent?: JSONEditorNode;
	startIndex?: number;
	endIndex?: number;
	clone?: JSONEditorNode;
	parent?: JSONEditorNode;
	index?: number;
	oldType?: JSONEditorNodeType;
	newType?: JSONEditorNodeType;
}

class JSONEditor {
	constructor(container: HTMLElement, options?: JSONEditorOptions, json?: any);
	set(json: Object, name?: string): void;
	setName(name?: string): void;
	get(): Object;
	getName(): string;
	clear(): void;
	search(text: string): any[];
	expandAll(): void;
	collapseAll(): void;
	onAction(action: string, params: JSONEditorActionParams);
	focus(): void;
	scrollTo(top: number): void;
	History: JSONEditorHistory;
	Node: JSONEditorNode;
	SearchBox: JSONEditorSearchBox;
	static focusNode: JSONEditorNode;
	static freezeHighlight: bool;
	static showDropDownList(params): void;
	static getNodeFromTarget(target: HTMLElement): JSONEditorNode;
	static getAbsoluteLeft(elem: HTMLElement): number;
	static getAbsoluteTop(elem: HTMLElement); number;
	static addClassName(elem: HTMLElement, className: string): void;
	static removeClassName(elem: HTMLElement, className: string): void;
	static stripFormatting(divElement: HTMLElement): void;
	static setEndOfContentEditable(contentEditableElement: HTMLElement): void;
	static getInnerText(element: HTMLElement, buffer: JSONEditorBuffer): string;	
	static getInternetExplorerVersion(): number;
	Events: {
		addEventListener(element: HTMLElement, action: string, listener:(event?: Event) => void, useCapture:bool): (event?: Event) => void;
		removeEventListener(element: HTMLElement, action: string, listener:(event?: Event) => void, useCapture:bool): void;
		stopPropagation(event: Event): void;
		preventDefault(event:Event): void;

	};
	static parse(jsonString: string): Object;
	static validate(jsonString: string): string;
}

interface JSONFormatterOptions {
	change?: () => void;
	indentation?: number;
}

class JSONFormatter {
	constructor(container: HTMLElement, options?: JSONFormatterOptions, json?: any);
	set(json: Object);
	get(): Object;
	setText(jsonString: string): void;
	getText(): string;
	onError(err: string): void;
}