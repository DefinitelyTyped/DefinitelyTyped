import { Command } from '@ckeditor/ckeditor5-core';

export default class UploadImageCommand extends Command {
    refresh(): void;
    execute(options: { file: File | File[] }): void;
}
