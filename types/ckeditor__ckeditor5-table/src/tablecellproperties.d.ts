import { Plugin } from '@ckeditor/ckeditor5-core';
import TableCellPropertiesEditing from './tablecellproperties/tablecellpropertiesediting';
import TableCellPropertiesUI from './tablecellproperties/tablecellpropertiesui';

export default class TableCellProperties extends Plugin {
    static readonly pluginName: 'TableCellProperties';
    static readonly requires: [typeof TableCellPropertiesEditing, typeof TableCellPropertiesUI];
}

declare module '@ckeditor/ckeditor5-core/src/plugincollection' {
    interface Plugins {
        TableCellProperties: TableCellProperties;
    }
}
