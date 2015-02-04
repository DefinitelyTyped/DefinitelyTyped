// Type definitions for Apache Cordova BatteryStatus plugin.
// Project: https://github.com/apache/cordova-plugin-battery-status
// Definitions by: Microsoft Open Technologies, Inc. <http://msopentech.com>
// Definitions: https://github.com/borisyankov/DefinitelyTyped
// 
// Copyright (c) Microsoft Open Technologies, Inc.
// Licensed under the MIT license. 

interface Window {
    onbatterystatus: (type: BatteryStatusEvent) => void;
    onbatterycritical: (type: BatteryStatusEvent) => void;
    onbatterylow: (type: BatteryStatusEvent) => void;
    /**
     * Adds a listener for an event from the BatteryStatus plugin.
     * @param type      the event to listen for
     *                  batterystatus: event fires when the percentage of battery charge
     *                  changes by at least 1 percent, or if the device is plugged in or unplugged.
     *                  batterycritical: event fires when the percentage of battery charge has reached
     *                  the critical battery threshold. The value is device-specific.
     *                  batterylow: event fires when the percentage of battery charge has
     *                  reached the low battery threshold, device-specific value.
     * @param listener  the function that executes when the event fires. The function is
     *                  passed an BatteryStatusEvent object as a parameter.
     */
    addEventListener(type: "batterystatus", listener: (ev: BatteryStatusEvent) => any, useCapture?: boolean): void;
    /**
     * Adds a listener for an event from the BatteryStatus plugin.
     * @param type      the event to listen for
     *                  batterystatus: event fires when the percentage of battery charge
     *                  changes by at least 1 percent, or if the device is plugged in or unplugged.
     *                  batterycritical: event fires when the percentage of battery charge has reached
     *                  the critical battery threshold. The value is device-specific.
     *                  batterylow: event fires when the percentage of battery charge has
     *                  reached the low battery threshold, device-specific value.
     * @param listener  the function that executes when the event fires. The function is
     *                  passed an BatteryStatusEvent object as a parameter.
     */
    addEventListener(type: "batterycritical", listener: (ev: BatteryStatusEvent) => any, useCapture?: boolean): void;
    /**
     * Adds a listener for an event from the BatteryStatus plugin.
     * @param type      the event to listen for
     *                  batterystatus: event fires when the percentage of battery charge
     *                  changes by at least 1 percent, or if the device is plugged in or unplugged.
     *                  batterycritical: event fires when the percentage of battery charge has reached
     *                  the critical battery threshold. The value is device-specific.
     *                  batterylow: event fires when the percentage of battery charge has
     *                  reached the low battery threshold, device-specific value.
     * @param listener  the function that executes when the event fires. The function is
     *                  passed an BatteryStatusEvent object as a parameter.
     */
    addEventListener(type: "batterylow", listener: (ev: BatteryStatusEvent) => any, useCapture?: boolean): void;
    /**
     * Adds a listener for an event from the BatteryStatus plugin.
     * @param type      the event to listen for
     *                  batterystatus: event fires when the percentage of battery charge
     *                  changes by at least 1 percent, or if the device is plugged in or unplugged.
     *                  batterycritical: event fires when the percentage of battery charge has reached
     *                  the critical battery threshold. The value is device-specific.
     *                  batterylow: event fires when the percentage of battery charge has
     *                  reached the low battery threshold, device-specific value.
     * @param listener  the function that executes when the event fires. The function is
     *                  passed an BatteryStatusEvent object as a parameter.
     */
    addEventListener(type: string, listener: (ev: Event) => any, useCapture?: boolean): void;
    /**
     * Removes a listener for an event from the BatteryStatus plugin.
     * @param type      The event to stop listening for.
     *                  batterystatus: event fires when the percentage of battery charge
     *                  changes by at least 1 percent, or if the device is plugged in or unplugged.
     *                  batterycritical: event fires when the percentage of battery charge has reached
     *                  the critical battery threshold. The value is device-specific.
     *                  batterylow: event fires when the percentage of battery charge has
     *                  reached the low battery threshold, device-specific value.
     * @param callback  the function that executes when the event fires. The function is
     *                  passed an BatteryStatusEvent object as a parameter.
     */
    removeEventListener(type: "batterystatus", listener: (ev: BatteryStatusEvent) => any, useCapture?: boolean): void;
    /**
     * Removes a listener for an event from the BatteryStatus plugin.
     * @param type      The event to stop listening for.
     *                  batterystatus: event fires when the percentage of battery charge
     *                  changes by at least 1 percent, or if the device is plugged in or unplugged.
     *                  batterycritical: event fires when the percentage of battery charge has reached
     *                  the critical battery threshold. The value is device-specific.
     *                  batterylow: event fires when the percentage of battery charge has
     *                  reached the low battery threshold, device-specific value.
     * @param callback  the function that executes when the event fires. The function is
     *                  passed an BatteryStatusEvent object as a parameter.
     */
    removeEventListener(type: "batterycritical", listener: (ev: BatteryStatusEvent) => any, useCapture?: boolean): void;
    /**
     * Removes a listener for an event from the BatteryStatus plugin.
     * @param type      The event to stop listening for.
     *                  batterystatus: event fires when the percentage of battery charge
     *                  changes by at least 1 percent, or if the device is plugged in or unplugged.
     *                  batterycritical: event fires when the percentage of battery charge has reached
     *                  the critical battery threshold. The value is device-specific.
     *                  batterylow: event fires when the percentage of battery charge has
     *                  reached the low battery threshold, device-specific value.
     * @param callback  the function that executes when the event fires. The function is
     *                  passed an BatteryStatusEvent object as a parameter.
     */
    removeEventListener(type: "batterylow", listener: (ev: BatteryStatusEvent) => any, useCapture?: boolean): void;
    /**
     * Removes a listener for an event from the BatteryStatus plugin.
     * @param type      The event to stop listening for.
     *                  batterystatus: event fires when the percentage of battery charge
     *                  changes by at least 1 percent, or if the device is plugged in or unplugged.
     *                  batterycritical: event fires when the percentage of battery charge has reached
     *                  the critical battery threshold. The value is device-specific.
     *                  batterylow: event fires when the percentage of battery charge has
     *                  reached the low battery threshold, device-specific value.
     * @param callback  the function that executes when the event fires. The function is
     *                  passed an BatteryStatusEvent object as a parameter.
     */
    removeEventListener(type: string, listener: (ev: Event) => any, useCapture?: boolean): void;
}

/** Object, that passed into battery event listener */
interface BatteryStatusEvent extends Event {
	/* The percentage of battery charge (0-100). */
    level: number;
	/* A boolean that indicates whether the device is plugged in. */
    isPlugged: boolean;
}