// Type definitions for jsreport-core 2.0
// Project: http://jsreport.net
// Definitions by: taoqf <https://github.com/taoqf>
//                 pofider <https://github.com/pofider>
//                 Keith Kikta <https://github.com/newbish>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="node" />

import * as fs from 'fs';

declare namespace JsReport {
    type Helpers = string | { [fun: string]: (...args: any[]) => any };

    type Engine = "none";

    type Recipe = "html";

    interface TemplateBase {
        /** template for the engine */
        content?: string;
        /** templating engine used to assemble document */
        engine: Engine | string;
        /** javascript helper functions used by templating engines */
        helpers?: Helpers;
        /** recipe used for printing previously assembled document */
        recipe: Recipe | string;
        pathToEngine?: string;
    }

    interface Template extends TemplateBase {
        /** template for the engine */
        content: string;
    }

    interface TemplateRegistry {
        Template: Template;
    }

    type TemplateLike = TemplateRegistry[keyof TemplateRegistry]; // Template | NamedTemplate

    interface RequestOptions {
        preview?: boolean;
        /** sets the request timeout in milliseconds */
        timeout?: number;
        /** defines the name of the report being to be generated */
        reportName?: string;
    }

    interface Request {
        /** @default true */
        value?: boolean;
        /** @default false */
        writable?: boolean;
        /** @default false */
        configurable?: boolean;
        /** @default false */
        enumerable?: boolean;
        /** defines the template of used for report generation */
        template: TemplateLike;
        /** defines options such as report name and request timeout */
        options?: Partial<RequestOptions>;
        context?: Context;
        data?: any;
    }

    interface Context {
        shared?: any;
        originalInputDataIsEmpty?: boolean;
        isChildRequest?: boolean;
        logs: any;
        timeoutLimit: number;
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

    interface ReporterInstance {
        defaults?: Defaults;
        options?: Configuration;
        afterRenderListeners: ListenerCollection;
        afterTemplatingEnginesExecutedListeners: ListenerCollection;
        beforeRenderListeners: ListenerCollection;
        closeListeners: ListenerCollection;
        documentStore: DocumentStore;
        blobStorage: BlobStorage;
        initializeListeners: ListenerCollection;
        renderErrorListeners: ListenerCollection;
        // it would be nice to add winston.LoggerInstance here
        // however adding import winston = require('winston') breaks exported enums
        logger?: any;
        validateRenderListeners: ListenerCollection;
        version?: string;
        settings: Settings;
        optionsValidator: SchemaValidator;
        entityTypeValidator: SchemaValidator;
    }

    interface Reporter extends ReporterInstance {
        use(extension: Extension | ExtensionDefinition): Reporter;
        init(): Promise<Reporter>;
        render(request: Request, parent?: Request): Promise<Response>;
        discover(): Reporter;
        createListenerCollection(): ListenerCollection;
        close(): Promise<void>;
        extensionsLoad(opts: any): Promise<Reporter>;
        checkValidEntityName(c: string, doc: any, req: Request): Promise<void>;
        createError(message: string, options?: any): any;
        getAvailableRenderTimeout(req: Request, defaultValue: number): number;
        executeScript(inputs: any, options: any, req: Request): Promise<any>;
        afterConfigLoaded(cb: () => void): Reporter;
        addRequestContextMetaConfig(property: any, options: any): void;
        getRequestContextMetaConfig(property: any): any;
        addPathToWatchForAutoCleanup(customPath: string): void;
        getPathsToWatchForAutoCleanup(): string[];
        ensureTempDirectoryExists(): Promise<TempDirectoryResult>;
        readTempFile(filename: string, opts: any): Promise<ReadTempFileResult>;
        writeTempFile(filenameFn: () => string, content: any, opts: any): Promise<WriteFileResult>;
        readTempFileStream(filename: string, opts: any): Promise<ReadTempFileStreamResult>;
        writeTempFileStream(filenameFn: () => string, opts: any): Promise<WriteFileStreamResult>;
        silentLogs(logger: any): void;
    }

    interface Defaults {
        loadConfig?: boolean;
        rootDirectory?: string;
    }

    type ReporterOptionsStoreProvider = 'memory';
    type ReporterOptionsBlobStorageProvider = 'memory' | 'fs';
    type EngineStrategy = 'dedicated-process' | 'http-server' | 'in-process';

    interface Configuration {
        mode?: any;
        /** specifies where is the application root and where jsreport searches for extensions */
        rootDirectory?: string;
        /** specifies directory of the script that was used to start node.js, this value is mostly metadata that is useful for your own code inside jsreport scripts */
        appDirectory?: string;
        /**
         * specifies where jsreport stores temporary files used by the conversion pipelineDef
         * @default getDefaultTempDirectory()
         */
        tempDirectory?: string;
        /**
         * specifies if jsreport should load configuration values from external sources (cli args, env vars, configuration files) or not
         * @default getDefaultLoadConfig()
         */
        loadConfig?: boolean;
        /** specifies if after some interval jsreport should automatically clean up temporary files generated while rendering reports */
        autoTempCleanup?: boolean;
        /** specifies if jsreport should discover/search installed extensions in project and use them automatically */
        discover?: boolean;
        /**
         * wheter if jsreport should read list of extensions from a previous generated cache or if it should crawl and try to search extensions again, set it to false when you want to always
         * force crawling node_modules when searching for extensions while starting jsreport
         * @default true
         */
        useExtensionsLocationCache?: boolean;
        logger?: {
            silent?: boolean;
        };
        /** global single timeout that controls how much a report generation should wait before it times out */
        reportTimeout?: number;
        /**
         * option that enables passing a custom report timeout per request using req.options.timeout. this enables that the caller of the report generation control the report timeout so enable it
         * only when you trust the caller
         * @default false
         */
        enableRequestReportTimeout?: boolean;
        /** @default false */
        allowLocalFilesAccess?: boolean;
        encryption?: {
            /** lenght must be 16 characters */
            secretKey: string;
            /** @default true */
            enabled?: boolean;
        };
        templatingEngines?: {
            /** @default 'dedicated-process' */
            strategy?: EngineStrategy;
            /**
             * defines the number of worker processes used for generating reports
             * @default 1
             */
            numberOfWorkers?: number;
            forkOptions?: {
                execArgv?: string | string[];
            };
            allowedModules?: string | string[];
            /** sets the reporter timeout in milliseconds */
            timeout?: number;
            templateCache?: {
                max: number;
                enabled: boolean;
            };
        };
        store?: {
            provider?: ReporterOptionsStoreProvider;
        };
        blobStorge?: {
            provider?: ReporterOptionsBlobStorageProvider;
        };
        extensions?: any;
        extensionsList?: string[];
        /** @default true */
        migrateEntitySetsToFolders?: boolean;
        connectionString?: string;
    }

    interface Settings {
        add(key: string, value: any, req: Request): any;
        get(key: string): [SettingItem];
        findValue(key: string, req: Request): any;
        set(key: string, avalue: any, req: Request): any;
        addOrSet(key: string, avalue: any, req: Request): number | null;
        init(documentStore: any, authorization: any): any;
        _collection: SettingItem[];
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

    interface BlobStorage {
        registerProvider(provider: any): void;
        read(...args: any): any;
        write(...args: any): any;
        remove(...args: any): Promise<any>;
        init(): Promise<any>;
    }
}

declare function JsReport(
    config?: JsReport.Configuration,
    defaults?: JsReport.Defaults,
): JsReport.Reporter;

export = JsReport;
