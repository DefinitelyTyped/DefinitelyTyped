/**
 * DataSetSelector is a tool for selecting data set's as main and for comparing with main data set.
 */
export default class DataSetSelector {
    /**
     * Text displayed in the "compare to" combobox (when position is "top" or "bottom"). Select...
     */
    comboBoxSelectText: string;
    /**
     * Text displayed near "compare to" list. Compare to:
     */
    compareText: string;
    /**
     * The maximum height of the Compare to field in pixels.
     * @default 150
     */
    listHeight: number;
    /**
     * Possible values: "right", "left", "top", "bottom". "top" and "bottom" positions has a limitation -
     * only one data set can be selected for comparing.
     * @default "left"
     */
    position: string;
    /**
     * Text displayed near "Select" dropDown. Select:
     */
    selectText: string;
    /**
     * Width of a Data set selector, when position is "left" or "right".
     * @default 180
     */
    width: number;
}
