import View from '@ckeditor/ckeditor5-engine/src/view/view';
import { BalloonPanelView, EditorUIView, InlineEditableUIView, ToolbarView } from '@ckeditor/ckeditor5-ui';
import { Locale } from '@ckeditor/ckeditor5-utils';
import { Options } from '@ckeditor/ckeditor5-utils/src/dom/position';

/**
 * Inline editor UI view. Uses an nline editable and a floating toolbar.
 */
export default class InlineEditorUIView extends EditorUIView {
    /**
     * Creates an instance of the inline editor UI view.
     */
    constructor(
        locale: Locale,
        editingView: View,
        editableElement?: HTMLElement,
        options?: {
            shouldToolbarGroupWhenFull?: boolean | undefined;
        },
    );

    /**
     * A floating toolbar view instance.
     */
    readonly toolbar: ToolbarView;

    /**
     * The offset from the top edge of the web browser's viewport which makes the
     * UI become sticky. The default value is `0`, which means that the UI becomes
     * sticky when its upper edge touches the top of the page viewport.
     *
     * This attribute is useful when the web page has UI elements positioned to the top
     * either using `position: fixed` or `position: sticky`, which would cover the
     * UI or vice–versa (depending on the `z-index` hierarchy).
     *
     * Bound to {@link module:core/editor/editorui~EditorUI#viewportOffset `EditorUI#viewportOffset`}.
     *
     * If {@link module:core/editor/editorconfig~EditorConfig#ui `EditorConfig#ui.viewportOffset.top`} is defined, then
     * it will override the default value.
     */
    get viewportTopOffset(): number;
    protected set viewportTopOffset(value: number);

    /**
     * A balloon panel view instance.
     */
    readonly panel: BalloonPanelView;

    /**
     * A set of positioning functions used by the {@link #panel} to float around
     * {@link #element editableElement}.
     *
     * The positioning functions are as follows:
     *
     * * West:
     *
     *    [ Panel ]
     *    +------------------+
     *    | #editableElement |
     *    +------------------+
     *
     *    +------------------+
     *    | #editableElement |
     *    |[ Panel ]         |
     *    |                  |
     *    +------------------+
     *
     *    +------------------+
     *    | #editableElement |
     *    +------------------+
     *    [ Panel ]
     *
     * * East:
     *
     *               [ Panel ]
     *    +------------------+
     *    | #editableElement |
     *    +------------------+
     *
     *    +------------------+
     *    | #editableElement |
     *    |         [ Panel ]|
     *    |                  |
     *    +------------------+
     *
     *    +------------------+
     *    | #editableElement |
     *    +------------------+
     *               [ Panel ]
     *
     * See: {@link module:utils/dom/position~Options#positions}.
     */
    readonly panelPositions: Options['positions'];

    /**
     * Editable UI view.
     */
    readonly editable: InlineEditableUIView;
}
