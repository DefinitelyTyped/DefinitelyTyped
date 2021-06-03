import { Command } from '@ckeditor/ckeditor5-core';

export default class ResizeImageCommand extends Command {
    refresh(): void;
    execute(options: { width: string | null }): void;
}
