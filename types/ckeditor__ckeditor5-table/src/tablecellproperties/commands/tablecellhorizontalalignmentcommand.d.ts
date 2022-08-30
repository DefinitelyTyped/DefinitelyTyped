import { Editor } from '@ckeditor/ckeditor5-core';
import TableCellPropertyCommand from './tablecellpropertycommand';

/**
 * The table cell horizontal alignment command.
 *
 * The command is registered by the {@link module:table/tablecellproperties/tablecellpropertiesediting~TableCellPropertiesEditing} as
 * the `'tableCellHorizontalAlignment'` editor command.
 *
 * To change the horizontal text alignment of selected cells, execute the command:
 *
 *    editor.execute( 'tableCellHorizontalAlignment', {
 *      value: 'right'
 *    } );
 */
export default class TableCellHorizontalAlignmentCommand extends TableCellPropertyCommand {
    /**
     * Creates a new `TableCellHorizontalAlignmentCommand` instance.
     */
    constructor(editor: Editor, defaultValue: string);
    readonly attributeName: 'horizontalAlignment';
}
