import { Plugin } from '@ckeditor/ckeditor5-core';
import Element from '@ckeditor/ckeditor5-engine/src/view/element';
import { Widget } from '@ckeditor/ckeditor5-widget';
import ImageEditing from './image/imageediting';
import { ImageResizeOption } from './imageresize/imageresizebuttons';
import { ImageStyleFormat } from './imagestyle/imagestyleediting';
import ImageTextAlternative from './imagetextalternative';
import { ImageUploadConfig } from './imageupload';

export default class Image extends Plugin {
    static readonly requires: [typeof ImageEditing, typeof Widget, typeof ImageTextAlternative];
    static readonly pluginName: 'Image';
    isImageWidget(viewElement: Element): boolean;
}

export interface ImageConfig {
    resizeOptions?: ImageResizeOption[];
    resizeUnit?: 'px' | '%';
    styles?: ImageStyleFormat[];
    toolbar?: string[];
    upload?: ImageUploadConfig;
}
