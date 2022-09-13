import View from '@ckeditor/ckeditor5-engine/src/view/view';
import { EditorUIView, InlineEditableUIView } from '@ckeditor/ckeditor5-ui';
import { Locale } from '@ckeditor/ckeditor5-utils';

export default class BalloonEditorUIView extends EditorUIView {
    readonly editable: InlineEditableUIView;
    constructor(locale: Locale, editingView: View, editableElement?: HTMLElement);
}
