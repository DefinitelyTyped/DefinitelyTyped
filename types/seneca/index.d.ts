declare module "seneca" {
    function SNS(options?: SNS.Options): SNS.Instance;

    namespace SNS {
        type UnknownType = any;

        interface Options {
            [plugin_name: string]: any;
            tag?: string | undefined;
            // Standard length of identifiers for actions.
            idlen?: number | undefined;
            // Standard timeout for actions.
            timeout?: number | undefined; // milliseconds
            // Register (true) default plugins. Set false to not register when
            // using custom versions.
            default_plugins?: {
                basic?: boolean | undefined;
                "mem-store"?: boolean | undefined;
                transport?: boolean | undefined;
                web?: boolean | undefined;
            } | undefined;
            // Settings for network REPL.
            repl?: {
                port?: number | undefined;
                host?: string | undefined;
            } | undefined;
            // Debug settings.
            debug?: {
                // Throw (some) errors from seneca.act.
                fragile?: boolean | undefined;
                // Fatal errors ... aren't fatal. Not for production!
                undead?: boolean | undefined;
                // Print debug info to console
                print?: {
                    // Print options. Best used via --seneca.print.options.
                    options?: boolean | undefined;
                } | undefined;
                // Trace action caller and place in args.caller$.
                act_caller?: boolean | undefined;
                // Shorten all identifiers to 2 characters.
                short_logs?: boolean | undefined;
                // Record and log callpoints (calling code locations).
                callpoint?: boolean | undefined;
            } | undefined;
            // Enforce strict behaviours. Relax when backwards compatibility needed.
            strict?: {
                // Action result must be a plain object.
                result?: boolean | undefined;
                // Delegate fixedargs override action args.
                fixedargs?: boolean | undefined;
                // Adding a pattern overrides existing pattern only if matches exactly.
                add?: boolean | undefined;
            } | undefined;
            // Action cache. Makes inbound messages idempotent.
            actcache?: {
                active?: boolean | undefined;
                size?: number | undefined;
            } | undefined;
            // Action executor tracing. See gate-executor module.
            trace?: {
                act?: boolean | undefined;
                stack?: boolean | undefined;
                unknown?: string | undefined;
            } | undefined;
            // Action statistics settings. See rolling-stats module.
            stats?: {
                size?: number | undefined;
                interval?: number | undefined;
                running?: boolean | undefined;
            } | undefined;
            // Wait time for plugins to close gracefully.
            deathdelay?: number | undefined;
            // Default seneca-admin settings.
            // TODO: move to seneca-admin!
            admin?: {
                local?: boolean | undefined;
                prefix?: string | undefined;
            } | undefined;
            // Plugin settings
            plugin?: any;
            // Internal settings.
            internal?: {
                // Close instance on these signals, if true.
                close_signals?: {
                    SIGHUP?: boolean | undefined;
                    SIGTERM?: boolean | undefined;
                    SIGINT?: boolean | undefined;
                    SIGBREAK?: boolean | undefined;
                } | undefined;
                actrouter?: UnknownType | undefined;
                clientrouter?: UnknownType | undefined;
                subrouter?: UnknownType | undefined;
            } | undefined;
            // Log status at periodic intervals.
            status?: {
                interval?: number | undefined;
                // By default, does not run.
                running?: boolean | undefined;
            } | undefined;
            // zig module settings for seneca.start() chaining.
            zig?: any;
            log?: LogSpec | {
                level?: LogLevel | undefined;
                short?: boolean | undefined;
            } | undefined;
            errhandler?: GlobalErrorHandler | undefined;
        }

        interface MinimalPattern {
            // role?: string;
            // cmd?: string;
        }

        type LogSpec =
            | "quiet"
            | // { level: 'none' }
            "silent"
            | // { level: 'none' }
            "any"
            | // { level: 'debug+' }
            "all"
            | // { level: 'debug+' }
            "print"
            | // { level: 'debug+' }
            "standard"
            | // { level: 'info+' }
            "test"; // { level: 'warn+' }

        type LogLevel =
            | "none"
            | "debug+"
            | "info+"
            | "warn+";

        interface Optioner {
            set: (input: string | Options) => Options;
            get: () => Options;
        }

        type ExecutorWorker = (callback: any) => void;
        type ExecutorCallback = (err: Error, result: any) => void;
        interface Executor {
            id: string;
            desc: string;
            fn: ExecutorWorker;
            cb: ExecutorCallback;
            gate: boolean;
            ungate: boolean;
            execute: UnknownType;
        }

        interface PluginOptions {
        }
        type PluginModule = (options: any) => void;

        interface ClientOptions {
        }

        interface ListenOptions {
        }

        interface EntityDataWithQuery {
            [entityKey: string]: any;
            id?: string | undefined;
            sort$?: any;
        }

        interface PartialMessagePayload {
            transport$: object | {};
            plugin$: any;
            fatal$: boolean;
            tx$: string;
        }

        type MessagePayload<T> = PartialMessagePayload & T;

        type Pattern = string | MinimalPattern;
        type GlobalErrorHandler = (error: Error) => void;
        type AddCallback<T = any> = (
            msg: MessagePayload<T>,
            respond: (error: Error | null, msg?: any) => void,
        ) => void;
        type ActCallback = (error: Error | null, result?: any) => void;
        type CloseCallback = (optional: any, done: (error: Error) => void) => void;
        type DatabaseID = string;
        type EntitySaveCallback = (error: Error, result: any) => void;
        type EntityLoadCallback = (error: Error, result: any) => void;
        type EntityRemoveCallback = (error: Error) => void;
        type EntityListCallback = (error: Error, result: any[]) => void;

        interface Instance {
            version: string;

            options(options: Options): void;

            error(handler: GlobalErrorHandler): void;
            on(eventName: string, callback: (error: Error) => void): any;
            close(callback: CloseCallback): void;
            use(module: PluginModule, options?: PluginOptions): this;
            use(name: string, options?: PluginOptions): this;
            client(options?: ClientOptions): this;
            listen(options?: ListenOptions): this;

            ready(callback: (error: Error) => void): void;

            add<PatternType = any, CallBackParams = any>(
                pattern: PatternType,
                action: AddCallback<PatternType & CallBackParams>,
            ): this;
            add<PatternType = any, CallbackParams = any>(
                pattern: PatternType,
                paramspec: any,
                action: AddCallback<PatternType & CallbackParams>,
            ): this;

            act<PatternWithArgs = Pattern>(pattern: PatternWithArgs, respond: ActCallback): void;
            act<PatternWithArgs = Pattern>(pattern: PatternWithArgs, msg: any, respond: ActCallback): void;
            make(entity_canon: string, properties?: any): Entity;
            make(base: string, entity_canon: string, properties?: any): Entity;
            make(zone: string, base: string, entity_canon: string, properties?: any): Entity;

            // @param name reference to plugin provided object
            export(name: string): PluginModule;

            pin(pattern: Pattern): void;
        }

        // NOTE: senecas documented use of:
        //    var product = seneca.make('product')
        //    product.name = 'Apple'
        // causes this error: error TS2339: Property 'name' does not exist on type 'Entity'.
        // Change such references to: product['name']
        interface Entity {
            (canon: any, seneca: any): void;
            [fieldname: string]: any;
            // there appear to be many more variants of make$(), but its unclear that they are intended for the public API
            make$(): Entity;
            make$(name: string): Entity;
            make$(base: string, name: string): Entity;
            make$(zone: string, base: string, name: string): Entity;

            save$(callback: EntitySaveCallback): void;
            save$(props: EntityDataWithQuery, callback: EntitySaveCallback): void;
            load$(id: DatabaseID | EntityDataWithQuery, callback: EntityLoadCallback): void;
            remove$(id: DatabaseID | EntityDataWithQuery, callback: EntityRemoveCallback): void;
            list$(query: EntityDataWithQuery, callback: EntityListCallback): void;
        }
    }

    export = SNS;
}
