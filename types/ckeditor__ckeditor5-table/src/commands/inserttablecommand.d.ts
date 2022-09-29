import { Command } from '@ckeditor/ckeditor5-core';

/**
 * The insert table command.
 *
 * The command is registered by {@link module:table/tableediting~TableEditing} as the `'insertTable'` editor command.
 *
 * To insert a table at the current selection, execute the command and specify the dimensions:
 *
 *    editor.execute( 'insertTable', { rows: 20, columns: 5 } );
 */
export default class InsertTableCommand extends Command {
    /**
     * Executes the command.
     *
     * Inserts a table with the given number of rows and columns into the editor.
     */
    execute(options?: { rows?: number; columns?: number; headingRows?: number; headingColumns?: number }): void;
}

declare module '@ckeditor/ckeditor5-core/src/commandcollection' {
    interface Commands {
        InsertTableCommand: InsertTableCommand;
    }
}
