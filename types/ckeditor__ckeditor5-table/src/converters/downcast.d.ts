import { Element as ModelElement } from '@ckeditor/ckeditor5-engine';
import { DowncastConversionApi } from '@ckeditor/ckeditor5-engine/src/conversion/downcastdispatcher';
import ContainerElement from '@ckeditor/ckeditor5-engine/src/view/containerelement';
import EditableElement from '@ckeditor/ckeditor5-engine/src/view/editableelement';
import ViewElement from '@ckeditor/ckeditor5-engine/src/view/element';
import EmptyElement from '@ckeditor/ckeditor5-engine/src/view/emptyelement';
import TableUtils from '../tableutils';

/**
 * Model table element to view table element conversion helper.
 */
export function downcastTable(
    tableUtils: TableUtils,
    options?: { asWidget?: boolean },
): (table: ModelElement, api: DowncastConversionApi) => ViewElement | ContainerElement;

/**
 * Model table row element to view `<tr>` element conversion helper.
 */
export function downcastRow(): (tableRow: ModelElement, api: DowncastConversionApi) => EmptyElement | ContainerElement;

/**
 * Model table cell element to view `<td>` or `<th>` element conversion helper.
 *
 * This conversion helper will create proper `<th>` elements for table cells that are in the heading section (heading row or column)
 * and `<td>` otherwise.
 */
export function downcastCell(options?: {
    asWidget?: boolean;
}): (tableCell: ModelElement, api: DowncastConversionApi) => EditableElement | ContainerElement;

/**
 * Overrides paragraph inside table cell conversion.
 *
 * This converter:
 * * should be used to override default paragraph conversion.
 * * It will only convert `<paragraph>` placed directly inside `<tableCell>`.
 * * For a single paragraph without attributes it returns `<span>` to simulate data table.
 * * For all other cases it returns `<p>` element.
 */
export function convertParagraphInTableCell(options?: {
    asWidget?: boolean;
}): (modelElement: ModelElement, { writer, consumable, mapper }: DowncastConversionApi) => ContainerElement | void;

/**
 * Checks if given model `<paragraph>` is an only child of a parent (`<tableCell>`) and if it has any attribute set.
 *
 * The paragraph should be converted in the editing view to:
 *
 * * If returned `true` - to a `<span class="ck-table-bogus-paragraph">`
 * * If returned `false` - to a `<p>`
 */
export function isSingleParagraphWithoutAttributes(modelElement: ModelElement): boolean;
