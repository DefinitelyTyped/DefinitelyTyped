import { Command, Editor } from '@ckeditor/ckeditor5-core';

/**
 * The insert row command.
 *
 * The command is registered by {@link module:table/tableediting~TableEditing} as the `'insertTableRowBelow'` and
 * `'insertTableRowAbove'` editor commands.
 *
 * To insert a row below the selected cell, execute the following command:
 *
 *    editor.execute( 'insertTableRowBelow' );
 *
 * To insert a row above the selected cell, execute the following command:
 *
 *    editor.execute( 'insertTableRowAbove' );
 */
export default class InsertRowCommand<T extends 'above' | 'below' = 'below'> extends Command {
    /**
     * Creates a new `InsertRowCommand` instance.
     */
    constructor(editor: Editor, options?: { order: T });
    /**
     * The order of insertion relative to the row in which the caret is located.
     */
    readonly order: T;

    /**
     * Executes the command.
     *
     * Depending on the command's {@link #order} value, it inserts a row `'below'` or `'above'` the row in which selection is set.
     */
    execute(): void;
}

declare module '@ckeditor/ckeditor5-core/src/commandcollection' {
    interface Commands {
        InsertRowCommand: InsertRowCommand;
    }
}
