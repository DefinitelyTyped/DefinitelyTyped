import { Editor } from '@ckeditor/ckeditor5-core';
import TableCellPropertyCommand from './tablecellpropertycommand';

/**
 * The table cell border style command.
 *
 * The command is registered by the {@link module:table/tablecellproperties/tablecellpropertiesediting~TableCellPropertiesEditing} as
 * the `'tableCellBorderStyle'` editor command.
 *
 * To change the border style of selected cells, execute the command:
 *
 *    editor.execute( 'tableCellBorderStyle', {
 *      value: 'dashed'
 *    } );
 */
export default class TableCellBorderStyleCommand extends TableCellPropertyCommand {
    /**
     * Creates a new `TableCellBorderStyleCommand` instance.
     */
    constructor(editor: Editor, defaultValue: string);
    readonly attributeName: 'borderStyle';
}
