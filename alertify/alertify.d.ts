// Type definitions for alertify.JQuery 0.3
// Project: http://fabien-d.github.io/alertify.js/
// Definitions by: Mathieu Cnatin <https://github.com/harcher81/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../jquery/jquery.d.ts"/>

declare module alertifyModule {
    enum alertifyLevel {
        "",
        "success",
        "error"
    }

    enum alertifyFocus {
        "ok",
        "cancel",
        "none"
    }

    interface alertifyOptions {
        delay?: number;
        buttonReverse?: boolean;
        buttonFocus?: alertifyFocus;
        labels?: alertifyLabels;
    }

    interface alertifyLabels {
        ok: string;
        cancel: string;
    }

    interface alertify {
        alert(message: string, fn?: () => any, cssClass?: string): Object;
        confirm(message: string, fn?: () => any, cssClass?: string): Object;
        prompt(message: string, fn?: () => any, placeholder?: string, cssClass?: string): Object;
        success(message: string): Object;
        error(message: string): Object;
        log(message: string, type?: alertifyLevel, wait?: number): Object;
        set(options?: alertifyOptions): Object;
        debug(): Object;
    }

}

declare var alertify: alertifyModule.alertify;