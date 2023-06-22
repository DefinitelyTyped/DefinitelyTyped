/// <reference types="node" />
/// <reference types="pdfkit" />

/**
 * Size of a page.
 */
export type PageSize = PredefinedPageSize | CustomPageSize;

/**
 * A page size using custom dimensions.
 */
export interface CustomPageSize {
    /**
     * Page width in `pt`.
     */
    width: number;

    /**
     * Page height in `pt`, or `auto` to adapt the page height to the document's content
     * (the document will always have a single page).
     */
    height: number | 'auto';
}

/**
 * A position applied to an element.
 */
export interface Position {
    /**
     * Horizontal position from the left edge of the page in `pt`.
     *
     * Defaults to `0`.
     */
    x?: number | undefined;

    /**
     * Vertical position from the top of the page in `pt`.
     *
     * Defaults to `0`.
     */
    y?: number | undefined;
}

/**
 * Available predefined page sizes:
 * - ISO 216 standard sizes (e.g. `A4`)
 * - ISO 217 raw sizes (e.g. `RA4`)
 * - American loose sizes (e.g. `TABLOID`)
 */
export type PredefinedPageSize =
    | '4A0' | '2A0'
    | 'A0' | 'A1' | 'A2' | 'A3' | 'A4' | 'A5' | 'A6' | 'A7' | 'A8' | 'A9' | 'A10'
    | 'B0' | 'B1' | 'B2' | 'B3' | 'B4' | 'B5' | 'B6' | 'B7' | 'B8' | 'B9' | 'B10'
    | 'C0' | 'C1' | 'C2' | 'C3' | 'C4' | 'C5' | 'C6' | 'C7' | 'C8' | 'C9' | 'C10'
    | 'RA1' | 'RA2' | 'RA3' | 'RA4'
    | 'SRA1' | 'SRA2' | 'SRA3' | 'SRA4'
    | 'EXECUTIVE' | 'FOLIO' | 'LEGAL' | 'LETTER' | 'TABLOID';

/**
 * Orientation of a page:
 * - `portrait` uses the shorter dimension as width and the longer one as height
 * - `landscape` uses the longer dimension as width and the shorter one as height
 *
 * A page's orientation does not rotate its content; it is always rendered top to bottom.
 */
export type PageOrientation = 'portrait' | 'landscape';

/**
 * Different types of page breaks:
 * - `before`/`after` add a page break before or after an element
 * - `beforeEven`/`afterEven` adds one or two page breaks before/after an element
 *   so that the content after the page break is on an even page
 * - `beforeOdd`/`afterOdd` adds one or two page breaks before/after an element
 *   so that the content after the page break is on an odd page
 */
export type PageBreak = 'before' | 'beforeEven' | 'beforeOdd' | 'after' | 'afterEven' | 'afterOdd';

/**
 * Sizes for the width of stand-alone columns and table columns.
 *
 * Available options are:
 * - A number to define an absolute width in `pt`
 * - A percentage string such as `50%` to fill a portion of the available space
 * - `auto` to set the width based on the content
 * - `*` to fill the remaining available space, distributed equally among
 *   all star-sized columns
 */
export type Size =
    | number
    | 'auto'
    | '*'
    | string;

/**
 * Combination of a pattern defined in {@link TDocumentDefinitions.patterns} and a color.
 *
 * Tuple consisting of two elements:
 * - The name of the pattern
 * - The color to apply to the pattern.
 *   Supports well-known color names like `blue` or hexadecimal color strings like `#ccffcc`.
 */
export type PatternFill = [string, string];

/**
 * Dictionary of font families that can be referenced by their key.
 */
export interface TFontDictionary {
    [fontName: string]: TFontFamilyTypes;
}

/**
 * Definition of a font family.
 */
export interface TFontFamilyTypes {
    /** Font variant that is neither bold nor italic. */
    normal?: PDFKit.Mixins.PDFFontSource | undefined;

    /** Font variant that is bold. */
    bold?: PDFKit.Mixins.PDFFontSource | undefined;

    /** Font variant that is italic. */
    italics?: PDFKit.Mixins.PDFFontSource | undefined;

    /** Font variant that is bold and italic. */
    bolditalics?: PDFKit.Mixins.PDFFontSource | undefined;
}

/**
 * Metadata to embed into the document.
 */
export interface TDocumentInformation {
    /** Document title. */
    title?: string | undefined;

    /** Name of the author. */
    author?: string | undefined;

    /** Subject of the document. */
    subject?: string | undefined;

    /**
     * Keywords associated with the document.
     *
     * A PDF file stores all keywords as a single string, as given here.
     * For optimal compatibility, separate keywords using commas or spaces.
     */
    keywords?: string | undefined;

    /**
     * Name of the creator.
     *
     * Defaults to `pdfmake`.
     */
    creator?: string | undefined;

    /**
     * Name of the producer.
     *
     * Defaults to `pdfmake`.
     */
    producer?: string | undefined;

    /**
     * Date the document was created.
     *
     * Defaults to the current date and time.
     */
    creationDate?: Date | undefined;

    /** Date the document was last modified. */
    modDate?: Date | undefined;

    /** Indicates whether the document has been corrected for color misregistrations. */
    trapped?: 'True' | 'False' | 'Unknown' | undefined;
}

/**
 * Callback that returns content depending on the current page number,
 * the total number of pages, or the size of the current page.
 */
export type DynamicContent = (
    currentPage: number,
    pageCount: number,
    pageSize: ContextPageSize,
) => Content | null | undefined;

/**
 * Callback that returns content depending on the current page number
 * or the size of the current page.
 */
export type DynamicBackground = (currentPage: number, pageSize: ContextPageSize) => Content | null | undefined;

/**
 * Margin in `pt`. Allows
 * - a single number which applies the same margin on all sides
 * - a tuple of two values `[horizontal, vertical]`
 * - a tuple of four values `[left, top, right, bottom]`
 *
 * Margins of adjacent elements do not collapse.
 *
 * Negative values can lead to elements overlapping each other.
 */
export type Margins = number | [number, number] | [number, number, number, number];

/**
 * Available types of decorations.
 * Can be combined with a {@link DecorationStyle}.
 */
export type Decoration = 'underline' | 'lineThrough' | 'overline';

/**
 * Available {@link Decoration} styles.
 */
export type DecorationStyle = 'solid' | 'dashed' | 'dotted' | 'double' | 'wavy';

/**
 * Available horizontal alignment options.
 */
export type Alignment = 'left' | 'right' | 'justify' | 'center';

/**
 * Callback to define a height in `pt` for a table row based on its row number
 * (starting from 0).
 *
 * `auto` sets the height based on the row's content.
 */
export type DynamicRowSize = (rowIndex: number) => number | 'auto';

/**
 * Custom layout to control borders, cell padding, and cell background of a table.
 */
export interface CustomTableLayout {
    /**
     * Width of horizontal lines in `pt` depending on the row number
     * (0 = line above the first row).
     *
     * **Note**: Does not allow an explicit value of `undefined`.
     *
     * Defaults to `1`.
     */
    hLineWidth?: DynamicLayout<number>;

    /**
     * Width of vertical lines in `pt` depending on the column number
     * (0 = line to the left of the left-most column).
     *
     * **Note**: Does not allow an explicit value of `undefined`.
     *
     * Defaults to `1`.
     */
    vLineWidth?: VerticalDynamicLayout<number>;

    /**
     * Color of horizontal lines, optionally depending on the row (0 = line above
     * the top row) and column number (0 = left-most column).
     *
     * Can be overridden for each cell via {@link TableCellProperties.borderColor}.
     *
     * Defaults to `black`.
     */
    hLineColor?: string | DynamicCellLayout<string> | undefined;

    /**
     * Color of vertical lines, optionally depending on the column (0 = line left
     * of the left-most column) and row number (0 = top row).
     *
     * Can be overridden for each cell via {@link TableCellProperties.borderColor}.
     *
     * Defaults to `black`.
     */
    vLineColor?: string | VerticalDynamicCellLayout<string> | undefined;

    /**
     * Style of horizontal lines depending on the row number
     * (0 = line above the top row).
     *
     * **Note**: Does not allow an explicit value of `undefined`.
     *
     * Defaults to a solid line.
     */
    hLineStyle?: DynamicLayout<LineStyle>;

    /**
     * Style of vertical lines depending on the column number
     * (0 = line to the left of the left-most column).
     *
     * **Note**: Does not allow an explicit value of `undefined`.
     *
     * Defaults to a solid line.
     */
    vLineStyle?: VerticalDynamicLayout<LineStyle>;

    /**
     * Padding in `pt` to the left of each column
     * (0 = left-most column).
     *
     * **Note**: Does not allow an explicit value of `undefined`.
     *
     * Defaults to `4`.
     */
    paddingLeft?: VerticalDynamicLayout<number>;

    /**
     * Padding in `pt` to the right of each column
     * (0 = left-most column).
     *
     * **Note**: Does not allow an explicit value of `undefined`.
     *
     * Defaults to `4`.
     */
    paddingRight?: VerticalDynamicLayout<number>;

    /**
     * Padding in `pt` at the top of each cell of a row
     * (0 = top row).
     *
     * **Note**: Does not allow an explicit value of `undefined`.
     *
     * Defaults to `2`.
     */
    paddingTop?: DynamicLayout<number>;

    /**
     * Padding in `pt` at the bottom of each cell of a row
     * (0 = top row).
     *
     * **Note**: Does not allow an explicit value of `undefined`.
     *
     * Defaults to `2`.
     */
    paddingBottom?: DynamicLayout<number>;

    /**
     * Background color the table's cells are filled with.
     *
     * Supports well-known color names like `blue` or hexadecimal color strings like `#ccffcc`,
     * as well as a reference to a pattern.
     */
    fillColor?: string | PatternFill | DynamicCellLayout<string | PatternFill> | undefined;

    /**
     * Opacity of the {@link fillColor}.
     * Must be between 0 (fully transparent) and 1 (fully opaque).
     *
     * Defaults to `1`.
     */
    fillOpacity?: number | DynamicCellLayout<number> | undefined;

    /**
     * Controls whether the table has any borders by default.
     *
     * If set to `false`, borders can only be added to cells via their `border` property.
     *
     * Defaults to `true`.
     */
    defaultBorder?: boolean | undefined;
}

/**
 * Callback to control a property of the {@link CustomTableLayout} depending on the row number,
 * starting from 0.
 */
export type DynamicLayout<T> = (rowIndex: number, node: ContentTable) => T | null;

/**
 * Callback to control a property of the {@link CustomTableLayout} depending on the column number,
 * starting from 0.
 */
export type VerticalDynamicLayout<T> = (columnIndex: number, node: ContentTable) => T | null;

/**
 * Callback to control a property of the {@link CustomTableLayout} depending on the row and column number,
 * both starting from 0.
 */
export type DynamicCellLayout<T> = (
    rowIndex: number,
    node: ContentTable,
    columnIndex: number,
) => T | null;

/**
 * Callback to control a property of the {@link CustomTableLayout} depending on the column and row number,
 * both starting from 0.
 */
export type VerticalDynamicCellLayout<T> = (
    columnIndex: number,
    node: ContentTable,
    rowIndex: number,
) => T | null;

/**
 * Style of a dashed line.
 */
export interface Dash {
    /** Length of each dash in `pt`. */
    length: number;

    /**
     * Space between dashes in `pt`.
     *
     * Defaults to the same value as {@link length}.
     */
    space?: number | undefined;
}

/**
 * Style of a line.
 */
export interface LineStyle {
    /**
     * Makes the line dashed.
     *
     * Defaults to a solid line.
     */
    dash?: Dash | undefined;
}

/**
 * Additional properties of {@link Content} objects that are used as table cells.
 */
export interface TableCellProperties {
    /**
     * Number of rows the cell spans.
     *
     * Cells covered by this cell still need to be declared. They should be
     * filled with an empty object placeholder (`{}`).
     *
     * Defaults to `1`.
     */
    rowSpan?: number | undefined;

    /**
     * Number of columns the cell spans.
     *
     * Cells covered by this cell still need to be declared. They should be
     * filled with an empty object placeholder (`{}`).
     *
     * Defaults to `1`.
     */
    colSpan?: number | undefined;

    /**
     * Controls on which sides the cell has borders.
     *
     * Tuple order: `[left, top, right, bottom]`
     *
     * Defaults to `[true, true, true, true]`.
     */
    border?: [boolean, boolean, boolean, boolean] | undefined;

    /**
     * Color of the border on each side of the cell.
     *
     * Tuple order: `[left, top, right, bottom]`
     *
     * Supports well-known color names like `blue` or hexadecimal color strings like `#ccffcc`.
     *
     * Defaults to the border color defined by the given table layout, or `black` on all sides.
     */
    borderColor?: [string, string, string, string] | undefined;

    /**
     * Overlays the cell with the given pattern.
     */
    overlayPattern?: PatternFill | undefined;

    /**
     * Opacity of the given {@link overlayPattern}.
     * Must be between 0 (fully transparent) and 1 (fully opaque).
     *
     * Defaults to `1`.
     */
    overlayOpacity?: number | null | undefined;
}

/**
 * A cell of a {@link Table}.
 * - Can be any valid content. Content objects provide additional properties to control
 *   the cell's appearance.
 * - Use empty objects (`{}`) as placeholders for cells that are covered by other cells
 *   spanning multiple rows or columns.
 */
export type TableCell = {} | (Content & TableCellProperties);

/**
 * A table.
 */
export interface Table {
    /**
     * Two-dimensional array that defines the table's rows and their cells.
     *
     * Given a row and column number (both starting from 0), each cell is addressed as
     * `body[rowIndex][columnIndex]`.
     */
    body: TableCell[][];

    /**
     * Column widths of the table.
     * - `*` distributes the width equally, filling the whole available space.
     * - `auto` sets the widths based on the content, filling only the necessary space.
     * - Use an array to control the width of each column individually.
     *   The array must contain widths for all columns.
     *
     * A column width smaller than a cell's content will break the text into multiple lines.
     *
     * Defaults to `auto`.
     */
    widths?: '*' | 'auto' | Size[] | undefined;

    /**
     * Row heights of the table.
     * - A number sets an absolute height in `pt` for every row.
     * - `auto` sets the heights based on the content.
     * - Use an array or a callback function to control the height of each row individually.
     *
     * The given values are ignored for rows whose content is higher.
     *
     * Defaults to `auto`.
     */
    heights?: number | 'auto' | Array<number | 'auto'> | DynamicRowSize | undefined;

    /**
     * Number of rows from the top that make up the table's header.
     *
     * If the table spans across multiple pages, the header is repeated on every page.
     *
     * Defaults to `0`.
     */
    headerRows?: number | undefined;

    /**
     * Controls whether the contents of a table row should be kept together on the same page.
     *
     * Defaults to `false`.
     */
    dontBreakRows?: boolean | undefined;

    /**
     * Number of rows after the given {@link headerRows} that should be kept together with
     * the header rows, without a page break in between.
     *
     * Defaults to `0`.
     */
    keepWithHeaderRows?: number | undefined;
}

/**
 * Built-in predefined table layouts:
 * - `noBorders` renders the table without borders and without horizontal padding for the left- and right-most cell
 * - `headerLineOnly` only renders a horizontal border below the rows marked as header
 * - `lightHorizontalLines` renders gray horizontal borders
 */
export type PredefinedTableLayout = 'noBorders' | 'headerLineOnly' | 'lightHorizontalLines';

/**
 * A table layout.
 *
 * Available options are:
 * - the name of a built-in predefined table layout
 * - the name of a global custom table layout
 * - a custom table layout object
 */
export type TableLayout = string | PredefinedTableLayout | CustomTableLayout;

/**
 * Style definition.
 *
 * Most properties are passed down to an element's children.
 *
 * The properties can also be applied to element objects directly.
 */
export interface Style {
    /**
     * Name of the font.
     *
     * Only built-in and globally declared fonts are available, regardless of the fonts
     * installed on the system.
     *
     * Defaults to `Roboto`.
     */
    font?: string | undefined;

    /**
     * Font size in `pt`.
     *
     * Defaults to `12`.
     */
    fontSize?: number | undefined;

    /**
     * OpenType font features to apply.
     */
    fontFeatures?: PDFKit.Mixins.OpenTypeFeatures[] | undefined;

    /**
     * Line height as a factor of the {@link fontSize}.
     *
     * Defaults to `1`.
     */
    lineHeight?: number | undefined;

    /**
     * Controls whether the text is bold.
     *
     * Defaults to `false`.
     */
    bold?: boolean | undefined;

    /**
     * Controls whether the text is italic.
     *
     * Defaults to `false`.
     */
    italics?: boolean | undefined;

    /**
     * Text alignment.
     *
     * Defaults to `left`.
     */
    alignment?: Alignment | undefined;

    /**
     * Text color.
     *
     * Supports well-known color names like `blue` or hexadecimal color strings like `#ccffcc`.
     *
     * Defaults to `black`.
     */
    color?: string | undefined;

    /**
     * Background color of the text.
     *
     * Supports well-known color names like `blue` or hexadecimal color strings like `#ccffcc`,
     * as well as a reference to a pattern.
     *
     * To set the background of table cells, use {@link fillColor} instead.
     */
    background?: string | PatternFill | undefined;

    /**
     * Color of list markers (i.e. bullet points or numbers).
     *
     * Supports well-known color names like `blue` or hexadecimal color strings like `#ccffcc`.
     *
     * Defaults to the text's {@link color}.
     */
    markerColor?: string | undefined;

    /**
     * Text decoration to apply.
     */
    decoration?: Decoration | undefined;

    /**
     * Style to apply to the given {@link decoration}.
     *
     * Defaults to `solid`.
     */
    decorationStyle?: DecorationStyle | undefined;

    /**
     * Color to apply to the given {@link decoration}.
     *
     * Supports well-known color names like `blue` or hexadecimal color strings like `#ccffcc`.
     *
     * Defaults to the text's {@link color}.
     */
    decorationColor?: string | undefined;

    /**
     * Margins to apply.
     *
     * Overrides the single-side `marginXXX` properties, unless this value is inherited
     * from a style and they are set directly on the content object.
     *
     * Ignored for content within an inline text array
     * (`{ text: [{ ... }] }`).
     */
    margin?: Margins | undefined;

    /**
     * Margin in `pt` to apply above the content.
     *
     * If {@link margin} is set, this value is ignored, unless the margin was inherited
     * from a style and the value is set directly on the content object.
     */
    marginTop?: number | undefined;

    /**
     * Margin in `pt` to apply to the right of the content.
     *
     * If {@link margin} is set, this value is ignored, unless the margin was inherited
     * from a style and the value is set directly on the content object.
     */
    marginRight?: number | undefined;

    /**
     * Margin in `pt` to apply below the content.
     *
     * If {@link margin} is set, this value is ignored, unless the margin was inherited
     * from a style and the value is set directly on the content object.
     */
    marginBottom?: number | undefined;

    /**
     * Margin in `pt` to apply to the left of the content.
     *
     * If {@link margin} is set, this value is ignored, unless the margin was inherited
     * from a style and the value is set directly on the content object.
     */
    marginLeft?: number | undefined;

    /**
     * Controls whether to preserve spaces at the beginning of a paragraph.
     *
     * Defaults to `false`.
     */
    preserveLeadingSpaces?: boolean | undefined;

    /**
     * Controls whether to preserve spaces at the end of a paragraph.
     *
     * Defaults to `false`.
     */
    preserveTrailingSpaces?: boolean | undefined;

    /**
     * Opacity of the content.
     * Must be between 0 (fully transparent) and 1 (fully opaque).
     *
     * Defaults to `1`.
     */
    opacity?: number | undefined;

    /**
     * Spacing between characters in `pt`.
     *
     * Defaults to `0`.
     */
    characterSpacing?: number | undefined;

    /**
     * Indent at the beginning of a paragraph in `pt`.
     *
     * Defaults to `0`.
     */
    leadingIndent?: number | undefined;

    /**
     * Controls whether the text is rendered as superscript.
     *
     * Defaults to `false`.
     */
    sup?: boolean | undefined;

    /**
     * Controls whether the text is rendered as subscript.
     *
     * Defaults to `false`.
     */
    sub?: boolean | undefined;

    /**
     * Background fill color for table cells.
     *
     * Supports well-known color names like `blue` or hexadecimal color strings like `#ccffcc`,
     * as well as a reference to a pattern.
     *
     * Only applies to {@link TableCell} elements.
     * For the background color of text, use {@link background} instead.
     */
    fillColor?: string | PatternFill | undefined;

    /**
     * Opacity of the given {@link fillColor}.
     * Must be between 0 (fully transparent) and 1 (fully opaque).
     *
     * Only applies to {@link TableCell} elements.
     *
     * Defaults to `1`.
     */
    fillOpacity?: number | undefined;

    /**
     * Controls whether text paragraphs inside table cells should be rendered as
     * a single line.
     * If the column has a fixed width, long text lines will overflow the column;
     * otherwise, the column will grow in width.
     *
     * Only applies to {@link TableCell} elements.
     *
     * defaults to `false`.
     */
    noWrap?: boolean | undefined;

    /**
     * Space between columns in `pt`.
     *
     * Only applies to {@link ContentColumns} elements.
     *
     * Defaults to `0`.
     */
    columnGap?: number | undefined;
}

/**
 * Applies one or more styles.
 *
 * - A string references a named style from {@link TDocumentDefinitions.styles}
 * - An object sets the given style properties
 * - An array of strings or objects applies the styles in the given order,
 *   later styles overriding properties from the earlier ones
 *
 * Styles defined this way can be overridden by the {@link Style} properties on an element itself.
 */
export type StyleReference = string | Style | Array<string | Style>;

/**
 * Common type for all available content elements.
 *
 * Special content types:
 * - A string is rendered like a {@link ContentText}
 * - An array is rendered like a {@link ContentStack}
 */
export type Content =
    | string
    | Content[]
    | ContentText
    | ContentColumns
    | ContentStack
    | ContentUnorderedList
    | ContentOrderedList
    | ContentTable
    | ContentAnchor
    | ContentPageReference
    | ContentTextReference
    | ContentToc
    | ContentTocItem
    | ContentImage
    | ContentSvg
    | ContentQr
    | ContentCanvas;

/**
 * Internal helper type to prevent TypeScript from allowing
 * invalid element definitions.
 *
 * Content element types should not use this type directly, but extend
 * {@link ForbidOtherElementProperties} instead.
 */
interface ForbiddenElementProperties {
    text?: never;
    columns?: never;
    stack?: never;
    ul?: never;
    ol?: never;
    table?: never;
    pageReference?: never;
    textReference?: never;
    toc?: never;
    image?: never;
    svg?: never;
    qr?: never;
    canvas?: never;
}

/**
 * Internal helper type to prevent TypeScript from allowing element definitions
 * that contain multiple element types at once.
 *
 * Advantages:
 * - Does not allow setting multiple element properties together (e.g. `ol` + `ul`)
 * - Does not allow using optional properties from other element types
 *
 * Disadvantages:
 * - `property in content` does not narrow the type any longer
 * - Autocompletion does not sort the primary element properties at the top
 * - Error messages are not very good
 */
type ForbidOtherElementProperties<TProperty extends keyof ForbiddenElementProperties> = Omit<
    ForbiddenElementProperties,
    TProperty
>;

/**
 * Text element.
 *
 * For simple text without other properties, a string can be used instead of this element.
 */
export interface ContentText extends ContentLink, ContentBase, ForbidOtherElementProperties<'text'> {
    /**
     * Text content.
     *
     * Makes its contents inline: Arrays are no longer rendered like {@link ContentStack}
     * below one another, but as inline text in a single paragraph.
     */
    text: Content;
}

/**
 * Element that divides its children into multiple columns.
 */
export interface ContentColumns extends ContentBase, ForbidOtherElementProperties<'columns'> {
    /** Divides the given elements into multiple columns. */
    columns: Column[];
}

/**
 * Stack that renders its children as multiple paragraphs.
 *
 * For simple stacks without properties, a content array can be used instead.
 */
export interface ContentStack extends ContentBase, ForbidOtherElementProperties<'stack'> {
    /**
     * Stack that renders the given elements as multiple paragraphs.
     *
     * For simple stacks without properties, a content array can be used instead.
     */
    stack: Content[];
}

/**
 * Element that renders an ordered / numbered list.
 */
export interface ContentOrderedList extends ContentBase, ForbidOtherElementProperties<'ol'> {
    /**
     * Renders the given elements as an ordered / numbered list.
     */
    ol: OrderedListElement[];

    /**
     * List marker type determining the numbering scheme, such as decimal, alphabetic, or Roman.
     *
     * Defaults to `decimal`.
     */
    type?: OrderedListType | undefined;

    /**
     * Separator between the list markers and the list item content.
     *
     * - A string is inserted after the marker
     * - A tuple of two strings is inserted before and after the marker
     *
     * Defaults to `.`
     */
    separator?: string | [string, string] | undefined;

    /**
     * Controls whether the markers should be rendered in descending order.
     *
     * Defaults to `false`.
     */
    reversed?: boolean | undefined;

    /**
     * Number of the first marker.
     *
     * For a non-decimal {@link type}, the number is mapped to the corresponding
     * marker string (e.g. `1` => `A` for `upper-alpha`).
     *
     * Defaults to `1`, or the number of items if {@link reversed} is set.
     */
    start?: number | undefined;
}

/**
 * Element that renders an unordered / bulleted list element.
 */
export interface ContentUnorderedList extends ContentBase, ForbidOtherElementProperties<'ul'> {
    /**
     * Renders the given elements as an unordered / bulleted list.
     */
    ul: UnorderedListElement[];

    /**
     * List marker type.
     *
     * Defaults to `disc`.
     */
    type?: UnorderedListType | undefined;
}

/**
 * Canvas / vector element.
 */
export interface ContentCanvas extends ContentBase, ForbidOtherElementProperties<'canvas'> {
    /**
     * Renders the given vector elements on a canvas.
     *
     * Complex vectors can be rendered from an SVG image using the `svg` property instead.
     */
    canvas: CanvasElement[];
}

/**
 * SVG image element.
 *
 * For images other than SVG, use a {@link ContentImage} instead.
 */
export interface ContentSvg extends ContentBase, ForbidOtherElementProperties<'svg'> {
    /**
     * Renders the given SVG content string as an image.
     *
     * For images other than SVG, use the `image` property instead.
     *
     * Simple vectors can also be rendered using the `canvas` property instead.
     */
    svg: string;

    /**
     * Width of the image in `pt`.
     *
     * Unlike JPEG or PNG images, SVG images always keep their aspect ratio.
     * If the given width is larger than the image's width scaled to the given {@link height},
     * the image is centered horizontally.
     * To prevent this behavior, either specify only one of the two properties, or use {@link fit}
     * instead.
     *
     * Defaults to the SVG image's native width, or scales it down
     * proportionally if a {@link height} is given.
     */
    width?: number | undefined;

    /**
     * Height of the image in `pt`.
     *
     * Unlike JPEG or PNG images, SVG images always keep their aspect ratio.
     * If the given height is larger than the image's height scaled to the given {@link width},
     * the image is centered vertically.
     * To prevent this behavior, either specify only one of the two properties, or use {@link fit}
     * instead.
     *
     * Defaults to the SVG image's native height, or scales it down
     * proportionally if a {@link width} is given.
     */
    height?: number | undefined;

    /**
     * Box the image is scaled to fit inside, preserving its aspect ratio.
     *
     * The image only occupies the space of its own size after scaling,
     * even if one side of the box is larger.
     *
     * Tuple elements: `[width, height]`.
     */
    fit?: [number, number] | undefined;
}

/**
 * Raster image element.
 *
 * For SVG images, use a {@link ContentSvg} element instead.
 */
export interface ContentImage extends ContentLink, ContentBase, ForbidOtherElementProperties<'image'> {
    /**
     * Renders the given value as image.
     *
     * Available options:
     * - A reference by name to an image defined in {@link TDocumentDefinitions.images}
     * - A data URL
     * - A remote URL via http:// or https://
     *
     * Supported image formats: JPEG, PNG
     *
     * For SVG images, use the `svg` property instead.
     */
    image: string;

    /**
     * Width of the image in `pt`.
     *
     * If a {@link height} is given as well, the image is stretched to
     * the given dimensions without preserving its aspect ratio.
     * To prevent this behavior, either specify only one of the two properties, or use {@link fit}
     * instead.
     *
     * Defaults to the image's native width, or scales it down
     * proportionally if a {@link height} is given.
     */
    width?: number | undefined;

    /**
     * Height of the image in `pt`.
     *
     * If a {@link width} is given as well, the image is stretched to
     * the given dimensions without preserving its aspect ratio.
     * To prevent this behavior, either specify only one of the two properties, or use {@link fit}
     * instead.
     *
     * Defaults to the image's native height, or scales it down
     * proportionally if a {@link width} is given.
     */
    height?: number | undefined;

    /**
     * Box the image is scaled to fit inside, preserving its aspect ratio.
     *
     * The image only occupies the space of its own size after scaling,
     * even if one side of the box is larger.
     *
     * Tuple elements: `[width, height]`.
     */
    fit?: [number, number] | undefined;

    /**
     * Container to completely cover with an image, possibly cutting it off horizontally
     * or vertically.
     */
    cover?: ImageCover | undefined;
}

/**
 * Table element.
 */
export interface ContentTable extends ContentBase, ForbidOtherElementProperties<'table'> {
    /**
     * Renders a table.
     *
     * Use the {@link layout} property to control its layout.
     */
    table: Table;

    /**
     * Layout for the table, or a reference to a predefined or global layout.
     *
     * Defaults to a layout with black borders.
     */
    layout?: TableLayout | undefined;
}

/**
 * Anchor text element that can be referenced by cross references or
 * used in a table of contents.
 *
 * Anchors can contain text content only.
 */
export interface ContentAnchor extends ContentBase, ForbidOtherElementProperties<'text'> {
    /**
     * Text content of the anchor.
     */
    text: string | ContentAnchor | Array<string | ContentAnchor>;

    /**
     * ID of the anchor that can be used to reference it.
     *
     * IDs must be unique within the document.
     */
    id: string;
}

/**
 * Text element to be displayed in a table of contents.
 */
export interface ContentTocItem extends ContentBase, ForbidOtherElementProperties<'text'> {
    /**
     * Text content of the element.
     *
     * Limited to text only; other content cannot be rendered inside a
     * table of contents.
     */
    text: string | ContentTocItem | Array<string | ContentTocItem>;

    /**
     * References to the tables of contents the element should be displayed in.
     *
     * - `true` will display the element in all {@link ContentToc} elements that
     *   do not have an `id` set
     * - a string will display the element in the {@link ContentToc} with matching `id`
     * - an array will display the element in all {@link ContentToc}
     *   elements with matching `id` properties (`true` for the default one
     *   without an `id`)
     */
    tocItem: boolean | string | Array<string | boolean>;

    /**
     * Style or style reference that is applied to the reference for this element
     * in the table of contents.
     */
    tocStyle?: StyleReference | undefined;

    /**
     * Style or style reference that is applied to the page number for this element
     * in the table of contents.
     */
    tocNumberStyle?: StyleReference | undefined;

    /**
     * Margin that is applied to the reference for this element in the table of
     * contents.
     */
    tocMargin?: Margins | undefined;
}

/**
 * Reference to an anchor element, displaying its page number.
 */
export interface ContentPageReference extends ContentBase, ForbidOtherElementProperties<'pageReference'> {
    /**
     * `id` of a {@link ContentAnchor} to reference.
     *
     * Displays the target element's page number.
     * - To display the element's text content, use `textReference` instead.
     * - To display arbitrary content, use `linkToDestination` instead.
     *
     * To link to a fixed page number (without a reference target), use `linkToPage` instead.
     */
    pageReference: string;
}

/**
 * Reference to an anchor element, displaying its text content.
 */
export interface ContentTextReference extends ContentBase, ForbidOtherElementProperties<'textReference'> {
    /**
     * `id` of a {@link ContentAnchor} to reference.
     *
     * Displays the target element's text content.
     * - To display its page number, use `pageReference` instead.
     * - To display arbitrary content, use `linkToDestination` instead.
     */
    textReference: string;
}

/**
 * Table of contents element.
 */
export interface ContentToc extends ContentBase, ForbidOtherElementProperties<'toc'> {
    /**
     * Renders a table of contents.
     *
     * One document may contain more than one table of contents.
     * In this case, you should assign each additional table of contents a unique `id`.
     * This allows you to add items to it using the {@link ContentTocItem.tocItem} property.
     */
    toc: TableOfContent;
}

/**
 * QR code element.
 */
export interface ContentQr extends ContentBase, ForbidOtherElementProperties<'qr'> {
    /**
     * Renders the given string as a QR code.
     */
    qr: string;

    /**
     * Foreground color of the QR code.
     *
     * Supports well-known color names like `blue` or hexadecimal color strings like `#ccffcc`.
     *
     * Defaults to `black`.
     */
    foreground?: string | undefined;

    /**
     * Background color of the QR code.
     *
     * Supports well-known color names like `blue` or hexadecimal color strings like `#ccffcc`.
     *
     * Defaults to `white`.
     */
    background?: string | undefined;

    /**
     * Size in `pt` to fit the QR code in.
     *
     * As QR codes are square, this essentially sets both the width and height.
     *
     * Defaults to a heuristic depending on the pixel size of the QR code (see {@link version})
     * so that every pixel is `5pt` large.
     */
    fit?: number | undefined;

    /**
     * QR code version.
     *
     * The "version" of a QR code controls the number of its pixels and thus the maximum amount of
     * data it can hold.
     *
     * Possible values are between 1 (21x21 pixels) and 40 (177x177 pixels).
     *
     * Defaults to the lowest possible version capable of holding the given {@link qr} data
     * with the specified {@link mode} and {@link eccLevel}.
     */
    version?: number | undefined;

    /**
     * QR code error correction level that controls how many errors can be corrected.
     *
     * Possible values:
     * - `L` = low (7%)
     * - `M` = medium (15%)
     * - `Q` = quartile (25%)
     * - `H` = high (30%)
     *
     * Defaults to `L`.
     */
    eccLevel?: 'L' | 'M' | 'Q' | 'H' | undefined;

    /**
     * QR code encoding mode.
     *
     * Defaults to the mode that produces the smallest payload for the given {@link qr} data.
     */
    mode?: 'numeric' | 'alphanumeric' | 'octet' | undefined;

    /**
     * QR code mask pattern from 0-7.
     *
     * Defaults to choosing a mask based on the given {@link qr} data that tries to
     * avoid problematic patterns in the resulting QR code.
     */
    mask?: number | undefined;
}

/**
 * Base type for most content elements.
 */
export interface ContentBase extends Style {
    /**
     * Style or style reference to apply.
     */
    style?: StyleReference | undefined;

    /**
     * Absolute position of the element from the top-left corner of the current page.
     *
     * If set, the element does not occupy any space in the normal content layout.
     *
     * In this case, the element is rendered above elements defined earlier in the
     * document content, but below elements defined later.
     */
    absolutePosition?: Position | undefined;

    /**
     * Relative position of the element from the position it would normally be rendered in.
     *
     * If set, the element does not occupy any space in the normal content layout.
     *
     * In this case, the element is rendered above elements defined earlier in the
     * document content, but below elements defined later.
     */
    relativePosition?: Position | undefined;

    /**
     * Controls whether to insert a page break before or after the element.
     *
     * For more complex page break logic, use {@link TDocumentDefinitions.pageBreakBefore}.
     */
    pageBreak?: PageBreak | undefined;

    /**
     * Sets the page orientation.
     *
     * Only relevant when used in combination with {@link pageBreak}.
     */
    pageOrientation?: PageOrientation | undefined;

    /**
     * Sets the headline level for the current element.
     *
     * This value is not currently used by pdfmake itself.
     * It is, however, passed to the {@link TDocumentDefinitions.pageBreakBefore} callback, where you
     * can use it to automatically insert page breaks before elements with certain headline levels.
     */
    headlineLevel?: number | undefined;

    /**
     * Controls whether the element should be kept together on the same page.
     *
     * Defaults to `false`.
     */
    unbreakable?: boolean | undefined;
}

/**
 * Link element.
 * Extended by {@link ContentText} and {@link ContentImage}.
 */
export interface ContentLink {
    /**
     * URL to open when the element is clicked on.
     *
     * Use in combination with a `text` or `image` property.
     */
    link?: string | undefined;

    /**
     * Page to jump to when the element is clicked on.
     *
     * Use in combination with a `text` or `image` property.
     *
     * To link to another element, use {@link linkToDestination}, `textReference`
     * or `pageReference` instead.
     */
    linkToPage?: number | undefined;

    /**
     * `id` of an element to jump to when the element is clicked on.
     *
     * Use in combination with a `text` or `image` property.
     *
     * - To display the target element's content, use `textReference` instead.
     * - To display the target element's page number, use `pageReference` instead.
     *
     * To link to a fixed page number (without a reference target), use `linkToPage` instead.
     */
    linkToDestination?: string | undefined;
}

/**
 * Table of contents.
 *
 * One document may contain more than one table of contents.
 * In this case, you should assign each additional table of contents a unique `id`.
 * This allows you to add items to it using the {@link ContentTocItem.tocItem} property.
 */
export interface TableOfContent {
    /**
     * Title displayed at the top of the table of contents.
     */
    title?: Content | undefined;

    /**
     * Margin around each item in `pt`.
     *
     * Can be overridden per item using {@link ContentTocItem.tocMargin}.
     *
     * Defaults to `0`.
     */
    textMargin?: Margins | undefined;

    /**
     * Style or style reference to apply to each item.
     *
     * Can be overridden per item using {@link ContentTocItem.tocStyle}.
     */
    textStyle?: StyleReference | undefined;

    /**
     * Style or style reference to apply to the page numbers.
     *
     * Can be overridden per item using {@link ContentTocItem.tocNumberStyle}.
     */
    numberStyle?: StyleReference | undefined;

    /**
     * ID to differentiate multiple tables of contents:
     * - Without an ID set, a table of content contains all items setting
     *   {@link ContentTocItem.tocItem} to `true`
     * - With an ID set, a table of content contains all items setting
     *   {@link ContentTocItem.tocItem} to its ID
     */
    id?: string | undefined;
}

/**
 * Additional properties of {@link Content} objects that are used as columns.
 */
export interface ColumnProperties {
    /**
     * Column width.
     *
     * Defaults to `*`.
     */
    width?: Size | undefined;
}

/**
 * Column used as part of {@link ContentColumns}.
 */
export type Column = Content & ColumnProperties;

/**
 * List marker type of a {@link ContentOrderedList}:
 * - `decimal`: 1, 2, 3
 * - `lower-alpha`: a, b, c
 * - `upper-alpha`: A, B, C
 * - `lower-roman`: i, ii, iii
 * - `upper-roman`: I, II, III
 * - `none`: no marker
 */
export type OrderedListType =
    | 'decimal'
    | 'lower-alpha'
    | 'upper-alpha'
    | 'lower-roman'
    | 'upper-roman'
    | 'none';

/**
 * Additional properties of {@link Content} objects that are used as items
 * of an ordered list.
 */
export interface OrderedListElementProperties {
    /**
     * Overrides the counter for this list item.
     *
     * For a non-decimal {@link listType}, the number is mapped to the corresponding
     * marker string (e.g. `1` => `A` for `upper-alpha`).
     *
     * Does not influence the counters for the other list items.
     */
    counter?: number | undefined;

    /**
     * Overrides the list marker type for this list item.
     *
     * Defaults to the list's {@link ContentOrderedList.type}.
     */
    listType?: OrderedListType | undefined;
}

/**
 * Item of a {@link ContentOrderedList}.
 */
export type OrderedListElement = Content & OrderedListElementProperties;

/**
 * List marker type of a {@link ContentUnorderedList}:
 * - `disc`: a solid circle
 * - `square`: a solid square
 * - `circle`: an outlined circle
 * - `none`: no marker
 */
export type UnorderedListType = 'disc' | 'square' | 'circle' | 'none';

/**
 * Additional properties of {@link Content} objects that are used as items
 * of an unordered list.
 */
export interface UnorderedListElementProperties {
    /**
     * Overrides the list marker type for this list item.
     *
     * Defaults to the list's {@link ContentUnorderedList.type}.
     */
    listType?: UnorderedListType | undefined;
}

/**
 * Item of a {@link ContentUnorderedList}.
 */
export type UnorderedListElement = Content & UnorderedListElementProperties;

/**
 * Child elements of a {@link ContentCanvas}.
 */
export type CanvasElement = CanvasRect | CanvasPolyline | CanvasLine | CanvasEllipse;

/**
 * Type to render the ends of lines in a canvas:
 * - `butt` renders a short square line end
 * - `square` renders a long square line end
 * - `round` renders a long round line end
 */
export type CanvasLineCap = 'butt' | 'round' | 'square';

/**
 * Type to render joints between lines of different angles in a canvas:
 * - `miter` renders sharp edges
 * - `round` renders round edges
 * - `bevel` adds diagonal edges
 */
export type CanvasLineJoin = 'miter' | 'round' | 'bevel';

/**
 * A rectangle as part of a {@link ContentCanvas}.
 */
export interface CanvasRect extends CanvasLineElement, CanvasFilledElement {
    type: 'rect';

    /** Horizontal position from the left edge of the canvas element in `pt`. */
    x: number;

    /** Vertical position from the top of the canvas element in `pt`. */
    y: number;

    /** Width in `pt`. */
    w: number;

    /** Height in `pt`. */
    h: number;

    /**
     * Corner radius in `pt`.
     *
     * Defaults to `0`.
     */
    r?: number | undefined;
}

/**
 * Point of a {@link CanvasPolyline}.
 */
export interface Point {
    /** Horizontal position from the left edge of the canvas element in `pt`. */
    x: number;

    /** Vertical position from the top of the canvas element in `pt`. */
    y: number;
}

/**
 * A line or shape consisting of multiple points as part of a {@link ContentCanvas}.
 */
export interface CanvasPolyline extends CanvasLineElement, CanvasFilledElement {
    type: 'polyline';

    /**
     * The points that make up the line.
     */
    points: Point[];

    /**
     * Controls whether to draw a line between the last and the first specified {@link points}.
     *
     * Defaults to `false`.
     */
    closePath?: boolean | undefined;

    /**
     * Line end type.
     *
     * Defaults to `butt`.
     */
    lineCap?: CanvasLineCap | undefined;
}

/**
 * A simple line as part of a {@link ContentCanvas}.
 */
export interface CanvasLine extends CanvasLineElement {
    type: 'line';

    /** Horizontal line start position from the left in `pt`. */
    x1: number;

    /** Vertical line start position from the top in `pt`. */
    y1: number;

    /** Horizontal line end position from the left in `pt`. */
    x2: number;

    /** Vertical line end position from the top in `pt`. */
    y2: number;

    /**
     * Line end type.
     *
     * Defaults to `butt`.
     */
    lineCap?: CanvasLineCap | undefined;
}

/**
 * An ellipse or circle as part of a {@link ContentCanvas}.
 */
export interface CanvasEllipse extends CanvasLineElement, CanvasFilledElement {
    type: 'ellipse';

    /** Horizontal position from the left edge of the canvas element in `pt`. */
    x: number;

    /** Vertical position from the top edge of the canvas element in `pt`. */
    y: number;

    /** Horizontal radius in `pt`. */
    r1: number;

    /**
     * Vertical radius in `pt`.
     *
     * Defaults to the same value as {@link r1}.
     */
    r2?: number | undefined;
}

/**
 * Base interface for all {@link ContentCanvas} child elements that can be filled.
 */
export interface CanvasFilledElement {
    /**
     * Background color the element is filled with.
     *
     * Supports well-known color names like `blue` or hexadecimal color strings like `#ccffcc`,
     * as well as a reference to a pattern.
     *
     * To fill the element with a gradient, use {@link linearGradient} instead.
     */
    color?: string | PatternFill | undefined;

    /**
     * Opacity of the {@link color} or {@link linearGradient}.
     * Must be between 0 (fully transparent) and 1 (fully opaque).
     *
     * Defaults to `1`.
     */
    fillOpacity?: number | undefined;

    /**
     * Linear horizontal gradient the element is filled with.
     *
     * The given stops are distributed equally from left to right.
     *
     * Supports well-known color names like `blue` or hexadecimal color strings like `#ccffcc`.
     *
     * To fill the element with a solid color, use {@link color} instead.
     */
    linearGradient?: string[] | undefined;
}

/**
 * Base interface for all {@link ContentCanvas} child elements that have a line.
 */
export interface CanvasLineElement {
    /**
     * Line width in `pt`.
     *
     * Defaults to `1`.
     */
    lineWidth?: number | undefined;

    /**
     * Line color.
     *
     * Supports well-known color names like `blue` or hexadecimal color strings like `#ccffcc`.
     *
     * Defaults to `black` if the element has no `color` set; defaults to no line otherwise.
     */
    lineColor?: string | undefined;

    /**
     * Opacity of the {@link lineColor}.
     * Must be between 0 (fully transparent) and 1 (fully opaque).
     *
     * Defaults to `1`.
     */
    strokeOpacity?: number | undefined;

    /**
     * Makes the line dashed.
     *
     * Defaults to a solid line.
     */
    dash?: Dash | undefined;

    /**
     * Rendering of joints between lines of different angles.
     *
     * Defaults to `miter`.
     */
    lineJoin?: CanvasLineJoin | undefined;
}

/**
 * Horizontal image alignment within its container.
 */
export type ImageAlignment = 'left' | 'right' | 'center';

/**
 * Vertical image alignment within its container.
 */
export type ImageVerticalAlignment = 'top' | 'bottom' | 'center';

/**
 * Container to completely cover with an image, possibly cutting it off horizontally
 * or vertically.
 */
export interface ImageCover {
    /**
     * Container width in `pt`.
     *
     * Defaults to the image's (specified or native) width.
     */
    width?: number | undefined;

    /**
     * Container height in `pt`.
     *
     * Defaults to the image's (specified or native) width.
     */
    height?: number | undefined;

    /**
     * Horizontal alignment of the image inside the cover container if it is wider.
     *
     * Defaults to `center`.
     */
    align?: ImageAlignment | undefined;

    /**
     * Vertical alignment of the image inside the cover container if it is higher.
     *
     * Defaults to `center`.
     */
    valign?: ImageVerticalAlignment | undefined;
}

/**
 * Dictionary of reusable style definitions that can be referenced by their key.
 */
export interface StyleDictionary {
    [name: string]: Style;
}

/**
 * Supported PDF versions.
 */
export type PDFVersion = '1.3' | '1.4' | '1.5' | '1.6' | '1.7' | '1.7ext3';

/**
 * Watermark that is rendered on top of each page.
 */
export interface Watermark {
    /** Text of the watermark. */
    text: string;

    /**
     * Opacity of the {@link text}.
     * Must be between 0 (fully transparent) and 1 (fully opaque).
     *
     * Defaults to `0.6`.
     */
    opacity?: number | undefined;

    /**
     * Clock-wise rotation angle of the {@link text}, with `0` being normal text
     * from left to right, and `90` being vertical text from top to bottom.
     *
     * Defaults to an angle from the bottom left to the top right depending on the page size
     * (~ `305` for A4).
     */
    angle?: number | undefined;

    /**
     * Name of the font.
     *
     * Only built-in and globally declared fonts are available, regardless of the fonts
     * installed on the system.
     *
     * Defaults to `Roboto`.
     */
    font?: string | undefined;

    /**
     * Font size in `pt`.
     *
     * Defaults to a heuristic depending on the length of {@link text} to cover most of the page.
     */
    fontSize?: number | undefined;

    /**
     * Color of the {@link text}.
     *
     * Supports well-known color names like `blue` or hexadecimal color strings like `#ccffcc`.
     *
     * Defaults to `black`.
     */
    color?: string | undefined;

    /**
     * Controls whether the {@link text} is bold.
     *
     * Defaults to `false`.
     */
    bold?: boolean | undefined;

    /**
     * Controls whether the {@link text} is italic.
     *
     * Defaults to `false`.
     */
    italics?: boolean | undefined;
}

/**
 * PDF tiling pattern definition.
 */
export interface Pattern {
    /** Bounding box that defines the dimensions of the pattern in `pt`. */
    boundingBox: [number, number, number, number];

    /** Horizontal step size in `pt`. */
    xStep: number;

    /** Vertical step size in `pt`. */
    yStep: number;

    /** PDF tiling pattern string. */
    pattern: string;
}

/**
 * Definition of an image to be embedded into the document.
 */
export interface ImageDefinition {
    /**
     * Image URL.
     *
     * Available options:
     * - Data URLs
     * - Remote URLs via http:// or https://
     *
     * Supported image formats: JPEG, PNG
     *
     * SVG images can only be used in the document content using the `svg` property.
     */
    url: string;

    /**
     * HTTP headers to include in the image request, if {@link url} is a remote URL.
     */
    headers?: Record<string, string>;
}

/**
 * Complete definition of a PDF document.
 */
export interface TDocumentDefinitions {
    /**
     * Main content of the document.
     *
     * Rendered inside the configured {@link pageMargins}.
     */
    content: Content;

    /**
     * Content that is rendered behind the document's {@link content}, and repeated for every page.
     *
     * Independent of the configured {@link pageMargins}.
     */
    background?: DynamicBackground | Content | undefined;

    /**
     * Controls whether to compress the resulting PDF document.
     *
     * Regardless of this value, any image files added to the document are embedded without
     * recompression. This flag merely applies a lossless compression (similar to ZIP compression)
     * to the whole finished PDF document.
     *
     * To control the size of the resulting PDF file and the quality of its images, optimize your
     * image files before adding them:
     * - For line art, try to find an SVG file, which often offers better quality at smaller file sizes.
     * - Downscale large raster images to the smallest size that still looks good.
     * - Use the file format (JPEG/PNG) and compression settings that yield the best compromise
     *   between file size and quality.
     *
     * Defaults to `true`.
     */
    compress?: boolean | undefined;

    /**
     * Default styles that apply to the complete document.
     */
    defaultStyle?: Style | undefined;

    /**
     * Footer content that is repeated on every page.
     *
     * **Note:** If the footer's content exceeds the available space as defined by
     * {@link pageMargins}, it is not rendered at all.
     */
    footer?: DynamicContent | Content | undefined;

    /**
     * Header content that is repeated on every page.
     *
     * **Note:** If the header's content exceeds the available space as defined by
     * {@link pageMargins}, it is not rendered at all.
     */
    header?: DynamicContent | Content | undefined;

    /**
     * Dictionary of images to be embedded into the document.
     *
     * The specified images can be referenced from content elements by their key.
     *
     * Available options:
     * - A data URL
     * - A remote URL via http:// or https://
     * - An object including a URL and additional HTTP headers
     *
     * Supported image formats: JPEG, PNG
     *
     * SVG images can only be used in the document content using the `svg` property.
     */
    images?: Record<string, string | ImageDefinition> | undefined;

    /**
     * Metadata to embed into the document.
     */
    info?: TDocumentInformation | undefined;

    /**
     * Callback to determine where to break pages.
     * Called repeatedly until no more page breaks are added.
     *
     * Not called for nodes that have `pageBreak: 'before'` set.
     *
     * @param currentNode - The current content node to check.
     * @param followingNodesOnPage - The content nodes defined after the current node on the same page.
     * @param nodesOnNextPage - The content nodes on the page after the current node's page.
     * @param previousNodesOnPage - The content nodes defined before the current node on the same page.
     *
     * @returns whether to insert a page break before the current node.
     */
    pageBreakBefore?: ((
        currentNode: Node,
        followingNodesOnPage: Node[],
        nodesOnNextPage: Node[],
        previousNodesOnPage: Node[],
    ) => boolean) | undefined;

    /**
     * Margins around the {@link content} on each page.
     *
     * If a {@link header} or {@link footer} is specified, the page margins must
     * leave sufficient room for it to be rendered at all.
     *
     * Defaults to `40`.
     */
    pageMargins?: Margins | undefined;

    /**
     * Orientation of the document's pages.
     *
     * Defaults to `portrait` for standard page sizes; if a custom {@link pageSize} is given,
     * it defaults to the orientation set through its width and height.
     */
    pageOrientation?: PageOrientation | undefined;

    /**
     * Size of the document's pages.
     *
     * Defaults to `A4`.
     */
    pageSize?: PageSize | undefined;

    /**
     * Dictionary for reusable styles to be referenced by their key throughout the document.
     *
     * To define styles that should apply by default, use {@link defaultStyles} instead.
     */
    styles?: StyleDictionary | undefined;

    /**
     * Password required to open the document.
     *
     * If set, the document is encrypted.
     * Setting the {@link version} influences the encryption method used.
     *
     * An empty string is treated as "no password".
     */
    userPassword?: string | undefined;

    /**
     * Password required to get full access to the document.
     *
     * Use in combination with {@link permissions}.
     *
     * An empty string is treated as "no password".
     *
     * Does not encrypt the document; use {@link userPassword} for that.
     */
    ownerPassword?: string | undefined;

    /**
     * Permissions for accessing or modifying the document in different ways.
     *
     * The PDF file cannot enforce these permissions by itself.
     * It relies on PDF viewer applications to respect them.
     *
     * Only relevant if {@link ownerPassword} is set.
     *
     * Defaults to `{}` (everything is forbidden)
     */
    permissions?: PDFKit.DocumentPermissions | undefined;

    /**
     * Version of the PDF specification the document is created with.
     *
     * Influences the encryption method used in combination with {@link userPassword}.
     * The PDF content is always created with version 1.3.
     *
     * Defaults to `1.3`.
     */
    version?: PDFVersion | undefined;

    /**
     * Watermark that is rendered on top of each page.
     */
    watermark?: string | Watermark | undefined;

    /**
     * Dictionary of reusable pattern definitions that can be referenced by their key.
     */
    patterns?: Record<string, Pattern> | undefined;
}

/**
 * Start position of a node in the document.
 */
export interface NodeStartPosition {
    /** Page number (starting from 1) the node starts on. */
    pageNumber: number;

    /** Orientation of the page the node starts on. */
    pageOrientation: PageOrientation;

    /** Height of the page in `pt`, with the vertical page margins subtracted. */
    pageInnerHeight: number;

    /** Width of the page in `pt`, with the horizontal page margins subtracted. */
    pageInnerWidth: number;

    /** Horizontal start position from the left edge of the page in `pt`. */
    left: number;

    /** Vertical start position from the top of the page in `pt`. */
    top: number;

    /**
     * Same as {@link top}, but as a relative value between the top and bottom page margin:
     * 0 corresponds with the top page margin, 1 corresponds with the bottom page margin.
     */
    verticalRatio: number;

    /**
     * Same as {@link left}, but as a relative value between the left and right page margin:
     * 0 corresponds with the left page margin, 1 corresponds with the right page margin.
     */
    horizontalRatio: number;
}

/**
 * Information about a node that is being rendered.
 */
export interface Node {
    /** Text content. */
    text?: Content | undefined;

    /** Unordered list elements. */
    ul?: UnorderedListElement[] | undefined;

    /** Ordered list elements. */
    ol?: OrderedListElement[] | undefined;

    /** Table content. */
    table?: Table | undefined;

    /** Image URL or reference. */
    image?: string | undefined;

    /** QR code content. */
    qr?: string | undefined;

    /** Canvas / vector elements. */
    canvas?: CanvasElement[] | undefined;

    /** SVG image content. */
    svg?: string | undefined;

    /** Column elements. */
    columns?: Column[] | undefined;

    /** The node's ID. */
    id?: string | undefined;

    /** Headline level specified on the node's content element. */
    headlineLevel?: number | undefined;

    /** Styles or style references applied to the node. */
    style?: StyleReference | undefined;

    /** The node's specified page break. */
    pageBreak?: PageBreak | undefined;

    /** Page orientation at the node's start position. */
    pageOrientation?: PageOrientation | undefined;

    /** Array containing all page numbers (starting from 1) the node spans across. */
    pageNumbers: number[];

    /** Total number of pages in the document. */
    pages: number;

    /** Indicates whether the node is a {@link ContentStack}. */
    stack: boolean;

    /** Start position of the node. */
    startPosition: NodeStartPosition;
}

/**
 * Information about the effective page size.
 */
export interface ContextPageSize {
    /** Page height in `pt`. */
    height: number;

    /** Page width in `pt`. */
    width: number;

    /** Page orientation. */
    orientation: PageOrientation;
}

export interface BufferOptions {
    fontLayoutCache?: boolean | undefined;
    bufferPages?: boolean | undefined;
    tableLayouts?: { [key: string]: CustomTableLayout } | undefined;
    autoPrint?: boolean | undefined;
    progressCallback?: ((progress: number) => void) | undefined;
}

// disable automatic exporting
export {};
