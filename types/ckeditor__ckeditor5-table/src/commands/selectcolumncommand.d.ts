import { Command } from '@ckeditor/ckeditor5-core';

/**
 * The select column command.
 *
 * The command is registered by {@link module:table/tableediting~TableEditing} as the `'selectTableColumn'` editor command.
 *
 * To select the columns containing the selected cells, execute the command:
 *
 *    editor.execute( 'selectTableColumn' );
 *
 */
export default class SelectColumnCommand extends Command {
    readonly affectsData: false;
    execute(): void;
}

declare module '@ckeditor/ckeditor5-core/src/commandcollection' {
    interface Commands {
        SelectColumnCommand: SelectColumnCommand;
    }
}
