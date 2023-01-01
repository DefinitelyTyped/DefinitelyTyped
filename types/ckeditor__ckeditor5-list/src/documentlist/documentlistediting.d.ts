import { Plugin } from '@ckeditor/ckeditor5-core';
import { Enter } from '@ckeditor/ckeditor5-enter';
import { Delete } from '@ckeditor/ckeditor5-typing';

import DocumentListUtils from './documentlistutils';

// tslint:disable-next-line:no-empty-interface
export interface DowncastStrategy {}

/**
 * The editing part of the document-list feature. It handles creating, editing and removing lists and list items.
 */
export default class DocumentListEditing extends Plugin {
    static readonly pluginName: 'DocumentListEditing';
    static readonly requires: [typeof Enter, typeof Delete, typeof DocumentListUtils];

    init(): void;
    afterInit(): void;

    /**
     * Registers a downcast strategy.
     */
    registerDowncastStrategy(strategy: DowncastStrategy): void;
}
