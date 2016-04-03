// Type definitions for bootstrap-slider.js 4.8.3
// Project: https://github.com/seiyria/bootstrap-slider
// Definitions by: Daniel Beckwith <https://github.com/dbeckwith>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

///<reference path="../jquery/jquery.d.ts"/>

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
    orientation?: number;
    /**
     * Default: 5
     * initial value. Use array to have a range slider.
     */
    value?: number|number[];
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
     * Default: true
     * whether or not the slider is initially enabled
     */
    enabled?: boolean;
    /**
     * Default: returns the plain value
     * formatter callback. Return the value wanted to be displayed in the tooltip
     * @param val the current value to display
     */
    formatter?(val:number): string;
    /**
     * Default: false
     * The natural order is used for the arrow keys. Arrow up select the upper slider value for vertical sliders, arrow right the righter slider value for a horizontal slider - no matter if the slider was reversed or not. By default the arrow keys are oriented by arrow up/right to the higher slider value, arrow down/left to the lower slider value.
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
     * Default: 'linear'
     * Set to 'logarithmic' to use a logarithmic scale.
     */
    scale?: string;
    /**
     * Default: false
     * Focus the appropriate slider handle after a value change.
     */
    focus?: boolean;
}

interface JQuery {
    /**
     * Creates a slider from the current element.
     * @param options
     */
    slider(options?:SliderOptions): JQuery;
    slider(methodName:string, ...args:any[]): JQuery;
}

interface ChangeValue {
    oldValue: number;
    newValue: number;
}

interface JQueryEventObject {
    value: number|ChangeValue;
}

interface SliderStatics {
	new (selector: string, opts: SliderOptions): Slider;
	prototype: Slider;
}

declare var Slider: SliderStatics;

/**
 * This class is actually not used when using the jQuery version of bootstrap-slider
 * The method documentation is still here thouh.
 * When using jQuery, slider methods like setValue(3, true) have to be called like $slider.slider('setValue', 3, true)
 */
interface Slider extends JQuery {
    /**
     * Get the current value from the slider
     */
    getValue(): number;
    /**
     * Set a new value for the slider. If optional triggerSlideEvent parameter is true, 'slide' events will be triggered. If optional triggerChangeEvent parameter is true, 'change' events will be triggered.
     * @param newValue
     * @param triggerSlideEvent
     * @param triggerChangeEvent
     */
    setValue(newValue:number, triggerSlideEvent?:boolean, triggerChangeEvent?:boolean): void;
    /**
     * Properly clean up and remove the slider instance
     */
    destroy(): void;
    /**
     * Disables the slider and prevents the user from changing the value
     */
    disable(): void;
    /**
     * Enables the slider
     */
    enable(): void;
    /**
     * Returns true if enabled, false if disabled
     */
    isEnabled(): boolean;
    /**
     * Updates the slider's attributes
     * @param attribute
     * @param value
     */
    setAttribute(attribute:string, value:any): void;
    /**
     * Get the slider's attributes
     * @param attribute
     */
    getAttribute(attribute:string): any;
    /**
     * Refreshes the current slider
     */
    refresh(): void;
    /**
     * Renders the tooltip again, after initialization. Useful in situations when the slider and tooltip are initially hidden.
     */
    relayout(): void;
    on: {
        (eventType:string, callback:(eventObject:JQueryEventObject, ...args:any[]) => any): Slider;
        (eventType:string, data:any, callback:(eventObject:JQueryEventObject, ...args:any[]) => any): Slider;
        (eventType:string, selector:string, callback:(eventObject:JQueryEventObject, ...eventData:any[]) => any): Slider;
        (eventType:string, selector:string, data:any, callback:(eventObject:JQueryEventObject, ...eventData:any[]) => any): Slider;
        (eventType:{ [key: string]: any; }, selector?:string, data?:any): Slider;
        (eventType:{ [key: string]: any; }, data?:any): Slider;
    }
}
