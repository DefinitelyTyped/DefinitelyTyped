import { Command } from '@ckeditor/ckeditor5-core';

/**
 * The header row command.
 *
 * The command is registered by {@link module:table/tableediting~TableEditing} as the `'setTableColumnHeader'` editor command.
 *
 * You can make the row containing the selected cell a [header](https://www.w3.org/TR/html50/tabular-data.html#the-th-element) by executing:
 *
 *    editor.execute( 'setTableRowHeader' );
 *
 * **Note:** All preceding rows will also become headers. If the current row is already a header, executing this command
 * will make it a regular row back again (including the following rows).
 */
export default class SetHeaderRowCommand extends Command {
    /**
     * Executes the command.
     *
     * When the selection is in a non-header row, the command will set the `headingRows` table attribute to cover that row.
     *
     * When the selection is already in a header row, it will set `headingRows` so the heading section will end before that row.
     */
    execute(options?: { forceValue?: boolean }): void;
}

declare module '@ckeditor/ckeditor5-core/src/commandcollection' {
    interface Commands {
        SetHeaderRowCommand: SetHeaderRowCommand;
    }
}
