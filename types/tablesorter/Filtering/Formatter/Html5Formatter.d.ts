import "jquery";
import { Html5ColorOptions } from "./Options/Html5ColorOptions";
import { Html5NumberOptions } from "./Options/Html5NumberOptions";
import { Html5RangeOptions } from "./Options/Html5RangeOptions";

/**
 * Provides the functionality to generate html5-controls.
 */
export interface Html5Formatter {
    /**
     * Creates an html5 number-control.
     *
     * @param cell
     * The jQuery-object of the cell the control is added to.
     *
     * @param index
     * The column-index of the cell the control is added to.
     *
     * @param options
     * The options for the control-creation.
     *
     * @return
     * The jQuery-object of the created control.
     */
    html5Number(cell: JQuery, index: number, options?: Html5NumberOptions): JQuery;

    /**
     * Creates an html5 range-control.
     *
     * @param cell
     * The jQuery-object of the cell the control is added to.
     *
     * @param index
     * The column-index of the cell the control is added to.
     *
     * @param options
     * The options for the control-creation.
     *
     * @return
     * The jQuery-object of the created control.
     */
    html5Range(cell: JQuery, index: number, options?: Html5RangeOptions): JQuery;

    /**
     * Creates an html5 color-control.
     *
     * @param cell
     * The jQuery-object of the cell the control is added to.
     *
     * @param index
     * The column-index of the cell the control is added to.
     *
     * @param options
     * The options for the control-creation.
     *
     * @return
     * The jQuery-object of the created control.
     */
    html5Color(cell: JQuery, index: number, options?: Html5ColorOptions): JQuery;
}
