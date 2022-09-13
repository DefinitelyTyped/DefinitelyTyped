import { Editor, Plugin } from '@ckeditor/ckeditor5-core';
import PendingActions from '@ckeditor/ckeditor5-core/src/pendingactions';

export default class AutoSave extends Plugin {
    static pluginName: 'Autosave';
    static requires: [typeof PendingActions];

    get state(): 'synchronized' | 'waiting' | 'saving';
    protected set state(state: 'synchronized' | 'waiting' | 'saving');

    init(): void;
    destroy(): void;

    save(): Promise<unknown>;

    adapter: AutosaveAdapter;
}

export interface AutosaveAdapter {
    save(editor: Editor): Promise<unknown>;
}

export interface AutosaveConfig {
    waitingTime?: number | undefined;
    save(editor: Editor): Promise<unknown>;
}

declare module '@ckeditor/ckeditor5-core/src/plugincollection' {
    interface Plugins {
        AutoSave: AutoSave;
    }
}
