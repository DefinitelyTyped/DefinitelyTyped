import { Context, Editor } from "@ckeditor/ckeditor5-core";
import { EditorConfig } from "@ckeditor/ckeditor5-core/src/editor/editorconfig";
import EditorWatchdog from "./editorwatchdog";
import Watchdog, { WatchdogConfig } from "./watchdog";

export default class ContextWatchdog extends Watchdog {
    context: Context | null;
    constructor(context: Context, watchdogConfig: WatchdogConfig);
    add(
        itemConfigurationOrItemConfigurations: WatchdogItemConfiguration | WatchdogItemConfiguration[],
    ): Promise<EditorWatchdog[]>;
    create(contextConfig?: Context): Promise<void>;
    getItem(itemId: string): EditorWatchdog | undefined;
    getItemState(itemId: string): "initializing" | "ready" | "crashed" | "crashedPermanently" | "destroyed";
    remove(itemIdOrItemIds: string | string[]): Promise<void>;
}

export interface WatchdogItemConfiguration {
    config: EditorConfig;
    creator(el: HTMLElement, config?: EditorConfig): Promise<Editor>;
    destructor(editor: Editor): Promise<void>;
    id: string;
    sourceElementOrData: string | HTMLElement;
    type: "editor";
}
