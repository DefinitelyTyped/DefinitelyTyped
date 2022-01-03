import { Plugin } from '@ckeditor/ckeditor5-core';
/**
 * The table caption editing plugin.
 */
export default class TableCaptionEditing extends Plugin {
    static readonly pluginName: 'TableCaptionEditing';
}

declare module '@ckeditor/ckeditor5-core/src/plugincollection' {
    interface Plugins {
        TableCaptionEditing: TableCaptionEditing;
    }
}
