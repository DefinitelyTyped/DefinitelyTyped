import { Command, Editor } from '@ckeditor/ckeditor5-core';

export default class ListStyleCommand extends Command {
    constructor(editor: Editor, defaultType: string);
    refresh(): void;
    execute(options?: { type: string | null }): void;
}
