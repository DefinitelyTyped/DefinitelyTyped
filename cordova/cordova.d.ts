// Type definitions for Apache Cordova
// Project: http://cordova.apache.org
// Definitions by: Microsoft Open Technologies Inc. <http://msopentech.com>
// Definitions: https://github.com/borisyankov/DefinitelyTyped
//
// Copyright (c) Microsoft Open Technologies, Inc.
// Licensed under the MIT license.

/// <reference path="plugins/BatteryStatus.d.ts"/>
/// <reference path="plugins/Camera.d.ts"/>
/// <reference path="plugins/Contacts.d.ts"/>
/// <reference path="plugins/Device.d.ts"/>
/// <reference path="plugins/DeviceMotion.d.ts"/>
/// <reference path="plugins/DeviceOrientation.d.ts"/>
/// <reference path="plugins/Dialogs.d.ts"/>
/// <reference path="plugins/FileSystem.d.ts"/>
/// <reference path="plugins/FileTransfer.d.ts"/>
/// <reference path="plugins/Globalization.d.ts"/>
/// <reference path="plugins/InAppBrowser.d.ts"/>
/// <reference path="plugins/Media.d.ts"/>
/// <reference path="plugins/MediaCapture.d.ts"/>
/// <reference path="plugins/NetworkInformation.d.ts"/>
/// <reference path="plugins/Push.d.ts"/>
/// <reference path="plugins/Splashscreen.d.ts"/>
/// <reference path="plugins/StatusBar.d.ts"/>
/// <reference path="plugins/Vibration.d.ts"/>
/// <reference path="plugins/WebSQL.d.ts"/>
/// <reference path="plugins/Keyboard.d.ts"/>

interface Cordova {
    /** Invokes native functionality by specifying corresponding service name, action and optional parameters.
     * @param success A success callback function.
     * @param fail An error callback function.
     * @param service The service name to call on the native side (corresponds to a native class).
     * @param action The action name to call on the native side (generally corresponds to the native class method).
     * @param args An array of arguments to pass into the native environment.
     */
    exec(success: () => any, fail: () => any, service: string, action: string, args?: string[]): void;
    /** Gets the operating system name. */
    platformId: string;
    /** Gets Cordova framework version */
    version: string;
    /** Defines custom logic as a Cordova module. Other modules can later access it using module name provided. */
    define(moduleName: string, factory: (require: any, exports: any, module: any) => any): void;
    /** Access a Cordova module by name. */
    require(moduleName: string): any;
    /** Namespace for Cordova plugin functionality */
    plugins:CordovaPlugins;
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
  cordova:Cordova;
}

// cordova/argscheck module
interface ArgsCheck {
    checkArgs(argsSpec: string, functionName: string, args: any[], callee?: any): void;
    getValue(value?: any, defaultValue?: any): any;
    enableChecks: boolean;
}

// cordova/urlutil module
interface UrlUtil {
    makeAbsolute(url: string): string
}

/** Apache Cordova instance */
declare var cordova: Cordova;

declare module 'cordova' {
    export = cordova;
}
