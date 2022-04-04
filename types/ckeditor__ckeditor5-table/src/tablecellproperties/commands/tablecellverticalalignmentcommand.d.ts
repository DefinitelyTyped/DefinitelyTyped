import { Editor } from '@ckeditor/ckeditor5-core';
import TableCellPropertyCommand from './tablecellpropertycommand';

/**
 * The table cell vertical alignment command.
 *
 * The command is registered by the {@link module:table/tablecellproperties/tablecellpropertiesediting~TableCellPropertiesEditing} as
 * the `'tableCellVerticalAlignment'` editor command.
 *
 * To change the vertical text alignment of selected cells, execute the command:
 *
 *    editor.execute( 'tableCellVerticalAlignment', {
 *      value: 'top'
 *    } );
 *
 * The following values, corresponding to the
 * [`vertical-align` CSS attribute](https://developer.mozilla.org/en-US/docs/Web/CSS/vertical-align), are allowed:
 *
 * * `'top'`
 * * `'bottom'`
 *
 * The `'middle'` value is the default one so there is no need to set it.
 */
export default class TableCellVerticalAlignmentCommand extends TableCellPropertyCommand {
    /**
     * Creates a new `TableCellVerticalAlignmentCommand` instance.
     */
    constructor(editor: Editor, defaultValue: string);
    readonly attributeName: 'verticalAlignment';
}
