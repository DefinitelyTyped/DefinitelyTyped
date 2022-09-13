import { Plugin } from '@ckeditor/ckeditor5-core';
import { Element, Model } from '@ckeditor/ckeditor5-engine';
import DocumentFragment from '@ckeditor/ckeditor5-engine/src/model/documentfragment';
import { Item } from '@ckeditor/ckeditor5-engine/src/model/item';
import TableSelection from './tableselection';
import TableUtils from './tableutils';

/**
 * This plugin adds support for copying/cutting/pasting fragments of tables.
 * It is loaded automatically by the {@link module:table/table~Table} plugin.
 */
export default class TableClipboard extends Plugin {
    static readonly pluginName: 'TableClipboard';
    static readonly requires: [typeof TableSelection, typeof TableUtils];
    init(): void;

    /**
     * Extracts the table for pasting into a table.
     */
    getTableIfOnlyTableInContent(content: DocumentFragment | Item, model: Model): Element | null;
}

declare module '@ckeditor/ckeditor5-core/src/plugincollection' {
    interface Plugins {
        TableClipboard: TableClipboard;
    }
}
