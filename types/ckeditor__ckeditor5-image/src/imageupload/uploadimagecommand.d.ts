import { Command } from '@ckeditor/ckeditor5-core';

export default class UploadImageCommand extends Command {
    refresh(): void;
    execute(options: { file: File | File[] }): void;
}

declare module '@ckeditor/ckeditor5-core/src/commandcollection' {
    interface Commands {
        UploadImageCommand: UploadImageCommand;
    }
}
