import ViewDocument from "./document";
import ViewDocumentFragment from "./documentfragment";
import DocumentSelection from "./documentselection";
import EditableElement from "./editableelement";
import ViewElement from "./element";
import { BlockFillerMode } from "./filler";
import { MatcherPattern } from "./matcher";
import ViewNode from "./node";
import Position from "./position";
import ViewRange from "./range";
import RawElement from "./rawelement";
import ViewSelection from "./selection";
import ViewText from "./text";
import UIElement from "./uielement";

export default class DomConverter {
    readonly blockElements: string[];
    readonly blockFillerMode: BlockFillerMode;
    readonly document: ViewDocument;
    readonly preElements: string[];

    constructor(document: ViewDocument, options?: { blockFillerMode?: BlockFillerMode | undefined });
    bindDocumentFragments(domFragment: DocumentFragment, viewFragment: ViewDocumentFragment): void;
    bindElements(domElement: HTMLElement, viewElement: ViewElement): void;
    bindFakeSelection(domElement: HTMLElement, viewDocumentSelection: DocumentSelection): void;
    domChildrenToView(
        domElement: HTMLElement,
        options?: { bind?: boolean | undefined; withChildren?: boolean | undefined; keepOriginalCase?: boolean | undefined },
    ): Generator<Node>;
    domPositionToView(domParent: Node, domOffset: number): Position;
    domRangeToView(domRange: Range): ViewRange | null;
    domSelectionToView(domSelection: Selection): ViewSelection;
    domToView(
        domNode: Node | DocumentFragment,
        options?: { bind?: boolean | undefined; withChildren?: boolean | undefined; keepOriginalCase?: boolean | undefined },
    ): ViewNode | ViewDocumentFragment | null;
    fakeSelectionToView(domElement: HTMLElement): ViewSelection | undefined;
    findCorrespondingDomText(viewText: ViewText): Text | null;
    findCorrespondingViewText(domText: Text): ViewText | null;
    focus(viewEditable: EditableElement): void;
    getHostViewElement(domNode: Node): UIElement | RawElement | null;
    isBlockFiller(domNode: Node): boolean;
    isComment(node: Node): boolean;
    isDocumentFragment(node: Node): boolean;
    isDomSelectionBackward(DOM: Selection): boolean;
    isDomSelectionCorrect(domSelection: Selection): boolean;
    isElement(node: Node): boolean;
    mapDomToView(
        domElementOrDocumentFragment: DocumentFragment | Element,
    ): ViewElement | ViewDocumentFragment | undefined;
    mapViewToDom(viewNode: ViewElement | ViewDocumentFragment): Node | DocumentFragment | undefined;
    registerRawContentMatcher(pattern: MatcherPattern): void;
    unbindDomElement(domElement: HTMLElement): void;
    viewChildrenToDom(
        viewElement: ViewElement | ViewDocumentFragment,
        domDocument: Document,
        options?: { bind?: boolean | undefined; withChildren?: boolean | undefined },
    ): Generator<Node>;
    viewPositionToDom(viewPosition: Position): { parent: Node; offset: number } | null;
    viewRangeToDom(viewRange: ViewRange): Range;
    viewToDom(
        viewNode: ViewNode | ViewDocumentFragment,
        domDocument: Document,
        options?: { bind?: boolean | undefined; withChildren?: boolean | undefined },
    ): Node | DocumentFragment;
}
