import { Command, Editor } from '@ckeditor/ckeditor5-core';

/**
 * The insert column command.
 *
 * The command is registered by {@link module:table/tableediting~TableEditing} as the `'insertTableColumnLeft'` and
 * `'insertTableColumnRight'` editor commands.
 *
 * To insert a column to the left of the selected cell, execute the following command:
 *
 *    editor.execute( 'insertTableColumnLeft' );
 *
 * To insert a column to the right of the selected cell, execute the following command:
 *
 *    editor.execute( 'insertTableColumnRight' );
 */
export default class InsertColumnCommand<T extends 'left' | 'right' = 'right'> extends Command {
    /**
     * Creates a new `InsertColumnCommand` instance.
     */
    constructor(editor: Editor, options?: { order?: T });
    /**
     * The order of insertion relative to the column in which the caret is located.
     */
    readonly order: T;

    execute(): void;
}

declare module '@ckeditor/ckeditor5-core/src/commandcollection' {
    interface Commands {
        InsertColumnCommand: InsertColumnCommand;
    }
}
