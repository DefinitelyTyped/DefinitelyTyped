import { Editor } from '@ckeditor/ckeditor5-core';
import ColorUI from '../ui/colorui';

export default class FontColorUI extends ColorUI {
    constructor(editor: Editor);
    static readonly pluginName: 'FontColorUI';
}
