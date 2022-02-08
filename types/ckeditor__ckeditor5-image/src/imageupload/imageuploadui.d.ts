import { Plugin } from '@ckeditor/ckeditor5-core';

export default class ImageUploadUI extends Plugin {
    static readonly pluginName: 'ImageUploadUI';
    init(): void;
}

declare module '@ckeditor/ckeditor5-core/src/plugincollection' {
    interface Plugins {
        ImageUploadUI: ImageUploadUI;
    }
}
