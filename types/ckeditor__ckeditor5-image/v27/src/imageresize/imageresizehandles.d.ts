import { Plugin } from '@ckeditor/ckeditor5-core';
import { WidgetResize } from '@ckeditor/ckeditor5-widget';

export default class ImageResizeHandles extends Plugin {
    static readonly requires: [typeof WidgetResize];
    static readonly pluginName: 'ImageResizeHandles';
    init(): void;
}

declare module '@ckeditor/ckeditor5-core/src/plugincollection' {
    interface Plugins {
        ImageResizeHandles: ImageResizeHandles;
    }
}
