import { Collection, FocusTracker, KeystrokeHandler } from "@ckeditor/ckeditor5-utils";
import View from "./view";
import KeyStrokeHandler from "@ckeditor/ckeditor5-utils/src/keystrokehandler";

export default class FocusCycler {
    readonly actions: {
        focusPrevious: string | string[];
        focusNext: string | string[];
    };
    readonly current: number | null;
    readonly first: View | null;
    readonly focusTracker: FocusTracker;
    readonly focusables: Collection<View>;
    readonly keystrokeHandler: KeystrokeHandler;
    readonly last: View | null;
    readonly next: View | null;
    readonly previous: View | null;

    constructor(options?: {
        focusables: Collection<View>;
        focusTracker: FocusTracker;
        keystrokeHandler?: KeyStrokeHandler;
        actions?: {
            focusPrevious: string | string[];
            focusNext: string | string[];
        };
    });
    focusFirst(): void;
    focusLast(): void;
    focusNext(): void;
    focusPrevious(): void;
}
