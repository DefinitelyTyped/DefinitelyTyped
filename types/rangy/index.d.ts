// Type definitions for Rangy
// Project: https://github.com/timdown/rangy
// Definitions by: Rudolph Gottesheim <http://www.midnight-design.at/>
//                 Bùi Việt Thành <https://github.com/ohze>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

declare global {
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
        getBookmark(containerNode?: Node): rangy.Bookmark;
        moveToBookmark(bookmark: rangy.Bookmark):void;
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
        getBookmark(containerNode:Node): rangy.SelBookmark;
        moveToBookmark(bookmark:rangy.Bookmark): void;
        saveRanges():Object;
        restoreRanges(saved:Object):any;
        saveCharacterRanges(containerNode:Node, opts?: any):Object;
        restoreCharacterRanges(containerNode:Node, characterRanges:Object, opts?: any):any;
        detach():any;
        inspect(): string;
        move(units: string, count: number, opts?: any): number;
    }
    type RangyStatic = typeof Rangy;
}
declare namespace Rangy {
    export function createNativeRange(doc?:Document|Window|HTMLIFrameElement):Range;
    export function createRange(doc?:Document|Window|HTMLIFrameElement):RangyRange;
    export function createRangyRange(doc?:Document|Window|HTMLIFrameElement):RangyRange;
    export function getNativeSelection(win?:Window):Selection;
    export function getSelection(doc?:Document|Window|HTMLIFrameElement):RangySelection;
    export function addInitListener(listener:(rangy: RangyStatic) => void):any;
    export function shim():any;
    export function createMissingNativeApi():any;
    export var initialized:boolean;
    export var supported:boolean;

    export interface Bookmark {
        start: number,
        end: number,
        containerNode: Node
    }
    export interface SelBookmark {
        backward: boolean;
        rangeBookmarks: rangy.Bookmark[]
    }
}
export = Rangy;
export as namespace rangy;
