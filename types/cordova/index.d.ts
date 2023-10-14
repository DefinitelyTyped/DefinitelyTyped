// Type definitions for Apache Cordova 11.0
// Project: http://cordova.apache.org
// Definitions by: Microsoft Open Technologies Inc <http://msopentech.com>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
//
// Copyright (c) Microsoft Open Technologies Inc
// Licensed under the MIT license.

interface Cordova {
    /** Invokes native functionality by specifying corresponding service name, action and optional parameters.
     * @param success A success callback function.
     * @param fail An error callback function.
     * @param service The service name to call on the native side (corresponds to a native class).
     * @param action The action name to call on the native side (generally corresponds to the native class method).
     * @param args An array of arguments to pass into the native environment.
     */
    exec(success: (data: any) => any, fail: (err: any) => any, service: string, action: string, args?: any[]): void;
    /** Gets the operating system name. */
    platformId: string;
    /** Gets Cordova framework version */
    version: string;
    /** Defines custom logic as a Cordova module. Other modules can later access it using module name provided. */
    define(moduleName: string, factory: (require: any, exports: any, module: any) => any): void;
    /** Access a Cordova module by name. */
    require(moduleName: string): any;
    /** Namespace for Cordova plugin functionality */
    plugins: CordovaPlugins;
}

interface CordovaPlugins {}

interface Document {
    addEventListener(type: "deviceready", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "pause", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "resume", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "backbutton", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "menubutton", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "searchbutton", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "startcallbutton", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "endcallbutton", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "volumedownbutton", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "volumeupbutton", listener: (ev: Event) => any, useCapture?: boolean): void;

    removeEventListener(type: "deviceready", listener: (ev: Event) => any, useCapture?: boolean): void;
    removeEventListener(type: "pause", listener: (ev: Event) => any, useCapture?: boolean): void;
    removeEventListener(type: "resume", listener: (ev: Event) => any, useCapture?: boolean): void;
    removeEventListener(type: "backbutton", listener: (ev: Event) => any, useCapture?: boolean): void;
    removeEventListener(type: "menubutton", listener: (ev: Event) => any, useCapture?: boolean): void;
    removeEventListener(type: "searchbutton", listener: (ev: Event) => any, useCapture?: boolean): void;
    removeEventListener(type: "startcallbutton", listener: (ev: Event) => any, useCapture?: boolean): void;
    removeEventListener(type: "endcallbutton", listener: (ev: Event) => any, useCapture?: boolean): void;
    removeEventListener(type: "volumedownbutton", listener: (ev: Event) => any, useCapture?: boolean): void;
    removeEventListener(type: "volumeupbutton", listener: (ev: Event) => any, useCapture?: boolean): void;

    addEventListener(type: string, listener: (ev: Event) => any, useCapture?: boolean): void;
    removeEventListener(type: string, listener: (ev: Event) => any, useCapture?: boolean): void;
}

interface Window {
    cordova: Cordova;
}

// cordova/argscheck module
interface ArgsCheck {
    checkArgs(argsSpec: string, functionName: string, args: any[], callee?: any): void;
    getValue(value?: any, defaultValue?: any): any;
    enableChecks: boolean;
}

// cordova/urlutil module
interface UrlUtil {
    makeAbsolute(url: string): string;
}

/** Apache Cordova instance */
declare var cordova: Cordova;

declare module "cordova" {
    export = cordova;
}

interface Navigator {
    /** This plugin displays and hides a splash screen during application launch. */
    splashscreen: {
        /** Dismiss the splash screen. */
        hide(): void;
        /** Displays the splash screen. */
        show(): void;
    };
}
