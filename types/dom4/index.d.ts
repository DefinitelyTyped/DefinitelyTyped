// Type definitions for dom4 v1.5
// Project: https://github.com/WebReflection/dom4
// Definitions by: Adi Dahiya <https://github.com/adidahiya>, Gilad Gray <https://github.com/giladgray>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

interface ParentNode {
    /**
     * Returns the child elements.
     */
    readonly children: HTMLCollection;

    /**
     * Returns the first element that is a descendant of node that matches relativeSelectors.
     */
    query(relativeSelectors: string): Element;

    /**
     * Returns all element descendants of node that match relativeSelectors.
     */
    queryAll(relativeSelectors: string): Elements;
}

interface Element extends ParentNode {
    /**
     * Returns the first (starting at element) inclusive ancestor that matches selectors, and null otherwise.
     */
    closest(selectors: string): Element;

    /**
     * Returns true if matching selectors against element’s root yields element, and false otherwise.
     */
    matches(selectors: string): boolean;
}

interface Elements extends ElementTraversal, ParentNode, Array<Element> {
}

interface Document extends ElementTraversal, ParentNode {
}

interface DocumentFragment extends ElementTraversal, ParentNode {
}
