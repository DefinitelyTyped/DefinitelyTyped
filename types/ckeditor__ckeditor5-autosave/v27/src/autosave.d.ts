import { Editor, Plugin } from "@ckeditor/ckeditor5-core";
import PendingActions from "@ckeditor/ckeditor5-core/src/pendingactions";

export default class AutoSave extends Plugin {
    adapter: AutosaveAdapter;
    state: "synchronized" | "waiting" | "saving";

    static pluginName: "Autosave";
    static requires: [typeof PendingActions];

    init(): void;
    destroy(): void;
}

export interface AutosaveAdapter {
    save(editor: Editor): Promise<unknown>;
}

export interface AutosaveConfig {
    waitingTime?: number | undefined;
    save?(editor: Editor): Promise<unknown>;
}

declare module '@ckeditor/ckeditor5-core/src/plugincollection' {
    interface Plugins {
        AutoSave: AutoSave;
    }
}
