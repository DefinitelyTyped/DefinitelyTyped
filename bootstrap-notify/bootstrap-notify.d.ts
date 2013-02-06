// Type definitions for bootstrap-notify
// Project: https://github.com/Nijikokun/bootstrap-notify
// Definitions by: Blake Niemyjski <https://github.com/niemyjski/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../jquery/jquery.d.ts"/>

interface NotifyOptions {
    /**
    Alert style, omit alert- from style name.
    @param {string} type
    */
    type?: string;
    /**
    Allow alert to be closable through a close icon.
    @param {bool} closable
    */
    closable?: bool;
    /**
    Alert transition, pretty sure only fade is supported, you can try others if you wish.
    @param {string} transition
    */
    transition?: string;
    /**
    Fade alert out after a certain delay (in ms)
    @param {string} fadeOut
    */
    fadeOut?: NotifyFadeOutSettings;
    /**
    Text to show on alert, you can use either html or text. HTML will override text.
    @param {MessageOptions} message
    */
    message?: MessageOptions;
    /**
    Called before alert closes.
    @param {function} onClose
    */
    onClose?: () => void;
    /**
    Called after alert closes.
    @param {function} onClosed
    */
    onClosed?: () => void;
}

interface NotifyFadeOutSettings {
    enabled?: bool;
    delay?: number;
}

interface MessageOptions {
    html?: string;
    text?: string;
}

interface Notification {
    show();
    hide();
}

interface JQuery {
    /**
    Creates a notification instance with default options.
    @constructor
    @param {NotifyOptions} options
    */
    notify(options: NotifyOptions): Notification;
}