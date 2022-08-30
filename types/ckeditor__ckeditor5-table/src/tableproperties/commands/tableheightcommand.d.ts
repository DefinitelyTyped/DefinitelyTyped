import { Editor } from '@ckeditor/ckeditor5-core';
import TablePropertyCommand from './tablepropertycommand';

/**
 * The table height command.
 *
 * The command is registered by the {@link module:table/tableproperties/tablepropertiesediting~TablePropertiesEditing} as
 * the `'tableHeight'` editor command.
 *
 * To change the height of the selected table, execute the command:
 *
 *    editor.execute( 'tableHeight', {
 *      value: '500px'
 *    } );
 *
 * **Note**: This command adds the default `'px'` unit to numeric values. Executing:
 *
 *    editor.execute( 'tableHeight', {
 *      value: '50'
 *    } );
 *
 * will set the `height` attribute to `'50px'` in the model.
 */
export default class TableHeightCommand extends TablePropertyCommand {
    /**
     * Creates a new `TableHeightCommand` instance.
     */
    constructor(editor: Editor, defaultValue: string);
    readonly attributeName: 'height';
}
