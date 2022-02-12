import { Command } from '@ckeditor/ckeditor5-core';

export default class IndentCodeBlockCommand extends Command {
    refresh(): void;
    execute(): void;
}

declare module '@ckeditor/ckeditor5-core/src/commandcollection' {
    interface Commands {
        IndentCodeBlockCommand: IndentCodeBlockCommand;
    }
}
