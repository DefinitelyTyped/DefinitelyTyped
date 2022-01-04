import { Command } from '@ckeditor/ckeditor5-core';

export default class SelectAllCommand extends Command {
	readonly affectsData: false;
    execute(): void;
}

declare module '@ckeditor/ckeditor5-core/src/commandcollection' {
    interface Commands {
        SelectAllCommand: SelectAllCommand;
    }
}
