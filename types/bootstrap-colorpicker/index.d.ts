/// <reference types="jquery" />

type ColorFormat = "hex" | "rgb" | "rgba";

type ColorPickerAlignOptions = "right" | "left";

type ColorPickerEvents =
    | "create"
    | "showPicker"
    | "hidePicker"
    | "changeColor"
    | "disable"
    | "enable"
    | "destroy";

/**
 * You can set colorpicker options either as a plugin parameter or data-* attributes
 */
interface ColorPickerOptions {
    /**
     * If not false, forces the color format to be hex, rgb or rgba, otherwise the format is automatically detected.
     *
     * Default: false
     */
    format?: ColorFormat | undefined;

    /**
     * If not false, sets the color to this value.
     *
     * Default: false
     */
    color?: string | undefined;

    /**
     * If not false, the picker will be contained inside this element, otherwise it will be appended to the document body.
     *
     * Default: false
     */
    container?: boolean | undefined;

    /**
     * Children selector for the component or element that trigger the colorpicker and which background color will change (needs an inner <i> element).
     *
     * Default: '.add-on, .input-group-addon'
     */
    component?: string | JQuery | undefined;

    /**
     * Children selector for the input that will store the picker selected value.
     *
     * Default: 'input'
     */
    input?: string | JQuery | undefined;

    /**
     * If true, put a '#' (number sign) before hex strings.
     *
     * Default: true
     */
    hexNumberSignPrefix?: boolean | undefined;

    /**
     * If true, the hue and alpha channel bars will be rendered horizontally, above the saturation selector.
     *
     * Default: false
     */
    horizontal?: boolean | undefined;

    /**
     * If true, forces to show the colorpicker as an inline element.
     *
     * Default: false
     */
    inline?: boolean | undefined;

    /**
     * Vertical sliders configuration (read source code if you really need to tweak this).
     */
    sliders?: object | undefined;

    /**
     * Horizontal sliders configuration (read source code if you really need to tweak this).
     */
    slidersHorz?: object | undefined;

    /**
     * Customizes the default colorpicker HTML template.
     */
    template?: string | undefined;

    /**
     *     By default, the colorpicker is aligned to the right of the input. If you need to switch it to the left, set align to 'left'.
     *
     * Default: 'right'
     */
    align?: ColorPickerAlignOptions | undefined;

    /**
     * Adds this class to the colorpicker widget.
     *
     * Default: null
     */
    customClass?: string | undefined;

    /**
     *     List of pre selected colors (hex format). If you choose one of these colors, the alias is returned instead of the hex code.
     *
     * Default: null
     */
    colorSelectors?: object | undefined;

    /**
     * Fallback color string that will be applied when the color failed to be parsed. If null, it will keep the current color if any.
     *
     * Default: null
     */
    fallbackColor?: string | undefined;

    /**
     *     Fallback color format (e.g. when not specified or for alias mode, when selecting non aliased colors)
     *
     * Default: hex
     */
    fallbackFormat?: string | undefined;
}

interface Color {
    colors: {};
    fallbackFormat: string;
    fallbackValue: string;
    hexNumberSignPrefix: boolean;
    origFormat: string;
    predefinedColors: {};
    value: {
        h: number;
        s: number;
        b: number;
        a: number;
    };

    /**
     * Set a new color. The value is parsed and tries to do a quess on the format.
     */
    setColor(value: string): void;

    /**
     * Set the HUE with a value between 0 and 1.
     */
    setHue(value: number): void;

    /**
     * Set the saturation with a value between 0 and 1.
     */
    setSaturation(value: number): void;

    /**
     * Set the brightness with a value between 0 and 1.
     */
    setBrightness(value: number): void;

    /**
     * Set the transparency with a value between 0 and 1.
     */
    setAlpha(value: number): void;

    /**
     * Returns a hash with red, green, blue and alpha.
     */
    toRGB(): string;

    /**
     * Returns a string with HEX format for the current color.
     */
    toHex(): string;

    /**
     * Returns a hash with HSLA values.
     */
    toHSL(): string;

    /**
     * Returns current color as string in specified format.
     */
    toString(format: ColorFormat): string;
}

interface ColorPicker {
    color: Color;
    component: boolean;
    container: boolean;
    disabled: boolean;
    element: JQuery;
    format: string;
    input: JQuery;
    options: ColorPickerOptions;
    picker: JQuery;
}

interface ColorPickerEventObject extends JQueryEventObject {
    color: Color;
}

interface JQuery {
    /**
     * Initializes an colorpicker.
     */
    colorpicker(options?: ColorPickerOptions): JQuery;

    /**
     * Gets the value from the input or the data attribute (if has no input), otherwise returns the default value, which defaults to #000000 if not specified.
     */
    colorpicker(methodName: "getValue", defaultValue: string): string;

    /**
     * Set a new value for the color picker (also updates everything). Triggers 'changeColor' event.
     */
    colorpicker(methodName: "setValue", value: any): any;

    /**
     * Show the color picker
     */
    colorpicker(methodName: "show"): void;

    /**
     * Hide the color picker
     */
    colorpicker(methodName: "hide"): void;

    /**
     * Updates the color picker's position relative to the element
     */
    colorpicker(methodName: "reposition"): void;

    /**
     * Refreshes the widget colors (this is done automatically)
     */
    colorpicker(methodName: "update"): void;

    /**
     * Enable the color picker.
     */
    colorpicker(methodName: "enable"): void;

    /**
     * Disable the color picker.
     */
    colorpicker(methodName: "disable"): void;

    /**
     * Destroys the colorpicker widget and unbind all .colorpicker events from the element and component
     */
    colorpicker(methodName: "destroy"): void;

    /**
     * Access to the colorpicker API directly
     */
    data(methodName: "colorpicker"): ColorPicker;

    off(events: ColorPickerEvents, selector?: string, handler?: (event: ColorPickerEventObject) => any): JQuery;
    off(events: ColorPickerEvents, handler: (event: ColorPickerEventObject) => any): JQuery;

    on(
        events: ColorPickerEvents,
        selector: string,
        data: any,
        handler?: (event: ColorPickerEventObject) => any,
    ): JQuery;
    on(events: ColorPickerEvents, selector: string, handler: (event: ColorPickerEventObject) => any): JQuery;
    on(events: ColorPickerEvents, handler: (event: ColorPickerEventObject) => any): JQuery;
}
