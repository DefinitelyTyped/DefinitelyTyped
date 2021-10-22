import { Plugin } from '@ckeditor/ckeditor5-core';
import TableEditing from '../tableediting';

export default class TableCellPropertiesEditing extends Plugin {
    static readonly pluginName: 'TableCellPropertiesEditing';
    static readonly requires: [typeof TableEditing];
    init(): void;
}

declare module '@ckeditor/ckeditor5-core/src/plugincollection' {
    interface Plugins {
        TableCellPropertiesEditing: TableCellPropertiesEditing;
    }
}
