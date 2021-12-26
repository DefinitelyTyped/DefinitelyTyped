import { Locale } from '@ckeditor/ckeditor5-utils';
import InputTextView from '../inputtext/inputtextview';
import LabelView from '../label/labelview';
import View from '../view';

export default class LabeledInputView extends View {
    constructor(locale: Locale, InputViewConstructor: typeof InputTextView);
    label: string;
    value: string;
    isReadOnly: boolean;
    errorText: string | null;
    infoText: string | null;
    labelView: LabelView;
    inputView: InputTextView;
    statusView: View;
    focus(): void;
    select(): void;
}
