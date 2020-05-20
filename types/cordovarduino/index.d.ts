// Type definitions for Cordovarduino plugin
// Project: https://github.com/stereolux/cordovarduino
// Definitions by: Hendrik Maus <https://github.com/hendrikmaus>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace Cordovardunio {
    interface Serial {
        /**
         * Request permission to interact with the serial port.
         *
         * @param successCallback Function to call on success
         * @param errorCallback   Function to call on error
         */
        requestPermission(successCallback:Function, errorCallback:Function): void;

        /**
         * Open a connection.
         *
         * @param opts            SerialOptions object
         * @param successCallback Function to call on success
         * @param errorCallback   Function to call on error
         */
        open(opts:SerialOptions, successCallback:Function, errorCallback:Function): void

        /**
         * Write to the serial port.
         *
         * @param data            String data to write to serial port
         * @param successCallback Function to call on success
         * @param errorCallback   Function to call on error
         */
        write(data:string, successCallback:Function, errorCallback:Function): void;

        /**
         * Read from the serial port.
         *
         * @param successCallback Function to call on success
         * @param errorCallback   Function to call on error
         */
        read(successCallback:Function, errorCallback:Function): void;

        /**
         * Close connection.
         *
         * @param successCallback Function to call on success
         * @param errorCallback   Function to call on error
         */
        close(successCallback:Function, errorCallback:Function): void;

        /**
         * Register a callback for the driver reading incoming data from the serial device
         *
         * @param successCallback Function to call on success
         * @param errorCallback   Function to call on error
         */
        registerReadCallback(successCallback:Function, errorCallback:Function): void;
    }

    interface SerialOptions {
        /**
         * @defaultValue 9600
         */
        baudRate?: number;

        /**
         * @defaultValue 8
         */
        dataBits?: number;

        /**
         * @defaultValue 1
         */
        stopBits?: number;

        /**
         * @defaultValue 0
         */
        parity?: number;
    }
}


// Plugin will be surfaced as window.serial
declare var serial:Cordovardunio.Serial;
