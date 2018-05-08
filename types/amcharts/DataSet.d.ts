import StockEvent from "./StockEvent";

/**
 * DataSet is objects which holds all information about data.
 */
export default class DataSet {
    /**
     * Category field name in your dataProvider.
     */
    categoryField: string;
    /**
     * Color of the data set. One of colors from AmStockChart.colors array will be used if not set.
     */
    color: string;
    /**
     * Whether this data set is selected for comparing.
     * If you change this property, you should call stockChart.validateData() method
     * in order the changes to be applied.
     */
    compared: boolean;
    /**
     * Data provider of the data set.
     */
    dataProvider: any[];
    /**
     * Array of field mappings. Field mapping is an object with fromField and toField properties.
     * fromField is a name of your value field in dataProvider.
     * toField might be chosen freely, it will be used to set value/open/close/high/low fields for the StockGraph.
     * Example: {fromField:"val1", toField:"value"}.
     */
    fieldMappings: any[];
    /**
     * Specifies whether this data set should be visible in "compare to" list.
     * @default true
     */
    showInCompare: boolean;
    /**
     * Specifies whether this data set should be visible in "select" dropdown.
     * @default true
     */
    showInSelect: boolean;
    /**
     * Array of StockEvent objects.
     */
    stockEvents: StockEvent[];
    /**
     * DataSet title.
     */
    title: string;
}
