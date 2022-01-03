import { Command, Editor } from '@ckeditor/ckeditor5-core';
import Batch from '@ckeditor/ckeditor5-engine/src/model/batch';

/**
 * The table cell attribute command.
 *
 * This command is a base command for other table property commands.
 */
export default class TablePropertyCommand extends Command {
    /**
     * Creates a new `TablePropertyCommand` instance.
     */
    constructor(editor: Editor, attributeName: string, defaultValue: string);

    /**
     * The attribute that will be set by the command.
     */
    readonly attributeName: string;

    /**
     * Executes the command.
     */
    execute(options?: { value: string; batch?: Batch }): void;
}
