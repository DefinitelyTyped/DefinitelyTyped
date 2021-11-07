import { Plugin } from '@ckeditor/ckeditor5-core';
export default class ImageInsertUI extends Plugin {
    static readonly pluginName: 'ImageInsertUI';
    init(): void;
}

declare module '@ckeditor/ckeditor5-core/src/plugincollection' {
    interface Plugins {
        ImageInsertUI: ImageInsertUI;
    }
}
