import { Plugin } from '@ckeditor/ckeditor5-core';
import ImageUtils from '../imageutils';

export default class ImageResizeEditing extends Plugin {
    static readonly pluginName: 'ImageResizeEditing';
    static readonly requires: [typeof ImageUtils];
    init(): void;
}
