import { Plugin } from '@ckeditor/ckeditor5-core';
import ListPropertiesEditing from './listproperties/listpropertiesediting';
import ListPropertiesUI from './listproperties/listpropertiesui';

export default class ListProperties extends Plugin {
    static readonly pluginName: 'ListProperties';
    static readonly requires: [typeof ListPropertiesEditing, typeof ListPropertiesUI];
}
