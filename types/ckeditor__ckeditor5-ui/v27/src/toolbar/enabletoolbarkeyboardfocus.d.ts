import { FocusTracker, KeystrokeHandler } from "@ckeditor/ckeditor5-utils";
import View from "../view";
import ToolbarView from "./toolbarview";

export default function enableToolbarKeyboardFocus(options?: {
    origin: View;
    originKeystrokeHandler: KeystrokeHandler;
    originFocusTracker: FocusTracker;
    toolbar: ToolbarView;
    beforeFocus?(): void;
    afterBlur?(): void;
}): void;
