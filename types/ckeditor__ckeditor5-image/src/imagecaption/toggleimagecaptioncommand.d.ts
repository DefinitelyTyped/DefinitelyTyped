import { Command } from '@ckeditor/ckeditor5-core';

export default class ToggleImageCaptionCommand extends Command {
    refresh(): void;
    execute(options?: { focusCaptionOnShow?: true }): void;
}

declare module '@ckeditor/ckeditor5-core/src/commandcollection' {
    interface Commands {
        ToggleImageCaptionCommand: ToggleImageCaptionCommand;
    }
}
