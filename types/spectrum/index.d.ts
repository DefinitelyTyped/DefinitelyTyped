/// <reference types="jquery"/>
/// <reference types="tinycolor2"/>

// tslint:disable:unified-signatures self-documenting code and JSDoc require non-unified signatures
interface JQuery {
    /**
     * Shows the color picker.
     *
     * @param methodName Name of the method to call, i.e. `show`.
     * @return This JQuery instance for chaining method calls.
     */
    spectrum(methodName: "show"): JQuery;

    /**
     * Hides the color picker.
     *
     * @param methodName Name of the method to call, i.e. `hide`.
     * @return This JQuery instance for chaining method calls.
     */
    spectrum(methodName: "hide"): JQuery;

    /**
     * Toggles the color picker.
     *
     * Warning: If you are calling toggle from a click handler, make sure you
     * return `false` to prevent the color picker from immediately hiding after
     * it is toggled.
     *
     * ```javascript
     * $("#btn-toggle").click(function() {
     *   $("#toggle").spectrum("toggle");
     *   return false;
     * });
     * ```
     *
     * @param methodName Name of the method to call, i.e. `toggle`.
     * @return This JQuery instance for chaining method calls.
     */
    spectrum(methodName: "toggle"): JQuery;

    /**
     * Gets the current value from the color picker.
     *
     * @param methodName Name of the method to call, i.e. `get`.
     * @return The currently selected color.
     */
    spectrum(methodName: "get"): tinycolor.Instance;

    /**
     * Sets the color picker's value to update the original input.
     *
     * Note: This will not fire the `change` event, to prevent infinite loops
     * from calling `set` from within `change`.
     *
     * ```html
     * <input type='text' value='blanchedalmond' name='triggerSet' id='triggerSet' />
     * <input type='text' placeholder='Enter A Color' id='enterAColor' />
     * <button id='btnEnterAColor'>Trigger Set</button>
     * <script>
     *   $("#triggerSet").spectrum();
     *
     * // Show the original input to demonstrate the
     *   // value changing when calling `set`
     *   $("#triggerSet").show();
     *
     *   $("#btnEnterAColor").click(function() {
     *     $("#triggerSet").spectrum("set", $("#enterAColor").val());
     *   });
     * </script>
     * ```
     *
     * @param methodName Name of the method to call, i.e. `set`.
     * @param colorString The new color for the color picker. When not given,
     * resets the color to the default color.
     * @return This JQuery instance for chaining method calls.
     */
    spectrum(methodName: "set", colorString?: string): JQuery;

    /**
     * Retrieves the container element of the color picker, in case you want to
     * manually position it or do other things.
     *
     * @param methodName Name of the method to call, i.e. `container`.
     * @return The JQuery element representing the container DOM element of the
     * color picker.
     */
    spectrum(methodName: "container"): JQuery;

    /**
     * Resets the positioning of the container element.
     *
     * This could be used if the color picker was hidden when initialized, or if
     * the color picker is inside of a moving area.
     *
     * @param methodName Name of the method to call, i.e. `reflow`.
     * @return This JQuery instance for chaining method calls.
     */
    spectrum(methodName: "reflow"): JQuery;

    /**
     * Removes the color picker functionality and restores the element to its
     * original state.
     *
     * @param methodName Name of the method to call, i.e. `destroy`.
     * @return This JQuery instance for chaining method calls.
     */
    spectrum(methodName: "destroy"): JQuery;

    /**
     * Allows selection of the color picker component. if it is already enabled,
     * this method does nothing.
     *
     * Additionally, this will cause the original (now hidden) input to be set
     * as disabled.
     *
     * @param methodName Name of the method to call, i.e. `enable`.
     * @return This JQuery instance for chaining method calls.
     */
    spectrum(methodName: "enable"): JQuery;

    /**
     * Disables selection of the color picker component. Adds the `sp-disabled`
     * class to the replacer element. If it is already disabled, this method
     * does nothing.
     *
     * Additionally, this will remove the `disabled` property on the original
     * now hidden).
     *
     * @param methodName Name of the method to call, i.e. `disable`.
     * @return This JQuery instance for chaining method calls.
     */
    spectrum(methodName: "disable"): JQuery;

    /**
     * Retrieves the set of options currently set on the color picker.
     *
     * @param methodName Name of the method to call, i.e. `option`.
     * @return An object with all options currently set on the color picker.
     */
    spectrum(methodName: "option"): Spectrum.Options;

    /**
     * Retrieves the current value for the option with the given name.
     *
     * ```javascript
     * $("input").spectrum({
     *   showInput: true
     * });
     * $("input").spectrum("option", "showInput"); // true
     * ```
     *
     * @param methodName Name of the method to call, i.e. `option`.
     * @param optionName Name of the option for which to retrieve the value.
     * @return The current value for the given option.
     */
    spectrum<K extends keyof Spectrum.Options>(
        methodName: "option",
        optionName: K,
    ): Spectrum.Options[K];

    /**
     * Sets the value of the option with the given name to the given value.
     *
     * ```javascript
     * $("input").spectrum({
     *   showInput: true
     * });
     * $("input").spectrum("option", "showInput", false);
     * $("input").spectrum("option", "showInput"); // false
     * ```
     *
     * @param optionName Name of the option to set.
     * @param newOptionValue the new value for the option. This must not be
     * `undefined`, or the current value of the option will be returned.
     * @return This JQuery instance for chaining method calls.
     */
    spectrum<K extends keyof Spectrum.Options>(
        methodName: "option",
        optionName: K,
        newOptionValue: NonNullable<Spectrum.Options[K]>,
    ): JQuery;

    /**
     * Initializes the input element that it is called on as a spectrum color
     * picker instance.
     *
     * Just create a normal input and initialize it as a normal jQuery plugin.
     * You can set a lot of options when initializing the color picker.
     *
     * ```html
     * <input type='text' id="custom" />
     *
     * <script>
     * $("#custom").spectrum({
     *   color: "#f00"
     * });
     * </script>
     * ```
     */
    spectrum(options?: Spectrum.Options): JQuery;
}

declare namespace JQuery {
    interface TypeToTriggeredEventMap<
        TDelegateTarget,
        TData,
        TCurrentTarget,
        TTarget,
    > {
        /**
         * Called as the original input changes. Only happens when the input is
         * closed or the 'Choose' button is clicked.
         *
         * The callback will receive an additional argument of type
         * `tinycolor.Instance` with the currently selected color.
         *
         * ```javascript
         * $("#picker").spectrum({
         *   change: function(color) {
         *     color.toHexString(); // #ff0000
         *   }
         * }
         * ```
         */
        "change.spectrum": ChangeEvent<TDelegateTarget, TData, TCurrentTarget, TTarget>;

        /**
         * Called as the user moves around within the color picker.
         *
         * The callback will receive an additional argument of type
         * `tinycolor.Instance` with the currently selected color.
         *
         * ```javascript
         * $("#picker").spectrum({
         *   move: function(color) {
         *     color.toHexString(); // #ff0000
         *   }
         * }
         * ```
         */
        "move.spectrum": Spectrum.MoveEvent<TDelegateTarget, TData, TCurrentTarget, TTarget>;

        /**
         * Called after the color picker is opened. This is ignored on a flat
         * color picker.
         *
         * Note: When any color picker on the page is shown, it will hide all
         * other color pickers that are already open.
         *
         * The callback will receive an additional argument of type
         * `tinycolor.Instance` with the currently selected color.
         *
         * ```javascript
         * $("#picker").spectrum({
         *   show: function(color) {
         *     color.toHexString(); // #ff0000
         *   }
         * }
         * ```
         */
        "show.spectrum": Spectrum.ShowEvent<TDelegateTarget, TData, TCurrentTarget, TTarget>;

        /**
         * Called after the color picker is hidden.
         *
         * This happens when clicking outside of the picker while it is open.
         *
         * Note: When any color picker on the page is shown, it will hide all
         * other color picker that are already open.
         *
         * This event is ignored on a flat color picker, i.e. when `flat` is
         * set to `true`.
         *
         * The callback will receive an additional argument of type
         * `tinycolor.Instance` with the currently selected color.
         *
         * ```javascript
         * $("#picker").spectrum({
         *   hide: function(color) {
         *     color.toHexString(); // #ff0000
         *   }
         * }
         * ```
         */
        "hide.spectrum": Spectrum.HideEvent<TDelegateTarget, TData, TCurrentTarget, TTarget>;

        /**
         * You can prevent the color picker from showing up if you return
         * `false` in the `beforeShow` event.
         *
         * This event is ignored on a flat color picker.
         *
         * The callback will receive an additional argument of type
         * `tinycolor.Instance` with the currently selected color.
         *
         * ```javascript
         * $("#picker").spectrum({
         *   beforeShow: function(color) {
         *     color.toHexString(); // #ff0000
         *     return false; // Will never show up
         *   }
         * }
         * ```
         */
        "beforeShow.spectrum": Spectrum.BeforeShowEvent<TDelegateTarget, TData, TCurrentTarget, TTarget>;

        /**
         * Called at the beginning of a drag event on either hue slider, alpha
         * slider, or main color picker areas.
         *
         * The callback will receive an additional argument of type
         * `tinycolor.Instance` with the currently selected color.
         *
         * ```javascript
         * $(element).on("dragstart.spectrum", function(e, color) {
         *  color.toHexString(); // #ff0000
         * });
         * ```
         */
        "dragstart.spectrum": Spectrum.DragstartEvent<TDelegateTarget, TData, TCurrentTarget, TTarget>;

        /**
         * Called at the end of a drag event on either hue slider, alpha slider, or
         * main color picker areas.
         * The callback will receive an additional argument of type
         * `tinycolor.Instance` with the currently selected color.
         *
         * ```javascript
         * $(element).on("dragstop.spectrum", function(e, color) {
         *  color.toHexString(); // #ff0000
         * });
         * ```
         */
        "dragstop.spectrum": Spectrum.DragstopEvent<TDelegateTarget, TData, TCurrentTarget, TTarget>;
    }
}

declare namespace Spectrum {
    interface Options {
        /**
         * The initial color can be set with the color option. This may be
         * `false` when no value has been set explicitly.
         *
         * If you do not pass in a color, spectrum will use the value attribute
         * on the input. The input is a string that is parsed using
         * [TinyColor](https://github.com/bgrins/TinyColor).
         *
         * ```html
         * <input type='text' class='basic' value='red' />
         * <input type='text' class='basic' value='#0f0' />
         * <input type='text' class='basic' value='blue' />
         * <br />
         * <input type='text' class='override' />
         * <br />
         * <input type='text' class='startEmpty' value='' />
         *
         * <script>
         * $(".basic").spectrum();
         * $(".override").spectrum({
         *   color: "yellow"
         * });
         * $(".startEmpty").spectrum({
         *   allowEmpty: true
         * });
         * </script>
         * ```
         */
        color?: string | false | undefined;

        /**
         * The color picker will always show up at full size, and be positioned
         * as an `inline-block` element.
         *
         * ```html
         * <input type='text' id="flat" />
         * <br/>
         * <input type='text' id="flat" />
         * ```
         *
         * ```javascript
         * $("#flat").spectrum({
         *   flat: true,
         *   showInput: true
         * });
         * $("#flatClearable").spectrum({
         *   flat: true,
         *   showInput: true,
         *   allowEmpty:true
         * });
         * ```
         */
        flat?: boolean | undefined;

        /**
         * Adds an input to allow for free form typing. The color parsing is
         * very permissive in the allowed strings. See
         * [TinyColor](https://github.com/bgrins/TinyColor) for more details.
         *
         * ```javascript
         * $("#showInput").spectrum({
         *   showInput: true
         * });
         * $("#showInputWithClear").spectrum({
         *   showInput: true,
         *   allowEmpty:true
         * });
         * ```
         */
        showInput?: boolean | undefined;

        /**
         * Shows the color that was initially set when opening. This provides an
         * easy way to click back to what was set when opened.
         *
         * ```javascript
         * $("#showInitial").spectrum({
         *   showInitial: true
         * });
         * ```
         */
        showInitial?: boolean | undefined;

        /**
         * Allows the color picker to have no color as a value. This will
         * display a button to set selection to 'no color'.
         */
        allowEmpty?: boolean | undefined;

        /**
         * Allows alpha transparency selection.
         *
         * ```javascript
         * $("#showAlpha").spectrum({
         *   showAlpha: true
         * });
         * ```
         */
        showAlpha?: boolean | undefined;

        /**
         * Spectrum can be automatically disabled if you pass in the `disabled`
         * flag.
         *
         * Additionally, if the input that you initialize spectrum on is
         * disabled, this will be the default value.
         *
         * Note: You cannot enable spectrum if the input is disabled.
         *
         * ```javascript
         * $("#disabled").spectrum({
         *   disabled: true
         * });
         * $("input:disabled").spectrum({
         * });
         * ```
         */
        disabled?: boolean | undefined;

        /**
         * Sets a palette below the color picker to make it convenient for users
         * to choose from frequently or recently used colors.
         *
         * Default value:
         *
         * ```javascript
         * [[
         *     "#ffffff", "#000000", "#ff0000",
         *     "#ff8000", "#ffff00", "#008000",
         *     "#0000ff", "#4b0082", "#9400d3"
         * ]]
         * ```
         */
        palette?: ReadonlyArray<ReadonlyArray<string>> | undefined;

        /**
         * Spectrum can show a palette below the color picker to make it
         * convenient for users to choose from frequently or recently used colors.
         *
         * When the color picker is closed, the current color will be added to
         * the palette if it is not there already.
         *
         * ```javascript
         * $("#showPalette").spectrum({
         *   showPalette: true,
         *   palette: [
         *     ['black', 'white', 'blanchedalmond'],
         *     ['rgb(255, 128, 0);', 'hsv 100 70 50', 'lightyellow']
         *   ]
         * });
         * ```
         */
        showPalette?: boolean | undefined;

        /**
         * Shows only the colors specified in the palette.
         *
         * ```javascript
         * $("#showPaletteOnly").spectrum({
         *   showPaletteOnly: true,
         *   showPalette:true,
         *   color: 'blanchedalmond',
         *   palette: [
         *     ['black', 'white', 'blanchedalmond',
         *     'rgb(255, 128, 0);', 'hsv 100 70 50'],
         *     ['red', 'yellow', 'green', 'blue', 'violet']
         *   ]
         * });
         * ```
         */
        showPaletteOnly?: boolean | undefined;

        /**
         * Shows a button to toggle the color picker next to the palette.
         *
         * This way, the user can choose from a limited number of colors in the
         * palette, but still be able to pick a color that's not in the palette.
         *
         * The default value for `togglePaletteOnly` is `false`. Set it to
         * `true` to enable the toggle button.
         *
         * You can also change the text on the toggle button with the options
         * `togglePaletteMoreText` (default is `more`) and
         * `togglePaletteLessText` (default is `less`).
         *
         * ```javascript
         * $("#togglePaletteOnly").spectrum({
         *   showPaletteOnly: true,
         *   togglePaletteOnly: true,
         *   togglePaletteMoreText: 'more',
         *   togglePaletteLessText: 'less',
         *   color: 'blanchedalmond',
         *   palette: [
         *     ["#000","#444","#666","#999","#ccc","#eee","#f3f3f3","#fff"],
         *     ["#f00","#f90","#ff0","#0f0","#0ff","#00f","#90f","#f0f"],
         *     ["#f4cccc","#fce5cd","#fff2cc","#d9ead3","#d0e0e3","#cfe2f3","#d9d2e9","#ead1dc"],
         *     ["#ea9999","#f9cb9c","#ffe599","#b6d7a8","#a2c4c9","#9fc5e8","#b4a7d6","#d5a6bd"],
         *     ["#e06666","#f6b26b","#ffd966","#93c47d","#76a5af","#6fa8dc","#8e7cc3","#c27ba0"],
         *     ["#c00","#e69138","#f1c232","#6aa84f","#45818e","#3d85c6","#674ea7","#a64d79"],
         *     ["#900","#b45f06","#bf9000","#38761d","#134f5c","#0b5394","#351c75","#741b47"],
         *     ["#600","#783f04","#7f6000","#274e13","#0c343d","#073763","#20124d","#4c1130"]
         *   ]
         * });
         * ```
         */
        togglePaletteOnly?: boolean | undefined;

        /**
         * Changes the text on the open-toggle color picker button. Defaults to
         * `more`.
         */
        togglePaletteMoreText?: string | undefined;

        /**
         * Changes the text on the close-toggle color picker button. Defaults to
         * `less`.
         */
        togglePaletteLessText?: string | undefined;

        /**
         * Automatically hides the color picker after a palette color is
         * selected.
         *
         * ```javascript
         * $("#hideAfterPaletteSelect").spectrum({
         *   showPaletteOnly: true,
         *   showPalette:true,
         *   hideAfterPaletteSelect:true,
         *   color: 'blanchedalmond',
         *   palette: [
         *     ['black', 'white', 'blanchedalmond',
         *     'rgb(255, 128, 0);', 'hsv 100 70 50'],
         *     ['red', 'yellow', 'green', 'blue', 'violet']
         *   ]
         * });
         * ```
         */
        hideAfterPaletteSelect?: boolean | undefined;

        /**
         * Keeps track of what has been selected by the user.
         *
         * Spectrum can keep track of what has been selected by the user with
         * the `showSelectionPalette` option.
         *
         * If the `localStorageKey` option is defined, the selection will be
         * saved in the browser's `localStorage` object.
         *
         * ```javascript
         * $("#showSelectionPalette").spectrum({
         *   showPalette: true,
         *   showSelectionPalette: true, // true by default
         *   palette: [ ]
         * });
         * $("#showSelectionPaletteStorage").spectrum({
         *   showPalette: true,
         *   showSelectionPalette: true,
         *   palette: [ ],
         *   localStorageKey: "spectrum.homepage", // Any Spectrum with the same string will share selection
         * });
         * ```
         */
        showSelectionPalette?: boolean | undefined;

        /**
         * The users selection will be saved in the browser's `localStorage`
         * object. Any spectrum with the same string will share the selection.
         *
         * May be `false` when no value has been set explicitly.
         */
        localStorageKey?: string | false | undefined;

        /**
         * When clicking outside of the color picker, you can force it to fire a
         * `change` event rather than having it revert the change. This is
         * `true` by default.
         *
         * ```javascript
         * $("#clickoutFiresChange").spectrum({
         *   clickoutFiresChange: true
         * });
         * $("#clickoutDoesntChange").spectrum({
         *   clickoutFiresChange: false
         * });
         * ```
         */
        clickoutFiresChange?: boolean | undefined;

        /**
         * Sets the text on the cancel button. Defaults to `cancel`.
         */
        cancelText?: string | undefined;

        /**
         * Sets the text on the choose button. Defaults to `choose`.
         */
        chooseText?: string | undefined;

        /**
         * Sets the text on the clear button. Defaults to
         * `Clear Color Selection`.
         */
        clearText?: string | undefined;

        /**
         * Sets the text for when no color has been selected. Defaults to
         * `No Color Selected`.
         */
        noColorSelectedText?: string | undefined;

        /**
         * Adds an additional class name to the just the container element.
         *
         * ```javascript
         * $("#containerClassName").spectrum({
         *   containerClassName: 'awesome'
         * });
         * ```
         *
         * ```css
         * .awesome {
         *   background: purple;
         * }
         * ```
         */
        containerClassName?: string | undefined;

        /**
         * Adds an additional class name to just the replacer element.
         *
         * ```javascript
         * $("#replacerClassName").spectrum({
         *   replacerClassName: 'awesome'
         * });
         * ```
         *
         * ```css
         * .awesome {
         *   background: purple;
         * }
         * ```
         */
        replacerClassName?: string | undefined;

        /**
         * Sets the format that is displayed in the text box. This may be
         * `false` when not set explicitly.
         *
         * This will also change the format that is displayed in the titles from
         * the palette swatches.
         *
         * ```javascript
         * $("#preferredHex").spectrum({
         *   preferredFormat: "hex",
         *   showInput: true,
         *   showPalette: true,
         *   palette: [["red", "rgba(0, 255, 0, .5)", "rgb(0, 0, 255)"]]
         * });
         * $("#preferredHex3").spectrum({
         *   preferredFormat: "hex3",
         *   showInput: true,
         *   showPalette: true,
         *   palette: [["red", "rgba(0, 255, 0, .5)", "rgb(0, 0, 255)"]]
         * });
         * $("#preferredHsl").spectrum({
         *   preferredFormat: "hsl",
         *   showInput: true,
         *   showPalette: true,
         *   palette: [["red", "rgba(0, 255, 0, .5)", "rgb(0, 0, 255)"]]
         * });
         * $("#preferredRgb").spectrum({
         *   preferredFormat: "rgb",
         *   showInput: true,
         *   showPalette: true,
         *   palette: [["red", "rgba(0, 255, 0, .5)", "rgb(0, 0, 255)"]]
         * });
         * $("#preferredName").spectrum({
         *   preferredFormat: "name",
         *   showInput: true,
         *   showPalette: true,
         *   palette: [["red", "rgba(0, 255, 0, .5)", "rgb(0, 0, 255)"]]
         * });
         * $("#preferredNone").spectrum({
         *   showInput: true,
         *   showPalette: true,
         *   palette: [["red", "rgba(0, 255, 0, .5)", "rgb(0, 0, 255)"]]
         * });
         * ```
         */
        preferredFormat?: ColorFormatName | false | undefined;

        /**
         * Toggles the choose / cancel buttons.
         *
         * If there are no buttons, the behavior will be to fire the `change`
         * event (and update the original input) when the picker is closed.
         *
         * ```javascript
         * $("#hideButtons").spectrum({
         *   showButtons: false
         * });
         * ```
         */
        showButtons?: boolean | undefined;

        /**
         * Sets which element the color picker container is appended to (default
         * is `body`).
         *
         * Changing this can help resolve issues with opening the color picker
         * in a modal dialog or fixed position container, for instance.
         */
        appendTo?:
            | JQuery.Selector
            | JQuery.htmlString
            | JQuery.TypeOrArray<Element | DocumentFragment>
            | JQuery
            | undefined;

        /**
         * Sets the max size for the palette.
         *
         * This is how many elements are allowed in the selection palette at
         * once.
         *
         * Elements will be removed from the palette in first in - first out
         * order if this limit is reached.
         *
         * ```javascript
         * $("#maxSelectionSize").spectrum({
         *   showPalette: true,
         *   palette: [ ],
         *   showSelectionPalette: true, // true by default
         *   selectionPalette: ["red", "green", "blue"],
         *   maxSelectionSize: 2
         * });
         * ```
         */
        maxSelectionSize?: number | undefined;

        /**
         * The default values inside of the selection palette. Make sure that
         * `showSelectionPalette` and `showPalette` are both enabled.
         *
         * If a `localStorageKey` is defined, then this value will be
         * overwritten by it.
         *
         * The following example shows a color picker with red, green, and blue
         * available in the selection palette by default:
         *
         * ```javascript
         * $("#selectionPalette").spectrum({
         *     showPalette: true,
         *     palette: [ ],
         *     showSelectionPalette: true, // true by default
         *     selectionPalette: ["red", "green", "blue"]
         * });
         * ```
         */
        selectionPalette?: ReadonlyArray<string> | undefined;

        /**
         * Additional offset to apply as a CSS unit to the container.
         */
        offset?: JQuery.CoordinatesPartial | null | undefined;

        /**
         * Called as the original input changes. Only happens when the input is
         * closed or the 'Choose' button is clicked.
         *
         * ```javascript
         * $("#picker").spectrum({
         *   change: function(color) {
         *     color.toHexString(); // #ff0000
         *   }
         * }
         * ```
         *
         * @param color The currently selected color of the color picker.
         */
        change?: ((color: tinycolor.Instance) => void) | undefined;

        /**
         * Called as the user moves around within the color picker.
         *
         * ```javascript
         * $("#picker").spectrum({
         *   move: function(color) {
         *     color.toHexString(); // #ff0000
         *   }
         * }
         * ```
         *
         * @param color The currently selected color of the color picker.
         */
        move?: ((color: tinycolor.Instance) => void) | undefined;

        /**
         * Called after the color picker is opened. This is ignored on a flat
         * color picker.
         *
         * Note: When any color picker on the page is shown, it will hide all
         * other color pickers that are already open.
         *
         * ```javascript
         * $("#picker").spectrum({
         *   show: function(color) {
         *     color.toHexString(); // #ff0000
         *   }
         * }
         * ```
         *
         * @param color The currently selected color of the color picker.
         */
        show?: ((color: tinycolor.Instance) => void) | undefined;

        /**
         * Called after the color picker is hidden.
         *
         * This happens when clicking outside of the picker while it is open.
         *
         * Note: When any color picker on the page is shown, it will hide all
         * other color picker that are already open.
         *
         * This event is ignored on a flat color picker, i.e. when `flat` is
         * set to `true`.
         *
         * ```javascript
         * $("#picker").spectrum({
         *   hide: function(color) {
         *     color.toHexString(); // #ff0000
         *   }
         * }
         * ```
         *
         * @param color The currently selected color of the color picker.
         */
        hide?: ((color: tinycolor.Instance) => void) | undefined;

        /**
         * You can prevent the color picker from showing up if you return
         * `false` in the `beforeShow` event.
         *
         * This event is ignored on a flat color picker.
         *
         * ```javascript
         * $("#picker").spectrum({
         *   beforeShow: function(color) {
         *     color.toHexString(); // #ff0000
         *     return false; // Will never show up
         *   }
         * }
         * ```
         *
         * @param color The currently selected color of the color picker.
         * @return `false` to prevent the color picker from showing up.
         */
        beforeShow?: ((color: tinycolor.Instance) => boolean | void) | undefined;
    }

    /**
     * Possible values for the `preferredFormat` option.
     */
    type ColorFormatName = "hex" | "hex3" | "hsl" | "rgb" | "name";

    /**
     * You can prevent the color picker from showing up if you return `false` in
     * the `beforeShow` event.
     *
     * This event is ignored on a flat color picker.
     *
     * The callback will receive an additional argument of type
     * `tinycolor.Instance` with the currently selected color.
     *
     * ```javascript
     * $("#picker").spectrum({
     *   beforeShow: function(color) {
     *     color.toHexString(); // #ff0000
     *     return false; // Will never show up
     *   }
     * }
     * ```
     */
    interface BeforeShowEvent<
        TDelegateTarget = any,
        TData = any,
        TCurrentTarget = any,
        TTarget = any,
    > extends JQuery.EventBase<TDelegateTarget, TData, TCurrentTarget, TTarget> {
        type: "beforeShow";
    }

    /**
     * Called after the color picker is opened. This is ignored on a flat color
     * picker.
     *
     * Note: When any color picker on the page is shown, it will hide all other
     * color pickers that are already open.
     *
     * The callback will receive an additional argument of type
     * `tinycolor.Instance` with the currently selected color.
     *
     * ```javascript
     * $("#picker").spectrum({
     *   show: function(color) {
     *     color.toHexString(); // #ff0000
     *   }
     * }
     * ```
     */
    interface ShowEvent<
        TDelegateTarget = any,
        TData = any,
        TCurrentTarget = any,
        TTarget = any,
    > extends JQuery.EventBase<TDelegateTarget, TData, TCurrentTarget, TTarget> {
        type: "show";
    }

    /**
     * Called after the color picker is hidden.
     *
     * This happens when clicking outside of the picker while it is open.
     *
     * Note: When any color picker on the page is shown, it will hide all other
     * color picker that are already open.
     *
     * This event is ignored on a flat color picker, i.e. when `flat` is set to
     * `true`.
     *
     * The callback will receive an additional argument of type
     * `tinycolor.Instance` with the currently selected color.
     *
     * ```javascript
     * $("#picker").spectrum({
     *   hide: function(color) {
     *     color.toHexString(); // #ff0000
     *   }
     * }
     * ```
     */
    interface HideEvent<
        TDelegateTarget = any,
        TData = any,
        TCurrentTarget = any,
        TTarget = any,
    > extends JQuery.EventBase<TDelegateTarget, TData, TCurrentTarget, TTarget> {
        type: "hide";
    }

    /**
     * Called as the user moves around within the color picker.
     *
     * The callback will receive an additional argument of type
     * `tinycolor.Instance` with the currently selected color.
     *
     * ```javascript
     * $("#picker").spectrum({
     *   move: function(color) {
     *     color.toHexString(); // #ff0000
     *   }
     * }
     * ```
     */
    interface MoveEvent<
        TDelegateTarget = any,
        TData = any,
        TCurrentTarget = any,
        TTarget = any,
    > extends JQuery.EventBase<TDelegateTarget, TData, TCurrentTarget, TTarget> {
        type: "move";
    }

    /**
     * Called at the beginning of a drag event on either hue slider, alpha
     * slider, or main color picker areas.
     *
     * The callback will receive an additional argument of type
     * `tinycolor.Instance` with the currently selected color.
     *
     * ```javascript
     * $(element).on("dragstart.spectrum", function(e, color) {
     *  color.toHexString(); // #ff0000
     * });
     * ```
     */
    interface DragstartEvent<
        TDelegateTarget = any,
        TData = any,
        TCurrentTarget = any,
        TTarget = any,
    > extends JQuery.EventBase<TDelegateTarget, TData, TCurrentTarget, TTarget> {
        type: "dragstart";
    }

    /**
     * Called at the end of a drag event on either hue slider, alpha slider, or
     * main color picker areas.
     *
     * The callback will receive an additional argument of type
     * `tinycolor.Instance` with the currently selected color.
     *
     * ```javascript
     * $(element).on("dragstop.spectrum", function(e, color) {
     *  color.toHexString(); // #ff0000
     * });
     * ```
     */
    interface DragstopEvent<
        TDelegateTarget = any,
        TData = any,
        TCurrentTarget = any,
        TTarget = any,
    > extends JQuery.EventBase<TDelegateTarget, TData, TCurrentTarget, TTarget> {
        type: "dragstop";
    }
}
