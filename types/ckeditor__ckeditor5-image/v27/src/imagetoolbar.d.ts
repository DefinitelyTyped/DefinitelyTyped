import { Plugin } from '@ckeditor/ckeditor5-core';
import { WidgetToolbarRepository } from '@ckeditor/ckeditor5-widget';

export default class ImageToolbar extends Plugin {
    static readonly requires: [typeof WidgetToolbarRepository];
    static readonly pluginName: 'ImageToolbar';
    afterInit(): void;
}

declare module '@ckeditor/ckeditor5-core/src/plugincollection' {
    interface Plugins {
        ImageToolbar: ImageToolbar;
    }
}
