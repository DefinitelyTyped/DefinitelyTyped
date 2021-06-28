import { Command } from '@ckeditor/ckeditor5-core';

export default class MediaEmbedCommand extends Command {
    refresh(): void;
    execute(url: string): void;
}
