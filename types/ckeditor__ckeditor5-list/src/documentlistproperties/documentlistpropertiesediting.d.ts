import { Plugin } from '@ckeditor/ckeditor5-core';

import DocumentListEditing from '../documentlist/documentlistediting';
import DocumentListPropertiesUtils from './documentlistpropertiesutils';

/**
 * The document list properties engine feature.
 */
export default class DocumentListPropertiesEditing extends Plugin {
    static readonly requires: [typeof DocumentListEditing, typeof DocumentListPropertiesUtils];
    static readonly pluginName: 'DocumentListPropertiesEditing';

    init(): void;
}
