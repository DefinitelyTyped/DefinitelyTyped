import { ButtonView, LabeledFieldView, View } from '@ckeditor/ckeditor5-ui';
import { FocusTracker, KeystrokeHandler } from '@ckeditor/ckeditor5-utils';

export default class TextAlternativeFormView extends View {
    focusTracker: FocusTracker;
    keystrokes: KeystrokeHandler;
    labeledInput: LabeledFieldView;
    saveButtonView: ButtonView;
    cancelButtonView: ButtonView;
}
