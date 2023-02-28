import { Command, Editor } from '@ckeditor/ckeditor5-core';
import Batch from '@ckeditor/ckeditor5-engine/src/model/batch';

/**
 * The table cell attribute command.
 *
 * The command is a base command for other table cell property commands.
 */
export default class TableCellPropertyCommand extends Command {
    /**
     * Creates a new `TableCellPropertyCommand` instance.
     */
    constructor(editor: Editor, attributeName: string, defaultValue: string);
    /**
     * The attribute that will be set by the command.
     */
    readonly attributeName: string;
    /**
     * Executes the command.
     */
    execute(options?: { value: string; batch: Batch }): void;
}
