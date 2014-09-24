// Type definitions for JXcore
// Project: https://github.com/Nubisa/jxdocs
// Definitions by: Peter Harris <https://github.com/codeanimal>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../node/node.d.ts" />

// TODO: Add JSDoc markup.

interface NodeEventEmitter { }

declare var jxcore: JXcore.JXcore;

declare function continueLogic(): void;

interface NodeProcess {
  keepAlive(timeout?: number): void;
  release(): void;
  sendToMain(param: any): void;
  sendToThread(threadId: number, param: any): void;
  sendToThreads(param: any): void;
  subThread: boolean;
  threadId: number;
  unloadThread(): void;
}

declare module NodeJS {
  interface Process extends NodeProcess { }
  interface EventEmitter extends NodeEventEmitter { }
}

interface Function {
  runTask(param: any, callback: (obj: any, result: any) => void, obj: any): void;
  runTask(param?: any, callback?: (result: any) => void): void;

  runOnce(param: any, callback: (obj: any, result?: any) => any, obj: any): void;
  runOnce(param?: any, callback?: (result?: any) => any): void;
}

declare module JXcore {
  interface JXcore {
    monitor: Monitor;
    store: Store;
    tasks: Tasks;
    utils: Utils;
  }

  interface Monitor {
    followMe(callback?: (err: boolean, message: string) => void, waitCallback?: (delay: number) => void): void;
    leaveMe(callback?: (err: boolean, message: string) => void): void;
  }

  interface Store {
    exists(key: string, element: string): boolean;
    get(key: string): string;
    read(key: string): string;
    remove(key: string): void;
    set(key: string, element: string): void;
    shared: SharedStore;
  }

  interface SharedStore extends Store {
    expires(key: string, timeout: number): void;
    getBlockTimeout(): number;
    safeBlock(key: string, safeBlockFunction: () => void, errorCallback?: (err: Error) => void): void;
    setBlockTimeout(timeout: number): void;
    setIfEqualsTo(key: string, newValue: string, checkValue: string): boolean;
    setIfEqualsToOrNull(key: string, newValue: string, checkValue: string): boolean;
    setIfNotExists(key: string, element: string): boolean;
  }

  interface Tasks extends NodeJS.EventEmitter {
    addTask(method: (param?: any) => any, param: any, callback: (obj: any, result: any) => void, obj: any): void;
    addTask(method: (param?: any) => any, param?: any, callback?: (result: any) => void): void;
    addTask(task: Task, param?: any): void;
    runOnThread(threadId: number, method: (param: any) => any, param: any, callback: (obj: any, result?: any) => void, obj: any): void;
    runOnThread(threadId: number, method: (param?: any) => any, param?: any, callback?: (result?: any) => void): void;
    runOnce(method: (param?: any) => any, param?: any, doNotRemember?: boolean): void;
    forceGC(): void;
    getThreadCount(): number;
    setThreadCount(value: number): void;
    jobCount(): number;
    killThread(threadId: number): void;
    unloadThreads(): void;
  }

  interface Task {
    define: () => void;
    logic: (param?: any) => any;
    waitLogic?: boolean;
  }

  interface Utils {
    pause(): void;
    jump(): void;
    continue(): void;

    console: ConsoleUtil;

    getCPU(callback: (percent: number, timeout: number) => void, timeout: number): void;
    getCPU(): void;

    OSInfo(): OSInfoValues;

    smartRequire(requireObj: typeof require): typeof require;

    uniqueId(): number;
  }

  interface OSInfoValues {
    fullName: string
    isUbuntu: boolean
    isDebian: boolean
    isMac: boolean
    is64: boolean
    is32: boolean
    isARM: boolean
    isRH: boolean
    isSuse: boolean
    isBSD: boolean
    isArch: boolean
    isWindows: boolean
    OS_STR: string
  }

  interface ConsoleUtil extends Console {
    write(...data: any[]): void;
    setColor(data: string, color: string): string;
  }
}