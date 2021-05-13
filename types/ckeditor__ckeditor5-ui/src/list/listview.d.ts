import { FocusTracker, KeystrokeHandler } from "@ckeditor/ckeditor5-utils";
import { DropdownPanelFocusable } from "../dropdown/dropdownpanelfocusable";
import View from "../view";
import ViewCollection from "../viewcollection";

export default class ListView extends View implements DropdownPanelFocusable {
    readonly focusTracker: FocusTracker;
    readonly items: ViewCollection;
    readonly keystrokes: KeystrokeHandler;

    focus(): void;
    focusLast(): void;
}
