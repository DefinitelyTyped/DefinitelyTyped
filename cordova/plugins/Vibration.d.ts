// Type definitions for Apache Cordova Vibration plugin.
// Project: https://github.com/apache/cordova-plugin-vibration
// Definitions by: Microsoft Open Technologies, Inc. <http://msopentech.com>, Louis Lagrange <https://github.com/Minishlink/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
//
// Copyright (c) Microsoft Open Technologies, Inc.
// Licensed under the MIT license.

interface Navigator {
	/**
	 * Vibrates the device for the specified amount of time.
	 * @param time Milliseconds to vibrate the device. 0 cancels the vibration. Ignored on iOS.
	 */
    vibrate(time: number): void;

    /**
	 * Vibrates the device with a given pattern.
	 * @param time Sequence of durations (in milliseconds) for which to turn on or off the vibrator. Ignored on iOS.
	 */
    vibrate(time: number[]): void;
}

interface Notification {
	/**
	 * Vibrates the device for the specified amount of time.
	 * @param time Milliseconds to vibrate the device. Ignored on iOS.
     * @deprecated
	 */
    vibrate(time: number): void;
    /**
     * Vibrates the device with a given pattern.
     * @param number[] pattern Pattern with which to vibrate the device.
     *                         The first value - number of milliseconds to wait before turning the vibrator on.
     *                         The next value - the number of milliseconds for which to keep the vibrator on before turning it off.
     * @param number  repeat   Optional index into the pattern array at which to start repeating (will repeat until canceled),
     *                         or -1 for no repetition (default).
     * @deprecated
     */
    vibrateWithPattern(pattern: number[], repeat: number): void;
    /**
     * Immediately cancels any currently running vibration.
     * @deprecated
     */
    cancelVibration(): void;
}
