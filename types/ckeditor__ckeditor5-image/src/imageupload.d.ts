import { Plugin } from '@ckeditor/ckeditor5-core';
import ImageUploadEditing from './imageupload/imageuploadediting';
import ImageUploadProgress from './imageupload/imageuploadprogress';
import ImageUploadUI from './imageupload/imageuploadui';

export default class ImageUpload extends Plugin {
    static readonly pluginName: 'ImageUpload';
    static readonly requires: [typeof ImageUploadEditing, typeof ImageUploadUI, typeof ImageUploadProgress];
}

export interface ImageUploadConfig {
    types: string[];
}

declare module '@ckeditor/ckeditor5-core/src/plugincollection' {
    interface Plugins {
        ImageUpload: ImageUpload;
    }
}
