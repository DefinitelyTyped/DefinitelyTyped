import Element from '../model/element';
import ViewDocument from './document';
import ViewDocumentFragment from './documentfragment';
import DocumentSelection from './documentselection';
import EditableElement from './editableelement';
import ViewElement from './element';
import { MatcherPattern } from './matcher';
import ViewNode from './node';
import Position from './position';
import ViewRange from './range';
import RawElement from './rawelement';
import ViewSelection from './selection';
import ViewText from './text';
import UIElement from './uielement';

/**
 * `DomConverter` is a set of tools to do transformations between DOM nodes and view nodes. It also handles
 * {@link module:engine/view/domconverter~DomConverter#bindElements bindings} between these nodes.
 *
 * An instance of the DOM converter is available under
 * {@link module:engine/view/view~View#domConverter `editor.editing.view.domConverter`}.
 *
 * The DOM converter does not check which nodes should be rendered (use {@link module:engine/view/renderer~Renderer}), does not keep the
 * state of a tree nor keeps the synchronization between the tree view and the DOM tree (use {@link module:engine/view/document~Document}).
 *
 * The DOM converter keeps DOM elements to view element bindings, so when the converter gets destroyed, the bindings are lost.
 * Two converters will keep separate binding maps, so one tree view can be bound with two DOM trees.
 */
export default class DomConverter {
    constructor(
        document: ViewDocument,
        options?: { renderingMode?: 'data' | 'editing'; blockFillerMode?: BlockFillerMode | undefined },
    );
    readonly document: ViewDocument;
    readonly renderingMode: 'data' | 'editing';
    blockFillerMode: BlockFillerMode;
    readonly preElements: ['pre'];
    readonly blockElements: [
        'address',
        'article',
        'aside',
        'blockquote',
        'caption',
        'center',
        'dd',
        'details',
        'dir',
        'div',
        'dl',
        'dt',
        'fieldset',
        'figcaption',
        'figure',
        'footer',
        'form',
        'h1',
        'h2',
        'h3',
        'h4',
        'h5',
        'h6',
        'header',
        'hgroup',
        'legend',
        'li',
        'main',
        'menu',
        'nav',
        'ol',
        'p',
        'pre',
        'section',
        'summary',
        'table',
        'tbody',
        'td',
        'tfoot',
        'th',
        'thead',
        'tr',
        'ul',
    ];
    readonly inlineObjectElements: [
        'object',
        'iframe',
        'input',
        'button',
        'textarea',
        'select',
        'option',
        'video',
        'embed',
        'audio',
        'img',
        'canvas',
    ];
    bindDocumentFragments(domFragment: DocumentFragment, viewFragment: ViewDocumentFragment): void;
    /**
     * Decides whether given pair of attribute key and value should be passed further down the pipeline.
     */
    shouldRenderAttribute(attributeKey: string, attributeValue: string, elementName: string): boolean;
    /**
     * Set `domElement`'s content using provided `html` argument. Apply necessary filtering for the editing pipeline.
     */
    setContentOf(domElement: HTMLElement, html: string): void;
    bindElements(domElement: HTMLElement, viewElement: ViewElement): void;
    bindFakeSelection(domElement: HTMLElement, viewDocumentSelection: DocumentSelection): void;
    domChildrenToView(
        domElement: HTMLElement,
        options?: {
            bind?: boolean | undefined;
            withChildren?: boolean | undefined;
            keepOriginalCase?: boolean | undefined;
        },
    ): Generator<Node>;
    domPositionToView(domParent: Node, domOffset?: number): Position;
    domRangeToView(domRange: Range): ViewRange | null;
    domSelectionToView(domSelection: Selection): ViewSelection;
    domToView(
        domNode: DocumentFragment,
        options?: {
            bind?: boolean | undefined;
            withChildren?: boolean | undefined;
            keepOriginalCase?: boolean | undefined;
            skipComments?: boolean | undefined;
        },
    ): ViewDocumentFragment;
    domToView(
        domNode: Node,
        options?: {
            bind?: boolean | undefined;
            withChildren?: boolean | undefined;
            keepOriginalCase?: boolean | undefined;
            skipComments?: boolean | undefined;
        },
    ): ViewNode | null;
    fakeSelectionToView(domElement: HTMLElement): ViewSelection | undefined;
    findCorrespondingDomText(viewText: ViewText): Text | null;
    findCorrespondingViewText(domText: Text): ViewText | null;
    focus(viewEditable: EditableElement): void;
    getHostViewElement(domNode: Node): UIElement | RawElement | null;
    isBlockFiller(domNode: Node): boolean;
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
    /**
     * Converts the view to the DOM. For all text nodes, not bound elements and document fragments new items will
     * be created. For bound elements and document fragments the method will return corresponding items.
     */
    viewToDom(
        viewNode: ViewDocumentFragment,
        domDocument: Document,
        options?: { bind?: boolean | undefined; withChildren?: boolean | undefined },
    ): DocumentFragment;
    /**
     * Converts the view to the DOM. For all text nodes, not bound elements and document fragments new items will
     * be created. For bound elements and document fragments the method will return corresponding items.
     */
    viewToDom(
        viewNode: ViewNode,
        domDocument: Document,
        options?: { bind?: boolean | undefined; withChildren?: boolean | undefined },
    ): Node;
    /**
     * Sets the attribute on a DOM element.
     *
     * **Note**: To remove the attribute, use {@link #removeDomElementAttribute}.
     */
    setDomElementAttribute(
        domElement: HTMLElement,
        key: string,
        value: string,
        relatedViewElement?: ViewElement | null,
    ): void;

    /**
     * Removes an attribute from a DOM element.
     *
     * **Note**: To set the attribute, use {@link #setDomElementAttribute}.
     */
    removeDomElementAttribute(domElement: HTMLElement, key: string): void;
}

export type BlockFillerMode = 'br' | 'nbsp' | 'markedNbsp';
