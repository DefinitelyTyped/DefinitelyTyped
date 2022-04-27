import { Command } from '@ckeditor/ckeditor5-core';

/**
 * The remove row command.
 *
 * The command is registered by {@link module:table/tableediting~TableEditing} as the `'removeTableRow'` editor command.
 *
 * To remove the row containing the selected cell, execute the command:
 *
 *    editor.execute( 'removeTableRow' );
 */
export default class RemoveRowCommand extends Command {
    execute(): void;
}

declare module '@ckeditor/ckeditor5-core/src/commandcollection' {
    interface Commands {
        RemoveRowCommand: RemoveRowCommand;
    }
}
