/// <reference types="jquery"/>

type NoticeTypeOptions = "notice" | "info" | "success" | "error";
type StylingOptions = "brighttheme" | "jqueryui" | "bootstrap2" | "bootstrap3" | "fontawesome" | PNotifyStyling;
type StateOptions = "initializing" | "opening" | "open" | "closing" | "closed";

interface PNotifyStack {
    dir1?: string | undefined;
    dir2?: string | undefined;
    push?: string | undefined;
    spacing1?: number | undefined;
    spacing2?: number | undefined;
    firstpos1?: number | undefined;
    firstpos2?: number | undefined;
    context?: JQuery | undefined;
    modal?: boolean | undefined;
}

interface PNotifyLabel {
    redisplay?: string | undefined;
    all?: string | undefined;
    last?: string | undefined;
    close?: string | undefined;
    stick?: string | undefined;
}

interface PNotifyconfirmButton {
    text?: string | undefined;
    addClass?: string | undefined;
    /**
     *  Whether to trigger this button when the user hits enter in a single line prompt.
     */
    promptTrigger?: boolean | undefined;
    click: (notice: PNotify, value: any) => void;
}

interface PNotifyconfirm {
    /**
     * Make a confirmation box.
     */
    confirm?: boolean | undefined;

    /**
     * Make a prompt.
     */
    prompt?: boolean | undefined;
    /**
     * Classes to add to the input element of the prompt.
     */
    prompt_class?: string | undefined;

    /**
     * The default value of the prompt.
     */
    prompt_default?: string | undefined;

    /**
     * Whether the prompt should accept multiple lines of text.
     */
    prompt_multi_line?: boolean | undefined;

    /**
     * Where to align the buttons. (right, center, left, justify)
     */
    align?: string | undefined;

    /**
     * The buttons to display, and their callbacks.
     */
    buttons?: PNotifyconfirmButton[] | undefined;
}

interface PNotifyButtons {
    /**
     * Provide a button for the user to manually close the notice.
     */
    closer?: boolean | undefined;
    /**
     * Only show the closer button on hover.
     */
    closer_hover?: boolean | undefined;
    /**
     * Provide a button for the user to manually stick the notice.
     */
    sticker?: boolean | undefined;
    /**
     * Only show the sticker button on hover.
     */
    sticker_hover?: boolean | undefined;
    /**
     * Show the buttons even when the nonblock module is in use.
     */
    show_on_nonblock?: boolean | undefined;
    /**
     * The various displayed text, helps facilitating internationalization.
     */
    labels?: {
        close?: string | undefined;
        stick?: string | undefined;
        unstick?: string | undefined;
    } | undefined;
    /**
     * The classes to use for button icons. Leave them null to use the classes from the styling you're using.
     */
    classes?: {
        closer?: string | undefined;
        pin_up?: string | undefined;
        pin_down?: string | undefined;
    } | undefined;
}

interface PNotifyOptions {
    /**
     * The notice's title. Either boolean false or string
     */
    title?: string | boolean | undefined;
    /**
     * Whether to escape the content of the title. (Not allow HTML.)
     */
    title_escape?: boolean | undefined;
    /**
     * The notice's text. Either boolean false or string
     */
    text?: string | boolean | undefined;
    /**
     * Whether to escape the content of the text. (Not allow HTML.)
     */
    text_escape?: boolean | undefined;
    /**
     * Support for PNotifyconfirm options
     */
    confirm?: PNotifyconfirm | undefined;
    /**
     * What styling classes to use. (Can be either "brighttheme", "jqueryui", "bootstrap2", "bootstrap3", "fontawesome" or a custom style object)
     */
    styling?: StylingOptions | undefined;
    /**
     * Additional classes to be added to the notice. (For custom styling.)
     */
    addclass?: string | undefined;
    /**
     * Class to be added to the notice for corner styling.
     */
    cornerclass?: string | undefined;

    nonblock?: {
        /**
         * Create a non-blocking notice. It lets the user click elements underneath it.
         */
        nonblock?: boolean | undefined;

        /**
         * The opacity of the notice (if it's non-blocking) when the mouse is over it.
         */
        nonblock_opacity?: number | undefined;
    } | undefined;

    /**
     * Display a pull down menu to redisplay previous notices, and place the notice in the history.
     */
    history?: boolean | undefined;
    /**
     * Maximum number of notifications to have onscreen.
     */
    maxonscreen?: number | undefined;
    /**
     * Display the notice when it is created. Turn this off to add notifications to the history without displaying them.
     */
    auto_display?: boolean | undefined;
    /**
     * Width of the notice.
     */
    width?: string | undefined;
    /**
     * Minimum height of the notice. It will expand to fit content.
     */
    min_height?: string | undefined;
    /**
     * Type of the notice. "notice", "info", "success", or "error".
     */
    type?: NoticeTypeOptions | undefined;
    /**
     * Set icon to true to use the default icon for the selected style/type, false for no icon, or a string for your own icon class.
     */
    icon?: any;
    /**
     * The animation to use when displaying and hiding the notice. "none" and "fade" are supported through CSS.
     * Others are supported through the Animate module and Animate.css.
     */
    animation?: string | undefined;
    /**
     * Speed at which the notice animates in and out. "slow", "def" or "normal", "fast" or number of milliseconds.
     */
    animate_speed?: string | undefined;
    /**
     * Specify a specific duration of position animation
     */
    position_animate_speed?: number | undefined;
    /**
     * Opacity of the notice.
     */
    opacity?: number | undefined;
    /**
     * Display a drop shadow.
     */
    shadow?: boolean | undefined;

    buttons?: {
        /**
         * Provide a button for the user to manually close the notice.
         */
        closer?: boolean | undefined;
        /**
         * Only show the closer button on hover.
         */
        closer_hover?: boolean | undefined;

        /**
         * Provide a button for the user to manually stick the notice.
         */
        sticker?: boolean | undefined;
        /**
         * Only show the sticker button on hover.
         */
        sticker_hover?: boolean | undefined;
    } | undefined;

    /**
     * After a delay, remove the notice, set to false for sticky note.
     */
    hide?: boolean | undefined;
    /**
     * Delay in milliseconds before the notice is removed.
     */
    delay?: number | undefined;
    /**
     * Reset the hide timer if the mouse moves over the notice.
     */
    mouse_reset?: boolean | undefined;
    /**
     * Remove the notice's elements from the DOM after it is removed.
     */
    remove?: boolean | undefined;
    /**
     * Change new lines to br tags.
     */
    insert_brs?: boolean | undefined;
    /**
     * The stack on which the notices will be placed. Also controls the direction the notices stack.
     */
    stack?: PNotifyStack | undefined;
    /**
     * The various displayed text, helps facilitating internationalization.
     */
    labels?: PNotifyLabel | undefined;
}

interface PNotifyStyling {
    container?: string | undefined;
    notice?: string | undefined;
    notice_icon?: string | undefined;
    info?: string | undefined;
    info_icon?: string | undefined;
    success?: string | undefined;
    success_icon?: string | undefined;
    error?: string | undefined;
    error_icon?: string | undefined;
    // buttons
    closer?: string | undefined;
    pin_down?: string | undefined;
    pin_up?: string | undefined;
    // confirm
    btn?: string | undefined;
    btnhover?: string | undefined;
    btnactive?: string | undefined;
    btnfocus?: string | undefined;
    input?: string | undefined;
    text?: string | undefined;
    // history
    hi_menu?: string | undefined;
    hi_btn?: string | undefined;
    hi_btnhov?: string | undefined;
    hi_hnd?: string | undefined;
    // reference
    athing?: string | undefined;
}

interface PNotify {
    /**
     * The state can be "initializing", "opening", "open", "closing", and "closed"
     */
    state?: StateOptions | undefined;

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
    new(options?: PNotifyOptions): PNotify;

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
    positionAll(animate?: boolean): void;
}

declare var PNotify: PNotifyConstructor;
