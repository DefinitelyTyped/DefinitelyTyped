// Type definitions for ion-rangeslider 2.3
// Project: https://github.com/IonDen/ion.rangeSlider/, http://ionden.com/a/plugins/ion.rangeslider/en.html
// Definitions by: Karel van de Plassche <https://github.com/Karel-van-de-Plassche>
//                 JamesJGoodwin <https://github.com/JamesJGoodwin>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

// API documentation: http://ionden.com/a/plugins/ion.rangeSlider/en.html
// Parsed using https://github.com/Karel-van-de-Plassche/ion-rangeslider-parser.git
// Based on global-modifying module template file

declare global {
    interface JQuery {
        destroy(): void;
        ionRangeSlider(options?: IonRangeSliderOptions): JQuery;
        reset(): void;
        update(option: IonRangeSliderOptions): void;
    }
}

export interface IonRangeSliderOptions {
    skin?: 'flat' | 'big' | 'modern' | 'round' | 'sharp' | 'square'; // Set slider theme [Default: flat]
    type?: string;    // Choose slider type, could be `single` - for one handle, or `double` for two handles [Default: single]
    min?: number;    // Set slider minimum value [Default: 10]
    max?: number;    // Set slider maximum value [Default: 100]
    from?: number;    // Set start position for left handle (or for single handle) [Default: min]
    to?: number;    // Set start position for right handle [Default: max]
    step?: number;    // Set sliders step. Always > 0. Could be fractional [Default: 1]
    min_interval?: number;    // Set minimum diapason between sliders. Only for **double** type [Default: -]
    max_interval?: number;    // Set minimum maximum between sliders. Only for **double** type [Default: -]
    drag_interval?: boolean;   // Allow user to drag whole range. Only for **double** type [Default: false]
    values?: any[];     // Set up your own array of possible slider values. They could be numbers or strings. If the values array is set up, min, max and step param, can no longer be changed [Default: []]
    from_fixed?: boolean;   // Fix position of left (or single) handle [Default: false]
    from_min?: number;    // Set minimum limit for left (or single) handle [Default: min]
    from_max?: number;    // Set maximum limit for left (or single) handle [Default: max]
    from_shadow?: boolean;   // Highlight the limits for left handle [Default: false]
    to_fixed?: boolean;   // Fix position of right handle [Default: false]
    to_min?: number;    // Set minimum limit for right handle [Default: min]
    to_max?: number;    // Set maximum limit for right handle [Default: max]
    to_shadow?: boolean;   // Highlight the right handle [Default: false]
    prettify_enabled?: boolean;   // Improve readability of long numbers: 10000000 &rarr; 10 000 000 [Default: true]
    prettify_separator?: string;    // Set up your own separator for long numbers: 10000000 &rarr; 10,000,000 etc. [Default:  ]
    prettify?: (num: number) => string; // Set up your own prettify function. Can be anything. For example, you can set up unix time as slider values and than transform them to cool looking dates [Default: null]
    force_edges?: boolean;   // Sliders handles and tooltips will be always inside it's container [Default: false]
    keyboard?: boolean;   // Activates keyboard controls. Move left: &larr;, &darr;, A, S. Move right: &rarr;, &uarr;, W, D. [Default: true]
    grid?: boolean;   // Enables grid of values above the slider [Default: true]
    grid_margin?: boolean;   // Set left and right grid gaps [Default: true]
    grid_num?: number;    // Number of grid units [Default: 4]
    grid_snap?: boolean;   // Snap grid to sliders step (step param). If activated, grid_num will not be used. Max steps = 50 [Default: false]
    hide_min_max?: boolean;   // Hides **min** and **max** labels [Default: false]
    hide_from_to?: boolean;   // Hides **from** and **to** labels [Default: false]
    prefix?: string;    // Set prefix for values. Will be set up right before the number: **$**100 [Default: ]
    postfix?: string;    // Set postfix for values. Will be set up right after the number: 100**k** [Default: ]
    max_postfix?: string;    // Special postfix, used only for maximum value. Will be showed after handle will reach maximum right position. For example **0 — 100+** [Default: ]
    decorate_both?: boolean;   // Used for **double** type and only if prefix or postfix was set up. Determine how to decorate close values. For example: **$10k — $100k** or **$10 — 100k** [Default: true]
    values_separator?: string;    // Set your own separator for close values. Used for **double** type. Default: **10 — 100**. Or you may set: **10 to 100, 10 + 100, 10 &rarr; 100** etc. [Default:  - ]
    input_values_separator?: string;    // Separator for **double** values in input value property. `<input value="25;42"> [Default:  ; ]
    disable?: boolean;   // Locks slider and makes it inactive. Input is disabled too. Invisible to forms [Default: false]
    block?: boolean;   // Locks slider and makes it inactive. Input is NOT disabled. Can be send with forms [Default: false]
    extra_classes?: string;    // Traverse extra CSS-classes to sliders container [Default: —]
    scope?: any;       // Scope for callbacks. Pass any object [Default: null]
    onStart?: (obj: IonRangeSliderEvent) => void; // Callback. Is called on slider start. Gets all slider data as a 1st attribute [Default: null]
    onChange?: (obj: IonRangeSliderEvent) => void; // Callback. IS called on each values change. Gets all slider data as a 1st attribute [Default: null]
    onFinish?: (obj: IonRangeSliderEvent) => void; // Callback. Is called when user releases handle. Gets all slider data as a 1st attribute [Default: null]
    onUpdate?: (obj: IonRangeSliderEvent) => void; // Callback. Is called when slider is modified by external methods `update` or `reset [Default: null]
}

export interface IonRangeSliderEvent {
    input: JQuery; // jQuery-link to input
    slider: JQuery; // jQuery-link to sliders container
    min: number; // MIN value
    max: number; // MAX values
    from: number; // FROM value
    from_percent: number; // FROM value in percents
    from_value: number; // FROM index in values array (if used)
    to: number; // TO value
    to_percent: number; // TO value in percents
    to_value: number; // TO index in values array (if used)
    min_pretty: string; // MIN prettified (if used)
    max_pretty: string; // MAX prettified (if used)
    from_pretty: string; // FROM prettified (if used)
    to_pretty: string; // TO prettified (if used)
}
