import { Plugin } from '@ckeditor/ckeditor5-core';
import { Element } from '@ckeditor/ckeditor5-engine';
import Writer from '@ckeditor/ckeditor5-engine/src/model/writer';

export default class TableUtils extends Plugin {
    static readonly pluginName: 'TableUtils';
    init(): void;
    getCellLocation(tableCell: Element): { row: number; column: number };
    createTable(
        writer: Writer,
        options?: { rows?: number; columns?: number; headingRows?: number; headingColumns?: number },
    ): Element;
    insertRows(table: Element, options?: { at?: number; rows?: number; copyStructureFrom?: boolean }): void;
    insertColumns(table: Element, options?: { at?: number; columns?: number }): void;
    removeRows(table: Element, options: { at: number; rows?: number }): void;
    removeColumns(table: Element, options: { at: number; columns?: number }): void;
    splitCellVertically(tableCell: Element, numberOfCells?: number): void;
    splitCellHorizontally(tableCell: Element, numberOfCells?: number): void;
    getColumns(table: Element): number;
    getRows(table: Element): number;
}
