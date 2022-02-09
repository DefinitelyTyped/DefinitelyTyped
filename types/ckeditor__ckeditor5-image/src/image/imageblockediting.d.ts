import ClipboardPipeline from '@ckeditor/ckeditor5-clipboard/src/clipboardpipeline';
import { Plugin } from '@ckeditor/ckeditor5-core';
import { ImageEditing } from '@ckeditor/ckeditor5-image';
import ImageUtils from '../imageutils';

export default class ImageBlockEditing extends Plugin {
    static readonly requires: [typeof ImageEditing, typeof ImageUtils, typeof ClipboardPipeline];
    static readonly pluginName: 'ImageBlockEditing';
    init(): void;
}

declare module '@ckeditor/ckeditor5-core/src/plugincollection' {
    interface Plugins {
        ImageBlockEditing: ImageBlockEditing;
    }
}
