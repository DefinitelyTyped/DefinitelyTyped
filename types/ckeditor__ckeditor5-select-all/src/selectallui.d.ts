import { Plugin } from '@ckeditor/ckeditor5-core';

export default class SelectAllUI extends Plugin {
    static readonly pluginName: 'SelectAllUI';
    init(): void;
}

declare module '@ckeditor/ckeditor5-core/src/plugincollection' {
    interface Plugins {
        SelectAllUI: SelectAllUI;
    }
}
