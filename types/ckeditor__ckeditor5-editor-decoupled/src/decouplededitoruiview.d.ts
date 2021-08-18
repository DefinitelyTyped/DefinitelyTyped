import View from '@ckeditor/ckeditor5-engine/src/view/view';
import { EditorUIView, InlineEditableUIView, ToolbarView } from '@ckeditor/ckeditor5-ui';
import { Locale } from '@ckeditor/ckeditor5-utils';

export default class DecoupledEditorUIView extends EditorUIView {
    readonly toolbar: ToolbarView;
    readonly editable: InlineEditableUIView;
    constructor(
        locale: Locale,
        editingView: View,
        options?: {
            editableElement?: HTMLElement | undefined;
            shouldToolbarGroupWhenFull?: boolean | undefined;
        },
    );
}
