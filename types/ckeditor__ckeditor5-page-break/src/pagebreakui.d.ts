import { Plugin } from '@ckeditor/ckeditor5-core';
/**
 * The page break UI plugin.
 */
export default class PageBreakUI extends Plugin {
    static readonly pluginName: 'PageBreakUI';
    init(): void;
}

declare module '@ckeditor/ckeditor5-core/src/plugincollection' {
    interface Plugins {
        PageBreakUI: PageBreakUI;
    }
}
