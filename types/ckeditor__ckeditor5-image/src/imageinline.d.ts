import { Plugin } from '@ckeditor/ckeditor5-core';
import { Widget } from '@ckeditor/ckeditor5-widget';
import ImageTextAlternative from './imagetextalternative';
import ImageInlineEditing from './image/imageinlineediting';

export default class ImageInline extends Plugin {
    static readonly requires: [typeof ImageInlineEditing, typeof Widget, typeof ImageTextAlternative];
    static pluginName: 'ImageInline';
}

declare module '@ckeditor/ckeditor5-core/src/plugincollection' {
    interface Plugins {
        ImageInline: ImageInline;
    }
}
