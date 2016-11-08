// Type definitions for azure-mobile-apps v2.1.7
// Project: https://github.com/Azure/azure-mobile-apps-node/
// Definitions by: Microsoft Azure <https://github.com/Azure/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="../express/express.d.ts" />
/// <reference path="../azure-sb/azure-sb.d.ts" />

declare module "azure-mobile-apps" {
    interface AzureMobileApps {
        (configuration?: Azure.MobileApps.Configuration): Azure.MobileApps.Platforms.Express.MobileApp;
        table(): Azure.MobileApps.Platforms.Express.Table;
        api(definition?: Azure.MobileApps.ApiDefinition): Azure.MobileApps.ApiDefinition;
        logger: Azure.MobileApps.Logger;
        query: Azure.MobileApps.Query;
    }

    var out: AzureMobileApps;
    export = out;
}
declare module "azure-mobile-apps/src/logger" {
    var logger: Azure.MobileApps.Logger;
    export = logger;
}

declare module "azure-mobile-apps/src/query" {
    var query: Azure.MobileApps.Query;
    export = query;
}

declare namespace Azure.MobileApps {
    // the additional Platforms namespace is required to avoid collisions with the main Express namespace
    export module Platforms {
        export module Express {
            interface MobileApp extends Middleware {
                configuration: Configuration;
                tables: Tables;
                table(): Table;
                api: Api;
                use(...middleware: Middleware[]): MobileApp;
                use(middleware: Middleware[]): MobileApp;
            }

            interface Api {
                add(name: string, definition: ApiDefinition): void;
                import(fileOrFolder: string): void;
            }

            interface Table extends TableDefinition {
                use(...middleware: Middleware[]): Table;
                use(middleware: Middleware[]): Table;
                read: TableOperation;
                update: TableOperation;
                insert: TableOperation;
                delete: TableOperation;
                undelete: TableOperation;
            }

            interface TableOperation {
                (operationHandler: (context: Context) => void): Table;
                use(...middleware: Middleware[]): Table;
                use(middleware: Middleware[]): Table;
                access?: AccessType;
            }

            interface Tables {
                configuration: Configuration;
                add(name: string, definition?: Table | TableDefinition): void;
                import(fileOrFolder: string): void;
                initialize(): Thenable<any>;
            }
        }
    }

    export module Data {
        interface Table {
            read(query: QueryJs): Thenable<any[]>;
            update(item: any, query: QueryJs): Thenable<any>;
            insert(item: any): Thenable<any>;
            delete(query: QueryJs, version: string): Thenable<any>;
            undelete(query: QueryJs, version: string): Thenable<any>;
            truncate(): Thenable<void>;
            initialize(): Thenable<void>;
            schema(): Thenable<Column[]>;
        }

        interface Column {
            name: string;
            type: string;
        }
    }

    // auth
    interface User {
        id: string;
        claims: any[];
        token: string;
        getIdentity(provider: string): Thenable<any>;
    }

    interface Auth {
        validate(token: string): Thenable<User>;
        decode(token: string): User;
        sign(payload: any): string;
    }

    // configuration
    interface Configuration {
        platform?: string;
        basePath?: string;
        configFile?: string;
        promiseConstructor?: (resolve: (result: any) => void, reject: (error: any) => void) => Thenable<any>;
        apiRootPath?: string;
        tableRootPath?: string;
        notificationRootPath?: string;
        swaggerPath?: string;
        authStubRoute?: string;
        debug?: boolean;
        version?: string;
        apiVersion?: string;
        homePage?: boolean;
        swagger?: boolean;
        maxTop?: number;
        pageSize?: number;
        logging?: Configuration.Logging;
        data?: Configuration.Data;
        auth?: Configuration.Auth;
        cors?: Configuration.Cors;
        notifications?: Configuration.Notifications;
        webhook?: Webhook;
    }

    export module Configuration {
        // it would be nice to have the config for various providers in separate interfaces,
        // but this is the simplest solution to support variations of the current setup
        interface Data {
            provider: string;
            user?: string;
            password?: string;
            server?: string;
            port?: number;
            database?: string;
            connectionTimeout?: string;
            options?: { encrypt: boolean };
            schema?: string;
            dynamicSchema?: boolean;
            filename?: string;
        }

        interface Auth {
            secret: string;
            validateTokens?: boolean;
        }

        interface Logging {
            level?: string;
            transports?: LoggingTransport[];
        }

        interface LoggingTransport { }

        interface Cors {
            exposeHeaders: string;
            maxAge?: number;
            hostnames: string[];
        }

        interface Notifications {
            hubName: string;
            connectionString?: string;
            endpoint?: string;
            sharedAccessKeyName?: string;
            sharedAccessKeyValue?: string;
        }
    }

    // query
    interface Query {
        create(tableName: string): QueryJs;
        fromRequest(req: Express.Request): QueryJs;
        toOData(query: QueryJs): OData;
    }

    interface QueryJs {
        includeTotalCount(): QueryJs;
        includeDeleted(): QueryJs;
        orderBy(properties: string): QueryJs;
        orderByDescending(properties: string): QueryJs;
        select(properties: string): QueryJs;
        skip(count: number): QueryJs;
        take(count: number): QueryJs;
        where(filter: any): QueryJs;
        // these are properties added by the SDK
        id?: string | number;
        single?: boolean;
    }

    interface OData {
        table: string;
        filters?: string;
        ordering?: string;
        orderClauses?: string;
        skip?: number;
        take?: number;
        selections?: string;
        includeTotalCount?: boolean;
    }

    // general
    var nh: Azure.ServiceBus.NotificationHubService;

    interface Context {
        query: QueryJs;
        id: string | number;
        item: any;
        req: Express.Request;
        res: Express.Response;
        data: ContextData;
        tables: (tableName: string) => Data.Table;
        user: User;
        push: typeof nh;
        logger: Logger;
        execute(): Thenable<any>;
        next(error: string|Error): any;
    }

    interface ContextData {
        (table: TableDefinition): Data.Table;
        execute(q: SqlQueryDefinition): Thenable<any>;
    }

    interface SqlQueryDefinition {
        sql: string;
        parameters?: SqlParameterDefinition[];
    }

    interface SqlParameterDefinition {
        name: string;
        value: any;
     }		     

    interface TableDefinition {
        access?: AccessType;
        authorize?: boolean;
        autoIncrement?: boolean;
        columns?: any;
        databaseTableName?: string;
        dynamicSchema?: boolean;
        maxTop?: number;
        name?: string;
        pageSize?: number;
        schema?: string;
        softDelete?: boolean;
        userIdColumn?: string;

        filters?: [(query: QueryJs, context: Context) => void | QueryJs];
        transforms?: [(item: any, context: Context) => void | any];
        hooks?: [(results: any, context: Context) => void];

        perUser?: boolean;
        recordsExpire?: Duration;
        webhook?: Webhook | boolean;
    }

    type AccessType = 'anonymous' | 'authenticated' | 'disabled';
    
    interface Duration {
        milliseconds?: number;
        seconds?: number;
        minutes?: number;
        hours?: number;
        days?: number;
        weeks?: number;
        months?: number;
        years?: number;
    }

    interface Webhook {
        url: string;
    }

    interface ApiDefinition {
        authorize?: boolean;
        get?: Middleware | Middleware[];
        post?: Middleware | Middleware[];
        patch?: Middleware | Middleware[];
        put?: Middleware | Middleware[];
        delete?: Middleware | Middleware[];
    }

    interface Thenable<R> {
        then<U>(onFulfilled?: (value: R) => U | Thenable<U>, onRejected?: (error: any) => U | Thenable<U>): Thenable<U>;
        then<U>(onFulfilled?: (value: R) => U | Thenable<U>, onRejected?: (error: any) => void): Thenable<U>;
        catch<U>(onRejected?: (error: any) => U | Thenable<U>): Thenable<U>;
        catch<U>(onRejected?: (error: any) => void): Thenable<U>;
    }

    interface Logger {
        log(level: string, ...message: any[]): void;
        silly(...message: any[]): void;
        debug(...message: any[]): void;
        verbose(...message: any[]): void;
        info(...message: any[]): void;
        warn(...message: any[]): void;
        error(...message: any[]): void;
    }

    interface Middleware {
        (req: Express.Request, res: Express.Response, next: NextMiddleware): void;
    }

    interface NextMiddleware {
        (error?: any): void;
    }
}

// additions to the Express modules
declare namespace Express {
    interface Request {
        azureMobile: Azure.MobileApps.Context
    }

    interface Response {
        results?: any;
    }
}
