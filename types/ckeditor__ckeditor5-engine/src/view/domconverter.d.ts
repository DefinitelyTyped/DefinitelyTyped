import ModelDocument from "../model/document";
import DocumentSelection from "../model/documentselection";
import ViewRange from "./range";
import ViewSelection from "./selection";
import ViewElement from "./element";
import ViewDocumentFragment from "./documentfragment";
import ViewNode from "./node";
import ViewPosition from "./position";
import ViewText from "./text";
import ViewEditableElement from "./editableelement";
import ViewRawElement from "./rawelement";
import { MatcherPattern } from "./matcher";

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
    /**
     * Creates a DOM converter.
     */
    constructor(document: ModelDocument, options?: { blockFillerMode: BlockFillerMode });
    /**
     * Binds a given DOM element that represents fake selection to a **position** of a
     * {@link module:engine/view/documentselection~DocumentSelection document selection}.
     * Document selection copy is stored and can be retrieved by the
     * {@link module:engine/view/domconverter~DomConverter#fakeSelectionToView} method.
     */
    bindFakeSelection(domElement: HTMLElement, viewDocumentSelection: DocumentSelection): void;
    /**
     * Returns a {@link module:engine/view/selection~Selection view selection} instance corresponding to a given
     * DOM element that represents fake selection. Returns `undefined` if binding to the given DOM element does not exist.
     */
    fakeSelectionToView(domElement: HTMLElement): ViewSelection | undefined;
    /**
     * Binds DOM and view elements, so it will be possible to get corresponding elements using
     * {@link module:engine/view/domconverter~DomConverter#mapDomToView} and
     * {@link module:engine/view/domconverter~DomConverter#mapViewToDom}.
     */
    bindElements(domElement: HTMLElement, viewElement: ViewElement): void;
    /**
     * Unbinds a given DOM element from the view element it was bound to. Unbinding is deep, meaning that all children of
     * the DOM element will be unbound too.
     */
    unbindDomElement(domElement: HTMLElement): void;
    /**
     * Binds DOM and view document fragments, so it will be possible to get corresponding document fragments using
     * {@link module:engine/view/domconverter~DomConverter#mapDomToView} and
     * {@link module:engine/view/domconverter~DomConverter#mapViewToDom}.
     */
    bindDocumentFragments(domFragment: DocumentFragment, viewFragment: ViewDocumentFragment): void;
    /**
     * Converts the view to the DOM. For all text nodes, not bound elements and document fragments new items will
     * be created. For bound elements and document fragments the method will return corresponding items.
     */
    viewToDom(
        viewNode: ViewDocumentFragment | ViewNode,
        domDocument: Document,
        options?: { bind?: boolean; withChildren?: boolean },
    ): Node | DocumentFragment;
    /**
     * Converts children of the view element to DOM using the
     * {@link module:engine/view/domconverter~DomConverter#viewToDom} method.
     * Additionally, this method adds block {@link module:engine/view/filler filler} to the list of children, if needed.
     */
    viewChildrenToDom(
        viewElement: ViewElement,
        domDocument: Document,
        options?: { bind?: boolean; withChildren?: boolean },
    ): Iterable<Node>;
    /**
     * Converts view {@link module:engine/view/range~Range} to DOM range.
     * Inline and block {@link module:engine/view/filler fillers} are handled during the conversion.
     */
    viewRangeToDom(viewRange: ViewRange): Range;
    /**
     * Converts view {@link module:engine/view/position~Position} to DOM parent and offset.
     *
     * Inline and block {@link module:engine/view/filler fillers} are handled during the conversion.
     * If the converted position is directly before inline filler it is moved inside the filler.
     */
    viewPositionToDom(
        viewPosition: ViewPosition,
    ): {
        parent: Node;
        offset: number;
    } | null;
    /**
     * Converts DOM to view. For all text nodes, not bound elements and document fragments new items will
     * be created. For bound elements and document fragments function will return corresponding items. For
     * {@link module:engine/view/filler fillers} `null` will be returned.
     * For all DOM elements rendered by {@link module:engine/view/uielement~UIElement} that UIElement will be returned.
     */
    domToView(
        domNode: Node | DocumentFragment,
        options?: { bind?: boolean; withChildren?: boolean; keepOriginalCase?: boolean },
    ): ViewDocumentFragment | null;
    /**
     * Converts children of the DOM element to view nodes using
     * the {@link module:engine/view/domconverter~DomConverter#domToView} method.
     * Additionally this method omits block {@link module:engine/view/filler filler}, if it exists in the DOM parent.
     */
    domChildrenToView(
        domElement: HTMLElement,
        options?: { bind?: boolean; withChildren?: boolean; keepOriginalCase?: boolean },
    ): Iterable<ViewNode>;
    /**
     * Converts DOM selection to view {@link module:engine/view/selection~Selection}.
     * Ranges which cannot be converted will be omitted.
     */
    domSelectionToView(domSelection: Selection): ViewSelection;
    /**
     * Converts DOM Range to view {@link module:engine/view/range~Range}.
     * If the start or end position can not be converted `null` is returned.
     */
    domRangeToView(domRange: Range): ViewRange | null;
    /**
     * Converts DOM parent and offset to view {@link module:engine/view/position~Position}.
     *
     * If the position is inside a {@link module:engine/view/filler filler} which has no corresponding view node,
     * position of the filler will be converted and returned.
     *
     * If the position is inside DOM element rendered by {@link module:engine/view/uielement~UIElement}
     * that position will be converted to view position before that UIElement.
     *
     * If structures are too different and it is not possible to find corresponding position then `null` will be returned.
     */
    domPositionToView(domParent: Node, domOffset: number): ViewPosition;
    /**
     * Returns corresponding view {@link module:engine/view/element~Element Element} or
     * {@link module:engine/view/documentfragment~DocumentFragment} for provided DOM element or
     * document fragment. If there is no view item {@link module:engine/view/domconverter~DomConverter#bindElements bound}
     * to the given DOM - `undefined` is returned.
     *
     * For all DOM elements rendered by a {@link module:engine/view/uielement~UIElement} or
     * a {@link module:engine/view/rawelement~RawElement}, the parent `UIElement` or `RawElement` will be returned.
     */
    mapDomToView(
        domElementOrDocumentFragment: DocumentFragment | Element,
    ): ViewElement | ViewDocumentFragment | undefined;
    /**
     * Finds corresponding text node. Text nodes are not {@link module:engine/view/domconverter~DomConverter#bindElements bound},
     * corresponding text node is returned based on the sibling or parent.
     *
     * If the directly previous sibling is a {@link module:engine/view/domconverter~DomConverter#bindElements bound} element, it is used
     * to find the corresponding text node.
     *
     * If this is a first child in the parent and the parent is a {@link module:engine/view/domconverter~DomConverter#bindElements bound}
     * element, it is used to find the corresponding text node.
     *
     * For all text nodes rendered by a {@link module:engine/view/uielement~UIElement} or
     * a {@link module:engine/view/rawelement~RawElement}, the parent `UIElement` or `RawElement` will be returned.
     *
     * Otherwise `null` is returned.
     *
     * Note that for the block or inline {@link module:engine/view/filler filler} this method returns `null`.
     */
    findCorrespondingViewText(domText: Text): ViewText;
    /**
     * Returns corresponding DOM item for provided {@link module:engine/view/element~Element Element} or
     * {@link module:engine/view/documentfragment~DocumentFragment DocumentFragment}.
     * To find a corresponding text for {@link module:engine/view/text~Text view Text instance}
     * use {@link #findCorrespondingDomText}.
     */
    mapViewToDom(documentFragmentOrElement: ViewElement | ViewDocumentFragment): Node | DocumentFragment | undefined;
    /**
     * Finds corresponding text node. Text nodes are not {@link module:engine/view/domconverter~DomConverter#bindElements bound},
     * corresponding text node is returned based on the sibling or parent.
     *
     * If the directly previous sibling is a {@link module:engine/view/domconverter~DomConverter#bindElements bound} element, it is used
     * to find the corresponding text node.
     *
     * If this is a first child in the parent and the parent is a {@link module:engine/view/domconverter~DomConverter#bindElements bound}
     * element, it is used to find the corresponding text node.
     *
     * Otherwise `null` is returned.
     */
    findCorrespondingDomText(viewText: ViewText): Text | null;
    /**
     * Focuses DOM editable that is corresponding to provided {@link module:engine/view/editableelement~EditableElement}.
     */
    focus(viewEditable: ViewEditableElement): void;
    /**
     * Returns `true` when `node.nodeType` equals `Node.ELEMENT_NODE`.
     */
    isElement(node: Node): boolean;
    /**
     * Returns `true` when `node.nodeType` equals `Node.DOCUMENT_FRAGMENT_NODE`.
     */
    isDocumentFragment(node: Node): boolean;
    /**
     * Returns `true` when `node.nodeType` equals `Node.COMMENT_NODE`.
     */
    isComment(node: Node): boolean;
    /**
     * Checks if the node is an instance of the block filler for this DOM converter.
     *
     *        const converter = new DomConverter( viewDocument, { blockFillerMode: 'br' } );
     *
     *        converter.isBlockFiller( BR_FILLER( document ) ); // true
     *        converter.isBlockFiller( NBSP_FILLER( document ) ); // false
     *
     * **Note:**: For the `'nbsp'` mode the method also checks context of a node so it cannot be a detached node.
     *
     * **Note:** A special case in the `'nbsp'` mode exists where the `<br>` in `<p><br></p>` is treated as a block filler.
     */
    isBlockFiller(domNode: Node): boolean;
    /**
     * Returns `true` if given selection is a backward selection, that is, if it's `focus` is before `anchor`.
     */
    isDomSelectionBackward(selection: Selection): boolean;
    /**
     * Returns a parent {@link module:engine/view/uielement~UIElement} or {@link module:engine/view/rawelement~RawElement}
     * that hosts the provided DOM node. Returns `null` if there is no such parent.
     */
    getHostViewElement(domNode: Node): ViewRawElement | null;
    /**
     * Checks if the given selection's boundaries are at correct places.
     *
     * The following places are considered as incorrect for selection boundaries:
     *
     * * before or in the middle of an inline filler sequence,
     * * inside a DOM element which represents {@link module:engine/view/uielement~UIElement a view UI element},
     * * inside a DOM element which represents {@link module:engine/view/rawelement~RawElement a view raw element}.
     */
    isDomSelectionCorrect(domSelection: Selection): boolean;
    /**
     * Registers a {@link module:engine/view/matcher~MatcherPattern} for view elements whose content should be treated as raw data
     * and not processed during the conversion from DOM nodes to view elements.
     *
     * This is affecting how {@link module:engine/view/domconverter~DomConverter#domToView} and
     * {@link module:engine/view/domconverter~DomConverter#domChildrenToView} process DOM nodes.
     *
     * The raw data can be later accessed by a
     * {@link module:engine/view/element~Element#getCustomProperty custom property of a view element} called `"$rawContent"`.
     */
    registerRawContentMatcher(pattern: MatcherPattern): void;
}

type BlockFillerMode = "br" | "nbsp";

export {};
