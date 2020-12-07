// Type definitions for jsreport-core 1.5
// Project: http://jsreport.net
// Definitions by: taoqf <https://github.com/taoqf>
//                 pofider <https://github.com/pofider>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="node" />

import * as fs from 'fs';

declare namespace JsReport {
    type Helpers = string | { [fun: string]: (...args: any[]) => any };

    type Engine = "none";

    type Recipe = "html";

    interface Template {
        content: string;
        engine: Engine | string;
        helpers: Helpers;
        recipe: Recipe | string;
    }

    interface Options {
        preview?: boolean;
    }

    interface Request {
        value?: boolean;
        writable?: boolean;
        configurable?: boolean;
        enumerable?: boolean;
        template?: Partial<Template>;
        options?: Options;
        context?: Context;
        data?: any;
    }

    interface Context {
        shared?: any;
        originalInputDataIsEmpty?: boolean;
        isChildRequest?: boolean;
    }

    interface Response {
        content: Buffer;
        stream: NodeJS.ReadableStream;
        headers: {
            [header: string]: string | number | boolean;
        };
    }

    interface ListenerCollection {
        add(
            type: string,
            callback: (req: Request, res: Response, err?: any) => Promise<any> | void
        ): void;
    }

    interface Collection {
        find(query: { [field: string]: any }): Promise<object[]>;
        update(query: { [field: string]: any }, update: object, options?: object): Promise<any>;
        remove(query: { [field: string]: any }): Promise<any>;
        insert(obj: object): Promise<object>;
    }

    interface DocumentStore {
        collection(name: string): Collection;
    }

    type Extension = (reporter: Reporter, definition: object) => void;

    interface ExtensionDefinition {
        options: any;
        main: any;
        directory: string;
    }

    interface Reporter {
        use(extension: Extension | ExtensionDefinition): Reporter;
    }

    interface Reporter {
        defaults?: any;
        options?: any;
        afterRenderListeners?: ListenerCollection;
        afterTemplatingEnginesExecutedListeners?: ListenerCollection;
        beforeRenderListeners?: ListenerCollection;
        closeListeners?: ListenerCollection;
        documentStore?: DocumentStore;
        initializeListeners?: ListenerCollection;
        renderErrorListeners?: ListenerCollection;
        // it would be nice to add winston.LoggerInstance here
        // however adding import winston = require('winston') breaks exported enums
        logger: any;
        validateRenderListeners: ListenerCollection;
        version?: string;
        settings?: Settings;
        init(): Promise<Reporter>;
        render(options: Partial<Request>): Promise<Response>;
        discover(): Reporter;
        createListenerCollection(): ListenerCollection;
        close(): Promise<void>;
        optionsValidator?: SchemaValidator;
        entityTypeValidator?: SchemaValidator;
        extensionsLoad(opts: any): Promise<Reporter>;
        checkValidEntityName(c: string, doc: any, req: Request): Promise<void>;
        createError(message: string, options?: any): any;
        getAvailableRenderTimeout(req: Request, defaultValue: any): any;
        executeScript(inputs: any, options: any, req: Request): Promise<any>;
        afterConfigLoaded(cb: Function): Reporter;
        addRequestContextMetaConfig(property: any, options: any): void;
        getRequestContextMetaConfig(property: any): any;
        addPathToWatchForAutoCleanup(customPath: string): void;
        getPathsToWatchForAutoCleanup(): any;
        ensureTempDirectoryExists(): Promise<TempDirectoryResult>;
        readTempFile(filename: string, opts: any): Promise<ReadTempFileResult>;
        writeTempFile(filenameFn: Function, content: any, opts: any): Promise<WriteFileResult>;
        readTempFileStream(filename: string, opts: any): Promise<ReadTempFileStreamResult>;
        writeTempFileStream(filenameFn: Function, opts: any): Promise<WriteFileStreamResult>;
        silentLogs(logger: any): void;
    }

    interface Configuration {
        autoTempCleanup: boolean;
        dataDirectory: string;
        extensionsLocationCache: boolean;
        loadConfig: boolean;
        logger: {
            silent: boolean;
        };
        rootDirectory: string;
        scripts: {
            allowedModules: string[];
        };
        tasks: Partial<{
            allowedModules: string[] | string;
            strategy: "dedicated-process" | "http-server" | "in-process" | string;
        }>;
        tempDirectory: string;
    }

    interface Settings {
        add(key: string, value: string | any, req: Request): any;
        get(key: string): [SettingItem];
        findValue(key: string, req: Request): any;
        set(key: string, avalue: any, req: Request): any;
        addOrSet(key: string, avalue: any, req: Request): number | null;
        init(documentStore: any, authorization: any): any;
        _collection: [SettingItem];
        documentStore: any;
        registerEntity(documentStore: any): void;
    }

    interface SettingItem {
        key: string;
        value: any;
    }

    interface SchemaValidator {
        schemaVersion: string;
        rootSchema: any;
        getRootSchema(): any;
        validateRoot(data: any, schema?: any): any;
        addSchema(name: string, _schema: any, replace: boolean): void;
        validate(name: string, data: any, schema?: any): any;
        getSchema(name: string): any;
    }

    interface TempDirectoryResult {
        directoryPath: string;
    }

    interface WriteFileResult {
        pathToFile: string;
        filename: string;
    }
    interface WriteFileStreamResult {
        pathToFile: string;
        filename: string;
        stream: fs.WriteStream;
    }

    interface ReadTempFileResult {
        pathToFile: string;
        filename: string;
        context: string;
    }

    interface ReadTempFileStreamResult {
        pathToFile: string;
        filename: string;
        stream: fs.ReadStream;
    }
}

declare function JsReport(
    config?: Partial<JsReport.Configuration>
): JsReport.Reporter;

export = JsReport;
