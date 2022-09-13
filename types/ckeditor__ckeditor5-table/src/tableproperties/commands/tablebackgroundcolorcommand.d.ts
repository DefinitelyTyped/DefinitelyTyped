import { Editor } from '@ckeditor/ckeditor5-core';
import TablePropertyCommand from './tablepropertycommand';

export default class TableBackgroundColorCommand extends TablePropertyCommand {
    /**
     * Creates a new `TableBackgroundColorCommand` instance.
     */
    constructor(editor: Editor, defaultValue: string);
    readonly attributeName: 'backgroundColor';
}
