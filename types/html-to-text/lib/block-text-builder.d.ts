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
    addInline(str: string, noWordTransform?: boolean): void;
    /**
     * Start building a new block.
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
    closeBlock(trailingLineBreaks?: number, blockTransform?: (str: string) => string): void;
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
    openTableCell(maxColumnWidth?: number): void;
    /**
     * Finalize currently built table cell and add it to parent table row's cells.
     */
    closeTableCell(colspan?: number, rowspan?: number): void;
    /**
     * Finalize currently built table row and add it to parent table's rows.
     */
    closeTableRow(): void;
    /**
     * Finalize currently built table and add the rendered text to the parent block.
     */
    closeTable(colSpacing?: number, rowSpacing?: number, leadingLineBreaks?: number, trailingLineBreaks?: number): void;
    /**
     * Return the rendered text content of this builder.
     */
    toString(): string;
}
