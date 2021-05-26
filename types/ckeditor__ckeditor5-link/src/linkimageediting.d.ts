import { Plugin } from '@ckeditor/ckeditor5-core';
import LinkEditing from './linkediting';
// TODO: import ImageEditing from '@ckeditor/ckeditor5-image/src/image/imageediting'
declare class ImageEditing extends Plugin {}

export default class LinkImageEditing extends Plugin {
    static readonly requires: [typeof ImageEditing, typeof LinkEditing];
    static readonly pluginName: 'LinkImageEditing';
    init(): void;
}

export {};
