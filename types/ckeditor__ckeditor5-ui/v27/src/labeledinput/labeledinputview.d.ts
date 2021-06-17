import View from "../view";
import { Locale } from "@ckeditor/ckeditor5-utils";

export default class LabeledInputView extends View {
    errorText: string | null;
    infoText: string | null;
    inputView: InputTextView;
    isReadOnly: boolean;
    label: string;
    labelView: LabelView;
    statusView: View;
    value: string;

    constructor(locale: Locale, InputView: View);
    focus(): void;
    select(): void;
}
