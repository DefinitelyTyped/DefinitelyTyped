import { Editor } from '@ckeditor/ckeditor5-core';
import TableCellPropertyCommand from './tablecellpropertycommand';

/**
 * The table cell padding command.
 *
 * The command is registered by the {@link module:table/tablecellproperties/tablecellpropertiesediting~TableCellPropertiesEditing} as
 * the `'tableCellPadding'` editor command.
 *
 * To change the padding of selected cells, execute the command:
 *
 *    editor.execute( 'tableCellPadding', {
 *      value: '5px'
 *    } );
 *
 * **Note**: This command adds the default `'px'` unit to numeric values. Executing:
 *
 *    editor.execute( 'tableCellPadding', {
 *      value: '5'
 *    } );
 *
 * will set the `padding` attribute to `'5px'` in the model.
 */
export default class TableCellPaddingCommand extends TableCellPropertyCommand {
    /**
     * Creates a new `TableCellPaddingCommand` instance.
     */
    constructor(editor: Editor, defaultValue: string);
    readonly attributeName: 'padding';
}
