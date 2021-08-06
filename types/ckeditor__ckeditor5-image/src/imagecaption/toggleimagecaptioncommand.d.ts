import { Command } from '@ckeditor/ckeditor5-core';

export default class ToggleImageCaptionCommand extends Command {
    refresh(): void;
    execute(options?: { focusCaptionOnShow?: true }): void;
}
