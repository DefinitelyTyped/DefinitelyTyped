/**
 * types of options for BlockTextBuilder methods.  These replace previously positional options.
 */

export interface AddInlineOptions { noWordTransform?: boolean | undefined; }
export interface OpenBlockOptions { leadingLineBreaks?: number | undefined;
    reservedLineLength?: number | undefined;
    isPre?: boolean | undefined; }
export type BlockTransformer = (str: string) => string;
export interface CloseBlockOptions { trailingLineBreaks?: number | undefined; blockTransform?: BlockTransformer | undefined; }
export interface OpenTableCellOptions { maxColumnWidth?: number | undefined; }
export interface CloseTableCellOptions { colspan?: number | undefined; rowspan?: number | undefined; }
export interface CloseTableOptions { colSpacing?: number | undefined;
    rowSpacing?: number | undefined;
    leadingLineBreaks?: number | undefined;
    trailingLineBreaks?: number | undefined; }

/**
 * Helps to build text from inline and block elements.
 */
export interface BlockTextBuilder {
    /**
     * Put a word-by-word transform function onto the transformations stack.
     *
     * Mainly used for uppercasing. Can be bypassed to add unformatted text such as URLs.
     *
     * Word transformations applied before wrapping.
     */
    pushWordTransform(wordTransform: (str: string) => string): void;
    /**
     * Remove a function from the word transformations stack.
     */
    popWordTransform(): ((str: string) => string) | undefined;
    /**
     * Add a line break into currently built block.
     */
    addLineBreak(): void;
    /**
     * Allow to break line in case directly following text will not fit.
     */
    addWordBreakOpportunity(): void;
    /**
     * Add a node inline into the currently built block.
     */
    addInline(str: string, addInlineOptions?: AddInlineOptions): void;
    /**
     *  @deprecated See the documentation.
     */
    // tslint:disable-next-line:unified-signatures
    addInline(str: string, noWordTransform?: boolean): void;
    /**
     * Start building a new block.
     */
    openBlock(openBlockOptions?: OpenBlockOptions): void;
    /**
     *  @deprecated See the documentation.
     */
    openBlock(leadingLineBreaks?: number, reservedLineLength?: number, isPre?: boolean): void;
    /**
     * Finalize currently built block, add it's content to the parent block.
     *
     * A function to transform the block text before adding to the parent block.
     * This happens after word wrap and should be used in combination with reserved line length
     * in order to keep line lengths correct.
     * Used for whole block markup.
     */
    closeBlock(closeBlockOptions?: CloseBlockOptions): void;
    /**
     *  @deprecated See the documentation.
     */
    closeBlock(trailingLineBreaks?: number, blockTransform?: BlockTransformer): void;
    /**
     * Start building a table.
     */
    openTable(): void;
    /**
     * Start building a table row.
     */
    openTableRow(): void;
    /**
     * Start building a table cell.
     */
    openTableCell(openTableCellOptions?: OpenTableCellOptions): void;
    /**
     *  @deprecated See the documentation.
     */
    // tslint:disable-next-line:unified-signatures
    openTableCell(maxColumnWidth?: number): void;
    /**
     * Finalize currently built table cell and add it to parent table row's cells.
     */
    closeTableCell(closeTableCellOptions?: CloseTableCellOptions): void;
    /**
     *  @deprecated See the documentation.
     */
    closeTableCell(colspan?: number, rowspan?: number): void;
    /**
     * Finalize currently built table row and add it to parent table's rows.
     */
    closeTableRow(): void;
    /**
     * Finalize currently built table and add the rendered text to the parent block.
     */
    closeTable(closeTableOptions?: CloseTableOptions): void;
    /**
     *  @deprecated See the documentation.
     */
    closeTable(colSpacing?: number, rowSpacing?: number, leadingLineBreaks?: number, trailingLineBreaks?: number): void;
    /**
     * Return the rendered text content of this builder.
     */
    toString(): string;
}
