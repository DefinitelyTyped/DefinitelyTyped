// Type definitions for non-npm package web-ie11-browser 0.0
// Project: https://docs.microsoft.com/en-us/lifecycle/announcements/internet-explorer-11-end-of-support
// Definitions by: Kagami Sascha Rosylight <https://github.com/saschanaz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

interface Document {
    /**
     * Creates a TreeWalker object that you can use to traverse filtered lists of nodes or elements in a document.
     * @param root The root element or node to start traversing on.
     * @param whatToShow The type of nodes or elements to appear in the node list. For more information, see whatToShow.
     * @param filter A custom NodeFilter function to use.
     * @param entityReferenceExpansion A flag that specifies whether entity reference nodes are expanded. Required on IE11 and ignored on other browsers.
     */
    createTreeWalker(root: Node, whatToShow: number, filter: NodeFilter | null, entityReferenceExpansion: boolean): TreeWalker;
}
