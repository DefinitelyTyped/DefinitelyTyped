// JSON Editor Online is a tool to easily edit and format JSON online. JSON is displayed in a clear, editable treeview and in formatted plain text.

interface JSONEditorOptions {
    change?: (() => void) | undefined;
    history?: boolean | undefined;
    mode?: string | undefined;
    name?: string | undefined;
    search?: boolean | undefined;
}

declare class JSONEditorHistory {
    constructor(editor: JSONEditor);
    onChange(): void;
    add(action: string, params: Object): void;
    clear(): void;
    canUndo(): boolean;
    canRedo(): boolean;
    undo(): void;
    redo(): void;
}

interface JSONEditorNodeUpdateDomOptions {
    recurse?: boolean | undefined;
    updateIndexes?: boolean | undefined;
}

interface JSONEditorNodeType {
    value: string;
    className: string;
    title: string;
}

interface JSONEditorConstructorParams {
    field?: string | undefined;
    fieldEditable?: boolean | undefined;
    value?: any;
}

declare class JSONEditorNode {
    constructor(editor: JSONEditor, params: JSONEditorConstructorParams);
    setParent(parent: JSONEditorNode): void;
    getParent(): JSONEditorNode;
    setField(field: string, fieldEditable: boolean): void;
    getField(): string;
    setValue(value: any): void;
    getValue(): any;
    getLevel(): number;
    clone(): JSONEditorNode;
    expand(recurse: boolean): void;
    collapse(recurse: boolean): void;
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
    containsNode(node: JSONEditorNode): boolean;
    removeChild(node: JSONEditorNode): JSONEditorNode;
    changeType(newType: string): void;
    clearDom(): void;
    getDom(): HTMLElement;
    setHighlight(highlight: boolean): void;
    updateValue(value: any): void;
    updateField(field: string): void;
    updateDom(): void;
    onEvent(event: Event): void;
    types: JSONEditorNodeType[];
    getAppend(): HTMLElement;
}

declare class JSONEditorAppendNode extends JSONEditorNode {
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

declare class JSONEditorSearchBox {
    constructor(editor: JSONEditor, container: HTMLElement);
    next(): void;
    previous(): void;
    setActiveResult(index: number): void;
    focusActiveResult(): void;
    clearDelay(): void;
    onDelayedSearch(event: Event): void;
    onSearch(event: Event, forcedSearch: boolean): void;
    onKeyDown(event: Event): void;
    onKeyUp(event: Event): void;
}

interface JSONEditorBuffer {
    text: string;
    flush(): string;
    set(text: string): void;
}

interface JSONEditorActionParams {
    node?: JSONEditorNode | undefined;
    oldValue?: string | undefined;
    newValue?: string | undefined;
    startParent?: JSONEditorNode | undefined;
    endParent?: JSONEditorNode | undefined;
    startIndex?: number | undefined;
    endIndex?: number | undefined;
    clone?: JSONEditorNode | undefined;
    parent?: JSONEditorNode | undefined;
    index?: number | undefined;
    oldType?: JSONEditorNodeType | undefined;
    newType?: JSONEditorNodeType | undefined;
}

declare class JSONEditor {
    constructor(container: HTMLElement, options?: JSONEditorOptions, json?: any);
    set(json: Object, name?: string): void;
    setName(name?: string): void;
    get(): Object;
    getName(): string;
    clear(): void;
    search(text: string): any[];
    expandAll(): void;
    collapseAll(): void;
    focus(): void;
    scrollTo(top: number): void;
    History: JSONEditorHistory;
    Node: JSONEditorNode;
    SearchBox: JSONEditorSearchBox;
    static focusNode: JSONEditorNode;
    static freezeHighlight: boolean;
    static getNodeFromTarget(target: HTMLElement): JSONEditorNode;
    static getAbsoluteLeft(elem: HTMLElement): number;
    static getAbsoluteTop(elem: HTMLElement): number;
    static addClassName(elem: HTMLElement, className: string): void;
    static removeClassName(elem: HTMLElement, className: string): void;
    static stripFormatting(divElement: HTMLElement): void;
    static setEndOfContentEditable(contentEditableElement: HTMLElement): void;
    static getInnerText(element: HTMLElement, buffer: JSONEditorBuffer): string;
    static getInternetExplorerVersion(): number;
    Events: {
        addEventListener(
            element: HTMLElement,
            action: string,
            listener: (event?: Event) => void,
            useCapture: boolean,
        ): (event?: Event) => void;
        removeEventListener(
            element: HTMLElement,
            action: string,
            listener: (event?: Event) => void,
            useCapture: boolean,
        ): void;
        stopPropagation(event: Event): void;
        preventDefault(event: Event): void;
    };
    static parse(jsonString: string): Object;
    static validate(jsonString: string): string;
}

interface JSONFormatterOptions {
    change?: (() => void) | undefined;
    indentation?: number | undefined;
}

declare class JSONFormatter {
    constructor(container: HTMLElement, options?: JSONFormatterOptions, json?: any);
    set(json: Object): void;
    get(): Object;
    setText(jsonString: string): void;
    getText(): string;
    onError(err: string): void;
}
