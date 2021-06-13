import { Command } from '@ckeditor/ckeditor5-core';

export default class UpdateHtmlEmbedCommand extends Command {
    refresh(): void;
    execute(value: string): void;
}
