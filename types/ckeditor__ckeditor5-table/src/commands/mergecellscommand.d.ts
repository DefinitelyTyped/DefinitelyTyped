import { Command } from '@ckeditor/ckeditor5-core';

/**
 * The merge cells command.
 *
 * The command is registered by {@link module:table/tableediting~TableEditing} as the `'mergeTableCells'` editor command.
 *
 * For example, to merge selected table cells:
 *
 *    editor.execute( 'mergeTableCells' );
 */
export default class MergeCellsCommand extends Command {
    /**
     * Executes the command.
     */
    execute(): void;
}

declare module '@ckeditor/ckeditor5-core/src/commandcollection' {
    interface Commands {
        MergeCellsCommand: MergeCellsCommand;
    }
}
