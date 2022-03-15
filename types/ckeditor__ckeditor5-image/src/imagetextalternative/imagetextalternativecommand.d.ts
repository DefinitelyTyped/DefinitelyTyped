import { Command } from '@ckeditor/ckeditor5-core';

export default class ImageTextAlternativeCommand extends Command {
    refresh(): void;
    execute(options: { newValue: string }): void;
}

declare module '@ckeditor/ckeditor5-core/src/commandcollection' {
    interface Commands {
        ImageTextAlternativeCommand: ImageTextAlternativeCommand;
    }
}
