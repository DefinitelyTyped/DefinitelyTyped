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
    save(editor: Editor): Promise<any>;
}

export interface AutosaveConfig {
    waitingTime?: number;
    save?(editor: Editor): Promise<any>;
}
