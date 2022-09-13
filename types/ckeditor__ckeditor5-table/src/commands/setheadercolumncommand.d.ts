import { Command } from '@ckeditor/ckeditor5-core';

/**
 * The header column command.
 *
 * The command is registered by {@link module:table/tableediting~TableEditing} as the `'setTableColumnHeader'` editor command.
 *
 * You can make the column containing the selected cell a [header](https://www.w3.org/TR/html50/tabular-data.html#the-th-element)
 * by executing:
 *
 *    editor.execute( 'setTableColumnHeader' );
 *
 * **Note:** All preceding columns will also become headers. If the current column is already a header, executing this command
 * will make it a regular column back again (including the following columns).
 */
export default class SetHeaderColumnCommand extends Command {
    /**
     * Executes the command.
     *
     * When the selection is in a non-header column, the command will set the `headingColumns` table attribute to cover that column.
     *
     * When the selection is already in a header column, it will set `headingColumns` so the heading section will end before that column.
     */
    execute(options?: { forceValue?: boolean }): void;
}

declare module '@ckeditor/ckeditor5-core/src/commandcollection' {
    interface Commands {
        SetHeaderColumnCommand: SetHeaderColumnCommand;
    }
}
