import { Plugin } from '@ckeditor/ckeditor5-core';

export default class ListUI extends Plugin {
    static readonly pluginName: 'ListUI';
    init(): void;
}

declare module '@ckeditor/ckeditor5-core/src/plugincollection' {
    interface Plugins {
        ListUI: ListUI;
    }
}
