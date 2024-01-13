// This is the core API exposed by https://github.com/joeferner/java.
// To get the full power of Typescript with Java, see https://github.com/RedSeal-co/ts-java.

declare var NodeJavaCore: NodeJavaCore.NodeAPI;
export = NodeJavaCore;

declare namespace NodeJavaCore {
    export interface Callback<T> {
        (err?: Error, result?: T): void;
    }

    interface Promisify {
        (funct: Function, receiver?: any): Function;
    }

    interface AsyncOptions {
        syncSuffix: string;
        asyncSuffix?: string | undefined;
        promiseSuffix?: string | undefined;
        promisify?: Promisify | undefined;
    }

    interface ProxyFunctions {
        [index: string]: Function;
    }

    // *NodeAPI* declares methods & members exported by the node java module.
    interface NodeAPI {
        classpath: string[];
        options: string[];
        asyncOptions: AsyncOptions;
        nativeBindingLocation: string;

        callMethod(instance: any, methodName: string, args: any[], callback: Callback<any>): void;
        callMethodSync(instance: any, methodName: string, ...args: any[]): any;
        callStaticMethod(className: string, methodName: string, ...args: Array<any | Callback<any>>): void;
        callStaticMethodSync(className: string, methodName: string, ...args: any[]): any;
        getStaticFieldValue(className: string, fieldName: string): any;
        setStaticFieldValue(className: string, fieldName: string, newValue: any): void;
        instanceOf(javaObject: any, className: string): boolean;
        registerClient(before: (cb: Callback<void>) => void, after?: (cb: Callback<void>) => void): void;
        registerClientP(beforeP: () => Promise<void>, afterP?: () => Promise<void>): void;
        ensureJvm(done: Callback<void>): void;
        ensureJvm(): Promise<void>;
        isJvmCreated(): boolean;

        newByte(val: number): any;
        newChar(val: string | number): any;
        newDouble(val: number): any;
        newShort(val: number): any;
        newLong(val: number): any;
        newFloat(val: number): any;
        newDouble(val: number): any;

        import(className: string): any;
        newInstance(className: string, ...args: any[]): void;
        newInstanceSync(className: string, ...args: any[]): any;
        newInstanceP(className: string, ...args: any[]): Promise<any>;
        newArray<T>(className: string, arg: any[]): any;
        getClassLoader(): any;

        newProxy(interfaceName: string, functions: ProxyFunctions): any;
    }
}
