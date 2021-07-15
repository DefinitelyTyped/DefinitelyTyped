import { Command } from '@ckeditor/ckeditor5-core';

export default class RestrictedEditingExceptionCommand extends Command {
    refresh(): void;
    execute(options?: { forceValue?: boolean | undefined }): void;
}
