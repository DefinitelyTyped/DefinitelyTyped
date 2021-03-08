import Collection from "@ckeditor/ckeditor5-utils/src/collection";
import ObservableMixin from "@ckeditor/ckeditor5-utils/src/observablemixin";
import { StylesProcessor } from "./stylesmap";
import DocumentSelection from "./documentselection";
import Element from "./element";
import RootEditableElement from "./rooteditableelement";
import DowncastWriter from "./downcastwriter";

/**
 * Document class creates an abstract layer over the content editable area, contains a tree of view elements and
 * {@link module:engine/view/documentselection~DocumentSelection view selection} associated with this document.
 *
 */
export default class Document extends ObservableMixin {
    /**
     * Creates a Document instance.
     */
    constructor(stylesProcessor: StylesProcessor);

    readonly selection: DocumentSelection;

    /**
     * Roots of the view tree. Collection of the {@link module:engine/view/element~Element view elements}.
     *
     * View roots are created as a result of binding between {@link module:engine/view/document~Document#roots} and
     * {@link module:engine/model/document~Document#roots} and this is handled by
     * {@link module:engine/controller/editingcontroller~EditingController}, so to create view root we need to create
     * model root using {@link module:engine/model/document~Document#createRoot}.
     */
    readonly roots: Collection<Element>;

    /**
     * The styles processor instance used by this document when normalizing styles.
     */
    readonly stylesProcessor: StylesProcessor;

    readonly isReadOnly: boolean;

    readonly isFocused: boolean;
    readonly isComposing: boolean;

    /**
     * Gets a {@link module:engine/view/document~Document#roots view root element} with the specified name. If the name is not
     * specific "main" root is returned.
     */
    getRoot(name?: string): RootEditableElement | null;

    /**
     * Allows registering post-fixer callbacks. A post-fixers mechanism allows to update the view tree just before it is rendered
     * to the DOM.
     *
     * Post-fixers are executed right after all changes from the outermost change block were applied but
     * before the {@link module:engine/view/view~View#event:render render event} is fired. If a post-fixer callback made
     * a change, it should return `true`. When this happens, all post-fixers are fired again to check if something else should
     * not be fixed in the new document tree state.
     *
     * View post-fixers are useful when you want to apply some fixes whenever the view structure changes. Keep in mind that
     * changes executed in a view post-fixer should not break model-view mapping.
     *
     * The types of changes which should be safe:
     *
     * * adding or removing attribute from elements,
     * * changes inside of {@link module:engine/view/uielement~UIElement UI elements},
     * * {@link module:engine/model/differ~Differ#refreshItem marking some of the model elements to be re-converted}.
     *
     * Try to avoid changes which touch view structure:
     *
     * * you should not add or remove nor wrap or unwrap any view elements,
     * * you should not change the editor data model in a view post-fixer.
     *
     * As a parameter, a post-fixer callback receives a {@link module:engine/view/downcastwriter~DowncastWriter downcast writer}.
     *
     * Typically, a post-fixer will look like this:
     *
     *        editor.editing.view.document.registerPostFixer( writer => {
     *            if ( checkSomeCondition() ) {
     *                writer.doSomething();
     *
     *                // Let other post-fixers know that something changed.
     *                return true;
     *            }
     *        } );
     *
     * Note that nothing happens right after you register a post-fixer (e.g. execute such a code in the console).
     * That is because adding a post-fixer does not execute it.
     * The post-fixer will be executed as soon as any change in the document needs to cause its rendering.
     * If you want to re-render the editor's view after registering the post-fixer then you should do it manually by calling
     * {@link module:engine/view/view~View#forceRender `view.forceRender()`}.
     *
     * If you need to register a callback which is executed when DOM elements are already updated,
     * use {@link module:engine/view/view~View#event:render render event}.
     */
    registerPostFixer(postfixer: (writer: DowncastWriter) => boolean): void;

    /**
     * Destroys this instance. Makes sure that all observers are destroyed and listeners removed.
     */
    destroy(): void;
}

/**
 * Enum representing type of the change.
 *
 * Possible values:
 *
 * * `children` - for child list changes,
 * * `attributes` - for element attributes changes,
 * * `text` - for text nodes changes.
 */
type ChangeType = "children" | "attributes" | "text";

export {};
