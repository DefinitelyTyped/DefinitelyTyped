import { ButtonView, LabeledFieldView, View } from '@ckeditor/ckeditor5-ui';
import { FocusTracker, KeystrokeHandler, Locale } from '@ckeditor/ckeditor5-utils';

export default class TextAlternativeFormView extends View {
    constructor(locale: Locale);
    readonly focusTracker: FocusTracker;
    readonly keystrokes: KeystrokeHandler;
    readonly labeledInput: LabeledFieldView;
    readonly saveButtonView: ButtonView;
    readonly cancelButtonView: ButtonView;
    destroy(): void;
}
