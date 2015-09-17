// Type definitions for nouislider v7.0.10
// Project: https://github.com/leongersen/noUiSlider
// Definitions by: Corey Jepperson <https://github.com/acoreyj>
// Definitions: https://github.com/borisyankov/DefinitelyTyped
/// <reference path="../jquery/jquery.d.ts"/>
/// <reference path="../wnumb/wnumb.d.ts"/>


interface noUiSliderInstance extends JQuery{
    /**
     * For one-handle sliders, calling .val() will return the value. 
     * For two-handle sliders, an array[value, value] will be returned.
     */
    val(): number | number[];
    /**
     * noUiSlider will keep your values within the slider range, which saves you a bunch of validation.
     * If you have set the slider to use one handle, simply set it on the slider using the .val() method.
     * If you have two handles, pass an array. One-handled sliders will also accept arrays.
     * Within an array, you can set a position to null if you want to leave a handle unchanged.
     */
    val(value: any): JQuery; //can't enforce number as it breaks extend
    /**
     * noUiSlider has full support for libLink, which will let you write values to input elements very easily. 
     * libLink will update the slider if you change an input as well!
     */
    Link(target: string, method?: any, format?:any): any;
}



interface noUiSliderOptions {
    /**
     * The start option sets the number of handles and their start positions, relative to range.
     */
    start: number | number[] | number[][];
    /**
    * The connect setting can be used to control the bar between the handles, 
    * or the edges of the slider. Use "lower" to connect to the lower side,
    * or "upper" to connect to the upper side. Setting true sets the bar between the handles.
    */
    range: Object;
    /**
     * noUiSlider offers several ways to handle user interaction. 
     * The range can be set to drag, and handles can move to taps. 
     * All these effects are optional, and can be enable by adding their keyword to the behaviour option.
     * This option accepts a "-" separated list of "drag", "tap", "fixed", "snap" or "none".
     */
    connect?: string | boolean;
    /**
    * When using two handles, the minimum distance between the handles can be set using the margin option. 
    * The margin value is relative to the value set in 'range'. 
    * This option is only available on standard linear sliders.
    */
    margin?: number;
    /**
     * The limit option is the oposite of the margin option, 
     * limiting the maximum distance between two handles. 
     * As with the margin option, the limit option can only be used on linear sliders.
     */
    limit?: number;
    /**
     * By default, the slider slides fluently. 
     * In order to make the handles jump between intervals, you can use this option. 
     * The step option is relative to the values provided to range.
     */
    step?: number;
    /**
     * The orientation setting can be used to set the slider to "vertical" or "horizontal".
     * Set dimensions! Vertical sliders don't assume a default height, so you'll need to set one. 
     * You can use any unit you want, including % or px.
     */
    orientation?: string;
    /**
     * By default the sliders are top-to-bottom and left-to-right, 
     * but you can change this using the direction option, 
     * which decides where the upper side of the slider is.
     */
    direction?: string;
    /**
     * Set the animate option to false to prevent the slider from animating to a new value with when calling .val().
     */
    animate?: boolean;
    /**
     * All values on the slider are part of a range. The range has a minimum and maximum value.
     */
    behaviour?: string;
    /**
     * To format the slider output, noUiSlider offers a format option. 
     * Simply specify to and from functions to encode and decode the values.
     * See manual formatting to the right for usage information.
     * By default, noUiSlider will format output with 2 decimals.
     * Manual formatting can be very tedious, so noUiSlider has support for the wNumb formatting library.
     *  wNumb offers a wide range of options and provides number validation.
     */
    format?: Object | ((...args:any[]) => any);
    
}

interface noUiSliderPipsOptions {
    /**
     * The range mode uses the slider range to determine where the pips should be. A pip is generated for every percentage specified.
     * 
     * Like range, the steps mode uses the slider range. In steps mode, a pip is generated for every step. 
     * The filter option can be used to filter the generated pips.
     * The filter function must return 0 (no value), 1 (large value) or 2 (small value).
     * 
     * In positions mode, pips are generated at percentage-based positions on the slider. Optionally, the stepped option can be set to true to match the pips to the slider steps.
     * 
     * The count mode can be used to generate a fixed number of pips. As with positions mode, the stepped option can be used.
     * 
     * The values mode is similar to positions, but it accepts values instead of percentages. The stepped option can be used for this mode.
     * 
     */
    mode: string;
    /**
     * Range Mode: percentage for range mode
     * Step Mode: step number for steps
     * Positions Mode: percentage-based positions on the slider
     * Count Mode: positions between pips
     */
    density?: number;
    /**
     * Step Mode: The filter option can be used to filter the generated pips.
     * The filter function must return 0 (no value), 1 (large value) or 2 (small value).
     */
    filter?: (...args:any[]) => number;
    /**
     * format for step mode
     * see noUiSlider format
     */
    format?: Object;
    /**
     * 
     * values for positions and values mode
     * number pips for count mode
     */
    values?: number | number[];
    /**
     * stepped option for positions, values and count mode
     */
    stepped?: boolean;
    
    
}


interface JQuery {
    noUiSlider(options?: noUiSliderOptions): noUiSliderInstance;
    noUiSlider_pips(options?: noUiSliderPipsOptions): noUiSliderInstance;
}