import { Locale } from "@ckeditor/ckeditor5-utils";
import View from "../view";

export default class EditableUIView extends View {
    isFocused: boolean;
    name: string;
    get _hasExternalElement(): boolean;
    protected set _hasExternalElement(newValue: boolean);

    constructor(locale: Locale, editingView: View, editableElement?: HTMLElement);
}
