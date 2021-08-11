import { Command, Editor } from '@ckeditor/ckeditor5-core';

export default class IndentCommand extends Command {
    constructor(editor: Editor, indentDirection: 'forward' | 'backward');
    refresh(): void;
    execute(): void;
}
