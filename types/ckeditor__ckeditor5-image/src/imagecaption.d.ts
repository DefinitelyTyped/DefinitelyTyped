import ImageCaptionEditing from './imagecaption/imagecaptionediting';
import { Plugin } from '@ckeditor/ckeditor5-core';

export default class ImageCaption extends Plugin {
    static readonly requires: [typeof ImageCaptionEditing];
    static readonly pluginName: 'ImageCaption';
}
