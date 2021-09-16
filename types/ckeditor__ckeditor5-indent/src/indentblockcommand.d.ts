import { Command, Editor } from '@ckeditor/ckeditor5-core';

export default class IndentBlockCommand extends Command {
    constructor(editor: Editor, indentBehavior: IndentBehavior);
    refresh(): void;
    execute(): void;
}

export interface IndentBehavior {
    checkEnabled(indentAttributeValue: string): boolean;
    getNextIndent(indentAttributeValue: string): string | undefined;
}

declare module '@ckeditor/ckeditor5-core/src/commandcollection' {
    interface Commands {
        IndentBlockCommand: IndentBlockCommand;
    }
}
