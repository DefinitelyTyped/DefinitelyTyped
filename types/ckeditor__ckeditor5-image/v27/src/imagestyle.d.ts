import { Plugin } from '@ckeditor/ckeditor5-core';
import ImageStyleEditing from './imagestyle/imagestyleediting';
import ImageStyleUI from './imagestyle/imagestyleui';

export default class ImageStyle extends Plugin {
    static readonly requires: [typeof ImageStyleEditing, typeof ImageStyleUI];
    static readonly pluginName: 'ImageStyle';
}

declare module '@ckeditor/ckeditor5-core/src/plugincollection' {
    interface Plugins {
        ImageStyle: ImageStyle;
    }
}
