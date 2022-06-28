import { Editor } from '@ckeditor/ckeditor5-core';
import TablePropertyCommand from './tablepropertycommand';

/**
 * The table border color command.
 *
 * The command is registered by the {@link module:table/tableproperties/tablepropertiesediting~TablePropertiesEditing} as
 * the `'tableBorderColor'` editor command.
 *
 * To change the border color of the selected table, execute the command:
 *
 *    editor.execute( 'tableBorderColor', {
 *      value: '#f00'
 *    } );
 */
export default class TableBorderColorCommand extends TablePropertyCommand {
    /**
     * Creates a new `TableBorderColorCommand` instance.
     */
    constructor(editor: Editor, defaultValue: string);
    readonly attributeName: 'borderColor';
}
