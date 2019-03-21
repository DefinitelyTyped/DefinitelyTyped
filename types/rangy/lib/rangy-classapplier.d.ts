// tslint:disable-next-line:no-self-import
import * as rangy from 'rangy';

declare global {
    type RangyClassApplierOptions = rangy.ClassApplierOpts;
    type RangyClassApplier = rangy.ClassApplier;
}

// tslint:disable-next-line:no-declare-current-package
declare module 'rangy' {
    interface DomPosition {
        node: Node;
        offset: number;
    }

    interface ClassApplierUtil {
        hasClass(el: Element, className: string): boolean;
        addClass(el: Element, className: string): void;
        removeClass(el: Element, className: string): void;
        getClass(el: Element): string;
        hasSameClasses(el1: Element, el2: Element): boolean;
        hasAllClasses(el: Element, className: string): boolean;
        replaceWithOwnChildren(element: Node, positionsToPreserve: DomPosition[]): Array<Node|null>;
        elementsHaveSameNonClassAttributes(el1: Element, el2: Element): boolean;
        elementHasNonClassAttributes(el: Element, exceptions: string[]): boolean;
        splitNodeAt(node: Node, descendantNode: Node, descendantOffset: number, positionsToPreserve: DomPosition[]): Node;
        isEditableElement(node: Node): boolean;
        isEditingHost(node: Node): boolean;
        isEditable(node: Node): boolean;
    }

    interface ClassApplierOpts {
        elementTagName?: string;
        elementProperties?: {[property: string]: string};
        elementAttributes?: {[attribute: string]: string};
        ignoreWhiteSpace?: boolean;
        applyToEditableOnly?: boolean;
        tagNames?: string|string[];
        normalize?: boolean;
        onElementCreate?: (element: Element, classApplier: RangyClassApplier) => void;
        useExistingElements?: boolean;
    }
    // tslint:disable-next-line:no-empty-interface
    interface ClassApplier extends ClassApplierOpts {}
    namespace ClassApplier {
        const util: ClassApplierUtil;
    }
    class ClassApplier {
        constructor(className: string, options?: ClassApplierOpts, tagNames?: string | string[]);

        copyPropertiesToElement(props: object, el: Element, createCopy: boolean): object | "";

        copyAttributesToElement(attrs: string[], el: Element): void;

        appliesToElement(el: Element): boolean;

        getEmptyElements(range: RangyRange): Node[];

        hasClass(node: Node): boolean;

        getSelfOrAncestorWithClass(node?: Node): Node | null;

        isModifiable(node: Node): boolean;

        /** White space adjacent to an unwrappable node can be ignored for wrapping */
        isIgnorableWhiteSpaceNode(node: Node): boolean;

        postApply(textNodes: Node[], range: RangyRange, positionsToPreserve?: DomPosition[], isUndo?: boolean): void;

        createContainer(parentNode: Node): Element;

        elementHasProperties(el: Element, props: object): boolean;

        elementHasAttributes(el: Element, attrs: string[]): boolean;

        applyToTextNode(textNode: Node, positionsToPreserve?: DomPosition[]): void;

        isRemovable(el: Element): boolean;

        isEmptyContainer(el: Element): boolean;

        removeEmptyContainers(range: RangyRange): void;

        undoToTextNode(textNode: Node, range: RangyRange, ancestorWithClass: Element, positionsToPreserve: DomPosition[]): void;

        splitAncestorWithClass(container: Node, offset: number, positionsToPreserve: DomPosition[]): void;

        undoToAncestor(ancestorWithClass: Element, positionsToPreserve: DomPosition[]): void;

        applyToRange(range: RangyRange, rangesToPreserve?: RangyRange[]): void;

        applyToRanges(ranges: RangyRange[]): RangyRange[];

        applyToSelection(win?: Window): void;

        undoToRange(range: RangyRange, rangesToPreserve?: RangyRange[]): void;

        undoToRanges(ranges: RangyRange[]): RangyRange[];

        undoToSelection(win?: Window): void;

        isAppliedToRange(range: RangyRange): boolean;

        isAppliedToRanges(ranges: RangyRange[]): boolean;

        isAppliedToSelection(win?: Window): boolean;

        toggleRange(range: RangyRange): void;

        toggleSelection(win?: Window): void;

        getElementsWithClassIntersectingRange(range: RangyRange): Array<Node|null>;

        detach(doc?: Document | Window | HTMLIFrameElement): void;

        className: string;
        cssClass: string;
    }
    function createClassApplier(theClass: string, options?: ClassApplierOpts, tagNames?: string|string[]): ClassApplier;
}
