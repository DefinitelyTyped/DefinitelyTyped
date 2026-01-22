export = TreeView;
declare function TreeView(field: any): void;
declare class TreeView {
    constructor(field: any);
    field: any;
    readOnly: boolean;
    nodes: StringList;
}
declare namespace TreeView {
    export { AbstractTree as AbstractTree_ };
    export { TreeChild as TreeChild_ };
}
import StringList = require("@nginstack/engine/lib/string/StringList.js");
declare function AbstractTree(treeView: any, parent: any): void;
declare class AbstractTree {
    private constructor();
    treeView: any;
    parent: any;
    children: any[];
    onAddition: LegacyEvent;
    onDeletion: LegacyEvent;
    onExpand: LegacyEvent;
    onCollapse: LegacyEvent;
    onGetTreeIcon: LegacyEvent;
    autoExpand: boolean;
    expanded: boolean;
    nId: number;
    level: number;
    index: number;
    text: any;
    value: any;
    getHasChildren(): boolean;
    addChild(text: any, value: any, index: any): any;
    expand(): void;
    collapse(): void;
}
declare function TreeChild(treeView: any, parent: any): void;
declare class TreeChild {
    constructor(treeView: any, parent: any);
    nId: any;
    fHtml: string;
    getHtml(): string;
    getLabelHtml(): string;
    getIsLast(): boolean;
    getIsFirst(): boolean;
}
import LegacyEvent = require("@nginstack/engine/lib/event/LegacyEvent.js");
