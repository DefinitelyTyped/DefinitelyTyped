import DowncastDispatcher, {
    DowncastConversionApi,
} from '@ckeditor/ckeditor5-engine/src/conversion/downcastdispatcher';
import ModelElement from '@ckeditor/ckeditor5-engine/src/model/element';
import ContainerElement from '@ckeditor/ckeditor5-engine/src/view/containerelement';
/**
 * Model table element to view table element conversion helper.
 *
 * This conversion helper creates the whole table element with child elements.
 */
export function downcastInsertTable(options?: { asWidget?: boolean }): (dispatcher: DowncastDispatcher) => void;

/**
 * Model row element to view `<tr>` element conversion helper.
 *
 * This conversion helper creates the whole `<tr>` element with child elements.
 */
export function downcastInsertRow(): (dispatcher: DowncastDispatcher) => void;

/**
 * Model table cell element to view `<td>` or `<th>` element conversion helper.
 *
 * This conversion helper will create proper `<th>` elements for table cells that are in the heading section (heading row or column)
 * and `<td>` otherwise.
 */
export function downcastInsertCell(): (dispatcher: DowncastDispatcher) => void;

/**
 * Conversion helper that acts on heading column table attribute change.
 *
 * Depending on changed attributes this converter will rename `<td` to `<th>` elements or vice versa depending on the cell column index.
 */
export function downcastTableHeadingColumnsChange(): (dispatcher: DowncastDispatcher) => void;

/**
 * Conversion helper that acts on a removed row.
 */
export function downcastRemoveRow(): (dispatcher: DowncastDispatcher) => void;

/**
 * Overrides paragraph inside table cell conversion.
 *
 * This converter:
 * * should be used to override default paragraph conversion in the editing view.
 * * It will only convert <paragraph> placed directly inside <tableCell>.
 * * For a single paragraph without attributes it returns `<span>` to simulate data table.
 * * For all other cases it returns `<p>` element.
 */
export function convertParagraphInTableCell(
    modelElement: ModelElement,
    conversionApi: DowncastConversionApi,
): ContainerElement | void;

/**
 * Checks if given model `<paragraph>` is an only child of a parent (`<tableCell>`) and if it has any attribute set.
 *
 * The paragraph should be converted in the editing view to:
 *
 * * If returned `true` - to a `<span class="ck-table-bogus-paragraph">`
 * * If returned `false` - to a `<p>`
 */
export function isSingleParagraphWithoutAttributes(modelElement: ModelElement): boolean;
