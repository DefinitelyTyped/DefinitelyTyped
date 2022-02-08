import { Plugin } from '@ckeditor/ckeditor5-core';

export default class FontSizeUI extends Plugin {
    static readonly pluginName: 'FontSizeUI';
    init(): void;
}

declare module '@ckeditor/ckeditor5-core/src/plugincollection' {
    interface Plugins {
        FontSizeUI: FontSizeUI;
    }
}
