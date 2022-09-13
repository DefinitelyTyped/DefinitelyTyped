import { Context, Editor } from "@ckeditor/ckeditor5-core";
import { EditorConfig } from "@ckeditor/ckeditor5-core/src/editor/editorconfig";
import Watchdog, { WatchdogConfig } from "./watchdog";

export default class EditorWatchdog extends Watchdog {
    editor: Editor;
    constructor(editor: Editor, config?: WatchdogConfig);
    create(
        elementOrData: string | HTMLElement | Record<string, string>,
        config?: EditorConfig,
        context?: Context,
    ): Promise<void>;
}
