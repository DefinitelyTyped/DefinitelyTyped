import { Plugin } from '@ckeditor/ckeditor5-core';
import DocumentListEditing from './documentlist/documentlistediting';
import ListUI from './list/listui';

/**
 * The document list feature.
 */
export default class DocumentList extends Plugin {
    static readonly requires: [typeof DocumentListEditing, typeof ListUI];
    static readonly pluginName: 'DocumentList';
}
