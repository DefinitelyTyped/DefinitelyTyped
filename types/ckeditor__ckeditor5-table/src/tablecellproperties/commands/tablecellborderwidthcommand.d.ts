import { Editor } from '@ckeditor/ckeditor5-core';
import TableCellPropertyCommand from './tablecellpropertycommand';

/**
 * The table cell border width command.
 *
 * The command is registered by the {@link module:table/tablecellproperties/tablecellpropertiesediting~TableCellPropertiesEditing} as
 * the `'tableCellBorderWidth'` editor command.
 *
 * To change the border width of selected cells, execute the command:
 *
 *    editor.execute( 'tableCellBorderWidth', {
 *      value: '5px'
 *    } );
 *
 * **Note**: This command adds the default `'px'` unit to numeric values. Executing:
 *
 *    editor.execute( 'tableCellBorderWidth', {
 *      value: '5'
 *    } );
 *
 * will set the `borderWidth` attribute to `'5px'` in the model.
 */
export default class TableCellBorderWidthCommand extends TableCellPropertyCommand {
    /**
     * Creates a new `TableCellBorderWidthCommand` instance.
     */
    constructor(editor: Editor, defaultValue: string);
    readonly attributeName: 'borderWidth';
}
