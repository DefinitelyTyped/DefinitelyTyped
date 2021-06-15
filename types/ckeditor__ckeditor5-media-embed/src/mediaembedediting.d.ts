import { Plugin } from '@ckeditor/ckeditor5-core';
import MediaRegistry from './mediaregistry';

export default class MediaEmbedEditing extends Plugin {
    static readonly pluginName: 'MediaEmbedEditing';
    readonly registry: MediaRegistry;
    init(): void;
}
