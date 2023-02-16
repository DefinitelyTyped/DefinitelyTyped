/*
* Copyright (c) 2022 Richard Lea
*
*   This file is part of the Moddable SDK Tools.
*
*   The Moddable SDK Tools is free software: you can redistribute it and/or modify
*   it under the terms of the GNU General Public License as published by
*   the Free Software Foundation, either version 3 of the License, or
*   (at your option) any later version.
*
*   The Moddable SDK Tools is distributed in the hope that it will be useful,
*   but WITHOUT ANY WARRANTY; without even the implied warranty of
*   MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
*   GNU General Public License for more details.
*
*   You should have received a copy of the GNU General Public License
*   along with the Moddable SDK Tools.  If not, see <http://www.gnu.org/licenses/>.
*
*/

declare module "hidclient" {
    import { BLEClient } from "bleclient";
    import { Service } from "gatt";

    interface BondedInfo {
        device: {
            address: ArrayBuffer,
            addressType: number,
            services: Service[],
        };
        reports: number[];
    }

    enum ReportType {
        NONE = 0x00,
        INPUT = 0x01,
        OUTPUT = 0x02,
        FEATURE = 0x03,
    }

    enum UsageID {
        POINTER = 1,
        MOUSE = 2,
        JOYSTICK = 4,
        GAMEPAD = 5,
        KEYBOARD = 6,
        KEYPAD = 7,
    }

    enum Appearance {
        GENERIC = 960,
        KEYBOARD = 961,
        MOUSE = 962,
        JOYSTICK = 963,
        GAMEPAD = 964,
    }

    class BLEHIDClient extends BLEClient {
        constructor();

        configure(params: {
            usageID: UsageID,
            reportTypes: ReportType[],
            bonding: boolean,
        }): void;

        onReady(): void;

        onSecurityParameters(params: any): void;

        onDeviceReportMap(value: any): void;

        onDeviceReports(value: number[]): void;

        onDeviceDisconnected(): void;
    }

    export namespace Bonded {
        function get(usageID: UsageID): BondedInfo;

        function set(usageID: UsageID, device: BLEClient, reports: number[]): void;

        const PREFERENCE_DOMAIN = "hid";
        const PREFERENCE_KEY_POINTER = "poin";
        const PREFERENCE_KEY_MOUSE = "mous";
        const PREFERENCE_KEY_JOYSTICK = "joys";
        const PREFERENCE_KEY_GAMEPAD = "gamp";
        const PREFERENCE_KEY_KEYBOARD = "keyb";
        const PREFERENCE_KEY_KEYPAD = "keyp";
    }

    export { BLEHIDClient as default, ReportType, UsageID };
}
