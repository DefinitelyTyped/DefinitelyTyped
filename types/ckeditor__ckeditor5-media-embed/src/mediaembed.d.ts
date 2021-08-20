import { Plugin } from '@ckeditor/ckeditor5-core';
import { Widget } from '@ckeditor/ckeditor5-widget';
import AutoMediaEmbed from './automediaembed';
import MediaEmbedEditing from './mediaembedediting';
import MediaEmbedUI from './mediaembedui';

export default class MediaEmbed extends Plugin {
    static readonly requires: [typeof MediaEmbedEditing, typeof MediaEmbedUI, typeof AutoMediaEmbed, typeof Widget];
    static readonly pluginName: 'MediaEmbed';
}

export interface MediaEmbedConfig {
    elementName?: string | undefined;
    extraProviders?: MediaEmbedProvider[] | undefined;
    previewsInData?: boolean | undefined;
    providers?: MediaEmbedProvider[] | undefined;
    removeProviders?: string[] | undefined;
    toolbar?: string[] | undefined;
}

export interface MediaEmbedProvider {
    html?(url: RegExpMatchArray): string;
    name: string;
    url: RegExp | RegExp[];
}

declare module '@ckeditor/ckeditor5-core/src/plugincollection' {
    interface Plugins {
        MediaEmbed: MediaEmbed;
    }
}
