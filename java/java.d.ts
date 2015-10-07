// Type definitions for java 0.5.4
// Project: https://github.com/joeferner/java
// Definitions by: Jim Lloyd <https://github.com/jimlloyd>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../bluebird/bluebird.d.ts" />
/// <reference path="../node/node.d.ts" />

// This is the core API exposed by https://github.com/joeferner/java.
// To get the full power of Typescript with Java, see https://github.com/RedSeal-co/ts-java.

declare module 'java' {
  var NodeJavaCore: NodeJavaCore.NodeAPI;
  export = NodeJavaCore;
}

declare module NodeJavaCore {
  export interface Callback<T> {
    (err?: Error, result?: T): void;
  }

  interface Promisify {
    (funct: Function, receiver?: any): Function;
  }

  interface AsyncOptions {
    syncSuffix: string;
    asyncSuffix?: string;
    promiseSuffix?: string;
    promisify?: Promisify;
  }

  interface ProxyFunctions {
    [index: string]: Function;
  }

  // *NodeAPI* declares methods & members exported by the node java module.
  interface NodeAPI {
    classpath: string[];
    asyncOptions: AsyncOptions;
    callMethod(instance: any, className: string, methodName: string, args: any[], callback: Callback<any>): void;
    callMethodSync(instance: any, className: string, methodName: string, ...args: any[]): any;
    callStaticMethodSync(className: string, methodName: string, ...args: any[]): any;
    instanceOf(javaObject: any, className: string): boolean;
    registerClient(before: (cb: Callback<void>) => void, after?: (cb: Callback<void>) => void): void;
    registerClientP(beforeP: () => Promise<void>, afterP?: () => Promise<void>): void;
    ensureJvm(done: Callback<void>): void;
    ensureJvm(): Promise<void>;

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
