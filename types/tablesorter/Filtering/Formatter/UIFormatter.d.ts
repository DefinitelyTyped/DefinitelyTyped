import "jquery";
import { UIDateCompareOptions } from "./Options/UIDateCompareOptions";
import { UIDateRangeOptions } from "./Options/UIDateRangeOptions";
import { UIRangeOptions } from "./Options/UIRangeOptions";
import { UISliderOptions } from "./Options/UISliderOptions";
import { UISpinnerOptions } from "./Options/UISpinnerOptions";

/**
 * Provides the functionality to generate html5-controls.
 */
export interface UIFormatter {
    /**
     * Creates a jQueryUI spinner-control.
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
    uiSpinner(cell: JQuery, index: number, options?: UISpinnerOptions): JQuery;

    /**
     * Creates a jQueryUI slider-control.
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
    uiSlider(cell: JQuery, index: number, options?: UISliderOptions): JQuery;

    /**
     * Creates a jQueryUI range-control.
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
    uiRange(cell: JQuery, index: number, options?: UIRangeOptions): JQuery;

    /**
     * Creates a jQueryUI date-comparsion control.
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
    uiDateCompare(cell: JQuery, index: number, options?: UIDateCompareOptions): JQuery;

    /**
     * Creates a jQueryUI datepicker-control.
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
    uiDatepicker(cell: JQuery, index: number, options?: UIDateRangeOptions): JQuery;
}
