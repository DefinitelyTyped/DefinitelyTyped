import * as ESTree from "estree";
import { Context, Scope, Type } from "../infer";

export { };

// #### Programming interface ####
export type ConstructorOptions = CtorOptions & (SyncConstructorOptions | ASyncConstructorOptions);

export interface CtorOptions {
    /** The definition objects to load into the server’s environment. */
    defs?: Def[] | undefined;
    /** The ECMAScript version to parse. Should be either 5 or 6. Default is 6. */
    ecmaVersion?: 5 | 6 | undefined;
    /** Indicates the maximum amount of milliseconds to wait for an asynchronous getFile before giving up on it. Defaults to 1000. */
    fetchTimeout?: number | undefined;
    /** Specifies the set of plugins that the server should load. The property names of the object name the plugins, and their values hold options that will be passed to them. */
    plugins?: { [key: string]: object } | undefined;
}

export interface SyncConstructorOptions {
    /** Indicates whether `getFile` is asynchronous. Default is `false`. */
    async?: false | undefined;
    /**
     * Provides a way for the server to try and fetch the content of files.
     * Depending on the `async` option, this is either a function that takes a filename and returns a string (when not `async`), or
     * a function that takes a `filename` and a `callback`, and calls the callback with an optional `error` as the first argument,
     * and the `content` string (if no error) as the second.
     */
    getFile?(filename: string): string;
}

export interface ASyncConstructorOptions {
    /** Indicates whether `getFile` is asynchronous. Default is `false`. */
    async: true;
    /**
     * Provides a way for the server to try and fetch the content of files.
     * Depending on the `async` option, this is either a function that takes a filename and returns a string (when not `async`), or
     * a function that takes a `filename` and a `callback`, and calls the callback with an optional `error` as the first argument,
     * and the `content` string (if no error) as the second.
     */
    getFile?(filename: string, callback: (error: Error | undefined, content?: string) => void): void;
}

interface TernConstructor {
    new(options?: ConstructorOptions): Server;
}

export const Server: TernConstructor;

export interface Server {
    readonly cx: Context;
    readonly options: ConstructorOptions;
    readonly files: File[];
    readonly plugins: any;
    /**
     * Add a set of type definitions to the server. If `atFront` is true, they will be added before all other
     * existing definitions. Otherwise, they are added at the back.
     */
    addDefs(defs: Def[], atFront?: boolean): void;

    /**
     * Register a file with the server. Note that files can also be included in requests. When using this
     * to automatically load a dependency, specify the name of the file (as Tern knows it) as the third
     * argument. That way, the file is counted towards the dependency budget of the root of its dependency graph.
     */
    addFile(name: string, text?: string, parent?: string): void;

    /** Unregister a file. */
    delFile(name: string): void;

    /**
     * Delete a set of type definitions from the server, by providing the name, taken from
     * `defs[!name]` property from the definitions. If that property is not available in the
     * current type definitions, it can’t be removed.
     */
    deleteDefs(name: string): void;

    /** Forces all files to be fetched an analyzed, and then calls the callback function. */
    flush(callback: () => void): void;

    /** Load a server plugin (or don’t do anything, if the plugin is already loaded). */
    loadPlugin(name: string, options: object): void;

    /** Unregister an event handler. */
    off<K extends keyof Events>(eventType: K, handler: Events[K]): void;

    /** Register an event handler for the named type of event. */
    on<K extends keyof Events>(eventType: K, handler: Events[K]): void;

    /**
     * Perform a request. `doc` is a (parsed) JSON document as described in the protocol documentation.
     * The `callback` function will be called when the request completes. If an `error` occurred,
     * it will be passed as a first argument. Otherwise, the `response` (parsed) JSON object will be passed as second argument.
     *
     * When the server hasn’t been configured to be asynchronous, the callback will be called before request returns.
     */
    request<Q extends Query, D extends Document>(
        doc: D & { query?: Q | undefined },
        callback: (
            error: string | null,
            response: (D extends { query: undefined } ? {} : D extends { query: Query } ? QueryResult<Q> : {}) | undefined
        ) => void
    ): void;
    reset(): void;
    signal(event: keyof Events, file: File): void;
}

// #### JSON Protocol ####

export type QueryResult<Q extends Query> = QueryRegistry[Q["type"]]["result"];

export type Query = QueryRegistry[keyof QueryRegistry]["query"];

export interface QueryRegistry {
    completions: {
        query: CompletionsQuery,
        result: CompletionsQueryResult
    };
    type: {
        query: TypeQuery,
        result: TypeQueryResult
    };
    definition: {
        query: DefinitionQuery,
        result: DefinitionQueryResult
    };
    documentation: {
        query: DocumentationQuery;
        result: DocumentationQueryResult;
    };
    refs: {
        query: RefsQuery;
        result: RefsQueryResult;
    };
    rename: {
        query: RenameQuery,
        result: RenameQueryResult
    };
    properties: {
        query: PropertiesQuery,
        result: PropertiesQueryResult
    };
    files: {
        query: FilesQuery,
        result: FilesQueryResult
    };
}

export interface Def {
    [key: string]: string | Def;
}

export interface Document {
    query?: Query | undefined;
    files?: File[] | undefined;
    timeout?: number | undefined;
}

export interface File {
    name: string;
    text: string;
    scope: Scope;
    ast: ESTree.Program;
    type?: "full" | "part" | "delete" | undefined;
    asLineChar?(nodePosition: number): Position;
}

export interface BaseQuery {
    type: string;
    lineCharPositions?: boolean | undefined;
    docFormat?: "full" | undefined;
}

export interface BaseQueryWithFile extends BaseQuery {
    /** may hold either a filename, or a string in the form "#N", where N should be an integer referring to one of the files included in the request */
    file: string;
}

export interface Position {
    ch: number;
    line: number;
}

/** Asks the server for a set of completions at the given point. */
export interface CompletionsQuery extends BaseQueryWithFile {
    /** Asks the server for a set of completions at the given point. */
    type: "completions";
    /** Specify the location to complete at. */
    end: number | Position;
    /** Whether to include the types of the completions in the result data. Default `false` */
    types?: boolean | undefined;
    /** Whether to include the distance (in scopes for variables, in prototypes for properties) between the completions and the origin position in the result data. Default `false` */
    depths?: boolean | undefined;
    /** Whether to include documentation strings in the result data. Default `false` */
    docs?: boolean | undefined;
    /** Whether to include urls in the result data. Default `false` */
    urls?: boolean | undefined;
    /** Whether to include origin files (if found) in the result data. Default `false` */
    origins?: boolean | undefined;
    /** When on, only completions that match the current word at the given point will be returned. Turn this off to get all results, so that you can filter on the client side. Default `true` */
    filter?: boolean | undefined;
    /** Whether to use a case-insensitive compare between the current word and potential completions. Default `false` */
    caseInsensitive?: boolean | undefined;
    /** When completing a property and no completions are found, Tern will use some heuristics to try and return some properties anyway. Set this to `false` to turn that off. Default `true` */
    guess?: boolean | undefined;
    /** Determines whether the result set will be sorted. Default `true` */
    sort?: boolean | undefined;
    /**
     * When disabled, only the text before the given position is considered part of the word. When enabled (the default),
     * the whole variable name that the cursor is on will be included. Default `true`
     */
    expandWordForward?: boolean | undefined;
    /** Whether to ignore the properties of `Object.prototype` unless they have been spelled out by at least two characters. Default `true` */
    omitObjectPrototype?: boolean | undefined;
    /** Whether to include JavaScript keywords when completing something that is not a property. Default `false` */
    includeKeywords?: boolean | undefined;
    /** If completions should be returned when inside a literal. Default `true` */
    inLiteral?: boolean | undefined;
}

export interface CompletionsQueryResult {
    /** start offsets of the word that was completed */
    start: number | Position;
    /** end offsets of the word that was completed */
    end: number | Position;
    /** whether the completion is for a property or a variable */
    isProperty: boolean;
    // TODO depends on completionsquery settings -> conditional types?
    /**
     * array of completions. When one of the `types`, `depths`, `docs`, `urls`, or `origins`
     * options was passed, the array will hold objects with a `name` property (the completion text),
     * and, depending on the options, `type`, `depth`, `doc`, `url`, and `origin` properties.
     * When none of these options are enabled, the result array will hold plain strings.
     */
    completions: string[] | Array<{
        name: string,
        type?: string | undefined,
        depth?: number | undefined,
        doc?: string | undefined,
        url?: string | undefined,
        origin?: string | undefined
    }>;
}

/** Query the type of something. */
export interface TypeQuery extends BaseQueryWithFile {
    /** Query the type of something. */
    type: "type";
    /** Specify the location of the expression. */
    end: number | Position;
    /** Specify the location of the expression. */
    start?: number | Position | undefined;
    /**
     * Set to `true` when you are interested in a function type.
     * This will cause function types to win when something has multiple types.
     * Default `false`
     */
    preferFunction?: boolean | undefined;
    /**
     * Determines how deep the type string must be expanded.
     * Nested objects will only display property types up to this depth,
     * and be represented by their type name or a representation showing
     * only property names below it. Default `0`
     */
    depth?: number | undefined;
}

export interface TypeQueryResult {
    /** A description of the type of the value. May be "?" when no type was found. */
    type: string;
    /** Whether the given type was guessed, or should be considered reliable. */
    guess: boolean;
    /** The name associated with the type. */
    name?: string | undefined;
    /** When the inspected expression was an identifier or a property access, this will hold the name of the variable or property. */
    exprName?: string | undefined;
    /** If the type had documentation associated with it, these will also be returned. */
    doc?: string | undefined;
    /** If the type had urls associated with it, these will also be returned. */
    url?: string | undefined;
    /** If the type had origin information associated with it, these will also be returned. */
    origin?: string | undefined;
}

/**
 * Asks for the definition of something. This will try, for a variable or property,
 * to return the point at which it was defined. If that fails, or the chosen
 * expression is not an identifier or property reference, it will try to return
 * the definition site of the type the expression has. If no type is found, or the
 * type is not an object or function (other types don’t store their definition site),
 * it will fail to return useful information.
 */
export interface DefinitionQuery extends BaseQueryWithFile {
    /**
     * Asks for the definition of something. This will try, for a variable or property,
     * to return the point at which it was defined. If that fails, or the chosen
     * expression is not an identifier or property reference, it will try to return
     * the definition site of the type the expression has. If no type is found, or the
     * type is not an object or function (other types don’t store their definition site),
     * it will fail to return useful information.
     */
    type: "definition";
    /** Specify the location of the expression. */
    end: number | Position;
    /** Specify the location of the expression. */
    start?: number | Position | undefined;
}

export interface DefinitionQueryResult {
    /** The start position of the expression. */
    start?: number | Position | undefined;
    /** The end position of the expression. */
    end?: number | Position | undefined;
    /** The file in which the definition was defined. */
    file?: string | undefined;
    /** A slice of the code in front of the definition Can be used to find a definition’s location in a modified file. */
    context?: string | undefined;
    /** The offset from the start of the context to the actual definition. Can be used to find a definition’s location in a modified file. */
    contextOffset?: number | undefined;
    /** If the definition had documentation associated with it, these will also be returned. */
    doc?: string | undefined;
    /** If the definition had urls associated with it, these will also be returned. */
    url?: string | undefined;
    /** If the definition had origin information associated with it, these will also be returned. */
    origin?: string | undefined;
}

/** Get the documentation string and URL for a given expression, if any. */
export interface DocumentationQuery extends BaseQueryWithFile {
    /** Get the documentation string and URL for a given expression, if any. */
    type: "documentation";
    /** Specify the location of the expression. */
    end: number | Position;
    /** Specify the location of the expression. */
    start?: number | Position | undefined;
}

export interface DocumentationQueryResult {
    /** The documentation string of the definition or value, if any. */
    doc?: string | undefined;
    /** The url of the definition or value, if any. */
    url?: string | undefined;
    /** The origin of the definition or value, if any. */
    origin?: string | undefined;
}

/** Used to find all references to a given variable or property. */
export interface RefsQuery extends BaseQueryWithFile {
    /** Used to find all references to a given variable or property. */
    type: "refs";
    /** Specify the location of the expression. */
    end: number | Position;
    /** Specify the location of the expression. */
    start?: number | Position | undefined;
}

export interface RefsQueryResult {
    /** The name of the variable or property */
    name: string;
    refs: Array<{
        file: string,
        start: number | Position,
        end: number | Position
    }>;
    /** for variables: a type property holding either "global" or "local". */
    type?: "global" | "local" | undefined;
}

/** Rename a variable in a scope-aware way. */
export interface RenameQuery extends BaseQueryWithFile {
    /** Rename a variable in a scope-aware way. */
    type: "rename";
    /** Specify the location of the variable. */
    end: number | Position;
    /** Specify the location of the variable. */
    start?: number | Position | undefined;
    /** The new name of the variable */
    newName: string;
}

/**
 * Returns an object whose `changes` property holds an array of `{file, start, end, text}` objects, which
 * give the changes that must be performed to apply the rename. The client is responsible for doing the actual modification.
 */
export interface RenameQueryResult {
    /** Array of changes that must be performed to apply the rename. The client is responsible for doing the actual modification. */
    changes: Array<{
        file: string,
        start: number | Position,
        end: number | Position,
        text: string
    }>;
}

/** Get a list of all known object property names (for any object). */
export interface PropertiesQuery extends BaseQuery {
    /** Get a list of all known object property names (for any object). */
    type: "properties";
    /** Causes the server to only return properties that start with the given string. */
    prefix?: string | undefined;
    /** Whether the result should be sorted. Default `true` */
    sort?: boolean | undefined;
}

export interface PropertiesQueryResult {
    /** The property names. */
    completions: string[];
}

/** Get the files that the server currently holds in its set of analyzed files. */
export interface FilesQuery extends BaseQuery {
    /** Get the files that the server currently holds in its set of analyzed files. */
    type: "files";
    docFormat?: never | undefined;
    lineCharPositions?: never | undefined;
}

export interface FilesQueryResult {
    /** The file names. */
    files: string[];
}

export interface Events {
    /** When the server throws away its current analysis data and starts a fresh run. */
    reset(): void;
    /** Before analyzing a file. file is an object holding {name, text, scope} properties. */
    beforeLoad(file: File): void;
    /** After analyzing a file. */
    afterLoad(file: File): void;
    /**
     * Will be run right before a file is parsed, and passed the given text and options. If a handler
     * returns a new text value, the origin text will be overriden. This is useful for
     * instance when a plugin is able to extract JavaScript content from an HTML file.
     */
    preParse(text: string, options: object): string | void;
    /** Run right after a file is parsed, and passed the parse tree and the parsed file as arguments. */
    postParse(ast: ESTree.Program, text: string): void;
    /** Run right before the type inference pass, passing the syntax tree and a scope object. */
    preInfer(ast: ESTree.Program, scope: Scope): void;
    /** Run after the type inference pass. */
    postInfer(ast: ESTree.Program, scope: Scope): void;
    /**
     * Run after Tern attempts to find the type at the position end in the given file.
     * A handler may return either the given type (already calculated by Tern and earlier "typeAt" passes)
     * or an alternate type to be used instead. This is useful when
     * a plugin can provide a more helpful type than Tern (e.g. within comments).
     */
    typeAt(file: File, end: Position, expr: ESTree.Node, type: Type): Type | void;
    /** Run at the start of a completion query. May return a valid completion result to replace the default completion algorithm. */
    completion(file: File, query: CompletionsQuery): CompletionsQueryResult | void;
}

export const version: string;

// ###### Plugins ########

/**
 * This can be used to register an initialization function for the plugin with the given name.
 * A Tern server, when configured to load this plugin, will call this initialization function,
 * passing in the server instance and the options specified for the plugin (if any). This is the
 * place where you register event handlers on the server, add type definitions, load other
 * plugins as dependencies, and/or initialize the plugin’s state.
 *
 * See the server’s [list of events](http://ternjs.net/doc/manual.html#events) for ways to wire up plugin behavior.
 */
export function registerPlugin(name: string, init: (server: Server, options?: ConstructorOptions) => void): void;

export interface Desc<T extends Query["type"]> {
    run(Server: Server, query: QueryRegistry[T]["query"], file?: File): QueryRegistry[T]["result"];
    takesFile?: boolean | undefined;
}

/**
 * Defines a new type of query with the server. The `desc` object is a property describing the request.
 * It should at least have a `run` property, which holds a function fn(Server, query) that will
 * be called to handle queries with a type property that matches the given `name`. It may also have
 * a `takesFile` property which, if true, will cause the server to try and resolve the file on which
 * the query operates (from its file property) and pass that (a {name, text, scope, ast} object) as
 * a third argument to the run function. You will probably need to use the inference
 * module’s API to do someting useful in this function.
 *
 * To be able to use this function and the `request` function in a useful way, you probably want
 * to define an interface for the query and the result of the query and extend the interface `QueryRegistry` via
 * [declaration merging](https://www.typescriptlang.org/docs/handbook/declaration-merging.html)
 * in the following manner:
 *
 * ```typescript
 * declare module "tern/lib/tern" {
 *   interface QueryRegistry {
 *     [CustomQueryType]: {
 *       query: CustomQuery
 *       result: CustomQueryResult
 *     }
 *   }
 * }
 * ```
 * _Note that your query interface should extend_ `BaseQuery` _and that its_ `type` _property has to be spelled
 * exactly like the key in the_ `QueryRegistry` _interface._
 */
export function defineQueryType<T extends Query["type"]>(name: T, desc: Desc<T>): void;
