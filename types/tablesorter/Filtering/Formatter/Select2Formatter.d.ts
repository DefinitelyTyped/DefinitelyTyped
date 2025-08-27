import "jquery";
import { Select2Options } from "./Options/Select2Options";

/**
 * Provides the functionality to generate select2-controls.
 */
export interface Select2Formatter {
    /**
     * Creates a select2-control.
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
    select2(cell: JQuery, index: number, options?: Select2Options): JQuery;
}
