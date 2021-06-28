import { Command } from '@ckeditor/ckeditor5-core';

export default class CodeBlockCommand extends Command {
    refresh(): void;
    execute(options?: { forceValue?: boolean }): void;
}
