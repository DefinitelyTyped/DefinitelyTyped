import { Command } from '@ckeditor/ckeditor5-core';

export default class HighlightCommand extends Command {
    refresh(): void;
    execute(options?: { value: string }): void;
}
