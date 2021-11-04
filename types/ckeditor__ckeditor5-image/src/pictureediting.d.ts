import { Plugin } from '@ckeditor/ckeditor5-core';
import ImageEditing from './image/imageediting';
import ImageUtils from './imageutils';

export default class PictureEditing extends Plugin {
    static readonly requires: [typeof ImageEditing, typeof ImageUtils];
    static readonly pluginName: 'PictureEditing';
    afterInit(): void;
}

declare module '@ckeditor/ckeditor5-core/src/plugincollection' {
    interface Plugins {
        PictureEditing: PictureEditing;
    }
}
