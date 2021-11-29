import ImageCaptionEditing from './imagecaption/imagecaptionediting';
import { Plugin } from '@ckeditor/ckeditor5-core';
import ImageCaptionUI from './imagecaption/imagecaptionui';

export default class ImageCaption extends Plugin {
    static readonly requires: [typeof ImageCaptionEditing, typeof ImageCaptionUI];
    static readonly pluginName: 'ImageCaption';
}

declare module '@ckeditor/ckeditor5-core/src/plugincollection' {
    interface Plugins {
        ImageCaption: ImageCaption;
    }
}
