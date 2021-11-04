import { Command } from '@ckeditor/ckeditor5-core';

/**
 * The select row command.
 *
 * The command is registered by {@link module:table/tableediting~TableEditing} as the `'selectTableRow'` editor command.
 *
 * To select the rows containing the selected cells, execute the command:
 *
 *    editor.execute( 'selectTableRow' );
 */
export default class SelectRowCommand extends Command {
    readonly affectsData: false;
    execute(): void;
}

declare module '@ckeditor/ckeditor5-core/src/commandcollection' {
    interface Commands {
        SelectRowCommand: SelectRowCommand;
    }
}
