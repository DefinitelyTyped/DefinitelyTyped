import { Plugin, Editor } from '@ckeditor/ckeditor5-core';
import ListEditing from './listediting';

/**
 * The engine of the list properties feature.
 */
export default class ListPropertiesEditing extends Plugin {
    static readonly pluginName: 'ListPropertiesEditing';
    static readonly requires: [typeof ListEditing];

    constructor(editor: Editor);
    init(): void;
    afterInit(): void;
}

declare module '@ckeditor/ckeditor5-core/src/plugincollection' {
    interface Plugins {
        ListPropertiesEditing: ListPropertiesEditing;
    }
}
