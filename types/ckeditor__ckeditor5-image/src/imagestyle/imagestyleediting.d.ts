import { Plugin } from '@ckeditor/ckeditor5-core';
import ImageUtils from '../imageutils';

export default class ImageStyleEditing extends Plugin {
    static readonly pluginName: 'ImageStyleEditing';
    static readonly requires: [typeof ImageUtils];
    init(): void;
}

declare module '@ckeditor/ckeditor5-core/src/plugincollection' {
    interface Plugins {
        ImageStyleEditing: ImageStyleEditing;
    }
}
