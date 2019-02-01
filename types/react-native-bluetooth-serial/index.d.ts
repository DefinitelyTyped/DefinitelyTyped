// Type definitions for react-native-bluetooth-serial 1.0
// Project: https://github.com/rusel1989/react-native-bluetooth-serial
// Definitions by: Rodrigo Weber <https://github.com/RodrigoAWeber>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8
import * as React from "react";
import * as ReactNative from "react-native";

export type Buffer = (data: number[]) => void;

export namespace BluetoothSerial {
    function on(eventName: string, handler: () => void): void;
    function removeListener(eventName: string, handler: () => void): void;
    function write(data: Buffer | string): Promise<boolean>;
    function list(): Promise<Array<{ id: string, name: string }>>;
    function isEnabled(): Promise<boolean>;
    function connect(id: string): Promise<void>;
    function disconnect(): Promise<void>;
    function isConnected(): Promise<boolean>;
}
