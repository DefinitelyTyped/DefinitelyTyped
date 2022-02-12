import { Plugin } from '@ckeditor/ckeditor5-core';
import ImageUtils from '../imageutils';

export default class ImageCaptionUI extends Plugin {
    static readonly requires: [typeof ImageUtils];
    static readonly pluginName: 'ImageCaptionUI';
    init(): void;
}

declare module '@ckeditor/ckeditor5-core/src/plugincollection' {
    interface Plugins {
        ImageCaptionUI: ImageCaptionUI;
    }
}
