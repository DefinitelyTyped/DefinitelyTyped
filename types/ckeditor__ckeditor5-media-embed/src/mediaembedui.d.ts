import { Plugin } from '@ckeditor/ckeditor5-core';
import MediaEmbedEditing from './mediaembedediting';

export default class MediaEmbedUI extends Plugin {
    static readonly requires: [typeof MediaEmbedEditing];
    static readonly pluginName: 'MediaEmbedUI';
    init(): void;
}
