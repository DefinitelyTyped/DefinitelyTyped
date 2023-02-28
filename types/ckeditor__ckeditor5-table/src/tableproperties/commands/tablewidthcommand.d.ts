import { Editor } from '@ckeditor/ckeditor5-core';
import TablePropertyCommand from './tablepropertycommand';

/**
 * The table width command.
 *
 * The command is registered by the {@link module:table/tableproperties/tablepropertiesediting~TablePropertiesEditing} as
 * the `'tableWidth'` editor command.
 *
 * To change the width of the selected table, execute the command:
 *
 *    editor.execute( 'tableWidth', {
 *      value: '400px'
 *    } );
 *
 * **Note**: This command adds the default `'px'` unit to numeric values. Executing:
 *
 *    editor.execute( 'tableWidth', {
 *      value: '50'
 *    } );
 *
 * will set the `width` attribute to `'50px'` in the model.
 */
export default class TableWidthCommand extends TablePropertyCommand {
    /**
     * Creates a new `TableWidthCommand` instance.
     */
    constructor(editor: Editor, defaultValue: string);
    readonly attributeName: 'width';
}
