import { Locale } from "@ckeditor/ckeditor5-utils";
import View from "../view";

export default class EditableUIView extends View {
    isFocused: boolean;
    name: string;

    constructor(locale: Locale, editingView: View, editableElement?: HTMLElement);
}
