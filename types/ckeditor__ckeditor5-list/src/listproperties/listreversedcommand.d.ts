import { Command } from '@ckeditor/ckeditor5-core';

/**
 * The reversed list command. It changes the `listReversed` attribute of the selected list items. As a result, the list order will be
 * reversed.
 * It is used by the {@link module:list/listproperties~ListProperties list properties feature}.
 */
export default class ListReversedCommand extends Command {
    refresh(): void;
    execute(options?: { reversed?: boolean }): void;
}

declare module '@ckeditor/ckeditor5-core/src/commandcollection' {
    interface Commands {
        ListReversedCommand: ListReversedCommand;
    }
}
