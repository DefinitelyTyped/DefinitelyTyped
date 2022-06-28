import { Plugin } from '@ckeditor/ckeditor5-core';
import TablePropertiesEditing from './tableproperties/tablepropertiesediting';
import TablePropertiesUI from './tableproperties/tablepropertiesui';

export default class TableProperties extends Plugin {
    static readonly pluginName: 'TableProperties';
    static readonly requires: [typeof TablePropertiesEditing, typeof TablePropertiesUI];
}

declare module '@ckeditor/ckeditor5-core/src/plugincollection' {
    interface Plugins {
        TableProperties: TableProperties;
    }
}

export interface TablePropertiesOptions {
    width: string;
    height: string;
    backgroundColor: string;
    borderColor: string;
    borderWidth: string;
    borderStyle?: string;
    alignment?: string;
}
