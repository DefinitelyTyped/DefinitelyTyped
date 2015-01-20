// Type definitions for jquery.pnotify 1.3.1
// Project: https://github.com/sciactive/pnotify
// Definitions by: David Sichau <https://github.com/DavidSichau>
// Definitions: https://github.com/borisyankov/DefinitelyTyped


/// <reference path="../jquery/jquery.d.ts"/>

interface pnotifyStack {
    dir1?: string;
    dir2?: string;
    push?: string;
    spacing1?: number;
    spacing2?: number;
    context?: JQuery
}

interface pnotifyLabel {
    redisplay?: string;
    all?: string;
    last?: string;
    close?: string;
    stick?: string;
}

interface pnotifyDefaults {
    /**
     * The notice's title. Either boolean false or string
     */
    title?: any;
    /**
     * Whether to escape the content of the title. (Not allow HTML.)
     */
    title_escape?: boolean;
    /**
     * The notice's text. Either boolean false or string
     */
    text?: any;
    /**
     * Whether to escape the content of the text. (Not allow HTML.)
     */
    text_escape?: boolean;
    /**
     * What styling classes to use. (Can be either jqueryui or bootstrap.)
     */
    styling?: string;
    /**
     * Additional classes to be added to the notice. (For custom styling.)
     */
    addclass?: string;
    /**
     * Class to be added to the notice for corner styling.
     */
    cornerclass?: string;
    /**
     * Create a non-blocking notice. It lets the user click elements underneath it.
     */
    nonblock?: boolean;
    /**
     * The opacity of the notice (if it's non-blocking) when the mouse is over it.
     */
    nonblock_opacity?: number;
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
    type?: string;
    /**
     * Set icon to true to use the default icon for the selected style/type, false for no icon, or a string for your own icon class.
     */
    icon?: any;
    /**
     * The animation to use when displaying and hiding the notice. "none", "show", "fade", and "slide" are built in to jQuery. Others require jQuery UI. Use an object with effect_in and effect_out to use different effects.
     */
    animation?: any;
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
     * After a delay, remove the notice.
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
    stack?: pnotifyStack;
    /**
     * The various displayed text, helps facilitating internationalization.
     */
    labels?: pnotifyLabel;
}


interface pnotifyInterface {
    defaults?: pnotifyDefaults
    (options: pnotifyDefaults): any;
}

interface JQueryStatic {
    /**
     * The pnotify object
     */
    pnotify: pnotifyInterface;
    /**
     * Removes all notifications
     */
    pnotify_remove_all(): void;
}

