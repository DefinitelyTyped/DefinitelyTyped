import { Plugin } from '@ckeditor/ckeditor5-core';
import DocumentListPropertiesEditing from './documentlistproperties/documentlistpropertiesediting';
import ListPropertiesUI from './listproperties/listpropertiesui';

/**
 * The document list properties feature.
 */
export default class DocumentListProperties extends Plugin {
    static readonly requires: [typeof DocumentListPropertiesEditing, typeof ListPropertiesUI];
    static pluginName: 'DocumentListProperties';
}
