import { Locale } from "@ckeditor/ckeditor5-utils";
import LabelView from "../label/labelview";
import View from "../view";

export default class LabeledFieldView extends View {
    class?: string;
    errorText: string | null;
    fieldView: View;
    infoText: string | null;
    readonly isEmpty: boolean;
    isEnabled: boolean;
    readonly isFocused: boolean;
    label: string;
    labelView: LabelView;
    placeholder: string;
    statusView: View;

    constructor(locale: Locale, viewCreator: (instance: LabeledFieldView, labeluid: string, statusuid: string) => View);
    focus(): void;
}
