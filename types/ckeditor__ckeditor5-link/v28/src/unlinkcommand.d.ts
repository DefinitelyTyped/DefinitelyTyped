import { Command } from '@ckeditor/ckeditor5-core';

export default class UnlinkCommand extends Command {
    refresh(): void;
    execute(): void;
}

declare module '@ckeditor/ckeditor5-core/src/commandcollection' {
    interface Commands {
        UnlinkCommand: UnlinkCommand;
    }
}
