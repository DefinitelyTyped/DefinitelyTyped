import { Plugin } from '@ckeditor/ckeditor5-core';
import { Widget } from '@ckeditor/ckeditor5-widget';
import PageBreakEditing from './pagebreakediting';
import PageBreakUI from './pagebreakui';
/**
 * The page break feature.
 *
 * It provides the possibility to insert a page break into the rich-text editor.
 *
 * For a detailed overview, check the {@glink features/page-break Page break feature} documentation.
 */
export default class PageBreak extends Plugin {
    static readonly requires: [typeof PageBreakEditing, typeof PageBreakUI, typeof Widget];
    static readonly pluginName: 'PageBreak';
}

declare module '@ckeditor/ckeditor5-core/src/plugincollection' {
    interface Plugins {
        PageBreak: PageBreak;
    }
}
