import { Plugin } from '@ckeditor/ckeditor5-core';
import ImageInsertUI from './imageinsert/imageinsertui';
import ImageUpload from './imageupload';

export default class ImageInsert extends Plugin {
    static readonly pluginName: 'ImageInsert';
    static readonly requires: [typeof ImageUpload, typeof ImageInsertUI];
}

export interface ImageInsertConfig {
    integrations: string[];
}

declare module '@ckeditor/ckeditor5-core/src/plugincollection' {
    interface Plugins {
        ImageInsert: ImageInsert;
    }
}
