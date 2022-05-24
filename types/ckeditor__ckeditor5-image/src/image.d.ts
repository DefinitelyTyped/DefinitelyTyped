import { Plugin } from '@ckeditor/ckeditor5-core';
import ImageBlock from './imageblock';
import ImageInline from './imageinline';
import { ImageInsertConfig } from './imageinsert';
import { ImageResizeOption } from './imageresize/imageresizebuttons';
import { ImageStyleConfig } from './imagestyle';
import { ImageUploadConfig } from './imageupload';

export default class Image extends Plugin {
    static readonly requires: [typeof ImageBlock, typeof ImageInline];
    static readonly pluginName: 'Image';
}

export interface ImageConfig {
    insert?: ImageInsertConfig | undefined;
    resizeOptions?: ImageResizeOption[] | undefined;
    resizeUnit?: 'px' | '%' | undefined;
    styles?: ImageStyleConfig | undefined;
    toolbar?: string[] | undefined;
    upload?: ImageUploadConfig | undefined;
}

declare module '@ckeditor/ckeditor5-core/src/plugincollection' {
    interface Plugins {
        Image: Image;
    }
}
