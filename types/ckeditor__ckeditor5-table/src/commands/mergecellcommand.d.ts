import { Command, Editor } from '@ckeditor/ckeditor5-core';

/**
 * The merge cell command.
 *
 * The command is registered by {@link module:table/tableediting~TableEditing} as the `'mergeTableCellRight'`, `'mergeTableCellLeft'`,
 * `'mergeTableCellUp'` and `'mergeTableCellDown'` editor commands.
 *
 * To merge a table cell at the current selection with another cell, execute the command corresponding with the preferred direction.
 *
 * For example, to merge with a cell to the right:
 *
 *    editor.execute( 'mergeTableCellRight' );
 *
 * **Note**: If a table cell has a different [`rowspan`](https://www.w3.org/TR/html50/tabular-data.html#attr-tdth-rowspan)
 * (for `'mergeTableCellRight'` and `'mergeTableCellLeft'`) or [`colspan`](https://www.w3.org/TR/html50/tabular-data.html#attr-tdth-colspan)
 * (for `'mergeTableCellUp'` and `'mergeTableCellDown'`), the command will be disabled.
 */
export default class MergeCellCommand extends Command {
    /**
     * Creates a new `MergeCellCommand` instance.
     */
    constructor(editor: Editor, options: { direction: 'left' | 'right' | 'up' | 'down' });
    /**
     * The direction that indicates which cell will be merged with the currently selected one.
     */
    readonly direction: 'left' | 'right' | 'up' | 'down';

    /**
     * Whether the merge is horizontal (left/right) or vertical (up/down).
     */
    readonly isHorizontal: boolean;

    /**
     * Executes the command.
     *
     * Depending on the command's {@link #direction} value, it will merge the cell that is to the `'left'`, `'right'`, `'up'` or `'down'`.
     */
    execute(): void;
}

declare module '@ckeditor/ckeditor5-core/src/commandcollection' {
    interface Commands {
        MergeCellCommand: MergeCellCommand;
    }
}
