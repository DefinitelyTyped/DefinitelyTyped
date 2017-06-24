// Type definitions for jQuery.noty v2.4
// Project: http://needim.github.io/noty/
// Definitions by: Aaron King <https://github.com/kingdango/>, Tim Helfensdörfer <https://github.com/thelfensdrfer>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Project by: Nedim Carter <http://needim.github.io>
// TypeScript Version: 2.3

/// <reference types="jquery"/>

interface NotyOptions {
    layout?: string;
    theme?: string;
    type?: string;
    /** Text to show. Can be html or string. */
    text?: string;
    /** If you want to use queue feature set this true. */
    dismissQueue?: boolean;
    /** adds notification to the beginning of queue when set to true */
    force?: boolean;
    /** You can set max visible notification for dismissQueue true option */
    maxVisible?: number;
    /** The note`s optional template like '<div class="noty_message"><span class="noty_text"></span><div class="noty_close"></div></div>' */
    template?: string;
    /** Delay for closing event. Set false for sticky notifications */
    timeout?: any;
    /** displays a progress bar */
    progressBar?: boolean;

    animation?: NotyAnimationOptions;
    /** backdrop click will close all notifications */
    closeWith?: ('click' | 'button' | 'hover' | 'backdrop')[];

    /** if true adds an overlay */
    modal?: boolean;
    /** if true closes all notifications and shows itself */
    killer?: boolean;

    callback?: NotyCallbackOptions;

    /** an array of buttons, for creating confirmation dialogs. */
    buttons?: any;
}

interface NotyAnimationOptions {
    open?: any;
    close?: any;
    easing?: string;
    speed?: number;
}

interface NotyCallbackOptions {
    onShow?: Function;
    afterShow?: Function;
    onClose?: Function;
    afterClose?: Function;
    onCloseClick?: Function;
}

interface NotyStatic {
    (notyOptions: NotyOptions);
    defaults: NotyOptions;

    get(id: any);
    close(id: any);
    clearQueue();
    closeAll();
    setText(id: any, text: string);
    setType(id: any, type: string);
}

interface Noty {
    (notyOptions: NotyOptions);

    show();
    close();
    setText(text: string);
    setType(type: string);
    setTimeout(timeout: number);

    closed: boolean;
    shown: boolean;
}

interface JQueryStatic {
    noty: NotyStatic;
}

interface JQuery {
    noty: Noty;
}

declare var noty: Noty;
