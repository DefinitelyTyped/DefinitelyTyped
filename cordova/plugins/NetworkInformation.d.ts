// Type definitions for Apache Cordova Network Information plugin.
// Project: https://github.com/apache/cordova-plugin-network-information
// Definitions by: Microsoft Open Technologies, Inc. <http://msopentech.com>
// Definitions: https://github.com/borisyankov/DefinitelyTyped
// 
// Copyright (c) Microsoft Open Technologies, Inc.
// Licensed under the MIT license.

interface Navigator {
    /**
     * This plugin provides an implementation of an old version of the Network Information API.
     * It provides information about the device's cellular and wifi connection, and whether the device has an internet connection.
     */
    connection: Connection;
    // see https://github.com/apache/cordova-plugin-network-information/blob/dev/doc/index.md#api-change
    // for 
    network: {
        /**
         * This plugin provides an implementation of an old version of the Network Information API.
         * It provides information about the device's cellular and wifi connection, and whether the device has an internet connection.
         */
        connection: Connection
    }
}

interface Document {
    addEventListener(type: "online", connectionStateCallback: () => any, useCapture?: boolean): void;
    addEventListener(type: "offline", connectionStateCallback: () => any, useCapture?: boolean): void;
}

/**
 * The connection object, exposed via navigator.connection, provides information
 * about the device's cellular and wifi connection.
 */
interface Connection {
    /**
     * This property offers a fast way to determine the device's network connection state, and type of connection.
     * One of:
     *     Connection.UNKNOWN
     *     Connection.ETHERNET
     *     Connection.WIFI
     *     Connection.CELL_2G
     *     Connection.CELL_3G
     *     Connection.CELL_4G
     *     Connection.CELL
     *     Connection.NONE
     */
    type: number
}

declare var Connection: {
    UNKNOWN: number;
    ETHERNET: number;
    WIFI: number;
    CELL_2G: number;
    CELL_3G: number;
    CELL_4G: number;
    CELL: number;
    NONE: number;
}