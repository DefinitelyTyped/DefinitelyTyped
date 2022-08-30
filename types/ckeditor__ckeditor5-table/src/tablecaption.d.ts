import { Plugin } from '@ckeditor/ckeditor5-core';
import TableCaptionEditing from './tablecaption/tablecaptionediting';
import TableCaptionUI from './tablecaption/tablecaptionui';

/**
 * The table caption plugin.
 */
export default class TableCaption extends Plugin {
    static readonly pluginName: 'TableCaption';
    static readonly requires: [typeof TableCaptionEditing, typeof TableCaptionUI];
}
