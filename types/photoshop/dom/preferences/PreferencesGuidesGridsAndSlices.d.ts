import * as Constants from "../Constants";
import { PreferencesBase } from "./PreferencesBase";
/**
 * Preferences how guides, grids and slices will be shown
 *
 * @targetfolder classes/preferences
 * @minVersion 24.0
 */
export declare class PreferencesGuidesGridsAndSlices extends PreferencesBase {
    /**
     * @ignore
     */
    constructor();
    /**
     * The class name of the referenced object: *"PreferencesGuidesGridsAndSlices"*.
     *
     * @minVersion 24.0
     */
    get typename(): "PreferencesGuidesGridsAndSlices";
    /**
     * The formatting style for non-printing guide lines.
     *
     * @minVersion 24.0
     */
    get guideStyle(): Constants.GuideLineStyle;
    set guideStyle(value: Constants.GuideLineStyle);
    /**
     * The formatting style for non-printing grid lines
     *
     * @minVersion 24.0
     */
    get gridStyle(): Constants.GridLineStyle;
    set gridStyle(value: Constants.GridLineStyle);
    /**
     * The whole number by which to subdivide the grid [1,100].
     *
     * @minVersion 24.0
     */
    get gridSubDivisions(): number;
    set gridSubDivisions(value: number);
    /**
     * If true, displays slice numbers in the document window when using the Slice tool.
     *
     * @minVersion 24.0
     */
    get showSliceNumber(): boolean;
    set showSliceNumber(enabled: boolean);
}
/** @ignore */
export declare const preferencesGuidesGridsAndSlices: PreferencesGuidesGridsAndSlices;
