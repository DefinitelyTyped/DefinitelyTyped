//////////////////////////////////////////////////////
// BEWARE: DO NOT EDIT MANUALLY! Changes will be lost!
//////////////////////////////////////////////////////

/**
 * Namespace: browser.alarms
 *
 * Permissions: "alarms"
 *
 * Comments found in source JSON schema files:
 * Copyright (c) 2012 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */
import { Events } from "./events";

export namespace Alarms {
    interface Alarm {
        /**
         * Name of this alarm.
         */
        name: string;

        /**
         * Time when the alarm is scheduled to fire, in milliseconds past the epoch.
         */
        scheduledTime: number;

        /**
         * When present, signals that the alarm triggers periodically after so many minutes.
         * Optional.
         */
        periodInMinutes?: number;
    }

    /**
     * Details about the alarm. The alarm first fires either at 'when' milliseconds past the epoch (if 'when' is provided),
     * after 'delayInMinutes' minutes from the current time (if 'delayInMinutes' is provided instead),
     * or after 'periodInMinutes' minutes from the current time (if only 'periodInMinutes' is provided).
     * Users should never provide both 'when' and 'delayInMinutes'. If 'periodInMinutes' is provided,
     * then the alarm recurs repeatedly after that many minutes.
     */
    interface CreateAlarmInfoType {
        /**
         * Time when the alarm is scheduled to first fire, in milliseconds past the epoch.
         * Optional.
         */
        when?: number;

        /**
         * Number of minutes from the current time after which the alarm should first fire.
         * Optional.
         */
        delayInMinutes?: number;

        /**
         * Number of minutes after which the alarm should recur repeatedly.
         * Optional.
         */
        periodInMinutes?: number;
    }

    interface Static {
        /**
         * Creates an alarm. After the delay is expired, the onAlarm event is fired. If there is another alarm with the same name
         * (or no name if none is specified), it will be cancelled and replaced by this alarm.
         *
         * @param name Optional. Optional name to identify this alarm. Defaults to the empty string.
         * @param alarmInfo Details about the alarm. The alarm first fires either at 'when' milliseconds past the epoch (if 'when'
         * is provided), after 'delayInMinutes' minutes from the current time (if 'delayInMinutes' is provided instead),
         * or after 'periodInMinutes' minutes from the current time (if only 'periodInMinutes' is provided).
         * Users should never provide both 'when' and 'delayInMinutes'. If 'periodInMinutes' is provided,
         * then the alarm recurs repeatedly after that many minutes.
         */
        create(name: string | undefined, alarmInfo: CreateAlarmInfoType): void;

        /**
         * Creates an alarm. After the delay is expired, the onAlarm event is fired. If there is another alarm with the same name
         * (or no name if none is specified), it will be cancelled and replaced by this alarm.
         *
         * @param alarmInfo Details about the alarm. The alarm first fires either at 'when' milliseconds past the epoch (if 'when'
         * is provided), after 'delayInMinutes' minutes from the current time (if 'delayInMinutes' is provided instead),
         * or after 'periodInMinutes' minutes from the current time (if only 'periodInMinutes' is provided).
         * Users should never provide both 'when' and 'delayInMinutes'. If 'periodInMinutes' is provided,
         * then the alarm recurs repeatedly after that many minutes.
         */
        create(alarmInfo: CreateAlarmInfoType): void;

        /**
         * Retrieves details about the specified alarm.
         *
         * @param name Optional. The name of the alarm to get. Defaults to the empty string.
         */
        get(name?: string): Promise<Alarm | undefined>;

        /**
         * Gets an array of all the alarms.
         */
        getAll(): Promise<Alarm[]>;

        /**
         * Clears the alarm with the given name.
         *
         * @param name Optional. The name of the alarm to clear. Defaults to the empty string.
         */
        clear(name?: string): Promise<boolean>;

        /**
         * Clears all alarms.
         */
        clearAll(): Promise<boolean>;

        /**
         * Fired when an alarm has expired. Useful for transient background pages.
         *
         * @param name The alarm that has expired.
         */
        onAlarm: Events.Event<(name: Alarm) => void>;
    }
}
