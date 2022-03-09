import { View, ViewCollection } from "@ckeditor/ckeditor5-ui";
import { Locale } from "@ckeditor/ckeditor5-utils";

export default class BaseCommentView extends View {
    constructor( locale: Locale, model: Comment, config = { config.maxCommentCharsWhenCollapsed, config.formatDateTime, [config.editorConfig] } )
    /**
     * Informs whether the comment view is in the editing mode.
     */
    get isEditMode (): boolean
    protected set isEditMode(value: boolean);
    /**
     * Stores the currently displayed sub-view.
     * This is a collection that always includes one view: comment content view or comment input view. Depending whether the comment is in editing mode or not, one of the views is in the collection. When the comment mode changes, the content of this collection also changes.
     * By default, the comment is in the "content mode" and this view collection stores the comment content view.
     */
    readonly visibleView : ViewCollection
    collapse()

    Collapses the view.
    expand()

    Expands the view.
    focus()

    Focuses the view.

}
