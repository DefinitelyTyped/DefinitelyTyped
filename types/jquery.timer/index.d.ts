// Type definitions for jQueryTimer 1.0
// Project: https://github.com/jchavannes/jquery-timer
// Definitions by: Joshua Strobl <https://github.com/JoshStrobl/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="jquery" />

interface JQueryTimer {
    // #region Constructors
    (action?: Function, time?: Number, autostart?: Boolean): Object;
    set(x: any): Object;
    // #endregion

    // #region Actions
    once(time: Number): Object;
    play(reset?: Boolean): Object;
    pause(): Object;
    stop(): Object;
    toggle(reset?: Boolean): Object;
    // #endregion

    // #region Properties
    isActive: Boolean;
    remaining: Number;
    // #endregion

}

interface JQuery {
    timer: JQueryTimer;
}

interface JQueryStatic {
    timer: JQueryTimer;
}
