import { Editor } from '@ckeditor/ckeditor5-core';
import TablePropertyCommand from './tablepropertycommand';

/**
 * The table style border command.
 *
 * The command is registered by the {@link module:table/tableproperties/tablepropertiesediting~TablePropertiesEditing} as
 * the `'tableBorderStyle'` editor command.
 *
 * To change the border style of the selected table, execute the command:
 *
 *    editor.execute( 'tableBorderStyle', {
 *      value: 'dashed'
 *    } );
 */
export default class TableBorderStyleCommand extends TablePropertyCommand {
    /**
     * Creates a new `TableBorderStyleCommand` instance.
     */
    constructor(editor: Editor, defaultValue: string);
    readonly attributeName: 'borderStyle';
}
