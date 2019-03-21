// Type definitions for Rangy Class Applier module
// Project: https://github.com/timdown/rangy
// Definitions by: Maxime Kjaer <https://github.com/MaximeKjaer>
//                 Bùi Việt Thành <https://github.com/ohze>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import * as rangy from 'rangy';

declare global {
    type RangyClassApplierOptions = rangy.ClassApplierOpts
    type RangyClassApplier = rangy.ClassApplier
}

declare module 'rangy' {
    export interface DomPosition {
        node: Node
        offset: number
    }

    export interface ClassApplierUtil {
        hasClass(el: Element, className: string): boolean
        addClass(el: Element, className: string): void
        removeClass(el: Element, className: string): void
        getClass(el: Element): string
        hasSameClasses(el1: Element, el2: Element): boolean
        hasAllClasses(el: Element, className: string): boolean
        replaceWithOwnChildren(element: Node, positionsToPreserve: DomPosition[]): (Node|null)[]
        elementsHaveSameNonClassAttributes(el1: Element, el2: Element): boolean
        elementHasNonClassAttributes(el: Element, exceptions: string[]): boolean
        splitNodeAt(node: Node, descendantNode: Node, descendantOffset: number, positionsToPreserve: DomPosition[]): Node
        isEditableElement(node: Node): boolean
        isEditingHost(node: Node): boolean
        isEditable(node: Node): boolean
    }

    export interface ClassApplierOpts {
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
    export interface ClassApplier extends ClassApplierOpts {}
    export namespace ClassApplier {
        export const util: ClassApplierUtil
    }
    export class ClassApplier {
        constructor(className: string, options?: ClassApplierOpts, tagNames?: string | string[])

        copyPropertiesToElement(props: object, el: Element, createCopy: boolean): object | "";

        copyAttributesToElement(attrs: string[], el: Element): void

        appliesToElement(el: Element): boolean

        getEmptyElements(range: RangyRange): Node[]

        hasClass(node: Node): boolean

        getSelfOrAncestorWithClass(node?: Node): Node | null

        isModifiable(node: Node): boolean

        /** White space adjacent to an unwrappable node can be ignored for wrapping */
        isIgnorableWhiteSpaceNode(node: Node): boolean

        postApply(textNodes: Node[], range: RangyRange, positionsToPreserve?: DomPosition[], isUndo?: boolean): void

        createContainer(parentNode: Node): Element

        elementHasProperties(el: Element, props: object): boolean

        elementHasAttributes(el: Element, attrs: string[]): boolean

        applyToTextNode(textNode: Node, positionsToPreserve?: DomPosition[]): void

        isRemovable(el: Element): boolean

        isEmptyContainer(el: Element): boolean

        removeEmptyContainers(range: RangyRange): void

        undoToTextNode(textNode: Node, range: RangyRange, ancestorWithClass: Element, positionsToPreserve: DomPosition[]): void

        splitAncestorWithClass(container: Node, offset: number, positionsToPreserve: DomPosition[]): void

        undoToAncestor(ancestorWithClass: Element, positionsToPreserve: DomPosition[]): void

        applyToRange(range: RangyRange, rangesToPreserve?: RangyRange[]): void;

        applyToRanges(ranges: RangyRange[]): RangyRange[]

        applyToSelection(win?: Window): void;

        undoToRange(range: RangyRange, rangesToPreserve?: RangyRange[]): void;

        undoToRanges(ranges: RangyRange[]): RangyRange[]

        undoToSelection(win?: Window): void;

        isAppliedToRange(range: RangyRange): boolean;

        isAppliedToRanges(ranges: RangyRange[]): boolean;

        isAppliedToSelection(win?: Window): boolean;

        toggleRange(range: RangyRange): void;

        toggleSelection(win?: Window): void;

        getElementsWithClassIntersectingRange(range: RangyRange): (Node|null)[]

        detach(doc?: Document | Window | HTMLIFrameElement): void;

        className: string;
        cssClass: string;
    }
    export function createClassApplier(theClass: string, options?: ClassApplierOpts, tagNames?: string|string[]): ClassApplier;
}
