import { Editor } from '@ckeditor/ckeditor5-core';
import ColorUI from '../ui/colorui';

export default class FontBackgroundColorUI extends ColorUI {
    constructor(editor: Editor);
    static readonly pluginName: 'FontBackgroundColorUI';
}
