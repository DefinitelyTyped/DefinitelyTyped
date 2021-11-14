import { Command } from '@ckeditor/ckeditor5-core';

export default class InsertImageCommand extends Command {
    refresh(): void;
    execute(options?: string | string[]): void;
}

declare module '@ckeditor/ckeditor5-core/src/commandcollection' {
    interface Commands {
        InsertImageCommand: InsertImageCommand;
    }
}
