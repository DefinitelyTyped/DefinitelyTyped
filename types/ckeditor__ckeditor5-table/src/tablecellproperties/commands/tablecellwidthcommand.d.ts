import { Editor } from '@ckeditor/ckeditor5-core';
import TableCellPropertyCommand from './tablecellpropertycommand';

/**
 * The table cell width command.
 *
 * The command is registered by the {@link module:table/tablecellproperties/tablecellpropertiesediting~TableCellPropertiesEditing} as
 * the `'tableCellWidth'` editor command.
 *
 * To change the width of selected cells, execute the command:
 *
 *    editor.execute( 'tableCellWidth', {
 *      value: '50px'
 *    } );
 *
 * **Note**: This command adds a default `'px'` unit to numeric values. Executing:
 *
 *    editor.execute( 'tableCellWidth', {
 *      value: '50'
 *    } );
 *
 * will set the `width` attribute to `'50px'` in the model.
 */
export default class TableCellWidthCommand extends TableCellPropertyCommand {
    /**
     * Creates a new `TableCellWidthCommand` instance.
     */
    constructor(editor: Editor, defaultValue: string);
    readonly attributeName: 'width';
}
