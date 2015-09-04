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
    /**
     * Vibrates the device with a given pattern.
     * @param number[] pattern Pattern with which to vibrate the device.
     *                         The first value - number of milliseconds to wait before turning the vibrator on.
     *                         The next value - the number of milliseconds for which to keep the vibrator on before turning it off.
     * @param number  repeat   Optional index into the pattern array at which to start repeating (will repeat until canceled),
     *                         or -1 for no repetition (default).
     */
    vibrateWithPattern(pattern: number[], repeat: number): void;
    /**
     * Immediately cancels any currently running vibration.
     */
    cancelVibration(): void;
}