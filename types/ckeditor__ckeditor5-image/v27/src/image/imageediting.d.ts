import { Plugin } from '@ckeditor/ckeditor5-core';

export default class ImageEditing extends Plugin {
    static readonly pluginName: 'ImageEditing';
    init(): void;
}

declare module '@ckeditor/ckeditor5-core/src/plugincollection' {
    interface Plugins {
        ImageEditing: ImageEditing;
    }
}
