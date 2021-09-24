import { Command } from '@ckeditor/ckeditor5-core';

export default class CodeBlockCommand extends Command {
    refresh(): void;
    execute(options?: { forceValue?: boolean, language?: string }): void;
}

declare module '@ckeditor/ckeditor5-core/src/commandcollection' {
    interface Commands {
        CodeBlockCommand: CodeBlockCommand;
    }
}
