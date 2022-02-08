import { Plugin } from '@ckeditor/ckeditor5-core';

export default class ListStyleUI extends Plugin {
    static readonly pluginName: 'ListStyleUI';
    init(): void;
}

declare module '@ckeditor/ckeditor5-core/src/plugincollection' {
    interface Plugins {
        ListStyleUI: ListStyleUI;
    }
}
