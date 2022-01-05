import { Editor } from '@ckeditor/ckeditor5-core';
import TablePropertyCommand from './tablepropertycommand';

/**
 * The table width border command.
 *
 * The command is registered by the {@link module:table/tableproperties/tablepropertiesediting~TablePropertiesEditing} as
 * the `'tableBorderWidth'` editor command.
 *
 * To change the border width of the selected table, execute the command:
 *
 *    editor.execute( 'tableBorderWidth', {
 *      value: '5px'
 *    } );
 *
 * **Note**: This command adds the default `'px'` unit to numeric values. Executing:
 *
 *    editor.execute( 'tableBorderWidth', {
 *      value: '5'
 *    } );
 *
 * will set the `borderWidth` attribute to `'5px'` in the model.
 */
export default class TableBorderWidthCommand extends TablePropertyCommand {
    /**
     * Creates a new `TableBorderWidthCommand` instance.
     */
    constructor(editor: Editor, defaultValue: string);
    readonly attributeName: 'borderWidth';
}
