// Type definitions for askmethat-rating 0.3
// Project: https://alexteixeira.github.io/Askmethat-Rating/
// Definitions by: Alexandre Teixeira <https://github.com/AlexTeixeira/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

export enum AskmethatRatingSteps {
    /**
     * Step 0.1 per 0.1
     */
    DecimalStep = 0,
    /**
     * Step 0.5 per 0.5
     */
    HalfStep = 1,
    /**
     * Step 1 per 1
     */
    OnePerOneStep = 2,
}
export interface AskmethatRatingOptions {
    hoverColor?: string;
    /**
     * Color when the rating is not hovered
     */
    backgroundColor?: string;
    /**
     * Mininmum rating that the user can set
     */
    minRating?: number;
    /**
     * Maximum rating that the plugin display
     */
    maxRating?: number;
    /**
     * Class to display as rating (FontAwesome or Rating for exemple)
     */
    fontClass: string;
    /**
     * Set the rating to readonly
     */
    readonly: boolean;
    /**
     * The stepping for the rating
     */
    step: AskmethatRatingSteps;
    /**
     * Input name (Default is AskmethatRating)
     */
    inputName: string;
}
export class AskmethatRating {
    private parentElement;
    private pValue;
    private styleSheet;
    private changeEvent;
    private ratingClick;
    private mouseMove;
    /**
     * @function get the current value for the rating
     */
    /**
     * @function set a new value for the rating
     *
     * @param _value this is the new value you want to set to the rating
     * @returns the current number
     */
    value: number;
    /**
     * Default option base on @type IAskmethatRatingOptions
     */
    private _defaultOptions;
    /**
     * @function get the default option for the rating
     *
     * @return  options based on @type AskmethatRatingOptions
     */
    readonly defaultOptions: any;
    /**
     * constructor with div element, default rating value & default options
     *
     * @param element This is the html container for the rating elements
     * @param defaultValue Default value set when the plugin render the rating
     * @param options Default option base on AskmethatRatingOptions type
     */
    constructor(element: HTMLDivElement, defaultValue?: number, options?: any);
    /**
     * render a new rating, by default value is the minRating
     *
     * @param value this is the default value set when the plugin is rendered, by default IAskmethatRatingOptions.minRating
     */
    render(value?: number): void;
    /**
     * @function when a rating is clicked
     * @param  {type} event : Event {event object}
     */
    private onRatingClick(event?);
    /**
     * @function Calculate the value according to the step provided in options
     * @param  {Number} value:number the current value
     * @return {Number} the new value according to step
     */
    protected getValueAccordingToStep(value: number): number;
    /**
     * @function mouse event enter in rating
     * @param  {type} event?: Event {event}
     */
    private onMouseMove(event?);
    /**
     * @function mouse out event in rating
     * @param  {type} event?: Event {event}
     */
    private onMouseLeave(event?);
    /**
     * @function set or unset the active class and color
     * @param  {HTMLSpanElement} current :  current span element
     * @param  {number} current :  value needed for the if
     */
    protected setOrUnsetActive(value: number): void;
    /**
     * Check if disabled attribute is added or removed from the input
     * Update readonly status if needed for the rating
     */
    private mutationEvent();
    /**
     * @function static method to retrieve with identifier the value
     * @param  {string} identifier: string container identifier
     * @return {number} current rating
     */
    static value(identifier: string): number;
}
