export const version: string;

export interface RangyRange extends Range {
    startContainer: Node;
    startOffset: number;
    endContainer: Node;
    endOffset: number;
    commonAncestorContainer: Node;
    collapsed: boolean;
    setStart(node: Node, offset: number): void;
    setStartBefore(node: Node): void;
    setStartAfter(node: Node): void;
    setEnd(node: Node, offset: number): void;
    setEndBefore(node: Node): void;
    setEndAfter(node: Node): void;
    setStartAndEnd(startNode: Node, startOffset: number, endNode?: Node, endOffset?: number): any;
    selectNode(node: Node): any;
    selectNodeContents(node: Node): any;
    collapse(toStart?: boolean): void;
    compareBoundaryPoints(comparisonType: number, range: RangyRange): number;
    insertNode(node: Node): any;
    cloneContents(): DocumentFragment;
    extractContents(): DocumentFragment;
    deleteContents(): void;
    canSurroundContents(): boolean;
    surroundContents(node: Node): boolean;
    cloneRange(): RangyRange;
    isValid(): boolean;
    toString(): string;
    toHtml(): string;
    compareNode(node: Node): NodeType;
    comparePoint(node: Node, offset: number): -1 | 0 | 1;
    intersectsOrTouchesRange(range: RangyRange): boolean;
    intersectsRange(range: RangyRange): boolean;
    intersectsNode(node: Node, touchingIsIntersecting?: boolean): boolean;
    intersection(range: RangyRange): RangyRange | null;
    union(range: RangyRange): RangyRange | null;
    isPointInRange(node: Node, offset: number): boolean;
    createContextualFragment(fragment: string): DocumentFragment;
    containsNode(node: Node, partial: boolean): boolean;
    containsNodeContents(node: Node): boolean;
    containsNodeText(node: Node): boolean;
    containsRange(range: RangyRange): boolean;
    splitBoundaries(): any;
    normalizeBoundaries(): any;
    collapseToPoint(node: Node, offset: number): any;
    collapseBefore(node: Node): any;
    collapseAfter(node: Node): any;
    getNodes(nodeTypes?: any[], filter?: (node: Node) => boolean): Node[];
    getBookmark(containerNode?: Node): { start: number; end: number };
    moveToBookmark(bookmark: Object): any;
    getDocument(): Document;
    inspect(): string;
    equals(range: RangyRange): boolean;
    refresh(): any;
    select(): any;
    detach(): void;
}

export interface RangySelection extends Selection {
    nativeSelection: Selection;
    rangeCount: number;
    isCollapsed: boolean;
    anchorNode: Node | null;
    anchorOffset: number;
    focusNode: Node | null;
    focusOffset: number;
    addRange(range: RangyRange, direction?: Direction | boolean): void;
    getRangeAt(index: number): RangyRange;
    isBackwards(): boolean;
    removeAllRanges(): void;
    removeRange(range: RangyRange): void;
    refresh(checkForChanges?: boolean): any;
    collapse(node: Node, offset: number): void;
    collapseToStart(): void;
    collapseToEnd(): void;
    selectAllChildren(node: Node): void;
    deleteFromDocument(): void;
    toString(): string;
    toHtml(): string;
    getAllRanges(): RangyRange[];
    getNativeTextRange(): Range;
    getSingleRange(range: RangyRange, direction: Direction): any;
    setRanges(ranges: RangyRange[]): any;
    containsNode(node: Node, partial: boolean): boolean;
    getBookmark(containerNode: Node): any;
    moveToBookmark(bookmark: Object): any;
    saveRanges(): Object;
    restoreRanges(saved: Object): any;
    detach(): any;
    inspect(): string;
}

export type Direction = "forward" | "forwards" | "backward" | "backwards" | boolean;
export type NodeType = "NODE_BEFORE" | "NODE_AFTER" | "NODE_BEFORE_AND_AFTER" | "NODE_INSIDE";

export interface CookieOptions {
    expires?: Date;
    path?: string;
    domain?: string;
    secure?: boolean;
}

export interface DomPosition {
    node: Node;
    offset: number;
}
export type RangyStatic = typeof import("rangy");
export function addInitListener(listener: (rangy: RangyStatic) => void): void;
export function createMissingNativeApi(): void;
export function shim(): void;
export function createNativeRange(doc?: Document | Window | HTMLIFrameElement): Range;
export function createRange(doc?: Document | Window | HTMLIFrameElement): RangyRange;
export function createRangyRange(doc?: Document | Window | HTMLIFrameElement): RangyRange;
export function getNativeSelection(win?: Window): Selection;
export function getSelection(win?: Window): RangySelection;
export var initialized: boolean;
export var supported: boolean;
export var config: {
    alertOnFail: boolean;
    alertOnWarn: boolean;
    checkSelectionRanges: boolean;
    preferTextRange: boolean;
    autoInitialize: boolean;
};
export var dom: any;
export var features: {
    collapsedNonEditableSelectionsSupported: boolean;
    implementsControlRange: boolean;
    implementsDomRange: boolean;
    implementsTextRange: boolean;
    selectionHasAnchorAndFocus: boolean;
    selectionHasExtend: boolean;
    selectionHasRangeCount: boolean;
    selectionSupportsMultipleRanges: boolean;
    crashyTextNodes: boolean;
    implementsDocSelection: boolean;
    implementsWinGetSelection: boolean;
};

export var util: {
    isHostObject(obj: any, prop: string): boolean;
    isHostMethod(obj: any, method: string): boolean;
    isHostProperty(obj: any, prop: string): boolean;
    areHostObjects(obj: any, props: string[]): boolean;
    areHostMethods(obj: any, methods: string[]): boolean;
    areHostProperties(obj: any, props: string[]): boolean;
    toArray(arrayLike: any): any[];
};
export function init(): void;

export as namespace rangy;
