// Type definitions for jsreport-core 1.5
// Project: http://jsreport.net
// Definitions by: taoqf <https://github.com/taoqf>
//                 pofider <https://github.com/pofider>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="node" />

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
        template: Partial<Template>;
        options?: Options;
        data: any;
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
        afterRenderListeners: ListenerCollection;
        afterTemplatingEnginesExecutedListeners: ListenerCollection;
        beforeRenderListeners: ListenerCollection;
        documentStore: DocumentStore;
        initializeListeners: ListenerCollection;
        // it would be nice to add winston.LoggerInstance here
        // however adding import winston = require('winston') breaks exported enums
        logger: any;
        validateRenderListeners: ListenerCollection;
        version: string;
        init(): Promise<Reporter>;
        render(options: Partial<Request>): Promise<Response>;
        discover(): Reporter;
        createListenerCollection(): ListenerCollection;
        close(): Promise<void>;
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
}

declare function JsReport(
    config?: Partial<JsReport.Configuration>
): JsReport.Reporter;

export = JsReport;
