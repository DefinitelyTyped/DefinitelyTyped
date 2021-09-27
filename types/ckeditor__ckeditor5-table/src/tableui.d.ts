import { Plugin } from '@ckeditor/ckeditor5-core';

export default class TableUI extends Plugin {
    static readonly pluginName: 'TableUI';
    init(): void;
}

declare module '@ckeditor/ckeditor5-core/src/plugincollection' {
    interface Plugins {
        TableUI: TableUI;
    }
}
