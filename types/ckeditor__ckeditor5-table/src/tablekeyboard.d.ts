import { Plugin } from '@ckeditor/ckeditor5-core';
import TableSelection from './tableselection';
import TableUtils from './tableutils';

export default class TableKeyboard extends Plugin {
    static readonly pluginName: 'TableKeyboard';
    static readonly requires: [typeof TableSelection, typeof TableUtils];
    init(): void;
}

declare module '@ckeditor/ckeditor5-core/src/plugincollection' {
    interface Plugins {
        TableKeyboard: TableKeyboard;
    }
}
