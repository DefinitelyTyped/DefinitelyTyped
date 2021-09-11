import { Command } from '@ckeditor/ckeditor5-core';

export default class UpdateHtmlEmbedCommand extends Command {
    refresh(): void;
    execute(value: string): void;
}

declare module '@ckeditor/ckeditor5-core/src/commandcollection' {
    interface Commands {
        UpdateHtmlEmbedCommand: UpdateHtmlEmbedCommand;
    }
}
