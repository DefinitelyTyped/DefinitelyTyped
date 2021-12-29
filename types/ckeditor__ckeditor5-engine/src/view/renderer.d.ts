import { ChangeType } from './document';
import DocumentSelection from './documentselection';
import DomConverter from './domconverter';
import Node from './node';

export default class Renderer {
    constructor(domConverter: DomConverter, selection: DocumentSelection);
    readonly domDocuments: Set<Document>;
    readonly domConverter: DomConverter;
    readonly markedAttributes: Set<Node>;
    readonly markedChildren: Set<Node>;
    readonly markedTexts: Set<Node>;
    readonly selection: DocumentSelection;
    get isFocused(): boolean;
    protected set isFocused(value: boolean);
    get isSelecting(): boolean;
    protected set isSelecting(value: boolean);
    /**
     * Marks a view node to be updated in the DOM by {@link #render `render()`}.
     *
     * Note that only view nodes whose parents have corresponding DOM elements need to be marked to be synchronized.
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
