import { Plugin } from "@ckeditor/ckeditor5-core";
import { FocusTracker } from "@ckeditor/ckeditor5-utils";
import ToolbarView from "../toolbarview";

export default class BalloonToolbar extends Plugin {
    readonly focusTracker: FocusTracker;
    toolbarView: ToolbarView;

    hide(): void;
    show(): void;
}

declare module '@ckeditor/ckeditor5-core/src/plugincollection' {
    interface Plugins {
        BalloonToolbar: BalloonToolbar;
    }
}
