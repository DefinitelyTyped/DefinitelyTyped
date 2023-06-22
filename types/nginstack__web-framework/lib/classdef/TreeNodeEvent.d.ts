export = TreeNodeEvent;
declare function TreeNodeEvent(...args: any[]): void;
declare class TreeNodeEvent {
    constructor(...args: any[]);
    node: AbstractTree;
}
declare namespace TreeNodeEvent {
    export { AbstractTree };
}
type AbstractTree = any;
