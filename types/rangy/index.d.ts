// Type definitions for Rangy
// Project: https://github.com/timdown/rangy
// Definitions by: Rudolph Gottesheim <http://www.midnight-design.at/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

interface RangyRange extends Range {
    setStartAndEnd(startNode:Node, startOffset:number, endNode?:Node, endOffset?:number):any;
    setStartAndEnd(startNode:Node, startOffset:number, endOffset:number):any;
    canSurroundContents():boolean;
    isValid():boolean;
    toHtml():string;
    compareNode(node:Node):any;
    intersectsOrTouchesRange(range:RangyRange):boolean;
    intersectsRange(range:RangyRange):boolean;
    intersection(range:RangyRange):RangyRange;
    union(range:RangyRange):RangyRange;
    containsNode(node:Node, partial:boolean):boolean;
    containsNodeContents(node:Node):boolean;
    containsNodeText(node:Node):boolean;
    containsRange(range:RangyRange):boolean;
    splitBoundaries():any;
    normalizeBoundaries():any;
    collapseToPoint(node:Node, offset:number):any;
    collapseBefore(node:Node):any;
    collapseAfter(node:Node):any;
    getNodes(nodeTypes?:any[], filter?:(node:Node) => boolean):Node[];
    getBookmark(containerNode?:Node):{start:number, end:number};
    moveToBookmark(bookmark:Object):any;
    getDocument():Document;
    inspect():string;
    equals(range:RangyRange):boolean;
    refresh():any;
    select():any;
    toCharacterRange(containerNode:Node, opts?: any):{start:number, end:number};
}

interface RangySelection extends Selection {
    nativeSelection:Selection;
    isBackwards():boolean;
    refresh(checkForChanges?:boolean):any;
    toHtml():string;
    getAllRanges():RangyRange[];
    getRangeAt(idx:number):RangyRange;
    getNativeTextRange():any;
    setSingleRange(range:RangyRange):any;
    setRanges(ranges:RangyRange[]):any;
    getBookmark(containerNode:Node):any;
    moveToBookmark(bookmark:Object):any;
    saveRanges():Object;
    restoreRanges(saved:Object):any;
    saveCharacterRanges(containerNode:Node, opts?: any):Object;
    restoreCharacterRanges(containerNode:Node, characterRanges:Object, opts?: any):any;
    detach():any;
    inspect(): string;
    move(units: string, count: number, opts?: any): number;
}

interface RangyStatic {
    createNativeRange(doc?:Document|Window|HTMLIFrameElement):Range;
    createRange(doc?:Document|Window|HTMLIFrameElement):RangyRange;
    createRangyRange(doc?:Document|Window|HTMLIFrameElement):RangyRange;
    getNativeSelection(win?:Window):Selection;
    getSelection(doc?:Document|Window|HTMLIFrameElement):RangySelection;
    addInitListener(listener:(rangy:RangyStatic) => void):any;
    shim():any;
    createMissingNativeApi():any;
    initialized:boolean;
    supported:boolean;
}
declare module 'rangy' {
    export = rangy;
}
declare var rangy:RangyStatic;
