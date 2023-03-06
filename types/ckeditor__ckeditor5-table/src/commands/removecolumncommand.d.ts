import { Command } from '@ckeditor/ckeditor5-core';

/**
 * The remove column command.
 *
 * The command is registered by {@link module:table/tableediting~TableEditing} as the `'removeTableColumn'` editor command.
 *
 * To remove the column containing the selected cell, execute the command:
 *
 *    editor.execute( 'removeTableColumn' );
 */
export default class RemoveColumnCommand extends Command {
    execute(): void;
}

declare module '@ckeditor/ckeditor5-core/src/commandcollection' {
    interface Commands {
        RemoveColumnCommand: RemoveColumnCommand;
    }
}
