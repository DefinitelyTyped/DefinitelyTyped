// Type definitions for spectrum 1.5.1
// Project: https://github.com/bgrins/spectrum/
// Definitions by: Mordechai Zuber <https://github.com/M-Zuber>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../jquery/jquery.d.ts"/>
/// <reference path="../tinycolor/tinycolor.d.ts"/>

interface JQuery {

    /**
     * Shows the colorpicker.
     */
    spectrum(methodName: "show"): JQuery;

    /**
     * Hides the colorpicker.
     */
    spectrum(methodName: "hide"): JQuery;

    /**
    * Toggles the colorpicker.
    *
    * Warning: If you are calling toggle from a click handler, 
    *   make sure you return false to prevent the colorpicker from immediately hiding after it is toggled.
    */
    spectrum(methodName: "toggle"): JQuery;

    /**
     * Gets the current value from the colorpicker.
     */
    spectrum(methodName: "get"): tinycolorInstance;

    /**
     * Sets the colorpickers value to update the original input.
     * Note: this will not fire the `change` event, to prevent infinite loops
     *  from calling `set` from within `change`.
     *
     * @param colorString- the new color for the colorpicker.
     */
    spectrum(methodName: "set", colorString?: string): JQuery;

    /**
     * Retrieves the container element of the colorpicker,
     * in case you want to manaully position it or do other things.
     */
    spectrum(methodName: "container"): JQuery;

    /**
     * Resets the positioning of the container element.
     * This could be used if the colorpicker was hidden when initialized,
     * or if the colorpicker is inside of a moving area.
     */
    spectrum(methodName: "reflow"): JQuery;

    /**
     * Removes the colorpicker functionality and restores the element to its original state.
     */
    spectrum(methodName: "destroy"): JQuery;

    /**
     * Allows selection of the colorpicker component. if it is already enabled, this method does nothing.
     * Additionally, this will cause the original (now hidden) input to be set as disabled.
     */
    spectrum(methodName: "enable"): JQuery;

    /**
     * Disables selection of the colorpicker component. adds the sp-disabled class onto the replacer element.
     * If it is already disabled, this method does nothing.
     * Additionally, this will remove the disabled property on the original (now hidden).
     */
    spectrum(methodName: "disable"): JQuery;

    /**
     * Retrieves the current value for the option name.
     *
     * @param optionName- the option to retrieve the value for.
     */
    spectrum(methodName: "option", optionName?: string): JQuery;

    /**
     * Sets the value of the option name with the value passed in.
     *
     * @param optionName- the option to set.
     * @param newOptionvalue- the new value for the option.
     */
    spectrum(methodName: "option", optionName?: string, newOptionValue?: any): JQuery;

    /**
     * Calls the method.
     */
    spectrum(methodName: string): any; // in most cases this is JQuery except for the get method which returns a tinycolorInstance

    /**
     * Initializes the input element that it is called on
     * as a spectrum colorpicker instance.
     */
    spectrum(options?: Spectrum.Options): JQuery;
    
    /**
     * Called at the beginning of a drag event on either hue slider, alpha slider, or main color picker areas.
     */
    on(events: "dragstart.spectrum", handler: (eventObject: JQueryEventObject, color: tinycolorInstance) => any): JQuery;

    /**
     * Called at the end of a drag event on either hue slider, alpha slider, or main color picker areas.
     */
    on(events: "dragstop.spectrum", handler: (eventObject: JQueryEventObject, color: tinycolorInstance) => any): JQuery;
}

declare module Spectrum {

    interface Options {

        /**
         * The initial color can be set with the color option.
         * if you don't pass in a color, Spectrum will use the value attribute on the input.
         * The input is a string that is parsed using https://github.com/bgrins/TinyColor
         */
        color?: string;

        /**
         * The colorpicker will always show up at full size, and be positioned as an inline-block element. 
         */
        flat?: boolean;

        /**
         * Adds an input to allow for free form typing.
         */
        showInput?: boolean;

        /**
         * Shows the color that was initially set when opening.
         * This provides an easy way to click back to what was set when opened.
         */
        showInitial?: boolean;

        /**
         * Allows the colorpicker to have no color as a value.
         * Will display a button to set selection to 'no color'.
         */
        allowEmpty?: boolean;

        /**
         * Allows alpha transparency selection
         */
        showAlpha?: boolean;

        /**
         * Automatically disables the colorpicker.
         * Additionally, if the input that you initialize spectrum on is disabled, this will be the default value.
         * Note: you cannot enable spectrum if the input is disabled
         */
        disabled?: boolean;

        /**
         * Sets a palette below the colorpicker to make it convenient for users to choose from
         *  frequently or recently used colors.
         * Default value:  [["#ffffff", "#000000", "#ff0000", "#ff8000", "#ffff00", "#008000", "#0000ff", "#4b0082", "#9400d3"]]
         */
        palette?: string[][];

        /**
         * When the colorpicker is closed, the current color will be added to the palette if it isn't there already.
         */
        showPalette?: boolean;

        /**
         * Shows only the colors specified in the palette
         */
        showPaletteOnly?: boolean;

        /**
         * Shows a button to toggle the colorpicker next to the palette.
         * This way, the user can choose from a limited number of colors in the palette,
         * but still be able to pick a color that's not in the palette.
         */
        togglePaletteOnly?: boolean;

        /**
         * Changes the text on the open-toggle colorpicker button.
         */
        togglePaletteMoreText?: string;

        /**
         * Changes the text on the close-toggle colorpicker button.
         */
        togglePaletteLessText?: string;

        /**
         * Automatically hides the colorpicker after a palette color is selected.
         */
        hideAfterPaletteSelect?: boolean;

        /**
         * Keeps track of what has been selected by the user.
         */
        showSelectionPalette?: boolean;

        /**
         * The users selection will be saved in the browser's localStorage object.
         * Any Spectrum with the same string will share the selection.
         */
        localStorageKey?: string;

        /**
         * When clicking outside of the colorpicker,
         *  force it to fire a change event rather than having it revert the change.
         */
        clickoutFiresChange?: boolean;

        /**
         * Sets the text on the cancel button.
         */
        cancelText?: string;

        /**
         * Sets the text on the choose button.
         */
        chooseText?: string;

        /**
         * Adds an additional class name to the just the container element.
         */
        containerClassName?: string;

        /**
         * Adds an additional class name to just the replacer element.
         */
        replacerClassName?: string;

        /**
         * Sets the format that is displayed in the text box.
         * This will also change the format that is displayed in the titles from the palette swatches.
         * Possible values: "hex", "hex3", "hsl", "rgb", "name"
         */
        preferredFormat?: string;

        /**
         * Toggles the choose/cancel buttons.
         * If there are no buttons, the behavior will be to fire the `change` event (and update the original input) when the picker is closed.
         */
        showButtons?: boolean;

        /**
         * Sets which element the colorpicker container is appended to (default is "body").
         * This can be any valid object taken into the jQuery appendTo function.
         * Changing this can help resolve issues with opening the colorpicker in a modal dialog
         * or fixed position container, for instance.
         */
        appendTo?: any //same as JQuery appendTo : JQuery| any[] | Element| string

        /**
         * Sets the max size for the palette. 
         */
        maxSelectionSize?: number;

        /**
         */
        selectionPalette?: string[];

        /**
         * Called as the original input changes. Only happens when the input is closed or the 'Choose' button is clicked.
         */
        change?: (color: tinycolorInstance) => void;

        /**
         * Called as the user moves around within the colorpicker.
         */
        move?: (color: tinycolorInstance) => void;

        /**
         * Called after the colorpicker is opened. This is ignored on a flat colorpicker. 
         * Note, when any colorpicker on the page is shown it will hide any that are already open.
         */
        show?: (color: tinycolorInstance) => void;

        /**
         * Called after the colorpicker is hidden. 
         * This happens when clicking outside of the picker while it is open. 
         * Note, when any colorpicker on the page is shown it will hide any that are already open. 
         * This event is ignored on a flat colorpicker.
         */
        hide?: (color: tinycolorInstance) => void;

        /**
         * You can prevent the colorpicker from showing up if you return false in the beforeShow event.
         * This event is ignored on a flat colorpicker.
         */
        beforeShow?: (color: tinycolorInstance) => void;
    }
}
