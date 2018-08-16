// Type definitions for morphdom 2.3
// Project: https://github.com/patrick-steele-idem/morphdom
// Definitions by: arvitaly <https://github.com/arvitaly>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

interface MorphDomOptions {
    getNodeKey?: (node: Node) => any;
    onBeforeNodeAdded?: (node: Node) => Node;
    onNodeAdded?: (node: Node) => Node;
    onBeforeElUpdated?: (fromEl: HTMLElement, toEl: HTMLElement) => boolean;
    onElUpdated?: (el: HTMLElement) => void;
    onBeforeNodeDiscarded?: (node: Node) => boolean;
    onNodeDiscarded?: (node: Node) => void;
    onBeforeElChildrenUpdated?: (fromEl: HTMLElement, toEl: HTMLElement) => boolean;
    childrenOnly?: boolean;
}

declare function morphdom(
    fromNode: Node,
    toNode: Node | string,
    options?: MorphDomOptions,
): void;

export = morphdom;
