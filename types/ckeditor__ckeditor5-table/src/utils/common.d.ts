import { Item } from '@ckeditor/ckeditor5-engine/src/model/item';
import Position from '@ckeditor/ckeditor5-engine/src/model/position';
import ModelElement from '@ckeditor/ckeditor5-engine/src/model/element';
import Writer from '@ckeditor/ckeditor5-engine/src/model/writer';
import TableUtils from '../tableutils';

/**
 * A common method to update the numeric value. If a value is the default one, it will be unset.
 */
export function updateNumericAttribute(
    key: string,
    value: number,
    item: Item,
    writer: Writer,
    defaultValue?: number,
): void;

/**
 * A common method to create an empty table cell. It creates a proper model structure as a table cell must have at least one block inside.
 */
export function createEmptyTableCell(
    writer: Writer,
    insertPosition: Position,
    attributes?: Record<string, string | number | boolean>,
): Element;

/**
 * Checks if a table cell belongs to the heading column section.
 */
export function isHeadingColumnCell(tableUtils: TableUtils, tableCell: ModelElement): boolean;
