import { Editor } from '@ckeditor/ckeditor5-core';
import TableCellPropertyCommand from './tablecellpropertycommand';

/**
 * The table cell border color command.
 *
 * The command is registered by the {@link module:table/tablecellproperties/tablecellpropertiesediting~TableCellPropertiesEditing} as
 * the `'tableCellBorderColor'` editor command.
 *
 * To change the border color of selected cells, execute the command:
 *
 *    editor.execute( 'tableCellBorderColor', {
 *      value: '#f00'
 *    } );
 */
export default class TableCellBorderColorCommand extends TableCellPropertyCommand {
    /**
     * Creates a new `TableCellBorderColorCommand` instance.
     */
    constructor(editor: Editor, defaultValue: string);
    readonly attributeName: 'borderColor';
}
