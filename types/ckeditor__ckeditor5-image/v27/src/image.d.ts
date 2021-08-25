import { Plugin } from '@ckeditor/ckeditor5-core';
import Element from '@ckeditor/ckeditor5-engine/src/view/element';
import { Widget } from '@ckeditor/ckeditor5-widget';
import ImageEditing from './image/imageediting';
import { ImageInsertConfig } from './imageinsert';
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
    insert?: ImageInsertConfig | undefined;
    resizeOptions?: ImageResizeOption[] | undefined;
    resizeUnit?: 'px' | '%' | undefined;
    styles?: Array<string | ImageStyleFormat> | undefined;
    toolbar?: string[] | undefined;
    upload?: ImageUploadConfig | undefined;
}

declare module '@ckeditor/ckeditor5-core/src/plugincollection' {
    interface Plugins {
        Image: Image;
    }
}
