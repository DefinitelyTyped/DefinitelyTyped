import { Command } from '@ckeditor/ckeditor5-core';

/**
 * The list start index command. It changes the `listStart` attribute of the selected list items.
 * It is used by the {@link module:list/listproperties~ListProperties list properties feature}.
 */
export default class ListStartCommand extends Command {
    refresh(): void;
    execute(options?: { startIndex?: number }): void;
}

declare module '@ckeditor/ckeditor5-core/src/commandcollection' {
    interface Commands {
        ListStartCommand: ListStartCommand;
    }
}
