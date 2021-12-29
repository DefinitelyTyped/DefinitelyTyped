import { Plugin } from '@ckeditor/ckeditor5-core';
import ImageUtils from '../imageutils';

export default class ImageTextAlternativeEditing extends Plugin {
    static readonly pluginName: 'ImageTextAlternativeEditing';
    static readonly requires: [typeof ImageUtils];
    init(): void;
}

declare module '@ckeditor/ckeditor5-core/src/plugincollection' {
    interface Plugins {
        ImageTextAlternativeEditing: ImageTextAlternativeEditing;
    }
}
