import { Plugin } from '@ckeditor/ckeditor5-core';
import { Element } from '@ckeditor/ckeditor5-engine';
import Writer from '@ckeditor/ckeditor5-engine/src/model/writer';

export default class TableUtils extends Plugin {
    static readonly pluginName: 'TableUtils';
    init(): void;
    getCellLocation(tableCell: Element): { row: number; column: number };
    createTable(
        writer: Writer,
        options?: { rows?: number | undefined; columns?: number | undefined; headingRows?: number | undefined; headingColumns?: number | undefined },
    ): Element;
    insertRows(table: Element, options?: { at?: number | undefined; rows?: number | undefined; copyStructureFrom?: boolean | undefined }): void;
    insertColumns(table: Element, options?: { at?: number | undefined; columns?: number | undefined }): void;
    removeRows(table: Element, options: { at: number; rows?: number | undefined }): void;
    removeColumns(table: Element, options: { at: number; columns?: number | undefined }): void;
    splitCellVertically(tableCell: Element, numberOfCells?: number): void;
    splitCellHorizontally(tableCell: Element, numberOfCells?: number): void;
    getColumns(table: Element): number;
    getRows(table: Element): number;
}

declare module '@ckeditor/ckeditor5-core/src/plugincollection' {
    interface Plugins {
        TableUtils: TableUtils;
    }
}
