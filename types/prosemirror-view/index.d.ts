// Type definitions for prosemirror-view 1.23
// Project: https://github.com/ProseMirror/prosemirror-view
// Definitions by: Bradley Ayers <https://github.com/bradleyayers>
//                 David Hahn <https://github.com/davidka>
//                 Tim Baumann <https://github.com/timjb>
//                 Patrick Simmelbauer <https://github.com/patsimm>
//                 Ifiok Jr. <https://github.com/ifiokjr>
//                 Mike Morearty <https://github.com/mmorearty>
//                 Ocavue <https://github.com/ocavue>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.0

import { DOMParser, DOMSerializer, Node as ProsemirrorNode, ResolvedPos, Slice, Schema, Mark } from 'prosemirror-model';
import { EditorState, Selection, Transaction, Plugin } from 'prosemirror-state';
import { Mapping } from 'prosemirror-transform';

// Exported for testing
export function __serializeForClipboard<S extends Schema = any>(
    view: EditorView<S>,
    slice: Slice<S>,
): { dom: HTMLElement; text: string };
export function __parseFromClipboard<S extends Schema = any>(
    view: EditorView<S>,
    text: string,
    html: string,
    plainText: boolean,
    $context: ResolvedPos<S>,
): Slice<S>;
export function __endComposition(view: EditorView, forceUpdate?: boolean): boolean;

/**
 * The `spec` for a widget decoration
 */
export interface WidgetDecorationSpec {
    /**
     * Controls which side of the document position this widget is
     * associated with. When negative, it is drawn before a cursor
     * at its position, and content inserted at that position ends
     * up after the widget. When zero (the default) or positive, the
     * widget is drawn after the cursor and content inserted there
     * ends up before the widget.
     *
     * When there are multiple widgets at a given position, their
     * `side` values determine the order in which they appear. Those
     * with lower values appear first. The ordering of widgets with
     * the same `side` value is unspecified.
     *
     * When `marks` is null, `side` also determines the marks that
     * the widget is wrapped in—those of the node before when
     * negative, those of the node after when positive.
     */
    side?: number | null | undefined;
    /**
     * The precise set of marks to draw around the widget.
     */
    marks?: Mark[] | null | undefined;
    /**
     * Can be used to control which DOM events, when they bubble out
     * of this widget, the editor view should ignore.
     */
    stopEvent?: ((event: Event) => boolean) | null | undefined;
    /**
     * When set (defaults to false), selection changes inside the
     * widget are ignored, and don't cause ProseMirror to try and
     * re-sync the selection with its selection state.
     */
    ignoreSelection?: boolean;
    /**
     * When comparing decorations of this type (in order to decide
     * whether it needs to be redrawn), ProseMirror will by default
     * compare the widget DOM node by identity. If you pass a key,
     * that key will be compared instead, which can be useful when
     * you generate decorations on the fly and don't want to store
     * and reuse DOM nodes. Make sure that any widgets with the same
     * key are interchangeable—if widgets differ in, for example,
     * the behavior of some event handler, they should get
     * different keys.
     */
    key?: string | null | undefined;
    /**
     * Called when the widget decoration is removed as a result of mapping
     */
    destroy?: (node: Node) => void;
}
/**
 * The `spec` for the inline decoration.
 */
export interface InlineDecorationSpec {
    /**
     * Determines how the left side of the decoration is
     * [mapped](#transform.Position_Mapping) when content is
     * inserted directly at that position. By default, the decoration
     * won't include the new content, but you can set this to `true`
     * to make it inclusive.
     */
    inclusiveStart?: boolean | null | undefined;
    /**
     * Determines how the right side of the decoration is mapped.
     */
    inclusiveEnd?: boolean | null | undefined;
}
/**
 * Decoration objects can be provided to the view through the
 * [`decorations` prop](#view.EditorProps.decorations). They come in
 * several variants—see the static members of this class for details.
 */
export class Decoration<T extends object = { [key: string]: any }> {
    /**
     * The start position of the decoration.
     */
    from: number;
    /**
     * The end position. Will be the same as `from` for [widget
     * decorations](#view.Decoration^widget).
     */
    to: number;
    /**
     * The spec provided when creating this decoration. Can be useful
     * if you've stored extra information in that object.
     */
    spec: T;
    /**
     * Creates a widget decoration, which is a DOM node that's shown in
     * the document at the given position. It is recommended that you
     * delay rendering the widget by passing a function that will be
     * called when the widget is actually drawn in a view, but you can
     * also directly pass a DOM node. getPos can be used to find the
     * widget's current document position.
     */
    static widget<T extends object = { [key: string]: any }>(
        pos: number,
        toDOM: ((view: EditorView, getPos: () => number) => Node) | Node,
        spec?: T & WidgetDecorationSpec,
    ): Decoration<T & WidgetDecorationSpec>;
    /**
     * Creates an inline decoration, which adds the given attributes to
     * each inline node between `from` and `to`.
     */
    static inline<T extends object = { [key: string]: any }>(
        from: number,
        to: number,
        attrs: DecorationAttrs,
        spec?: T & InlineDecorationSpec,
    ): Decoration<T & InlineDecorationSpec>;
    /**
     * Creates a node decoration. `from` and `to` should point precisely
     * before and after a node in the document. That node, and only that
     * node, will receive the given attributes.
     */
    static node<T extends object = { [key: string]: any }>(
        from: number,
        to: number,
        attrs: DecorationAttrs,
        spec?: T,
    ): Decoration<T>;
}
/**
 * A set of attributes to add to a decorated node. Most properties
 * simply directly correspond to DOM attributes of the same name,
 * which will be set to the property's value. These are exceptions:
 */
export interface DecorationAttrs {
    /**
     * A CSS class name or a space-separated set of class names to be
     * _added_ to the classes that the node already had.
     */
    class?: string | null | undefined;
    /**
     * A string of CSS to be _added_ to the node's existing `style` property.
     */
    style?: string | null | undefined;
    /**
     * When non-null, the target node is wrapped in a DOM element of
     * this type (and the other attributes are applied to this element).
     */
    nodeName?: string | null | undefined;
    /**
     * Specify additional attrs that will be mapped directly to the
     * target node's DOM attributes.
     */
    [key: string]: string | null | undefined;
}
/**
 * A collection of [decorations](#view.Decoration), organized in
 * such a way that the drawing algorithm can efficiently use and
 * compare them. This is a persistent data structure—it is not
 * modified, updates create a new value.
 */
export class DecorationSet<S extends Schema = any> {
    /**
     * Find all decorations in this set which touch the given range
     * (including decorations that start or end directly at the
     * boundaries) and match the given predicate on their spec. When
     * `start` and `end` are omitted, all decorations in the set are
     * considered. When `predicate` isn't given, all decorations are
     * assumed to match.
     */
    find(start?: number, end?: number, predicate?: (spec: { [key: string]: any }) => boolean): Decoration[];
    /**
     * Map the set of decorations in response to a change in the
     * document.
     */
    map(
        mapping: Mapping,
        doc: ProsemirrorNode<S>,
        options?: { onRemove?: ((decorationSpec: { [key: string]: any }) => void) | null | undefined },
    ): DecorationSet<S>;
    /**
     * Add the given array of decorations to the ones in the set,
     * producing a new set. Needs access to the current document to
     * create the appropriate tree structure.
     */
    add(doc: ProsemirrorNode<S>, decorations: Decoration[]): DecorationSet<S>;
    /**
     * Create a new set that contains the decorations in this set, minus
     * the ones in the given array.
     */
    remove(decorations: Decoration[]): DecorationSet<S>;
    /**
     * Create a set of decorations, using the structure of the given
     * document.
     */
    static create<S extends Schema = any>(doc: ProsemirrorNode<S>, decorations: Decoration[]): DecorationSet<S>;
    /**
     * The empty set of decorations.
     */
    static empty: DecorationSet;
}
/**
 * An editor view manages the DOM structure that represents an
 * editable document. Its state and behavior are determined by its
 * [props](#view.DirectEditorProps).
 */
export class EditorView<S extends Schema = any> {
    /**
     * Create a view. `place` may be a DOM node that the editor should
     * be appended to, a function that will place it into the document,
     * or an object whose `mount` property holds the node to use as the
     * document container. If it is `null`, the editor will not be added
     * to the document.
     */
    constructor(place: Node | ((p: Node) => void) | { mount: Node } | undefined, props: DirectEditorProps<S>);
    /**
     * The view's current [state](#state.EditorState).
     */
    state: EditorState<S>;
    /**
     * An editable DOM node containing the document. (You probably
     * should not directly interfere with its content.)
     */
    dom: Element;
    /**
     * Indicates whether the editor is currently [editable](#view.EditorProps.editable).
     */
    editable: boolean;
    /**
     * When editor content is being dragged, this object contains
     * information about the dragged slice and whether it is being
     * copied or moved. At any other time, it is null.
     */
    dragging?: { slice: Slice<S>; move: boolean } | null | undefined;
    /**
     * Holds true when a composition is active.
     */
    composing: boolean;
    /**
     * The view's current [props](#view.EditorProps).
     */
    props: DirectEditorProps<S>;
    /**
     * Update the view's props. Will immediately cause an update to
     * the DOM.
     */
    update(props: DirectEditorProps<S>): void;
    /**
     * Update the view by updating existing props object with the object
     * given as argument. Equivalent to `view.update(Object.assign({},
     * view.props, props))`.
     */
    setProps(props: Partial<DirectEditorProps<S>>): void;
    /**
     * Update the editor's `state` prop, without touching any of the
     * other props.
     */
    updateState(state: EditorState<S>): void;
    /**
     * Goes over the values of a prop, first those provided directly,
     * then those from plugins (in order), and calls `f` every time a
     * non-undefined value is found. When `f` returns a truthy value,
     * that is immediately returned. When `f` isn't provided, it is
     * treated as the identity function (the prop value is returned
     * directly).
     */
    someProp(propName: string, f?: (prop: any) => any): any;
    /**
     * Query whether the view has focus.
     */
    hasFocus(): boolean;
    /**
     * Focus the editor.
     */
    focus(): void;
    /**
     * Get the document root in which the editor exists. This will
     * usually be the top-level `document`, but might be a [shadow
     * DOM](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Shadow_DOM)
     * root if the editor is inside one.
     */
    root: Document | DocumentFragment;
    /**
     * Given a pair of viewport coordinates, return the document
     * position that corresponds to them. May return null if the given
     * coordinates aren't inside of the editor. When an object is
     * returned, its `pos` property is the position nearest to the
     * coordinates, and its `inside` property holds the position of the
     * inner node that the position falls inside of, or -1 if it is at
     * the top level, not in any node.
     */
    posAtCoords(coords: { left: number; top: number }): { pos: number; inside: number } | null | undefined;
    /**
     * Returns the viewport rectangle at a given document position.
     * `left` and `right` will be the same number, as this returns a
     * flat cursor-ish rectangle. If the position is between two things
     * that aren't directly adjacent, `side` determines which element is
     * used. When < 0, the element before the position is used,
     * otherwise the element after.
     */
    coordsAtPos(pos: number, side?: number): { left: number; right: number; top: number; bottom: number };
    /**
     * Find the DOM position that corresponds to the given document
     * position. When `side` is negative, find the position as close as
     * possible to the content before the position. When positive,
     * prefer positions close to the content after the position. When
     * zero, prefer as shallow a position as possible.
     *
     * Note that you should **not** mutate the editor's internal DOM,
     * only inspect it (and even that is usually not necessary).
     */
    domAtPos(pos: number, side?: number): { node: Node; offset: number };
    /**
     * Find the DOM node that represents the document node after the
     * given position. May return null when the position doesn't point
     * in front of a node or if the node is inside an opaque node view.
     *
     * This is intended to be able to call things like getBoundingClientRect
     * on that DOM node. Do not mutate the editor DOM directly, or add
     * styling this way, since that will be immediately overriden by the
     * editor as it redraws the node.
     */
    nodeDOM(pos: number): Node | null | undefined;
    /**
     * Find the document position that corresponds to a given DOM position.
     * (Whenever possible, it is preferable to inspect the document structure
     * directly, rather than poking around in the DOM, but sometimes—for
     * example when interpreting an event target—you don't have a choice.)
     *
     * The bias (default: -1) parameter can be used to influence which side of
     * a DOM node to use when the position is inside a leaf node.
     */
    posAtDOM(node: Node, offset: number, bias?: number | null): number;
    /**
     * Find out whether the selection is at the end of a textblock when
     * moving in a given direction. When, for example, given `"left"`,
     * it will return true if moving left from the current cursor
     * position would leave that position's parent textblock. Will apply
     * to the view's current state by default, but it is possible to
     * pass a different state.
     */
    endOfTextblock(dir: 'up' | 'down' | 'left' | 'right' | 'forward' | 'backward', state?: EditorState<S>): boolean;
    /**
     * Removes the editor from the DOM and destroys all [node
     * views](#view.NodeView).
     */
    destroy(): void;
    /**
     * This is true when the view has been
     * [destroyed](#view.EditorView.destroy) (and thus should not be
     * used anymore).
     */
    isDestroyed: boolean;
    /**
     * Dispatch a transaction. Will call
     * [`dispatchTransaction`](#view.DirectEditorProps.dispatchTransaction)
     * when given, and otherwise defaults to applying the transaction to
     * the current state and calling
     * [`updateState`](#view.EditorView.updateState) with the result.
     * This method is bound to the view instance, so that it can be
     * easily passed around.
     */
    dispatch(tr: Transaction<S>): void;
}
/**
 * Props are configuration values that can be passed to an editor view
 * or included in a plugin. This interface lists the supported props.
 *
 * The various event-handling functions may all return `true` to
 * indicate that they handled the given event. The view will then take
 * care to call `preventDefault` on the event, except with
 * `handleDOMEvents`, where the handler itself is responsible for that.
 *
 * How a prop is resolved depends on the prop. Handler functions are
 * called one at a time, starting with the base props and then
 * searching through the plugins (in order of appearance) until one of
 * them returns true. For some props, the first plugin that yields a
 * value gets precedence.
 */
export interface EditorProps<ThisT = unknown, S extends Schema = any> {
    /**
     * Can be an object mapping DOM event type names to functions that
     * handle them. Such functions will be called before any handling
     * ProseMirror does of events fired on the editable DOM element.
     * Contrary to the other event handling props, when returning true
     * from such a function, you are responsible for calling
     * `preventDefault` yourself (or not, if you want to allow the
     * default behavior).
     */
    handleDOMEvents?: HandleDOMEventsProp<ThisT, S> | null | undefined;
    /**
     * Called when the editor receives a `keydown` event.
     */
    handleKeyDown?: ((this: ThisT, view: EditorView<S>, event: KeyboardEvent) => boolean) | null | undefined;
    /**
     * Handler for `keypress` events.
     */
    handleKeyPress?: ((this: ThisT, view: EditorView<S>, event: KeyboardEvent) => boolean) | null | undefined;
    /**
     * Whenever the user directly input text, this handler is called
     * before the input is applied. If it returns `true`, the default
     * behavior of actually inserting the text is suppressed.
     */
    handleTextInput?:
        | ((this: ThisT, view: EditorView<S>, from: number, to: number, text: string) => boolean)
        | null
        | undefined;
    /**
     * Called for each node around a click, from the inside out. The
     * `direct` flag will be true for the inner node.
     */
    handleClickOn?:
        | ((
              this: ThisT,
              view: EditorView<S>,
              pos: number,
              node: ProsemirrorNode<S>,
              nodePos: number,
              event: MouseEvent,
              direct: boolean,
          ) => boolean)
        | null
        | undefined;
    /**
     * Called when the editor is clicked, after `handleClickOn` handlers
     * have been called.
     */
    handleClick?: ((this: ThisT, view: EditorView<S>, pos: number, event: MouseEvent) => boolean) | null | undefined;
    /**
     * Called for each node around a double click.
     */
    handleDoubleClickOn?:
        | ((
              this: ThisT,
              view: EditorView<S>,
              pos: number,
              node: ProsemirrorNode<S>,
              nodePos: number,
              event: MouseEvent,
              direct: boolean,
          ) => boolean)
        | null
        | undefined;
    /**
     * Called when the editor is double-clicked, after `handleDoubleClickOn`.
     */
    handleDoubleClick?:
        | ((this: ThisT, view: EditorView<S>, pos: number, event: MouseEvent) => boolean)
        | null
        | undefined;
    /**
     * Called for each node around a triple click.
     */
    handleTripleClickOn?:
        | ((
              this: ThisT,
              view: EditorView<S>,
              pos: number,
              node: ProsemirrorNode<S>,
              nodePos: number,
              event: MouseEvent,
              direct: boolean,
          ) => boolean)
        | null
        | undefined;
    /**
     * Called when the editor is triple-clicked, after `handleTripleClickOn`.
     */
    handleTripleClick?:
        | ((this: ThisT, view: EditorView<S>, pos: number, event: MouseEvent) => boolean)
        | null
        | undefined;
    /**
     * Can be used to override the behavior of pasting. `slice` is the
     * pasted content parsed by the editor, but you can directly access
     * the event to get at the raw content.
     */
    handlePaste?:
        | ((this: ThisT, view: EditorView<S>, event: ClipboardEvent, slice: Slice<S>) => boolean)
        | null
        | undefined;
    /**
     * Called when something is dropped on the editor. `moved` will be
     * true if this drop moves from the current selection (which should
     * thus be deleted).
     */
    handleDrop?:
        | ((this: ThisT, view: EditorView<S>, event: Event, slice: Slice<S>, moved: boolean) => boolean)
        | null
        | undefined;
    /**
     * Called when the view, after updating its state, tries to scroll
     * the selection into view. A handler function may return false to
     * indicate that it did not handle the scrolling and further
     * handlers or the default behavior should be tried.
     */
    handleScrollToSelection?: ((this: ThisT, view: EditorView<S>) => boolean) | null | undefined;
    /**
     * Can be used to override the way a selection is created when
     * reading a DOM selection between the given anchor and head.
     */
    createSelectionBetween?:
        | ((
              this: ThisT,
              view: EditorView<S>,
              anchor: ResolvedPos<S>,
              head: ResolvedPos<S>,
          ) => Selection<S> | null | undefined)
        | null
        | undefined;
    /**
     * The [parser](#model.DOMParser) to use when reading editor changes
     * from the DOM. Defaults to calling
     * [`DOMParser.fromSchema`](#model.DOMParser^fromSchema) on the
     * editor's schema.
     */
    domParser?: DOMParser<S> | null | undefined;
    /**
     * Can be used to transform pasted HTML text, _before_ it is parsed,
     * for example to clean it up.
     */
    transformPastedHTML?: ((this: ThisT, html: string) => string) | null | undefined;
    /**
     * The [parser](#model.DOMParser) to use when reading content from
     * the clipboard. When not given, the value of the
     * [`domParser`](#view.EditorProps.domParser) prop is used.
     */
    clipboardParser?: DOMParser<S> | null | undefined;
    /**
     * Transform pasted plain text. The `plain` flag will be true when
     * the text is pasted as plain text.
     */
    transformPastedText?: ((this: ThisT, text: string, plain: boolean) => string) | null | undefined;
    /**
     * A function to parse text from the clipboard into a document
     * slice. Called after
     * [`transformPastedText`](#view.EditorProps.transformPastedText).
     * The default behavior is to split the text into lines, wrap them
     * in `<p>` tags, and call
     * [`clipboardParser`](#view.EditorProps.clipboardParser) on it.
     * The `plain` flag will be true when the text is pasted as plain
     * text.
     */
    clipboardTextParser?:
        | ((this: ThisT, text: string, $context: ResolvedPos<S>, plain: boolean) => Slice<S>)
        | null
        | undefined;
    /**
     * Can be used to transform pasted content before it is applied to
     * the document.
     */
    transformPasted?: ((this: ThisT, p: Slice<S>) => Slice<S>) | null | undefined;
    /**
     * Allows you to pass custom rendering and behavior logic for nodes
     * and marks. Should map node and mark names to constructor
     * functions that produce a [`NodeView`](#view.NodeView) object
     * implementing the node's display behavior. For nodes, the third
     * argument `getPos` is a function that can be called to get the
     * node's current position, which can be useful when creating
     * transactions to update it. For marks, the third argument is a
     * boolean that indicates whether the mark's content is inline.
     *
     * `decorations` is an array of node or inline decorations that are
     * active around the node. They are automatically drawn in the
     * normal way, and you will usually just want to ignore this, but
     * they can also be used as a way to provide context information to
     * the node view without adding it to the document itself.
     */
    nodeViews?:
        | {
              [name: string]: ((
                  node: ProsemirrorNode<S>,
                  view: EditorView<S>,
                  /** get the node's current position */
                  getPos: () => number,
                  decorations: Decoration[],
              ) => NodeView<S>) | ((
                  mark: Mark<S>,
                  view: EditorView<S>,
                  /** indicates whether the mark's content is inline */
                  inline: boolean,
              ) => Pick<NodeView<S>, 'dom' | 'contentDOM'>);
          }
        | null
        | undefined;
    /**
     * The DOM serializer to use when putting content onto the
     * clipboard. If not given, the result of
     * [`DOMSerializer.fromSchema`](#model.DOMSerializer^fromSchema)
     * will be used.
     */
    clipboardSerializer?: DOMSerializer<S> | null | undefined;
    /**
     * A function that will be called to get the text for the current
     * selection when copying text to the clipboard. By default, the
     * editor will use [`textBetween`](#model.Node.textBetween) on the
     * selected range.
     */
    clipboardTextSerializer?: ((this: ThisT, p: Slice<S>) => string) | null | undefined;
    /**
     * A set of [document decorations](#view.Decoration) to show in the
     * view.
     */
    decorations?: ((this: ThisT, state: EditorState<S>) => DecorationSet<S> | null | undefined) | null | undefined;
    /**
     * When this returns false, the content of the view is not directly
     * editable.
     */
    editable?: ((this: ThisT, state: EditorState<S>) => boolean) | null | undefined;
    /**
     * Control the DOM attributes of the editable element. May be either
     * an object or a function going from an editor state to an object.
     * By default, the element will get a class `"ProseMirror"`, and
     * will have its `contentEditable` attribute determined by the
     * [`editable` prop](#view.EditorProps.editable). Additional classes
     * provided here will be added to the class. For other attributes,
     * the value provided first (as in
     * [`someProp`](#view.EditorView.someProp)) will be used.
     */
    attributes?:
        | { [name: string]: string }
        | ((this: ThisT, p: EditorState<S>) => { [name: string]: string } | null | undefined | void)
        | null
        | undefined;
    /**
     * Determines the distance (in pixels) between the cursor and the
     * end of the visible viewport at which point, when scrolling the
     * cursor into view, scrolling takes place. Defaults to 0.
     */
    scrollThreshold?: number | { top: number; right: number; bottom: number; left: number } | null | undefined;
    /**
     * Determines the extra space (in pixels) that is left above or
     * below the cursor when it is scrolled into view. Defaults to 5.
     */
    scrollMargin?: number | { top: number; right: number; bottom: number; left: number } | null | undefined;
}
/**
 * A mapping of dom events.
 */
export type HandleDOMEventsProp<ThisT = unknown, S extends Schema = any> = Partial<
    {
        [K in keyof DocumentEventMap]: (this: ThisT, view: EditorView<S>, event: DocumentEventMap[K]) => boolean;
    }
> & {
    [key: string]: (this: ThisT, view: EditorView<S>, event: any) => boolean;
};
/**
 * The props object given directly to the editor view supports some
 * fields that can't be used in plugins:
 */
export interface DirectEditorProps<S extends Schema = any> extends EditorProps<unknown, S> {
    /**
     * The current state of the editor.
     */
    state: EditorState<S>;

    /**
     * A set of plugins to use in the view, applying their [plugin
     * view](#state.PluginSpec.view) and
     * [props](#state.PluginSpec.props). Passing plugins with a state
     * component (a [state field](#state.PluginSpec.state) field or a
     * [transaction](#state.PluginSpec.filterTransaction) filter or
     * appender) will result in an error, since such plugins must be
     * present in the state to work.
     */
    plugins?: Plugin[];

    /**
     * The callback over which to send transactions (state updates)
     * produced by the view. If you specify this, you probably want to
     * make sure this ends up calling the view's
     * [`updateState`](#view.EditorView.updateState) method with a new
     * state that has the transaction
     * [applied](#state.EditorState.apply). The callback will be bound to have
     * the view instance as its `this` binding.
     */
    dispatchTransaction?: ((this: EditorView<S>, tr: Transaction<S>) => void) | null | undefined;
}
/**
 * By default, document nodes are rendered using the result of the
 * [`toDOM`](#model.NodeSpec.toDOM) method of their spec, and managed
 * entirely by the editor. For some use cases, such as embedded
 * node-specific editing interfaces, you want more control over
 * the behavior of a node's in-editor representation, and need to
 * [define](#view.EditorProps.nodeViews) a custom node view.
 *
 * Objects returned as node views must conform to this interface.
 */
export interface NodeView<S extends Schema = any> {
    /**
     * The outer DOM node that represents the document node. When not
     * given, the default strategy is used to create a DOM node.
     */
    dom?: Node | null | undefined;
    /**
     * The DOM node that should hold the node's content. Only meaningful
     * if the node view also defines a `dom` property and if its node
     * type is not a leaf node type. When this is present, ProseMirror
     * will take care of rendering the node's children into it. When it
     * is not present, the node view itself is responsible for rendering
     * (or deciding not to render) its child nodes.
     */
    contentDOM?: Node | null | undefined;
    /**
     * When given, this will be called when the view is updating itself.
     * It will be given a node (possibly of a different type), and an
     * array of active decorations (which are automatically drawn, and
     * the node view may ignore if it isn't interested in them), and
     * should return true if it was able to update to that node, and
     * false otherwise. If the node view has a `contentDOM` property (or
     * no `dom` property), updating its child nodes will be handled by
     * ProseMirror.
     */
    update?:
        | ((node: ProsemirrorNode<S>, decorations: Decoration[], innerDecorations: DecorationSet) => boolean)
        | null
        | undefined;
    /**
     * Can be used to override the way the node's selected status (as a
     * node selection) is displayed.
     */
    selectNode?: (() => void) | null | undefined;
    /**
     * When defining a `selectNode` method, you should also provide a
     * `deselectNode` method to remove the effect again.
     */
    deselectNode?: (() => void) | null | undefined;
    /**
     * This will be called to handle setting the selection inside the
     * node. The `anchor` and `head` positions are relative to the start
     * of the node. By default, a DOM selection will be created between
     * the DOM positions corresponding to those positions, but if you
     * override it you can do something else.
     */
    setSelection?: ((anchor: number, head: number, root: Document) => void) | null | undefined;
    /**
     * Can be used to prevent the editor view from trying to handle some
     * or all DOM events that bubble up from the node view. Events for
     * which this returns true are not handled by the editor.
     */
    stopEvent?: ((event: Event) => boolean) | null | undefined;
    /**
     * Called when a DOM
     * [mutation](https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver)
     * or a selection change happens within the view. When the change is
     * a selection change, the record will have a `type` property of
     * `"selection"` (which doesn't occur for native mutation records).
     * Return false if the editor should re-read the selection or
     * re-parse the range around the mutation, true if it can safely be
     * ignored.
     */
    ignoreMutation?:
        | ((
              p:
                  | MutationRecord
                  | {
                        type: 'selection';
                        target: Element;
                    },
          ) => boolean)
        | null
        | undefined;
    /**
     * Called when the node view is removed from the editor or the whole
     * editor is destroyed.
     */
    destroy?: (() => void) | null | undefined;
}
