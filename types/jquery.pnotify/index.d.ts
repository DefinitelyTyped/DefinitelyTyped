// Type definitions for jquery.pnotify 3.x
// Project: https://github.com/sciactive/pnotify
// Definitions by: David Sichau <https://github.com/DavidSichau>, Robin Maenhaut <https://github.com/FUNExtreme>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="jquery"/>

type NoticeTypeOptions = "notice" | "info" | "success" | "error";
type StylingOptions = "brighttheme" | "jqueryui" | "bootstrap2" | "bootstrap3" | "fontawesome" | PNotifyStyling;
type StateOptions = "initializing" | "opening" | "open" | "closing" | "closed";

interface PNotifyStack {
    dir1?: string;
    dir2?: string;
    push?: string;
    spacing1?: number;
    spacing2?: number;
    firstpos1?: number;
    firstpos2?: number;
    context?: JQuery;
    modal?: boolean;
}

interface PNotifyLabel {
    redisplay?: string;
    all?: string;
    last?: string;
    close?: string;
    stick?: string;
}

interface PNotifyconfirmButton {
    text?: string;
    addClass?: string;
    /**
     *  Whether to trigger this button when the user hits enter in a single line prompt.
     */
    promptTrigger?: boolean;
    click: (notice: PNotify, value: any) => void
}

interface PNotifyconfirm {
    /**
     * Make a confirmation box.
     */
    confirm?: boolean;

    /**
     * Make a prompt.
     */
    prompt?: boolean;
    /**
     * Classes to add to the input element of the prompt.
     */
    prompt_class?: string

    /**
     * The default value of the prompt.
     */
    prompt_default?: string

    /**
     * Whether the prompt should accept multiple lines of text.
     */
    prompt_multi_line?: boolean;

    /**
     * Where to align the buttons. (right, center, left, justify)
     */
    align?: string;

    /**
     * The buttons to display, and their callbacks.
     */
    buttons?: PNotifyconfirmButton[];

}

interface PNotifyButtons {
    /**
     * Provide a button for the user to manually close the notice.
     */
    closer?: boolean;
    /**
     * Only show the closer button on hover.
     */
    closer_hover?: boolean;
    /**
     * Provide a button for the user to manually stick the notice.
     */
    sticker?: boolean;
    /**
     * Only show the sticker button on hover.
     */
    sticker_hover?: boolean;
    /**
     * Show the buttons even when the nonblock module is in use.
     */
    show_on_nonblock?: boolean;
    /**
     * The various displayed text, helps facilitating internationalization.
     */
    labels?: {
        close?: string;
        stick?: string;
        unstick?: string;
    };
    /**
     * The classes to use for button icons. Leave them null to use the classes from the styling you're using.
     */
    classes?: {
        closer?: string;
        pin_up?: string;
        pin_down?: string;
    };
}

interface PNotifyOptions {
    /**
     * The notice's title. Either boolean false or string
     */
    title?: string | boolean;
    /**
     * Whether to escape the content of the title. (Not allow HTML.)
     */
    title_escape?: boolean;
    /**
     * The notice's text. Either boolean false or string
     */
    text?: string | boolean;
    /**
     * Whether to escape the content of the text. (Not allow HTML.)
     */
    text_escape?: boolean;
    /**
    * Support for PNotifyconfirm options
    */
    confirm?: PNotifyconfirm
    /**
     * What styling classes to use. (Can be either "brighttheme", "jqueryui", "bootstrap2", "bootstrap3", "fontawesome" or a custom style object)
     */
    styling?: StylingOptions;
    /**
     * Additional classes to be added to the notice. (For custom styling.)
     */
    addclass?: string;
    /**
     * Class to be added to the notice for corner styling.
     */
    cornerclass?: string;

    nonblock?: {
        /**
         * Create a non-blocking notice. It lets the user click elements underneath it.
         */
        nonblock?: boolean;

        /**
         * The opacity of the notice (if it's non-blocking) when the mouse is over it.
         */
        nonblock_opacity?: number
    };

    /**
     * Display a pull down menu to redisplay previous notices, and place the notice in the history.
     */
    history?: boolean;
    /**
     * Maximum number of notifications to have onscreen.
     */
    maxonscreen?: number;
    /**
     * Display the notice when it is created. Turn this off to add notifications to the history without displaying them.
     */
    auto_display?: boolean;
    /**
     * Width of the notice.
     */
    width?: string;
    /**
     * Minimum height of the notice. It will expand to fit content.
     */
    min_height?: string;
    /**
     * Type of the notice. "notice", "info", "success", or "error".
     */
    type?: NoticeTypeOptions;
    /**
     * Set icon to true to use the default icon for the selected style/type, false for no icon, or a string for your own icon class.
     */
    icon?: any;
    /**
     * The animation to use when displaying and hiding the notice. "none" and "fade" are supported through CSS. 
     * Others are supported through the Animate module and Animate.css.
     */ 
    animation?: string;
    /**
     * Speed at which the notice animates in and out. "slow", "def" or "normal", "fast" or number of milliseconds.
     */
    animate_speed?: string;
    /**
     * Specify a specific duration of position animation
     */
    position_animate_speed?: number;
    /**
     * Opacity of the notice.
     */
    opacity?: number;
    /**
     * Display a drop shadow.
     */
    shadow?: boolean;

    buttons?: {
        /**
         * Provide a button for the user to manually close the notice.
         */
        closer?: boolean;
        /**
         * Only show the closer button on hover.
         */
        closer_hover?: boolean;

        /**
         * Provide a button for the user to manually stick the notice.
         */
        sticker?: boolean;
        /**
         * Only show the sticker button on hover.
         */
        sticker_hover?: boolean;
    }

    /**
     * After a delay, remove the notice, set to false for sticky note.
     */
    hide?: boolean;
    /**
     * Delay in milliseconds before the notice is removed.
     */
    delay?: number;
    /**
     * Reset the hide timer if the mouse moves over the notice.
     */
    mouse_reset?: boolean;
    /**
     * Remove the notice's elements from the DOM after it is removed.
     */
    remove?: boolean;
    /**
     * Change new lines to br tags.
     */
    insert_brs?: boolean;
    /**
     * The stack on which the notices will be placed. Also controls the direction the notices stack.
     */
    stack?: PNotifyStack;
    /**
     * The various displayed text, helps facilitating internationalization.
     */
    labels?: PNotifyLabel;
}

interface PNotifyStyling {
    container?: string,
    notice?: string,
    notice_icon?: string,
    info?: string,
    info_icon?: string,
    success?: string,
    success_icon?: string,
    error?: string,
    error_icon?: string,
    // buttons
    closer?: string,
    pin_down?: string,
    pin_up?: string,
    // confirm
    btn?: string,
    btnhover?: string,
    btnactive?: string,
    btnfocus?: string,
    input?: string,
    text?: string,
    // history
    hi_menu?: string,
    hi_btn?: string,
    hi_btnhov?: string,
    hi_hnd?: string,
    // reference
    athing?: string
}

interface PNotify {

    /**
     * The state can be "initializing", "opening", "open", "closing", and "closed"
     */
    state?: StateOptions;

    /**
     * This function is for updating the notice.
     */
    update(options?: PNotifyOptions): PNotify;

    /**
     * Remove the notice.
     */
    remove(): void;

    /**
     *  Display the notice.
     */
    open(): void;

    /**
     *  Get the DOM element.
     */
    get(): JQuery;

}

interface PNotifyConstructor {
    new (options?: PNotifyOptions): PNotify;
    
    /**
     * Remove all notices.
     */
    removeAll(): void;

    /**
     * Remove all the notices in a stack.
     * @param stack 
     */
    removeStack(stack: PNotifyStack): void;
    
    /**
     * Reposition the notices, optionally animating their movement.
     */
    positionAll(animate?: boolean): void
}

declare var PNotify: PNotifyConstructor;
