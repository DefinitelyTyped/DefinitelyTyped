import { Plugin } from '@ckeditor/ckeditor5-core';

export default class HtmlEmbedEditing extends Plugin {
    static readonly pluginName: 'HtmlEmbedEditing';
    init(): void;
}

declare module '@ckeditor/ckeditor5-core/src/plugincollection' {
    interface Plugins {
        HtmlEmbedEditing: HtmlEmbedEditing;
    }
}
