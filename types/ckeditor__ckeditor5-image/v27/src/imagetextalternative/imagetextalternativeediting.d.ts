import { Plugin } from '@ckeditor/ckeditor5-core';

export default class ImageTextAlternativeEditing extends Plugin {
    static readonly pluginName: 'ImageTextAlternativeEditing';
    init(): void;
}

declare module '@ckeditor/ckeditor5-core/src/plugincollection' {
    interface Plugins {
        ImageTextAlternativeEditing: ImageTextAlternativeEditing;
    }
}
