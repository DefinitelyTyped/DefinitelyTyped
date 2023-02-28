import { Editor } from '@ckeditor/ckeditor5-core';
import TablePropertyCommand from './tablepropertycommand';

/**
 * The table alignment command.
 *
 * The command is registered by the {@link module:table/tableproperties/tablepropertiesediting~TablePropertiesEditing} as
 * the `'tableAlignment'` editor command.
 *
 * To change the alignment of the selected table, execute the command:
 *
 *    editor.execute( 'tableAlignment', {
 *      value: 'right'
 *    } );
 */
export default class TableAlignmentCommand extends TablePropertyCommand {
    /**
     * Creates a new `TableAlignmentCommand` instance.
     */
    constructor(editor: Editor, defaultValue: string);
    readonly attributeName: 'alignment';
}
