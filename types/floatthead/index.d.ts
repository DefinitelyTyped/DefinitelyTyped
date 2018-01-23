// Type definitions for floatthead 2.0
// Project: https://github.com/mkoryak/floatThead
// Definitions by: Soner Köksal <https://github.com/renjfk>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="jquery" />

type TableFunction = ($table: JQuery) => void;

interface FloatTheadOptions {
    /**
     * Position the floated header using absolute or fixed positioning mode (auto picks best for your table scrolling type). Try switching modes if you encounter layout problems.
     * @default auto
     */
    position?: "auto" | "fixed" | "absolute";
    /**
     * Defines a container element inside of which the table scrolls vertically and/or horizontally. If boolean true is used, then we use the table's offsetParent.
     * @default null
     */
    scrollContainer?: TableFunction;
    /**
     * Defines a responsive container element inside of which the table scrolls horizontally (at some resolutions), everything else behaves like window scrolling. This option cannot be used together
     * with scrollContainer option.
     * @default null
     */
    responsiveContainer?: TableFunction;
    /**
     * Specifies the selector used to find header cells (in the table's thead element)
     * @default tr:first>th:visible
     */
    headerCellSelector?: string;
    /**
     * This class is added to the table element after you run floatThead on it
     * @default floatThead-table
     */
    floatTableClass?: string;
    /**
     * This class is added to the container div inside of which your thead will spend time floating
     * @default floatThead-container
     */
    floatContainerClass?: string;
    /**
     * Offset from the top of the window where the floating header will 'stick' when scrolling down
     * @default 0
     */
    top?: number | TableFunction;
    /**
     * Offset from the bottom of the window where the floating header will 'stick' when scrolling down
     * @default 0
     */
    bottom?: number | TableFunction;
    /**
     * z-index of the floating header
     * @default 1001
     */
    zIndex?: number;
    /**
     * Point out various possible issues via console.log if it is available
     * @default false
     */
    debug?: boolean;
    /**
     * <b>Used by IE Only</b>
     * If your table's first visible row (tbody tr:visible:first>*) contains td or th elements with colspans, then you need to return another set of cells which have no colspans. In other words the
     * selector should return the same number of cells as columns in your table.
     * @default undefined
     */
    getSizingRow?: TableFunction;
    /**
     * Should the table's class attribute be copied to the floated table? This make the styles written for the table's class selector apply also to the floated header. However, if you are later
     * selecting this table by class you may be surprised to find 2 tables.
     * @default true
     */
    copyTableClass?: boolean;
    /**
     * <b>Experimental</b>
     * use MutationObserver (on good browsers) to reflow automatically when internal table DOM changes, or DOM within scrollContainer
     * @default false
     */
    autoReflow?: boolean;
}

interface FloatThead {
    (options?: FloatTheadOptions | "getRowGroups" | "reflow"): void;

    (method: "destroy"): () => void;
}

interface JQuery {
    floatThead: FloatThead;
}

interface JQueryStatic {
    floatThead: FloatThead;
}
