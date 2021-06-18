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
    elementName?: string;
    extraProviders?: MediaEmbedProvider[];
    previewsInData?: boolean;
    providers?: MediaEmbedProvider[];
    removeProviders?: string[];
    toolbar?: string[];
}

export interface MediaEmbedProvider {
    html?(url: RegExpMatchArray): string;
    name: string;
    url: RegExp | RegExp[];
}
