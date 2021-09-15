import { Command } from '@ckeditor/ckeditor5-core';

export default class ResizeImageCommand extends Command {
    refresh(): void;
    execute(options: { width: string | null }): void;
}

declare module '@ckeditor/ckeditor5-core/src/commandcollection' {
    interface Commands {
        ResizeImageCommand: ResizeImageCommand;
    }
}
