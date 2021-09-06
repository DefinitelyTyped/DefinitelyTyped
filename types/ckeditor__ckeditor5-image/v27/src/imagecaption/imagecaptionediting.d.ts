import { Plugin } from '@ckeditor/ckeditor5-core';
export default class ImageCaptionEditing extends Plugin {
    static readonly pluginName: 'ImageCaptionEditing';
    init(): void;
}

declare module '@ckeditor/ckeditor5-core/src/plugincollection' {
    interface Plugins {
        ImageCaptionEditing: ImageCaptionEditing;
    }
}
