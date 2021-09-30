import { Plugin } from '@ckeditor/ckeditor5-core';

export default class ImageResizeEditing extends Plugin {
    static readonly pluginName: 'ImageResizeEditing';
    init(): void;
}

declare module '@ckeditor/ckeditor5-core/src/plugincollection' {
    interface Plugins {
        ImageResizeEditing: ImageResizeEditing;
    }
}
