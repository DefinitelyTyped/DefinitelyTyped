import { Plugin } from '@ckeditor/ckeditor5-core';
import TableSelection from './tableselection';

export default class TableKeyboard extends Plugin {
    static readonly pluginName: 'TableKeyboard';
    static readonly requires: [typeof TableSelection];
    init(): void;
}

declare module '@ckeditor/ckeditor5-core/src/plugincollection' {
    interface Plugins {
        TableKeyboard: TableKeyboard;
    }
}
