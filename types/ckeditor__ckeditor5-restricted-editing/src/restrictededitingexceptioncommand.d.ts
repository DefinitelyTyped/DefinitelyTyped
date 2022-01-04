import { Command } from '@ckeditor/ckeditor5-core';

export default class RestrictedEditingExceptionCommand extends Command {
    refresh(): void;
    execute(options?: { forceValue?: boolean | undefined }): void;
}

declare module '@ckeditor/ckeditor5-core/src/commandcollection' {
    interface Commands {
        RestrictedEditingExceptionCommand: RestrictedEditingExceptionCommand;
    }
}
