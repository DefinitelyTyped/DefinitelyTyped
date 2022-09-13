import { Plugin } from '@ckeditor/ckeditor5-core';
import { Widget } from '@ckeditor/ckeditor5-widget';
import HtmlEmbedEditing from './htmlembedediting';
import HtmlEmbedUI from './htmlembedui';

export default class HtmlEmbed extends Plugin {
    static readonly requires: [typeof HtmlEmbedEditing, typeof HtmlEmbedUI, typeof Widget];
    static readonly pluginName: 'HtmlEmbed';
}

export interface HtmlEmbedConfig {
    sanitizeHtml?: ((inputHtml: string) => HtmlEmbedSanitizeOutput) | undefined;
    showPreviews?: boolean | undefined;
}
export interface HtmlEmbedSanitizeOutput {
    html: string;
    hasChanged: boolean;
}

declare module '@ckeditor/ckeditor5-core/src/plugincollection' {
    interface Plugins {
        HtmlEmbed: HtmlEmbed;
    }
}
