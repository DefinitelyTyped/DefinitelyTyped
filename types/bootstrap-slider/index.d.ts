// Type definitions for bootstrap-slider.js 9.9
// Project: http://github.com/seiyria/bootstrap-slider
// Definitions by: Daniel Beckwith <https://github.com/dbeckwith>
//                 Leonard Thieu <https://github.com/leonard-thieu>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="jquery" />

interface RangeHighlight {
    class?: string;
    start?: number;
    end?: number;
}

type SliderEventType =  'slide' |
                        'slideStart' |
                        'slideStop' |
                        'change' |
                        'slideEnabled' |
                        'slideDisabled';

interface SliderOptions {
    /**
     * Default: ''
     * set the id of the slider element when it's created
     */
    id?: string;
    /**
     * Default: 0
     * minimum possible value
     */
    min?: number;
    /**
     * Default: 10
     * maximum possible value
     */
    max?: number;
    /**
     * Default: 1
     * increment step
     */
    step?: number;
    /**
     * Default: number of digits after the decimal of step value
     * The number of digits shown after the decimal. Defaults to the number of digits after the decimal of step value.
     */
    precision?: number;
    /**
     * Default: 'horizontal'
     * set the orientation. Accepts 'vertical' or 'horizontal'
     */
    orientation?: string;
    /**
     * Default: 5
     * initial value. Use array to have a range slider.
     */
    value?: number | number[];
    /**
     * Default: false
     * make range slider. Optional if initial value is an array. If initial value is scalar, max will be used for second value.
     */
    range?: boolean;
    /**
     * Default: 'before'
     * selection placement. Accepts: 'before', 'after' or 'none'. In case of a range slider, the selection will be placed between the handles
     */
    selection?: string;
    /**
     * Default: 'show'
     * whether to show the tooltip on drag, hide the tooltip, or always show the tooltip. Accepts: 'show', 'hide', or 'always'
     */
    tooltip?: string;
    /**
     * Default: false
     * if false show one tootip if true show two tooltips one for each handler
     */
    tooltip_split?: boolean;
    /**
     * Default: null
     * Position of tooltip, relative to slider. Accepts 'top'/'bottom' for
     * horizontal sliders and 'left'/'right' for vertically orientated sliders.
     * Default positions are 'top' for horizontal and 'right' for vertical
     * slider.
     */
    tooltip_position?: 'top' | 'bottom' | 'left' | 'right';
    /**
     * Default: 'round'
     * handle shape. Accepts: 'round', 'square', 'triangle' or 'custom'
     */
    handle?: string;
    /**
     * Default: false
     * whether or not the slider should be reversed
     */
    reversed?: boolean;
    /**
     * Default: 'auto'
     */
    rtl?: boolean | 'auto';
    /**
     * Default: true
     * whether or not the slider is initially enabled
     */
    enabled?: boolean;
    /**
     * Default: returns the plain value
     * formatter callback. Return the value wanted to be displayed in the tooltip
     * @param val the current value to display
     */
    formatter?(val: number): string;
    /**
     * Default: false
     * The natural order is used for the arrow keys. Arrow up select the upper slider value for vertical sliders,
     * arrow right the righter slider value for a horizontal slider - no matter if the slider was reversed or not.
     * By default the arrow keys are oriented by arrow up/right to the higher slider value, arrow down/left to the lower slider value.
     */
    natural_arrow_keys?: boolean;
    /**
     * Default: [ ]
     * Used to define the values of ticks. Tick marks are indicators to denote special values in the range. This option overwrites min and max options.
     */
    ticks?: number[];
    /**
     * Default: [ ]
     * Defines the positions of the tick values in percentages. The first value should alwasy be 0, the last value should always be 100 percent.
     */
    ticks_positions?: number[];
    /**
     * Default: [ ]
     * Defines the labels below the tick marks. Accepts HTML input.
     */
    ticks_labels?: string[];
    /**
     * Default: 0
     * Used to define the snap bounds of a tick. Snaps to the tick if value is within these bounds.
     */
    ticks_snap_bounds?: number;
    /**
     * Default: false
     * Used to allow for a user to hover over a given tick to see it's value.
     * Useful if custom formatter passed in
     */
    ticks_tooltip?: boolean;
    /**
     * Default: 'linear'
     * Set to 'logarithmic' to use a logarithmic scale.
     */
    scale?: 'linear' | 'logarithmic';
    /**
     * Default: false
     * Focus the appropriate slider handle after a value change.
     */
    focus?: boolean;
    /**
     * Default: null
     * ARIA labels for the slider handle's, Use array for multiple values in a
     * range slider.
     */
    labelledby?: string | string[];
    /**
     * Default: []
     * Defines a range array that you want to highlight, for example:
     * [{'start':val1, 'end': val2, 'class': 'optionalAdditionalClassName'}].
     */
    rangeHighlights?: RangeHighlight[];
}

interface JQuery {
    slider: SliderPlugin<this>;
    bootstrapSlider: SliderPlugin<this>;

    on(event: 'slide', handler: (slideEvt: SliderEvent) => false | void): this;
}

interface SliderPlugin<TJQuery> {
    (methodName: string, ...args: any[]): TJQuery;
    /**
     * Creates a slider from the current element.
     */
    (options?: SliderOptions): TJQuery;
}

interface ChangeValue {
    oldValue: number;
    newValue: number;
}

interface SliderEvent extends JQuery.Event {
    value: number | ChangeValue;
}

/**
 * This class is actually not used when using the jQuery version of bootstrap-slider
 * The method documentation is still here thouh.
 * When using jQuery, slider methods like setValue(3, true) have to be called like $slider.slider('setValue', 3, true)
 */
declare class Slider {
    constructor(selector: string, opts: SliderOptions);

    /**
     * Get the current value from the slider
     */
    getValue(): number;
    /**
     * Set a new value for the slider. If optional triggerSlideEvent parameter is true, 'slide' events will be triggered.
     * If optional triggerChangeEvent parameter is true, 'change' events will be triggered.
     */
    setValue(newValue: number, triggerSlideEvent?: boolean, triggerChangeEvent?: boolean): this;
    /**
     * Get the div slider element
     */
    getElement(): HTMLDivElement;
    /**
     * Properly clean up and remove the slider instance
     */
    destroy(): this;
    /**
     * Disables the slider and prevents the user from changing the value
     */
    disable(): this;
    /**
     * Enables the slider
     */
    enable(): this;
    /**
     * Toggles the slider between enabled and disabled
     */
    toggle(): this;
    /**
     * Returns true if enabled, false if disabled
     */
    isEnabled(): boolean;
    /**
     * Updates the slider's attributes
     */
    setAttribute(attribute: string, value: any): this;
    /**
     * Get the slider's attributes
     */
    getAttribute(attribute: string): any;
    /**
     * Refreshes the current slider
     */
    refresh(): this;
    /**
     * When the slider event eventType is triggered, the callback function will be invoked
     */
    on(eventType: SliderEventType, callback: (val: number | undefined) => void): this;
    /**
     * Removes the callback function from the slider event eventType
     */
    off(eventType: SliderEventType, callback: (val: number | undefined) => void): void;
    /**
     * Renders the tooltip again, after initialization. Useful in situations when the slider and tooltip are initially hidden.
     */
    relayout(): this;
}
