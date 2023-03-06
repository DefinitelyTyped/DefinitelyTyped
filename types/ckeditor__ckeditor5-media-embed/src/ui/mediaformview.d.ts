import { ButtonView, LabeledFieldView, View } from '@ckeditor/ckeditor5-ui';
import { FocusTracker, KeystrokeHandler, Locale } from '@ckeditor/ckeditor5-utils';

export default class MediaFormView extends View {
    constructor(validators: Array<(form: MediaFormView) => string>, locale: Locale);
    readonly focustracker: FocusTracker;
    readonly keystrokes: KeystrokeHandler;
    mediaURLInputValue: string;
    readonly urlInputView: LabeledFieldView;
    readonly saveButtonView: ButtonView;
    readonly cancelButtonView: ButtonView;
    render(): void;
    focus(): void;
    url: string;
    isValid(): boolean;
    resetFormStatus(): void;
    destroy(): void;
}
