import DomConverter from "./domconverter";
import DocumentSelection from "./documentselection";
import Node from "./node";
import { ChangeType } from "./document";
import ObservableMixin from "@ckeditor/ckeditor5-utils/src/observablemixin";

/**
 * Renderer is responsible for updating the DOM structure and the DOM selection based on
 * the {@link module:engine/view/renderer~Renderer#markToSync information about updated view nodes}.
 * In other words, it renders the view to the DOM.
 *
 * Its main responsibility is to make only the necessary, minimal changes to the DOM. However, unlike in many
 * virtual DOM implementations, the primary reason for doing minimal changes is not the performance but ensuring
 * that native editing features such as text composition, autocompletion, spell checking, selection's x-index are
 * affected as little as possible.
 *
 * Renderer uses {@link module:engine/view/domconverter~DomConverter} to transform view nodes and positions
 * to and from the DOM.
 */
export default class Renderer extends ObservableMixin {
    /**
     * Creates a renderer instance.
     */
    constructor(domConverter: DomConverter, selection: DocumentSelection);

    /**
     * Set of DOM Documents instances.
     */
    readonly domDocuments: Set<Document>;

    readonly domConverter: DomConverter;

    /**
     * Set of nodes which attributes changed and may need to be rendered.
     */
    readonly markedAttributes: Set<Node>;

    /**
     * Set of elements which child lists changed and may need to be rendered.
     */
    readonly markedChildren: Set<Node>;

    /**
     * Set of text nodes which text data changed and may need to be rendered.
     */
    readonly markedTexts: Set<Node>;

    /**
     * View selection. Renderer updates DOM selection based on the view selection.
     *
     * @readonly
     * @member {module:engine/view/documentselection~DocumentSelection}
     */
    readonly selection: ViewDocumentSelection;

    /**
     * Indicates if the view document is focused and selection can be rendered. Selection will not be rendered if
     * this is set to `false`.
     */
    isFocused: boolean;

    /**
     * Marks a view node to be updated in the DOM by {@link #render `render()`}.
     *
     * Note that only view nodes whose parents have corresponding DOM elements need to be marked to be synchronized.
     *
     * @see #markedAttributes
     * @see #markedChildren
     * @see #markedTexts
     */
    markToSync(type: ChangeType, node: Node): void;

    /**
     * Renders all buffered changes ({@link #markedAttributes}, {@link #markedChildren} and {@link #markedTexts}) and
     * the current view selection (if needed) to the DOM by applying a minimal set of changes to it.
     *
     * Renderer tries not to break the text composition (e.g. IME) and x-index of the selection,
     * so it does as little as it is needed to update the DOM.
     *
     * Renderer also handles {@link module:engine/view/filler fillers}. Especially, it checks if the inline filler is needed
     * at the selection position and adds or removes it. To prevent breaking text composition inline filler will not be
     * removed as long as the selection is in the text node which needed it at first.
     */
    render(): void;
}
