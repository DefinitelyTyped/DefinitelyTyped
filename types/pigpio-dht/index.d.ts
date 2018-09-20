// Type definitions for pigpio-dht 1.1
// Project: https://github.com/depuits/pigpio-dht
// Definitions by: Erik Mavrinac <https://github.com/erikma>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

export = dht;

/**
 * Returns a new DHT object for accessing a DHT11 or DHT22/AM2302 via GPIO.
 * @param gpio      an unsigned integer specifying the GPIO number
 * @param type      A DhtType enumeration value for the sensor type
 */
declare function dht(gpio: number, type: dht.DhtType | number): dht.Dht;

declare namespace dht {
    /** The various sensor types supported by pigpio-dht. */
    enum DhtType {
        DHT11 = 11,
        DHT22 = 22,
        AM2302 = 22,
    }

    interface Dht extends NodeJS.EventEmitter {
        /**
         * Starts reading the sensor value. Emits the 'start' event before starting,
         * the 'end' event on end whether or not an error occurred, the 'result'
         * event with a DhtResult on success, and the 'badChecksum' event on a
         * receive failure.
         * @returns false if a read is already underway, true if a new read was started.
         */
        read(): boolean;
    }

    /**
     * Result from a successful sensor read.
     */
    interface DhtResult {
        /** The temperature value in degress Celsius. */
        temperature: number;

        /** The humidity value in percentage points. */
        humidity: number;
    }
}
