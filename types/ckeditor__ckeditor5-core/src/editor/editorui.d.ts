import ComponentFactory from '@ckeditor/ckeditor5-ui/src/componentfactory';
import FocusTracker from '@ckeditor/ckeditor5-utils/src/focustracker';
import { Observable } from '@ckeditor/ckeditor5-utils/src/observablemixin';
import Editor from './editor';

// tslint:disable-next-line:no-empty-interface
export default interface EditorUI extends Observable {}

/**
 * A class providing the minimal interface that is required to successfully bootstrap any editor UI.
 */
export default class EditorUI implements Observable {
    /**
     * Creates an instance of the editor UI class.
     */
    constructor(editor: Editor);

    /**
     * The editor that the UI belongs to.
     */
    readonly editor: Editor;

    /**
     * An instance of the {@link module:ui/componentfactory~ComponentFactory}, a registry used by plugins
     * to register factories of specific UI components.
     */
    readonly componentFactory: ComponentFactory;

    /**
     * Stores the information about the editor UI focus and propagates it so various plugins and components
     * are unified as a focus group.
     */
    readonly focusTracker: FocusTracker;

    /**
     * Stores viewport offsets from every direction.
     *
     * Viewport offset can be used to constrain balloons or other UI elements into an element smaller than the viewport.
     * This can be useful if there are any other absolutely positioned elements that may interfere with editor UI.
     *
     * Example `editor.ui.viewportOffset` returns:
     *
     * ```js
     * {
     *   top: 50,
     *   right: 50,
     *   bottom: 50,
     *   left: 50
     * }
     * ```
     *
     * This property can be overriden after editor already being initialized:
     *
     * ```js
     * editor.ui.viewportOffset = {
     *   top: 100,
     *   right: 0,
     *   bottom: 0,
     *   left: 0
     * };
     * ```
     */
    get viewportOffset(): { top: number; right: number; bottom: number; left: number };
    protected set viewportOffset(value: { top: number; right: number; bottom: number; left: number });

    /**
     * The main (outermost) DOM element of the editor UI.
     *
     * For example, in {@link module:editor-classic/classiceditor~ClassicEditor} it is a `<div>` which
     * wraps the editable element and the toolbar. In {@link module:editor-inline/inlineeditor~InlineEditor}
     * it is the editable element itself (as there is no other wrapper). However, in
     * {@link module:editor-decoupled/decouplededitor~DecoupledEditor} it is set to `null` because this editor does not
     * come with a single "main" HTML element (its editable element and toolbar are separate).
     *
     * This property can be understood as a shorthand for retrieving the element that a specific editor integration
     * considers to be its main DOM element.
     */
    readonly element: HTMLElement | null;

    /**
     * Fires the {@link module:core/editor/editorui~EditorUI#event:update `update`} event.
     *
     * This method should be called when the editor UI (e.g. positions of its balloons) needs to be updated due to
     * some environmental change which CKEditor 5 is not aware of (e.g. resize of a container in which it is used).
     */
    update(): void;

    /**
     * Destroys the UI.
     */
    destroy(): void;

    /**
     * Store the native DOM editable element used by the editor under
     * a unique name.
     */
    setEditableElement(rootName: string, domElement: HTMLElement): void;

    /**
     * Returns the editable editor element with the given name or null if editable does not exist.
     */
    getEditableElement(rootName?: string): HTMLElement | undefined;

    /**
     * Returns array of names of all editor editable elements.
     */
    getEditableElementsNames(): Iterable<string>;
}
