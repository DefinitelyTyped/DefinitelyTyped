import morphdom = require("morphdom");

declare var node1: Node;
declare var node2: Node;
declare var el1: HTMLElement;
declare var el2: HTMLElement;

morphdom(node1, node2);
morphdom(node1, node2, {});
morphdom(node1, node2, {
    childrenOnly: true,
    getNodeKey: (node) => null,
    onBeforeElChildrenUpdated: (el1, el2) => true,
    onBeforeElUpdated: (el1, el2) => true,
    onBeforeNodeAdded: (node) => node1,
    onBeforeNodeDiscarded: (node) => false,
    onElUpdated: (el) => null,
    onNodeAdded: (node) => node2,
    onNodeDiscarded: (node) => null,
});
