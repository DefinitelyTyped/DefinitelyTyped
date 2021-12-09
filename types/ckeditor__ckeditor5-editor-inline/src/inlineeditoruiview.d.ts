import View from '@ckeditor/ckeditor5-engine/src/view/view';
import { BalloonPanelView, EditorUIView, InlineEditableUIView, ToolbarView } from '@ckeditor/ckeditor5-ui';
import { Locale } from '@ckeditor/ckeditor5-utils';
import { Options } from '@ckeditor/ckeditor5-utils/src/dom/position';

export default class InlineEditorUIView extends EditorUIView {
    readonly toolbar: ToolbarView;
    viewportTopOffset: number;
    readonly panel: BalloonPanelView;
    readonly panelPositions: Options['positions'];
    readonly editable: InlineEditableUIView;
    constructor(
        locale: Locale,
        editingView: View,
        editableElement?: HTMLElement,
        options?: {
            shouldToolbarGroupWhenFull?: boolean | undefined;
        },
    );
}
