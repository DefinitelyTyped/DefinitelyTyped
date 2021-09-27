import { Plugin } from '@ckeditor/ckeditor5-core';
import ImageResizeButtons from './imageresize/imageresizebuttons';
import ImageResizeEditing from './imageresize/imageresizeediting';
import ImageResizeHandles from './imageresize/imageresizehandles';

export default class ImageResize extends Plugin {
    static readonly requires: [typeof ImageResizeEditing, typeof ImageResizeHandles, typeof ImageResizeButtons];
    static readonly pluginName: 'ImageResize';
}

declare module '@ckeditor/ckeditor5-core/src/plugincollection' {
    interface Plugins {
        ImageResize: ImageResize;
    }
}
