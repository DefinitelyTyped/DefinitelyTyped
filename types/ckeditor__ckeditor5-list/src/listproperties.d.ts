import { Plugin } from '@ckeditor/ckeditor5-core';
import ListPropertiesEditing from './listpropertiesediting';
import ListPropertiesUI from './listpropertiesui';

export default class ListProperties extends Plugin {
    static readonly pluginName: 'ListProperties';
    static readonly requires: [typeof ListPropertiesEditing, typeof ListPropertiesUI];
}

declare module '@ckeditor/ckeditor5-core/src/plugincollection' {
    interface Plugins {
        ListProperties: ListProperties;
    }
}
