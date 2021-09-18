import { Plugin } from '@ckeditor/ckeditor5-core';
import TableEditing from '../tableediting';

export default class TablePropertiesEditing extends Plugin {
    static readonly pluginName: 'TablePropertiesEditing';
    static readonly requires: [typeof TableEditing];
    init(): void;
}

declare module '@ckeditor/ckeditor5-core/src/plugincollection' {
    interface Plugins {
        TablePropertiesEditing: TablePropertiesEditing;
    }
}
