import { Command } from '@ckeditor/ckeditor5-core';

export default class MediaEmbedCommand extends Command {
    refresh(): void;
    execute(url: string): void;
}

declare module '@ckeditor/ckeditor5-core/src/commandcollection' {
    interface Commands {
        MediaEmbedCommand: MediaEmbedCommand;
    }
}
