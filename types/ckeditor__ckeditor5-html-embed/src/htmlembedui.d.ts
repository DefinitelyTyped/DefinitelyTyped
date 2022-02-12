import { Plugin } from '@ckeditor/ckeditor5-core';

export default class HtmlEmbedUI extends Plugin {
    static readonly pluginName: 'HtmlEmbedUI';
    init(): void;
}

declare module '@ckeditor/ckeditor5-core/src/plugincollection' {
    interface Plugins {
        HtmlEmbedUI: HtmlEmbedUI;
    }
}
