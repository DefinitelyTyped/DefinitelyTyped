import View from "@ckeditor/ckeditor5-engine/src/view/view";
import { BoxedEditorUIView, InlineEditableUIView, StickyPanelView, ToolbarView } from "@ckeditor/ckeditor5-ui";
import { Locale } from "@ckeditor/ckeditor5-utils";

export default class ClassicEditorUIView extends BoxedEditorUIView {
    readonly editable: InlineEditableUIView;
    readonly stickyPanel: StickyPanelView;
    readonly toolbar: ToolbarView;

    constructor(locale: Locale, editingView: View, options?: { shouldToolbarGroupWhenFull?: boolean | undefined });
}
