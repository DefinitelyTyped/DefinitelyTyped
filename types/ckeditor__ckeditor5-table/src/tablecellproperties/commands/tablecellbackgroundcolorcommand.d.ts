import { Editor } from '@ckeditor/ckeditor5-core';
import TableCellPropertyCommand from './tablecellpropertycommand';

/**
 * The table cell background color command.
 *
 * The command is registered by the {@link module:table/tablecellproperties/tablecellpropertiesediting~TableCellPropertiesEditing} as
 * the `'tableCellBackgroundColor'` editor command.
 *
 * To change the background color of selected cells, execute the command:
 *
 *    editor.execute( 'tableCellBackgroundColor', {
 *      value: '#f00'
 *    } );
 */
export default class TableCellBackgroundColorCommand extends TableCellPropertyCommand {
    /**
     * Creates a new `TableCellBackgroundColorCommand` instance.
     *
     */
    constructor(editor: Editor, defaultValue: string);
    readonly attributeName: 'backgroundColor';
}
