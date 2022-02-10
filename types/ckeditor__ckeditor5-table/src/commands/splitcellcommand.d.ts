import { Command, Editor } from '@ckeditor/ckeditor5-core';

/**
 * The split cell command.
 *
 * The command is registered by {@link module:table/tableediting~TableEditing} as the `'splitTableCellVertically'`
 * and `'splitTableCellHorizontally'`  editor commands.
 *
 * You can split any cell vertically or horizontally by executing this command. For example, to split the selected table cell vertically:
 *
 *    editor.execute( 'splitTableCellVertically' );
 */
export default class SplitCellCommand<T extends 'horizontally' | 'vertically' = 'horizontally'> extends Command {
    /**
     * Creates a new `SplitCellCommand` instance.
     */
    constructor(editor: Editor, options?: { direction?: T });

    /**
     * The direction that indicates which cell will be split.
     */
    readonly direction: T;

    execute(): void;
}

declare module '@ckeditor/ckeditor5-core/src/commandcollection' {
    interface Commands {
        SplitCellCommand: SplitCellCommand;
    }
}
