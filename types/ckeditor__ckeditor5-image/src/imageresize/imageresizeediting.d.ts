import { Plugin } from '@ckeditor/ckeditor5-core';
import ImageUtils from '../imageutils';

export default class ImageResizeEditing extends Plugin {
    static readonly pluginName: 'ImageResizeEditing';
    static readonly requires: [typeof ImageUtils];
    init(): void;
}

declare module '@ckeditor/ckeditor5-core/src/plugincollection' {
    interface Plugins {
        ImageResizeEditing: ImageResizeEditing;
    }
}
