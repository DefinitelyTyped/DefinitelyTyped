// Type definitions for spectrum 1.5.1
// Project: https://github.com/bgrins/spectrum/
// Definitions by: Mordechai Zuber <https://github.com/M-Zuber>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../jquery/jquery.d.ts"/>

interface JQuery {

    /**
     * initializes the input element that it is called on
     * as a spectrum colorpicker instance
     */
    spectrum(options?: Spectrum.Options): JQuery;

    /**
     * shows the colorpicker
     */
    spectrum(methodName: "show"): JQuery;

    /**
     * hides the colorpicker
     */
    spectrum(methodName: "hide"): JQuery;

    /**
    * toggles the colorpicker
    *
    * warning: If you are calling toggle from a click handler, 
    * make sure you return false to prevent the colorpicker from immediately hiding after it is toggled.
    */
    spectrum(methodName: "toggle"): JQuery;

    /**
     * gets the current value from the colorpicker
     */
    spectrum(methodName: "get"): any; //tinycolor

    /**
     * sets the colorpickers value to update the original input
     * note: this will not fire the `change` event, to prevent infinite loops
     * from calling `set` from within `change`
     *
     * @param colorString- the new color for the colorpicker
     */
    spectrum(methodName: "set", colorString?: string): JQuery;

    /**
     * retrieves the container element of the colorpicker,
     * in case you want to manaully position it or do other things.
     */
    spectrum(methodName: "container"): JQuery;

    /**
     * resets the positioning of the container element.
     * this could be used was hidden when initialized,
     * or if the colorpicker is inside of a moving area.
     */
    spectrum(methodName: "reflow"): JQuery;

    /**
     * removes the colorpicker functionality and restores the element to its original state.
     */
    spectrum(methodName: "destroy"): JQuery;

    /**
     * allows selection of the colorpicker component. if it is already enabled, this method does nothing.
     * additionally, this will cause the original (now hidden) input to be set as disabled.
     */
    spectrum(methodName: "enable"): JQuery;

    /**
     * disables selection of the colorpicker component. adds the sp-disabled class onto the replacer element.
     * if it is already disabled, this method does nothing.
     * additionally, this will remove the disabled property on the original (now hidden).
     */
    spectrum(methodName: "disable"): JQuery;

    /**
     * retrieves the current value for the option name
     *
     * @param optionName- the option to retrieve the value for
     */
    spectrum(methodName: "option", optionName?: string): JQuery;

    /**
     * sets the value of the option name with the value passed in
     *
     * @param optionName- the option to set
     * @param newOptionvalue- the new value for the option
     */
    spectrum(methodName: "option", optionName?: string, newOptionValue?: any): JQuery;

    /**
     * calls the method
     */
    spectrum(methodName: string): JQuery;

    /**
     * called at the beginning of a drag event on either hue slider, alpha slider, or main color picker areas
     */
    on(events: "dragstart.spectrum", handler: (eventObject: JQueryEventObject, color: any /*tinycolor*/) => any): JQuery;

    /**
      * called at the end of a drag event on either hue slider, alpha slider, or main color picker areas
      */
    on(events: "dragstop.spectrum", handler: (eventObject: JQueryEventObject, color: any /*tinycolor*/) => any): JQuery;
}

declare module Spectrum {

    interface Options {
        /**
         * the initial color can be set with the color option.
         * if you don't pass in a color, Spectrum will use the value attribute on the input.
         */
        color?: any; //tinycolor -see https://github.com/bgrins/TinyColor
        
        /**
         * the colorpicker will always show up at full size, and be positioned as an inline-block element. 
         */
        flat?: boolean;
        
        /**
         * adds an input to allow for free form typing.
         */
        showInput?: boolean;
        
        /**
         * shows the color that was initially set when opening.
         * this provides an easy way to click back to what was set when opened.
         */
        showInitial?: boolean;
        
        /**
         * allows the colorpicker to have no color as a value.
         * will display a button to set selection to 'no color'.
         */
        allowEmpty?: boolean;
        
        /**
         * allows alpha transparency selection
         */
        showAlpha?: boolean;
        
        /**
         * automatically disables the colorpicker.
         * additionally, if the input that you initialize spectrum on is disabled, this will be the default value.
         * note: you cannot enable spectrum if the input is disabled
         */
        disabled?: boolean;
        
        /**
         * sets a palette below the colorpicker to make it convenient for users to choose from
         * frequently or recently used colors.
         * default value:  [["#ffffff", "#000000", "#ff0000", "#ff8000", "#ffff00", "#008000", "#0000ff", "#4b0082", "#9400d3"]]
         */
        palette?: string[][];

        /**
         * when the colorpicker is closed, the current color will be added to the palette if it isn't there already.
         */
        showPalette?: boolean;
        
        /**
         * shows only the colors specified in the palette
         */
        showPaletteOnly?: boolean;
        
        /**
         * showa a button to toggle the colorpicker next to the palette.
         * this way, the user can choose from a limited number of colors in the palette,
         * but still be able to pick a color that's not in the palette.
         */
        togglePaletteOnly?: boolean;
        
        /**
         * changes the text on the open-toggle colorpicker button.
         */
        togglePaletteMoreText?: string;
        
        /**
         * changes the text on the close-toggle colorpicker button.
         */
        togglePaletteLessText?: string;
        
        /**
         * automatically hides the colorpicker after a palette color is selected.
         */
        hideAfterPaletteSelect?: boolean;
        
        /**
         * keeps track of what has been selected by the user.
         */
        showSelectionPalette?: boolean;
        
        /**
         * the users selection will be saved in the browser's localStorage object.
         * any Spectrum with the same string will share the selection.
         */
        localStorageKey?: string;

        /**
         * when clicking outside of the colorpicker,
         * force it to fire a change event rather than having it revert the change.
         */
        clickoutFiresChange?: boolean;
        
        /**
         * sets the text on the cancel button.
         */
        cancelText?: string;
        
        /**
         * sets the text on the choose button.
         */
        chooseText?: string;
        
        /**
         * adds an additional class name to the just the container element.
         */
        containerClassName?: string;
        
        /**
         * adda an additional class name to just the replacer element.
         */
        replacerClassName?: string;
        
        /**
         * sets the format that is displayed in the text box.
         * this will also change the format that is displayed in the titles from the palette swatches.
         * possible values: "hex", "hex3", "hsl", "rgb", "name"
         */
        preferredFormat?: string;
        
        /**
         * toggles the choose/cancel buttons.
         * if there are no buttons, the behavior will be to fire the `change` event (and update the original input) when the picker is closed.
         */
        showButtons?: boolean;
        
        /**
         * sets which element the colorpicker container is appended to (default is "body").
         * this can be any valid object taken into the jQuery appendTo function.
         * changing this can help resolve issues with opening the colorpicker in a modal dialog
         * or fixed position container, for instance.
         */
        appendTo?:any //same as JQuery appendTo : JQuery| any[] | Element| string
        
        /**
         * sets the max size for the palette.
         */
        maxSelectionSize?: number;

        /**
         */
        selectionPalette?: string[];

        /**
         * Called as the original input changes. Only happens when the input is closed or the 'Choose' button is clicked.
         */
        change?: (any /*tinycolor */) => void;
        
        /**
         * Called as the user moves around within the colorpicker
         */
        move?: (any /*tinycolor */) => void;
        
        /**
         * Called after the colorpicker is opened. This is ignored on a flat colorpicker. Note, when any colorpicker on the page is shown it will hide any that are already open.
         */
        show?: (any /*tinycolor */) => void;
        
        /**
         * Called after the colorpicker is hidden. This happens when clicking outside of the picker while it is open. Note, when any colorpicker on the page is shown it will hide any that are already open. This event is ignored on a flat colorpicker.
         */
        hide?: (any /*tinycolor */) => void;
        
        /**
         * You can prevent the colorpicker from showing up if you return false in the beforeShow event. This event is ignored on a flat colorpicker.
         */
        beforeShow?: (any /*tinycolor */) => void;
    }
}