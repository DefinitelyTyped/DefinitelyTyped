import { Plugin } from '@ckeditor/ckeditor5-core';

export default class HorizontalLineUI extends Plugin {
    static readonly pluginName: 'HorizontalLineUI';
    init(): void;
}

declare module '@ckeditor/ckeditor5-core/src/plugincollection' {
    interface Plugins {
        HorizontalLineUI: HorizontalLineUI;
    }
}
