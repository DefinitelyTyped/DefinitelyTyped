// Type definitions for Apache Cordova BatteryStatus plugin
// Project: https://github.com/apache/cordova-plugin-battery-status
// Definitions by: Microsoft Open Technologies Inc <http://msopentech.com>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// 
// Copyright (c) Microsoft Open Technologies Inc
// Licensed under the MIT license.
// TypeScript Version: 2.3

interface WindowEventMap {
    /**
     * batterystatus: event fires when the percentage of battery charge changes by at least 1 percent, or if the device is plugged in or unplugged.
     */
    "batterystatus" : BatteryStatusEvent;
    /**
     * batterycritical: event fires when the percentage of battery charge has reached the critical battery threshold. The value is device-specific.
     */
    "batterycritical": BatteryStatusEvent;
    /**
     * batterylow: event fires when the percentage of battery charge has reached the low battery threshold, device-specific value.
     */
    "batterylow": BatteryStatusEvent;
}

interface Window {
    onbatterystatus: (type: BatteryStatusEvent) => void;
    onbatterycritical: (type: BatteryStatusEvent) => void;
    onbatterylow: (type: BatteryStatusEvent) => void;
}

/** Object, that passed into battery event listener */
interface BatteryStatusEvent extends Event {
	/* The percentage of battery charge (0-100). */
    level: number;
	/* A boolean that indicates whether the device is plugged in. */
    isPlugged: boolean;
}