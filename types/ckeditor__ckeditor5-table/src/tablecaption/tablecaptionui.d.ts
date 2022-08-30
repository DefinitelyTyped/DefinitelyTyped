import { Plugin } from '@ckeditor/ckeditor5-core';
/**
 * The table caption UI plugin. It introduces the `'toggleTableCaption'` UI button.
 */
export default class TableCaptionUI extends Plugin {
    static readonly pluginName: 'TableCaptionUI';
    init(): void;
}

declare module '@ckeditor/ckeditor5-core/src/plugincollection' {
    interface Plugins {
        TableCaptionUI: TableCaptionUI;
    }
}
