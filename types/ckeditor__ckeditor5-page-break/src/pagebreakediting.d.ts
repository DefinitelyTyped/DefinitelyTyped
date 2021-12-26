import { Plugin } from '@ckeditor/ckeditor5-core';
/**
 * The page break editing feature.
 */
export default class PageBreakEditing extends Plugin {
    static readonly pluginName: 'PageBreakEditing';
    init(): void;
}

declare module '@ckeditor/ckeditor5-core/src/plugincollection' {
    interface Plugins {
        PageBreakEditing: PageBreakEditing;
    }
}
