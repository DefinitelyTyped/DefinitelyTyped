import * as Constants from "../Constants";
/**
 * The Class that stores properties related to the Warp Text dialog.
 * @minVersion 24.1
 */
export declare class WarpStyle {
    /**
     * he style of warp to apply to the text.
     * @default NONE
     * @minVersion 24.1
     */
    get style(): Constants.WarpStyle;
    set style(style: Constants.WarpStyle);
    /**
     * The warp direction
     * @default HORIZONTAL
     * @minVersion 24.1
     */
    get direction(): Constants.Direction;
    set direction(direction: Constants.Direction);
    /**
     * The warp bend as a percentage.
     * @range -100..100
     * @minVersion 24.1
     */
    get bend(): number;
    set bend(bend: number);
    /**
     * The horizontal distortion of the warp as a percentage.
     * @range -100..100
     * @minVersion 24.1
     */
    get horizontalDistortion(): number;
    set horizontalDistortion(horizontalDistortion: number);
    /**
     * The vertical distortion of the warp as a percentage.
     * @range -100..100
     * @minVersion 24.1
     */
    get verticalDistortion(): number;
    set verticalDistortion(verticalDistortion: number);
    /**
     * Reset the WarpStyle to its default values.
     * @async
     * @minVersion 24.1
     */
    reset(): Promise<void>;
}
