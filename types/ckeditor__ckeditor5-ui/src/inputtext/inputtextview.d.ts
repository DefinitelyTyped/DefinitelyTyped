import { FocusTracker } from "@ckeditor/ckeditor5-utils";
import View from "../view";

export default class InputTextView extends View {
    ariaDescribedById: string;
    readonly focusTracker: FocusTracker;
    hasError: boolean;
    id: string;
    readonly isEmpty: boolean;
    readonly isFocused: boolean;
    isReadOnly: boolean;
    placeholder: string;
    value: string;

    focus(): void;
    select(): void;
}
