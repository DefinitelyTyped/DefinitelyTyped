import { Command, Editor } from '@ckeditor/ckeditor5-core';

export default class IndentCommand extends Command {
    constructor(editor: Editor, indentDirection: 'forward' | 'backward');
    refresh(): void;
    execute(): void;
}

declare module '@ckeditor/ckeditor5-core/src/commandcollection' {
    interface Commands {
        IndentCommand: IndentCommand;
    }
}
