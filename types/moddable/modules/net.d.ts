/*
* Copyright (c) 2019-2020 Bradley Farias
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

declare module "net" {
    /**
     * The Net class provides access to status information about the active network connection.
     */
    var Net: {
        /**
         * The IP address of the network connection as a `String`, e.g. "10.0.1.4"
         */
        get(what: "IP"): string;
        /**
         * The MAC address of the device as a `String`, e.g. "A4:D1:8C:DB:C0:20"
         */
        get(what: "MAC"): string;
        /**
         * The name of the Wi-Fi access point as a `String`, e.g. "Moddable Wi-Fi"
         */
        get(what: "SSID"): string;
        /**
         * The MAC address of the Wi-Fi access point as a `String`, e.g. "18:64:72:47:d4:32"
         */
        get(what: "BSSID"): string;
        /**
         * Gets the Wi-Fi [received signal strength](https://en.wikipedia.org/wiki/Received_signal_strength_indication) as a `Number`
         */
        get(what: "RSSI"): number;
        /**
         * Gets an Array of the DNS servers configured in the system
         */
        get(what: "DNS"): string[];

        /**
         * The resolve function performs performs an asynchronous DNS look-up for the specified host and invokes the callback to deliver the result.
         *
         * The IP address is provided as a String in dotted IP address notation. If host cannot be resolved, the address parameter is undefined.
         *
         * The DNS implementation in lwIP supports a limited number of simultaneous DNS look-ups.
         * The number depends on the specific platform deployment. On the ESP8266 it is 4. If the DNS resolve queue is full, resolve throws an exception.
         *
         * @example
         * Net.resolve("moddable.tech", (name, address) => trace(`${name} IP address is ${address}\n`);
         */
        resolve(
            name: string,
            callback: (name: string, address?: string) => void
        ): void;
    };
    export { Net as default };
}
