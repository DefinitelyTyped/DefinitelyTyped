// Type definitions for Apache Cordova Splashscreen plugin
// Project: https://github.com/apache/cordova-plugin-splashscreen
// Definitions by: Microsoft Open Technologies Inc <http://msopentech.com>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// 
// Copyright (c) Microsoft Open Technologies Inc
// Licensed under the MIT license.

interface Navigator {
    /** This plugin displays and hides a splash screen during application launch. */
    splashscreen: {
        /** Dismiss the splash screen. */
        hide(): void;
        /** Displays the splash screen. */
        show(): void;
    }
}