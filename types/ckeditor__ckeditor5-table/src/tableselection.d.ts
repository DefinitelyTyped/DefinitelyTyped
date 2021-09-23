import { Plugin } from '@ckeditor/ckeditor5-core';
import { Element } from '@ckeditor/ckeditor5-engine';
import DocumentFragment from '@ckeditor/ckeditor5-engine/src/model/documentfragment';
import TableUtils from './tableutils';

export default class TableSelection extends Plugin {
    static readonly pluginName: 'TableSelection';
    static readonly requires: [typeof TableUtils];
    init(): void;
    getSelectedTableCells(): Element[] | null;
    getSelectionAsFragment(): DocumentFragment | null;
    setCellSelection(anchorCell: Element, targetCell: Element): void;
    getFocusCell(): Element;
    getAnchorCell(): Element;
}

declare module '@ckeditor/ckeditor5-core/src/plugincollection' {
    interface Plugins {
        TableSelection: TableSelection;
    }
}
