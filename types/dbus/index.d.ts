// Type definitions for dbus 1.0
// Project: https://github.com/Shouqun/node-dbus#readme
// Definitions by: Luca Lindhorst <https://github.com/lal12>
//                 Niels Becker <https://github.com/waeco>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 3.4

declare namespace DBus {
    type busType = "session" | "system";
    function getBus(type: busType): DBusConnection;
    function registerService(busName: busType, serviceName?: string): DBusService;
    interface DBusConnection {
        /* tslint:disable-next-line:no-unnecessary-generics */
        getInterface<T = AnyInterfaceMethod>(serviceName: string, objectPath: string, interfaceName: string, callback: (err: Error | null, iface: DBusInterface<T>) => void): void;
        disconnect(): void;
        reconnect(callback: () => void): void;
        getUniqueServiceName(serviceName: string, callback: (err: Error | null, uniqueName: string) => void): void;
    }

    interface AnyInterfaceMethod { [methodName: string]: (...args: any[]) => void; }
    type PickMatching<T, U> = {
        [P in keyof T]: T[P] extends U ? T[P] : never;
    };
    type DBusInterface<T = AnyInterfaceMethod> = {
        bus: DBusConnection;
        serviceName: string;
        objectPath: string;
        interfaceName: string;

        getProperty(name: string, callback: (err: Error | null, name: string) => void): void;
        setProperty(name: string, value: any, callback: (err: Error | null) => void): void;
        getProperties(callback: (err: Error | null, properties: { [name: string]: any }) => void): void;

        /**
         * ...args
         * options: {timeout: number}
         * callback: (err: DBusError|undefined, res: any)=>void
         */
        // [methodName: string]: (...args: any[]) => void;
    } & PickMatching<T, (...args: any[]) => void>;

    interface DBusService {
        bus: DBusConnection;
        serviceName: string;

        createObject(path: string): DBusServiceObject;
        removeObject(service: DBusServiceObject): void;
        disconnect(): void;
    }

    interface DBusServiceObject {
        service: DBusService;
        path: string;
        createInterface(name: string): DBusServiceInterface;
    }

    type PropsCB = (err: Error | undefined, value: any) => void;
    interface DBusServiceInterface {
        object: DBusServiceObject;
        name: string;
        addMethod(method: string, opts: { in: string, out: string }, handler: (name: string, quality: any, callback: (res: any) => void) => void): void;
        addProperty(name: string, opts: {
            type: string,
            getter: (cb: (val: string) => void) => void,
            setter?: (value: any, done: () => void) => void
        }): void;
        addSignal(name: string, opts: { types: string[] }): void;
        emitSignal(name: string, ...values: any[]): void;
        update(): void;
    }

    class Error extends globalThis.Error {
        readonly dbusName: string;
        constructor(name: string, message: string);
    }
    function Signature(type: any): string;
}
/**
 * @deprecated
 */
declare class DBus { }
export = DBus;
