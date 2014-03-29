// Type definitions for Apache Cordova Vibration plugin.
// Project: https://github.com/apache/cordova-plugin-vibration
// Definitions by: Microsoft Open Technologies, Inc. <http://msopentech.com>
// Definitions: https://github.com/borisyankov/DefinitelyTyped
// 
// Copyright (c) Microsoft Open Technologies, Inc.
// Licensed under the MIT license.

interface Notification {
	/**
	 * Vibrates the device for the specified amount of time.
	 * @param time Milliseconds to vibrate the device. Ignored on iOS.
	 */
    vibrate(time: number): void
}