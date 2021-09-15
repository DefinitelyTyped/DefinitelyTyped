import { Command, Editor } from '@ckeditor/ckeditor5-core';

export default class ListCommand extends Command {
    readonly type: 'numbered' | 'bulleted';
    value: boolean;
    constructor(editor: Editor, type: 'numbered' | 'bulleted');
    refresh(): void;
    execute(options?: { forceValue?: boolean | undefined }): void;
}

declare module '@ckeditor/ckeditor5-core/src/commandcollection' {
    interface Commands {
        ListCommand: ListCommand;
    }
}
