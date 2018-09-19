// Type definitions for MSApp
// Definitions by: Kagami Sascha Rosylight <https://github.com/saschanaz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

interface MSApp {
    clearTemporaryWebDataAsync(): MSAppAsyncOperation;
    createBlobFromRandomAccessStream(type: string, seeker: any): Blob;
    createDataPackage(object: any): any;
    createDataPackageFromSelection(): any;
    createFileFromStorageFile(storageFile: any): File;
    createStreamFromInputStream(type: string, inputStream: any): MSStream;
    execAsyncAtPriority(asynchronousCallback: MSExecAtPriorityFunctionCallback, priority: string, ...args: any[]): void;
    execAtPriority(synchronousCallback: MSExecAtPriorityFunctionCallback, priority: string, ...args: any[]): any;
    getCurrentPriority(): string;
    getHtmlPrintDocumentSourceAsync(htmlDoc: any): Promise<any>;
    getViewId(view: any): any;
    isTaskScheduledAtPriorityOrHigher(priority: string): boolean;
    pageHandlesAllApplicationActivations(enabled: boolean): void;
    suppressSubdownloadCredentialPrompts(suppress: boolean): void;
    terminateApp(exceptionObject: any): void;
    readonly CURRENT: string;
    readonly HIGH: string;
    readonly IDLE: string;
    readonly NORMAL: string;
}
declare var MSApp: MSApp;

interface MSAppAsyncOperationEventMap {
    "complete": Event;
    "error": Event;
}

interface MSAppAsyncOperation extends EventTarget {
    readonly error: DOMError;
    oncomplete: (this: MSAppAsyncOperation, ev: Event) => any;
    onerror: (this: MSAppAsyncOperation, ev: Event) => any;
    readonly readyState: number;
    readonly result: any;
    start(): void;
    readonly COMPLETED: number;
    readonly ERROR: number;
    readonly STARTED: number;
    addEventListener<K extends keyof MSAppAsyncOperationEventMap>(
        type: K,
        listener: (this: MSAppAsyncOperation, ev: MSAppAsyncOperationEventMap[K]) => any,
        options?: boolean | AddEventListenerOptions
    ): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof MSAppAsyncOperationEventMap>(
        type: K,
        listener: (this: MSAppAsyncOperation, ev: MSAppAsyncOperationEventMap[K]) => any,
        options?: boolean | EventListenerOptions
    ): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

declare var MSAppAsyncOperation: {
    prototype: MSAppAsyncOperation;
    new(): MSAppAsyncOperation;
    readonly COMPLETED: number;
    readonly ERROR: number;
    readonly STARTED: number;
};

type MSExecAtPriorityFunctionCallback = (...args: any[]) => any;
