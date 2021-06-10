export interface SettingDefinition {
    /**
     * Label to use for the control.
     */
    label: string;
    /**
     * Description explaining the control in greater detail.
     */
    desc?: string;
    /**
     * The function to call during initialization.
     */
    onInit?: () => void;
    /**
     * The function to call when the control's state is changed.
     */
    onChange?: () => void;
}

export interface ToggleDefinition extends SettingDefinition {
    /**
     * The default value for the setting and default state of the control. Leaving it undefined means to use false as the default.
     */
    default?: boolean;
}

export interface ListDefinition<T> extends SettingDefinition {
    /**
     * The array of items.
     */
    list: T[];
    /**
     *  Description explaining the control in greater detail.
     */
    desc?: string;
    /**
     * The default value for the setting and default state of the control. It should have the same value as one of the members of
     * the list array. Leaving it undefined means to use the first array member as the default.
     */
    default?: T;
}

export interface RangeDefinition extends SettingDefinition {
    /**
     * The minimum value.
     */
    min: number;
    /**
     * The maximum value.
     */
    max: number;
    /**
     * Limits the increments to which the value may be set. It must be evenly divisible into the full range — i.e., max - min.
     */
    step: number;
    /**
     * The default value for the setting and default state of the control. Leaving it undefined means to use the value of max as the default.
     */
    default?: number;
}

export interface SettingsAPI {
    /**
     * Adds a header to the Settings dialog.
     * @param name Name of the header.
     * @param desc Description explaining the header in greater detail.
     * @since 2.7.1
     * @example
     * // Setting up a basic header
     * Setting.addHeader("Content Settings");
     *
     * // Setting up a header w/ a description
     * Setting.addHeader("Content Settings", "Settings controlling what content is made available in the game.");
     */
    addHeader(name: string, desc?: string): void;

    /**
     * Adds the named property to the settings object and a toggle control for it to the Settings dialog.
     * @param name Name of the settings property to add, which the control will manage.
     * @param definition Definition of the control.
     * @since 2.26.0
     * @example
     * // Basic toggle setting
     * // Setting up a basic toggle control for the settings property 'mature'
     * Setting.addToggle("mature", {
     *     label : "Content for mature audiences?"
     * }); // default value not defined, so false is used
     * @example
     * // Toggle that adds/removes a CSS class
     * // Setting up a toggle control for the settings property 'widescreen' w/ callbacks
     * var settingWidescreenHandler = function () {
     *     if (settings.widescreen) { // is true
     *         $("html").addClass("widescreen");
     *     }
     *     else { // is false
     *         $("html").removeClass("widescreen");
     *     }
     * };
     *
     * Setting.addToggle("widescreen", {
     *     label    : "Allow the story to use the full width of your browser window?",
     *     default  : false,
     *     onInit   : settingWidescreenHandler,
     *     onChange : settingWidescreenHandler
     * });
     */
    addToggle(name: string, definition: ToggleDefinition): void;

    /**
     * Adds the named property to the settings object and a list control for it to the Settings dialog.
     * @param name Name of the settings property to add, which the control will manage.
     * @param definition Definition of the control.
     * @since 2.0.0 Basic syntax.
     * @since 2.26.0 Added desc property to definition object.
     * @example
     * // Setting up a basic list control for the settings property 'difficulty'
     * Setting.addList("difficulty", {
     *     label   : "Choose a difficulty level.",
     *     list    : ["Easy", "Normal", "Hard", "INSANE"],
     *     default : "Normal"
     * });
     * @example
     * // Setting up a list control for the settings property 'theme' w/ callbacks
     * var settingThemeNames = ["(none)", "Bright Lights", "Charcoal", "Midnight", "Tinsel City"];
     * var settingThemeHandler = function () {
     *     // cache the jQuery-wrapped <html> element
     *     var $html = $("html");
     *     // remove any existing theme class
     *     $html.removeClass("theme-bright-lights theme-charcoal theme-midnight theme-tinsel-city");
     *     // switch on the theme name to add the requested theme class
     *     switch (settings.theme) {
     *     case "Bright Lights":
     *         $html.addClass("theme-bright-lights");
     *         break;
     *     case "Charcoal":
     *         $html.addClass("theme-charcoal");
     *         break;
     *     case "Midnight":
     *         $html.addClass("theme-midnight");
     *         break;
     *     case "Tinsel City":
     *         $html.addClass("theme-tinsel-city");
     *         break;
     *     }
     * };
     * Setting.addList("theme", {
     *     label    : "Choose a theme.",
     *     list     : settingThemeNames,
     *     onInit   : settingThemeHandler,
     *     onChange : settingThemeHandler
     * }); // default value not defined, so the first array member "(none)" is used
     */
    // tslint:disable-next-line:no-unnecessary-generics
    addList<T>(name: string, definition: ListDefinition<T>): void;

    /**
     * Adds the named property to the settings object and a range control for it to the Settings dialog.
     * @param name Name of the settings property to add, which the control will manage.
     * @param definition Definition of the control.
     * @since 2.26.0
     * @example
     * // Setting up a volume control for the settings property 'masterVolume' w/ callback
     * Setting.addRange("masterVolume", {
     *     label    : "Master volume.",
     *     min      : 0,
     *     max      : 10,
     *     step     : 1,
     *     onChange : function () {
     *         SimpleAudio.volume(settings.masterVolume / 10);
     *     }
     * }); // default value not defined, so max value (10) is used
     */
    addRange(name: string, definition: RangeDefinition): void;

    /**
     * Loads the settings from storage.
     *
     * **NOTE**: The API automatically calls this method at startup, so you should never need to call this method manually.
     * @since 2.0.0
     */
    load(): void;

    /**
     * Resets the setting with the given name to its default value. If no name is given, resets all settings.
     * @param name Name of the settings object property to reset.
     * @since 2.0.0
     * @example
     * // Reset the setting 'difficulty'
     * Setting.reset("difficulty");
     *
     * // Reset all settings
     * Setting.reset();
     */
    reset(name?: string): void;

    /**
     * Saves the settings to storage.
     *
     * **NOTE**: The controls of the Settings dialog automatically call this method when settings are changed,
     * so you should normally never need to call this method manually. Only when manually modifying the values
     * of settings object properties, outside of the controls, would you need to call this method.
     * @since 2.0.0
     */
    save(): void;
}

export {};
