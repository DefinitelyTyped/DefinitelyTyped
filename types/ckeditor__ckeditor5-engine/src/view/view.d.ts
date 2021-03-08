import ObservableMixin from "@ckeditor/ckeditor5-utils/src/observablemixin";
import Document from "./document";
import DomConverter from "./domconverter";
import DowncastWriter from "./downcastwriter";
import Element from "./element";
import { Item } from "./item";
import Observer from "./observer/observer";
import Position from "./position";
import Range from "./range";
import Selection, { Selectable } from "./selection";
import { StylesProcessor } from "./stylesmap";

/**
 * Editor's view controller class. Its main responsibility is DOM - View management for editing purposes, to provide
 * abstraction over the DOM structure and events and hide all browsers quirks.
 *
 * View controller renders view document to DOM whenever view structure changes. To determine when view can be rendered,
 * all changes need to be done using the {@link module:engine/view/view~View#change} method, using
 * {@link module:engine/view/downcastwriter~DowncastWriter}:
 *
 *        view.change( writer => {
 *            writer.insert( position, writer.createText( 'foo' ) );
 *        } );
 *
 * View controller also register {@link module:engine/view/observer/observer~Observer observers} which observes changes
 * on DOM and fire events on the {@link module:engine/view/document~Document Document}.
 * Note that the following observers are added by the class constructor and are always available:
 *
 * * {@link module:engine/view/observer/mutationobserver~MutationObserver},
 * * {@link module:engine/view/observer/selectionobserver~SelectionObserver},
 * * {@link module:engine/view/observer/focusobserver~FocusObserver},
 * * {@link module:engine/view/observer/keyobserver~KeyObserver},
 * * {@link module:engine/view/observer/fakeselectionobserver~FakeSelectionObserver}.
 * * {@link module:engine/view/observer/compositionobserver~CompositionObserver}.
 *
 * This class also {@link module:engine/view/view~View#attachDomRoot binds the DOM and the view elements}.
 *
 * If you do not need full a DOM - view management, and only want to transform a tree of view elements to a tree of DOM
 * elements you do not need this controller. You can use the {@link module:engine/view/domconverter~DomConverter DomConverter} instead.
 */
export default class View extends ObservableMixin {
    constructor(stylesProcessor: StylesProcessor);

    readonly document: Document;
    readonly domConverter: DomConverter;
    readonly domRoots: Map<string, HTMLElement>;
    readonly isRenderingInProgress: boolean;
    readonly hasDomSelection: boolean;

    /**
     * Attaches a DOM root element to the view element and enable all observers on that element.
     * Also {@link module:engine/view/renderer~Renderer#markToSync mark element} to be synchronized
     * with the view what means that all child nodes will be removed and replaced with content of the view root.
     *
     * This method also will change view element name as the same as tag name of given dom root.
     * Name is always transformed to lower case.
     *
     * **Note:** Use {@link #detachDomRoot `detachDomRoot()`} to revert this action.
     */
    attachDomRoot(domRoot: Element, name?: string): void;

    /**
     * Detaches a DOM root element from the view element and restores its attributes to the state before
     * {@link #attachDomRoot `attachDomRoot()`}.
     */
    detachDomRoot(name: string): void;

    /**
     * Gets DOM root element.
     */
    getDomRoot(name?: string): Element;

    /**
     * Creates observer of the given type if not yet created, {@link module:engine/view/observer/observer~Observer#enable enables} it
     * and {@link module:engine/view/observer/observer~Observer#observe attaches} to all existing and future
     * {@link #domRoots DOM roots}.
     *
     * Note: Observers are recognized by their constructor (classes). A single observer will be instantiated and used only
     * when registered for the first time. This means that features and other components can register a single observer
     * multiple times without caring whether it has been already added or not.
     */
    addObserver(Observer: Observer): Observer;

    /**
     * Returns observer of the given type or `undefined` if such observer has not been added yet.
     */
    getObserver(Observer: Observer): Observer | undefined;

    /**
     * Disables all added observers.
     */
    disableObservers(): void;

    /**
     * Enables all added observers.
     */
    enableObservers(): void;

    /**
     * Scrolls the page viewport and {@link #domRoots} with their ancestors to reveal the
     * caret, if not already visible to the user.
     */
    scrollToTheSelection(): void;

    /**
     * It will focus DOM element representing {@link module:engine/view/editableelement~EditableElement EditableElement}
     * that is currently having selection inside.
     */
    focus(): void;

    /**
     * The `change()` method is the primary way of changing the view. You should use it to modify any node in the view tree.
     * It makes sure that after all changes are made the view is rendered to the DOM (assuming that the view will be changed
     * inside the callback). It prevents situations when the DOM is updated when the view state is not yet correct. It allows
     * to nest calls one inside another and still performs a single rendering after all those changes are made.
     * It also returns the return value of its callback.
     *
     *        const text = view.change( writer => {
     *            const newText = writer.createText( 'foo' );
     *            writer.insert( position1, newText );
     *
     *            view.change( writer => {
     *                writer.insert( position2, writer.createText( 'bar' ) );
     *            } );
     *
     *             writer.remove( range );
     *
     *             return newText;
     *        } );
     *
     * When the outermost change block is done and rendering to the DOM is over the
     * {@link module:engine/view/view~View#event:render `View#render`} event is fired.
     *
     * This method throws a `applying-view-changes-on-rendering` error when
     * the change block is used after rendering to the DOM has started.
     */
    change(callback: (writer: DowncastWriter) => unknown): void;

    /**
     * Forces rendering {@link module:engine/view/document~Document view document} to DOM. If any view changes are
     * currently in progress, rendering will start after all {@link #change change blocks} are processed.
     *
     * Note that this method is dedicated for special cases. All view changes should be wrapped in the {@link #change}
     * block and the view will automatically check whether it needs to render DOM or not.
     *
     * Throws {@link module:utils/ckeditorerror~CKEditorError CKEditorError} `applying-view-changes-on-rendering` when
     * trying to re-render when rendering to DOM has already started.
     */
    forceRender(): void;

    /**
     * Destroys this instance. Makes sure that all observers are destroyed and listeners removed.
     */
    destroy(): void;

    /**
     * Creates position at the given location. The location can be specified as:
     *
     * * a {@link module:engine/view/position~Position position},
     * * parent element and offset (offset defaults to `0`),
     * * parent element and `'end'` (sets position at the end of that element),
     * * {@link module:engine/view/item~Item view item} and `'before'` or `'after'` (sets position before or after given view item).
     *
     * This method is a shortcut to other constructors such as:
     *
     * * {@link #createPositionBefore},
     * * {@link #createPositionAfter},
     */
    createPositionAt(itemOrPosition: Item | Position, offset?: "end" | "before" | "after" | number): Position;

    /**
     * Creates a new position after given view item.
     */
    createPositionAfter(item: Item): Position;

    /**
     * Creates a new position before given view item.
     */
    createPositionBefore(item: Item): Position;

    /**
     * Creates a range spanning from `start` position to `end` position.
     *
     * **Note:** This factory method creates it's own {@link module:engine/view/position~Position} instances basing on passed values.
     */
    createRange(start: Position, end?: Position): Range;

    /**
     * Creates a range that starts before given {@link module:engine/view/item~Item view item} and ends after it.
     */
    createRangeOn(item: Item): Range;

    /**
     * Creates a range inside an {@link module:engine/view/element~Element element} which starts before the first child of
     * that element and ends after the last child of that element.
     */
    createRangeIn(element: Element): Range;

    /**
     * Creates new {@link module:engine/view/selection~Selection} instance.
     *
     *         // Creates empty selection without ranges.
     *        const selection = view.createSelection();
     *
     *        // Creates selection at the given range.
     *        const range = view.createRange( start, end );
     *        const selection = view.createSelection( range );
     *
     *        // Creates selection at the given ranges
     *         const ranges = [ view.createRange( start1, end2 ), view.createRange( star2, end2 ) ];
     *        const selection = view.createSelection( ranges );
     *
     *        // Creates selection from the other selection.
     *        const otherSelection = view.createSelection();
     *        const selection = view.createSelection( otherSelection );
     *
     *        // Creates selection from the document selection.
     *        const selection = view.createSelection( editor.editing.view.document.selection );
     *
     *         // Creates selection at the given position.
     *        const position = view.createPositionFromPath( root, path );
     *        const selection = view.createSelection( position );
     *
     *        // Creates collapsed selection at the position of given item and offset.
     *        const paragraph = view.createContainerElement( 'paragraph' );
     *        const selection = view.createSelection( paragraph, offset );
     *
     *        // Creates a range inside an {@link module:engine/view/element~Element element} which starts before the
     *        // first child of that element and ends after the last child of that element.
     *        const selection = view.createSelection( paragraph, 'in' );
     *
     *        // Creates a range on an {@link module:engine/view/item~Item item} which starts before the item and ends
     *        // just after the item.
     *        const selection = view.createSelection( paragraph, 'on' );
     *
     * `Selection`'s factory method allow passing additional options (`backward`, `fake` and `label`) as the last argument.
     *
     *        // Creates backward selection.
     *        const selection = view.createSelection( range, { backward: true } );
     *
     * Fake selection does not render as browser native selection over selected elements and is hidden to the user.
     * This way, no native selection UI artifacts are displayed to the user and selection over elements can be
     * represented in other way, for example by applying proper CSS class.
     *
     * Additionally fake's selection label can be provided. It will be used to describe fake selection in DOM
     * (and be  properly handled by screen readers).
     *
     *        // Creates fake selection with label.
     *        const selection = view.createSelection( range, { fake: true, label: 'foo' } );
     */
    createSelection(
        selectable: Selectable,
        placeOrOffset?: number | "before" | "end" | "after" | "on" | "in",
        options?: {
            backward?: boolean;
            fake?: boolean;
            label?: string;
        },
    ): Selection;
}
