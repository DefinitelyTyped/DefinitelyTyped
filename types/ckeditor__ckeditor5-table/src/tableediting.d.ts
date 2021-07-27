import { Plugin } from '@ckeditor/ckeditor5-core';
import TableUtils from './tableutils';

export default class TableEditing extends Plugin {
    static readonly pluginName: 'TableEditing';
    static readonly requires: [typeof TableUtils];
    init(): void;
}
