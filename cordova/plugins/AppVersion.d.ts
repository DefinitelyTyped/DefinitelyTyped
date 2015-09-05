// Type definitions for Apache Cordova AppVersion plugin.
// Project: https://github.com/whiteoctober/cordova-plugin-app-version
// Definitions by: James Spencer <https://github.com/jfspencer/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped
//
// Copyright (c) 2013 White October

/// <reference path="../../bluebird/bluebird" />

/**
 * This plugin defines a global device object, which describes the device's hardware and software.
 * Although the object is in the global scope, it is not available until after the deviceready event.
 */

interface cordova {
    getAppVersion: IGetAppVersion;
}

interface IGetAppVersion {
    getAppName() : Promise<string>;
    getPackageName() : Promise<string>;
    getVersionCode() : Promise<string>;
    getVersionNumber() : Promise<string>;

}

declare var getAppVersion: IGetAppVersion;