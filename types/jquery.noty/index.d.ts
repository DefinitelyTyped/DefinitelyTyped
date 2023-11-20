// Project by: Nedim Carter <http://needim.github.io>

/// <reference types="jquery"/>

interface NotyOptions {
    layout?: string | undefined;
    theme?: string | undefined;
    type?: string | undefined;
    /** Text to show. Can be html or string. */
    text?: string | undefined;
    /** If you want to use queue feature set this true. */
    dismissQueue?: boolean | undefined;
    /** adds notification to the beginning of queue when set to true */
    force?: boolean | undefined;
    /** You can set max visible notification for dismissQueue true option */
    maxVisible?: number | undefined;
    /** The note`s optional template like '<div class="noty_message"><span class="noty_text"></span><div class="noty_close"></div></div>' */
    template?: string | undefined;
    /** Delay for closing event. Set false for sticky notifications */
    timeout?: any;
    /** displays a progress bar */
    progressBar?: boolean | undefined;

    animation?: NotyAnimationOptions | undefined;
    /** backdrop click will close all notifications */
    closeWith?: ("click" | "button" | "hover" | "backdrop")[] | undefined;

    /** if true adds an overlay */
    modal?: boolean | undefined;
    /** if true closes all notifications and shows itself */
    killer?: boolean | undefined;

    callback?: NotyCallbackOptions | undefined;

    /** an array of buttons, for creating confirmation dialogs. */
    buttons?: any;
}

interface NotyAnimationOptions {
    open?: any;
    close?: any;
    easing?: string | undefined;
    speed?: number | undefined;
}

interface NotyCallbackOptions {
    onShow?: Function | undefined;
    afterShow?: Function | undefined;
    onClose?: Function | undefined;
    afterClose?: Function | undefined;
    onCloseClick?: Function | undefined;
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
