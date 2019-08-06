// Type definitions for dbus 1.0
// Project: https://github.com/Shouqun/node-dbus#readme
// Definitions by: Luca Lindhorst <https://github.com/lal12>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export type busType = "session"|"system";
export function getBus(type: busType): DBusConnection;
export function registerService(busName: busType, serviceName: string): DBusService;
export interface DBusConnection {
    getInterface(serviceName: string, objectPath: string, interfaceName: string, callback: (err: DBusError, iface: DBusInterface) => void): void;
    disconnect(): void;
}

export interface DBusInterface {
    getProperty(name: string, callback: (err: DBusError, name: string) => void): void;
    setProperty(name: string, value: any, callback: (err: DBusError) => void): void;
    getProperties(callback: (err: DBusError, properties: Array<{[name: string]: any}>) => void): void;
    /**
     * ...args
     * options: {timeout: number}
     * callback: (err: DBusError|undefined, res: any)=>void
     */
    [methodName: string]: (...args: any[]) => void;
}

export interface DBusService {
    createObject(path: string): DBusServiceObject;
    removeObject(service: DBusServiceObject): void;
    disconnect(): void;
}

export interface DBusServiceObject {
    createInterface(name: string): DBusServiceInterface;
}

export type PropsCB = (err: DBusError|undefined, value: any) => void;
export interface DBusServiceInterface {
    addMethod(method: string, opts: {in: string, out: string}, handler: (name: string, quality: any, callback: (res: any) => void) => void): void;
    addProperty(name: string, opts: {
        type: string,
        getter: (cb: (val: string) => void) => void,
        setter?: (value: any, done: () => void) => void
    }): void;
    addSignal(name: string, opts: {types: string[]}): void;
    emitSignal(name: string, ...values: any[]): void;
    update(): void;
}

export class DBusError extends Error {
    readonly dbusName: string;
    constructor(name: string, message: string);
}
