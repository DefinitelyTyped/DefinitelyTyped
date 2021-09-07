import { Editor } from '@ckeditor/ckeditor5-core';
import ColorUI from '../ui/colorui';

export default class FontColorUI extends ColorUI {
    constructor(editor: Editor);
    static readonly pluginName: 'FontColorUI';
}

declare module '@ckeditor/ckeditor5-core/src/plugincollection' {
    interface Plugins {
        FontColorUI: FontColorUI;
    }
}
