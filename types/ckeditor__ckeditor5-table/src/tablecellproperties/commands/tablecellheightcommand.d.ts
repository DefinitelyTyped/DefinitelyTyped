import { Editor } from '@ckeditor/ckeditor5-core';
import TableCellPropertyCommand from './tablecellpropertycommand';

/**
 * The table cell height command.
 *
 * The command is registered by the {@link module:table/tablecellproperties/tablecellpropertiesediting~TableCellPropertiesEditing} as
 * the `'tableCellHeight'` editor command.
 *
 * To change the height of selected cells, execute the command:
 *
 *    editor.execute( 'tableCellHeight', {
 *      value: '50px'
 *    } );
 *
 * **Note**: This command adds the default `'px'` unit to numeric values. Executing:
 *
 *    editor.execute( 'tableCellHeight', {
 *      value: '50'
 *    } );
 *
 * will set the `height` attribute to `'50px'` in the model.
 */
export default class TableCellHeightCommand extends TableCellPropertyCommand {
    /**
     * Creates a new `TableCellHeightCommand` instance.
     */
    constructor(editor: Editor, defaultValue: string);
    readonly attributeName: 'height';
}
