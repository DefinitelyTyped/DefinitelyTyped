import { Command, Editor } from '@ckeditor/ckeditor5-core';

export default class RestrictedEditingModeNavigationCommand extends Command {
    constructor(editor: Editor, direction: 'forward' | 'backward');
    readonly affectsData: false;
    refresh(): void;
    execute(): void;
}

declare module '@ckeditor/ckeditor5-core/src/commandcollection' {
    interface Commands {
        RestrictedEditingModeNavigationCommand: RestrictedEditingModeNavigationCommand;
    }
}
