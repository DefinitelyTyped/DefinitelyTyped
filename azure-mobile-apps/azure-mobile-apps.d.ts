// Type definitions for azure-mobile-apps v2.0.0-beta3
// Project: https://github.com/Azure/azure-mobile-apps-node/
// Definitions by: Microsoft Azure <https://github.com/Azure/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="../express/express.d.ts" />

declare module "azure-mobile-apps" {
    function returnedFunction(configuration?: AzureMobileApps.Configuration): AzureMobileApps.ExpressMobileApp;
    module returnedFunction { }
    export = returnedFunction;   
}

declare module "azure-mobile-apps/src/express" {
    function returnedFunction(configuration: AzureMobileApps.Configuration): AzureMobileApps.ExpressMobileApp;
    module returnedFunction { }
    export = returnedFunction;   
}

declare module "azure-mobile-apps/src/express/api" {
    function returnedFunction(configuration: AzureMobileApps.Configuration): AzureMobileApps.ExpressApi;
    module returnedFunction { }
    export = returnedFunction;   
}

declare module "azure-mobile-apps/src/express/table" {
    function returnedFunction(definition: AzureMobileApps.TableDefinition): AzureMobileApps.ExpressTable;
    module returnedFunction { }
    export = returnedFunction;   
}

declare module "azure-mobile-apps/src/express/tables" {
    function returnedFunction(configuration: AzureMobileApps.Configuration): AzureMobileApps.ExpressTables;
    module returnedFunction { }
    export = returnedFunction;   
}

declare module "azure-mobile-apps/src/auth" {
    function returnedFunction(configuration: AzureMobileApps.Configuration): AzureMobileApps.Auth;
    module returnedFunction { }
    export = returnedFunction;   
}

declare module "azure-mobile-apps/src/data" {
    function returnedFunction(configuration: AzureMobileApps.Configuration): (table: AzureMobileApps.ExpressTable) => AzureMobileApps.Data;
    module returnedFunction { }
    export = returnedFunction;   
}

declare module "azure-mobile-apps/src/logger" {
    var logger: AzureMobileApps.Logger;
    export = logger;
}

declare module "azure-mobile-apps/src/query" {
    var query: AzureMobileApps.Query;
    export = query; 
}

declare module AzureMobileApps {
    // express
    interface ExpressMobileApp {
        configuration: Configuration;
        tables: ExpressTables;
        table(): ExpressTable;
        api: ExpressApi;
        use(middleware: Middleware | Middleware[]): void;
    }

    interface ExpressApi {
        add(name: string, definition: ApiDefinition): void;
        import(fileOrFolder: string): void;
    }

    interface ExpressTable {
        authorize?: boolean;
        autoIncrement?: boolean;
        dynamicSchema?: boolean;
        name: string;
        columns?: any;
        schema: string;

        use(middleware: Middleware | Middleware[]): void;
        read(operationHandler: (context: Context) => void): void;
        update(operationHandler: (context: Context) => void): void;
        insert(operationHandler: (context: Context) => void): void;
        delete(operationHandler: (context: Context) => void): void;
        undelete(operationHandler: (context: Context) => void): void;
    }

    interface ExpressTables {
        configuration: Configuration;
        add(name: string, definition: ExpressTable | TableDefinition): void;
        import(fileOrFolder: string): void;
        initialize(): Thenable<any>;
    }

    // data
    interface Data {
        read(query: QueryJs): Thenable<any[]>;
        update(item: any, query: QueryJs): Thenable<any>;
        insert(item: any): Thenable<any>;
        delete(query: QueryJs, version: string): Thenable<any>;
        undelete(query: QueryJs, version: string): Thenable<any>;
        truncate(): Thenable<void>;
        initialize(): Thenable<void>;
        schema(): Thenable<SchemaResult[]>;
    }

    interface SchemaResult {
        name: string;
        type: string;
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
        logging?: LoggingConfiguration;
        data?: MssqlDataConfiguration;
        auth?: AuthConfiguration;
        cors?: CorsConfiguration;
        notifications?: NotificationsConfiguration;
    }

    interface DataConfiguration {
        provider?: string;
    }

    interface MssqlDataConfiguration {
        provider: string;
        user: string;
        password: string;
        server: string;
        port?: number;
        database: string;
        connectionTimeout?: string;
        options?: { encrypt: boolean };
        schema?: string;
        dynamicSchema?: boolean;
    }

    interface AuthConfiguration {
        secret: string;
        validateTokens?: boolean;
    }

    interface LoggingConfiguration {
        level?: string;
        transports?: LoggingTransport[];
    }

    interface LoggingTransport { }

    interface CorsConfiguration {
        maxAge?: number;
        origins: string[];
    }

    interface NotificationsConfiguration {
        hubName: string;
        connectionString?: string;
        endpoint?: string;
        sharedAccessKeyName?: string;
        sharedAccessKeyValue?: string;
    }

    // query
    interface Query {
        create(tableName: string): QueryJs;
        fromRequest(req: Express.Request): QueryJs;
        toOData(query: QueryJs): OData;
    }

    interface QueryJs {
        includeTotalCount?: boolean;
        orderBy(properties: string): QueryJs;
        orderByDescending(properties: string): QueryJs;
        select(properties: string): QueryJs;
        skip(count: number): QueryJs;
        take(count: number): QueryJs;
        where(filter: any): QueryJs;
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

    // notifications
    interface NotificationHubService {
        
    }

    // general
    interface Context {
        query: QueryJs;
        id: string | number;
        item: any;
        req: Express.Request;
        res: Express.Response;
        data: (table: TableDefinition) => Data;
        tables: (tableName: string) => Data;
        user: User;
        push: NotificationHubService;
        logger: Logger;
        execute(): Thenable<any>;
    }

    interface TableDefinition {
        authorize?: boolean;
        autoIncrement?: boolean;
        dynamicSchema?: boolean;
        name?: string;
        columns?: any;
        schema?: string;
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