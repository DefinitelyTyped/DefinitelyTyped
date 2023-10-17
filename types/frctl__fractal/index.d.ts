import { EventEmitter } from "events";
import { Stats as FileStats } from "fs";
import { Server as HttpServer } from "http";
import { Readable as ReadableStream } from "stream";
import * as VinylFile from "vinyl";

export namespace fractal {
    namespace core {
        interface StatusInfo {
            label: string;
            description?: string | undefined;
            color?: string | undefined;
        }
        namespace entities {
            abstract class Entity extends mixins.Entity {
                readonly isComponent?: true | undefined;
                readonly isCollection?: true | undefined;
                readonly isDoc?: true | undefined;
                readonly isVariant?: true | undefined;
                readonly status: StatusInfo;
                getResolvedContext(): any;
                hasContext(): Promise<boolean>;
                setContext(data: any): void;
                getContext(): any;
                toJSON(): {};
            }
            interface EntitySource<T extends Entity, TConfig = any> extends mixins.Source<T, TConfig> {
                entities(): T[];

                engine<TEngine = any>(
                    adapterFactory?:
                        | string
                        | {
                            register(source: EntitySource<T>, app: any): Adapter<TEngine>;
                        }
                        | (() => {
                            register(source: EntitySource<T>, app: any): Adapter<TEngine>;
                        }),
                ): Adapter<TEngine>;

                getProp(key: string): string | {};
                statusInfo(handle: string): StatusInfo | null;
                toJSON(): {};
            }
            interface EntityCollection<T extends Entity> extends mixins.Entity, mixins.Collection<T> {
                readonly entities: this;
                toJSON(): {};
            }
        }

        namespace mixins {
            abstract class Configurable<T = any> {
                config(): T;
                config(config: T): this;
                set<K extends keyof T>(path: K, value: T[K] | null): this;
                get<K extends keyof T, V = T[K]>(path: K, defaultValue?: V): T[K] | V | null | undefined;
            }
            /**
             * Combined EventEmitter and Configurable mixins
             */
            abstract class ConfigurableEmitter<T = any> extends EventEmitter {}
            interface ConfigurableEmitter<T = any> extends Configurable<T> {}
            interface Collection<T = any> {
                readonly isAsset: undefined;
                readonly isComponent: undefined;
                readonly isCollection: true;
                readonly isDoc: undefined;
                readonly isFile: undefined;
                readonly isVariant: undefined;
                readonly size: number;
                readonly items: T[];
                toArray(): T[];
                setItems(items: T[]): this;
                pushItem(item: T): this;
                removeItem(item: T): this;
                toJSON(): {};
                toStream(): ReadableStream;
                each(fn: (item: T) => void): this;
                forEach(fn: (item: T) => void): this;
                map(fn: (item: T) => T): this;
                first(): T | undefined;
                last(): T | undefined;
                eq(pos: number): T | undefined;
                collections(): this;
                orderBy(): this;
                find(handle: string): T;
                find<TKey extends keyof T>(name: TKey, value: T[TKey]): T;
                findCollection(handle: string): Collection<T>;
                findCollection<TKey extends keyof T>(name: TKey, value: T[TKey]): Collection<T>;
                flatten(): this;
                flattenDeep(): this;
                squash(): this;
                filter(handle: string): T[];
                filter<TKey extends keyof T>(name: TKey, value: T[TKey]): T[];
                filterItems(items: T[], handle: string): T[];
                filterItems<TKey extends keyof T>(items: T[], name: TKey, value: T[TKey]): T[];
                flattenItems(items: T[], deep?: boolean): T[];
                squashItems(items: T[]): T[];
                newSelf(items: T[]): this;
                [Symbol.iterator](): IterableIterator<T>;
            }
            abstract class Entity {
                initEntity(name: string, config: any, parent: Entity): void;
                name: string;
                handle: string;
                label: string;
                title: string;
                order: number;
                id: string;
                config: any;
                readonly alias: string | null;
                readonly source: entities.EntitySource<entities.Entity>;
                readonly parent: Entity;
                readonly isHidden: boolean;
                toJSON(): {};
            }
            interface Source<T = any, TConfig = any> extends ConfigurableEmitter<TConfig>, Collection<T> {
                readonly label: string;
                readonly title: string;
                readonly source: this;
                readonly isWatching: boolean;
                readonly fullPath: string | null;
                readonly relPath: string;
                toStream(): ReadableStream;
                exists(): boolean;
                load(force?: boolean): Promise<this>;
                refresh(): Promise<this>;
                watch(): void;
                unwatch(): void;
                isConfig(file: string): boolean;
            }
        }
    }

    namespace api {
        namespace assets {
            class Asset extends core.entities.Entity {
                readonly isAsset: true;
                readonly isComponent: undefined;
                readonly isCollection: undefined;
                readonly isDoc: undefined;
                readonly isFile: undefined;
                readonly isVariant: undefined;
                toVinyl(): VinylFile;
            }
            interface AssetCollection extends core.entities.EntityCollection<Asset> {
                assets(): this;
                toVinylArray(): VinylFile[];
            }
            interface AssetSource extends core.mixins.Source<VinylFile> {
                assets(): VinylFile[];
                toVinylArray(): VinylFile[];
                toVinylStream(): ReadableStream;
                gulpify(): ReadableStream;
            }
            interface AssetSourceCollection extends core.mixins.ConfigurableEmitter {
                readonly label: string;
                readonly title: string;
                add(name: string, config: any): AssetSource;
                remove(name: string): this;
                find(name: string): AssetSource | undefined;
                sources(): AssetSource[];
                toArray(): AssetSource[];
                visible(): AssetSource[];
                watch(): this;
                unwatch(): this;
                load(): Promise<void>;
                toJSON(): {};
                [Symbol.iterator](): IterableIterator<AssetSource>;
            }
        }

        namespace components {
            class Component extends core.entities.Entity {
                constructor(
                    config: {},
                    files: files.FileCollection,
                    resources: assets.AssetCollection,
                    parent: core.entities.Entity,
                );
                readonly isAsset: undefined;
                readonly isComponent: true;
                readonly isCollection: undefined;
                readonly isDoc: undefined;
                readonly isFile: undefined;
                readonly isVariant: undefined;
                defaultName: string;
                lang: string;
                editorMode: string;
                editorScope: string;
                viewPath: string;
                viewDir: string;
                configData: string;
                relViewPath: string;
                isCollated(): boolean;
                readonly content: string;
                readonly references: any[];
                readonly referencedBy: any[];
                readonly baseHandle: string;
                readonly notes: string;
                render(context: any, env: any, opts: any): Promise<string>;
                getPreviewContext(): Promise<any>;
                getPreviewContent(): Promise<string>;
                setVariants(variantCollection: variants.VariantCollection): void;
                hasTag(tag: string): boolean;
                resources(): assets.AssetCollection;
                resourcesJSON(): {};
                flatten(): variants.VariantCollection;
                component(): this;
                variants(): variants.VariantCollection;
                static create(
                    config: {},
                    files: files.FileCollection,
                    resources: assets.AssetCollection,
                    parent: core.entities.Entity,
                ): IterableIterator<{} | variants.VariantCollection | Component>;
            }
            interface ComponentCollection extends core.entities.EntityCollection<Component> {
                components(): this;
                variants(): this;
            }
            type Collator = (markup: string, item: { handle: string }) => string;
            interface ComponentDefaultConfig {
                collated?: boolean | undefined;
                collator?: Collator | undefined;
                context?: any;
                display?: any;
                prefix?: string | undefined;
                preview?: string | undefined;
                status?: string | undefined;
            }
            interface ComponentConfig {
                path?: string | undefined;
                ext?: string | undefined;
                default?: ComponentDefaultConfig | undefined;
                label?: string | undefined;
                statuses?: {
                    [status: string]: core.StatusInfo;
                } | undefined;
                title?: string | undefined;
                yield?: string | undefined;
                "default.collated"?: boolean | undefined;
                "default.collator"?: Collator | undefined;
                "default.context"?: any;
                "default.display"?: any;
                "default.prefix"?: string | undefined;
                "default.preview"?: string | undefined;
                "default.status"?: string | undefined;
            }
            interface ComponentSource extends core.entities.EntitySource<Component, ComponentConfig> {
                resources(): files.FileCollection;
                components(): Component[];
                getReferencesOf(target: { id: string; handle: string; alias: string }): any[];
                variants(): this;
                find(): any;
                findFile(filePath: string): files.File | undefined;
                resolve(context: any): any;
                renderString(str: string, context: any, env: any): Promise<string>;
                renderPreview(entity: string | core.entities.Entity, preview?: boolean, env?: any): Promise<string>;
                render(entity: string | core.entities.Entity, context: any, env?: any, opts?: {}): Promise<string>;
            }
        }
        namespace docs {
            class Doc extends core.entities.Entity {
                constructor(config: any, content: string, parent: core.entities.Entity);
                readonly isAsset: undefined;
                readonly isComponent: undefined;
                readonly isCollection: undefined;
                readonly isDoc: true;
                readonly isFile: undefined;
                readonly isVariant: undefined;
                readonly isIndex: boolean;
                getContent(): Promise<string>;
                getContentSync(): string;
                render(context: any, env?: any, opts?: any): Promise<string>;
                toc(maxDepth?: number): Promise<string>;
                static create(config: any, content: string, parent: core.entities.Entity): Doc;
            }
            interface DocCollection extends core.entities.EntityCollection<Doc> {
                pages(): this;
            }
            interface DocDefaultConfig {
                context?: any;
                prefix?: string | undefined;
                status?: string | undefined;
            }
            interface DocMarkdownConfig {
                gfm?: boolean | undefined;
                tables?: boolean | undefined;
                breaks?: boolean | undefined;
                pedantic?: boolean | undefined;
                sanitize?: boolean | undefined;
                smartLists?: boolean | undefined;
                smartypants?: boolean | undefined;
            }
            interface DocConfig {
                default?: DocDefaultConfig | undefined;
                ext?: string | undefined;
                indexLabel?: string | undefined;
                label?: string | undefined;
                markdown?: boolean | DocMarkdownConfig | undefined;
                path?: string | undefined;
                statuses?: {
                    [status: string]: core.StatusInfo;
                } | undefined;
                title?: string | undefined;
                "default.context"?: any;
                "default.prefix"?: string | undefined;
                "default.status"?: string | undefined;
                "markdown.gfm"?: boolean | undefined;
                "markdown.tables"?: boolean | undefined;
                "markdown.breaks"?: boolean | undefined;
                "markdown.pedantic"?: boolean | undefined;
                "markdown.sanitize"?: boolean | undefined;
                "markdown.smartLists"?: boolean | undefined;
                "markdown.smartypants"?: boolean | undefined;
            }
            interface DocSource extends core.entities.EntitySource<Doc, DocConfig> {
                pages(): this;
                docs(): this;
                resolve(context: any): any;
                toc(page: files.File, maxDepth?: number): Promise<string>;
                render(page: string | files.File, context?: any, env?: any, opts?: {}): Promise<string>;
                renderString(str: string, context: any, env?: any): Promise<string>;
                isPage(file: string): boolean;
                isTemplate(file: string): boolean;
            }
        }
        namespace files {
            interface FileCollection extends core.mixins.Collection<File> {
                files(): this;
                match(test: string | RegExp | Array<string | RegExp>): this;
                matchItems(items: core.mixins.Collection<File>, test: string | RegExp | Array<string | RegExp>): File;
                toVinylArray(): VinylFile[];
                toVinylStream(): ReadableStream;
                gulpify(): ReadableStream;
            }
            interface File {
                readonly isAsset: undefined;
                readonly isComponent: undefined;
                readonly isCollection: undefined;
                readonly isDoc: undefined;
                readonly isFile: true;
                readonly isVariant: undefined;
                id: string;
                path: string;
                cwd: string;
                relPath: string;
                base: string;
                dir: string;
                handle: string;
                name: string;
                ext: string;
                stat: FileStats | null;
                lang: string;
                editorMode: string;
                editorScope: string;
                githubColor: string;
                isBinary: boolean;
                mime: string;
                getContext(): any;
                readonly contents: Buffer;
                readonly isImage: boolean;
                getContent(): Promise<string>;
                getContentSync(): string;
                read(): Promise<string>;
                readSync(): string;
                toVinyl(): VinylFile;
            }
        }
        namespace variants {
            class Variant extends core.entities.Entity {
                constructor(config: {}, view: any, resources: assets.AssetCollection, parent: components.Component);
                readonly isAsset: undefined;
                readonly isComponent: undefined;
                readonly isCollection: undefined;
                readonly isDoc: undefined;
                readonly isFile: true;
                readonly isVariant: true;
                view: any;
                viewPath: string;
                viewDir: string;
                relViewPath: string;
                isDefault: boolean;
                lang: string;
                editorMode: string;
                editorScope: string;
                readonly notes: string;
                readonly alias: string | null;
                readonly siblings: VariantCollection;
                readonly content: string;
                readonly baseHandle: string;
                readonly references: any[];
                readonly referencedBy: any[];
                render(context: any, env?: any, opts?: any): Promise<string>;
                getPreviewContext(): Promise<any>;
                getPreviewContent(): Promise<string>;
                component(): components.Component;
                variant(): this;
                defaultVariant(): this;
                resources(): assets.AssetCollection;
                resourcesJSON(): {};
                getContent(): Promise<string>;
                getContentSync(): string;
                static create(
                    config: {},
                    view: any,
                    resources: assets.AssetCollection,
                    parent: components.Component,
                ): Variant;
            }
            interface VariantCollection extends core.entities.EntityCollection<Variant> {
                default(): Variant;
                getCollatedContent(): Promise<string>;
                getCollatedContentSync(): string;
                getCOllatedContext(): Promise<any>;
                readonly references: any[];
                readonly referencedBy: any[];
            }
        }
    }

    namespace cli {
        class Cli {
            console: Console;
            notify: Notifier;
            has(command: string): boolean;
            get(command: string): any;
            isInteractive(): boolean;
            command(
                commandString: string,
                callback: (this: Cli & { fractal: Fractal }, args: any, done: () => void) => void,
                opts?: string | {
                    description?: string | undefined;
                    options?: string[][] | undefined;
                },
            ): void;
            exec(command: string): void;
            log(message: string): void;
            error(message: string): void;
        }
        class Console {
            theme: CliTheme;
            br(): this;
            log(text: string): this;
            debug(text: string, data?: any): this;
            success(text: string): this;
            warn(text: string): this;
            update(text: string, type?: string): this;
            clear(): this;
            persist(): this;
            error(err: Error): this;
            error(err: string, data: Error): this;
            dump(data: any): void;
            box(header?: string, body?: string[], footer?: string): this;
            write(str: string, type?: string): void;
            columns(data: any, options?: any): this;
            slog(): this;
            unslog(): this;
            isSlogging(): boolean;
            debugMode(status: boolean): void;
        }
        class Notifier {
            updateAvailable(details: {
                current: string;
                latest: string;
                name: string;
            }): void;
            versionMismatch(details: {
                cli: string;
                local: string;
            }): void;
        }
    }

    namespace web {
        class Builder extends EventEmitter {
            /**
             * @deprecated Use start() instead.
             */
            build(): Promise<{ errorCount: number }>;
            start(): Promise<{ errorCount: number }>;
            stop(): void;
            use(): void;
        }
        class Server extends EventEmitter {
            readonly isSynced: boolean;
            readonly port?: number | undefined;
            readonly ports: {
                sync?: number | undefined;
                server?: number | undefined;
            };
            readonly url?: string | undefined;
            readonly urls: {
                sync?: {
                    local?: string | undefined;
                    external?: string | undefined;
                    ui?: string | undefined;
                } | undefined;
                server?: string | undefined;
            };
            start(sync?: boolean): Promise<HttpServer>;
            stop(): void;
            use(mount: string, middleware: any): void;
        }
        interface WebServerSyncOptions {
            open?: boolean | undefined;
            browser?: string[] | undefined;
            notify?: boolean | undefined;
        }
        interface WebServerConfig {
            sync?: boolean | undefined;
            syncOptions?: WebServerSyncOptions | undefined;
            port?: number | undefined;
            watch?: boolean | undefined;
            theme?: WebTheme | string | undefined;
        }
        interface WebBuilderUrls {
            ext?: string | undefined;
        }
        interface WebBuilderConfig {
            concurrency?: number | undefined;
            dest?: string | undefined;
            ext?: string | undefined;
            urls?: WebBuilderUrls | undefined;
            theme?: WebTheme | string | undefined;
        }
        interface WebStaticConfig {
            path?: string | undefined;
            mount?: string | undefined;
        }
        interface WebConfig {
            builder?: WebBuilderConfig | undefined;
            server?: WebServerConfig | undefined;
            static?: WebStaticConfig | undefined;
            "builder.concurrency"?: number | undefined;
            "builder.dest"?: string | undefined;
            "builder.ext"?: string | undefined;
            "builder.urls"?: WebBuilderUrls | undefined;
            "builder.urls.ext"?: string | undefined;
            "builder.theme"?: WebTheme | string | undefined;
            "server.sync"?: boolean | undefined;
            "server.syncOptions"?: WebServerSyncOptions | undefined;
            "server.syncOptions.open"?: boolean | undefined;
            "server.syncOptions.browser"?: string[] | undefined;
            "server.syncOptions.notify"?: boolean | undefined;
            "server.port"?: number | undefined;
            "server.watch"?: boolean | undefined;
            "server.theme"?: WebTheme | string | undefined;
            "static.path"?: string | undefined;
            "static.mount"?: string | undefined;
        }
        class Web extends core.mixins.ConfigurableEmitter<WebConfig> {
            server(config?: WebServerConfig): Server;
            builder(config?: WebBuilderConfig): Builder;
            theme(name: string, instance?: WebTheme): this;
            defaultTheme(): WebTheme;
            defaultTheme(instance: WebTheme): this;
        }
    }

    const Fractal: {
        new: Fractal;
    };
}

export interface FractalConfig {
    project?: {
        title?: string | undefined;
        version?: string | undefined;
        author?: string | undefined;
    } | undefined;
    "project.title"?: string | undefined;
    "project.version"?: string | undefined;
    "project.author"?: string | undefined;
}

export function create(config?: FractalConfig): Fractal;

export class Fractal extends fractal.core.mixins.ConfigurableEmitter<FractalConfig> {
    constructor(config?: FractalConfig);
    readonly components: fractal.api.components.ComponentSource;
    readonly docs: fractal.api.docs.DocSource;
    readonly assets: fractal.api.assets.AssetSourceCollection;
    readonly cli: fractal.cli.Cli;
    readonly web: fractal.web.Web;
    readonly version: string;
    readonly debug: boolean;

    extend(plugin: string | ((this: this, core: any) => void)): this;

    watch(): this;
    unwatch(): this;

    load(): Promise<void>;
}

export interface CliThemeConfig {
    delimiter?: {
        text?: string | undefined;
        format?: ((str: string) => string) | undefined;
    } | undefined;
    styles?: {
        [key: string]: any;
    } | undefined;
    "delimiter.text"?: string | undefined;
    "delimiter.format"?: ((str: string) => string) | undefined;
}
export class CliTheme extends fractal.core.mixins.ConfigurableEmitter<CliThemeConfig> {
    constructor(config?: CliThemeConfig);
    setDelimiter(text: string, formatter: (str: string) => string): void;
    delimiter(): string;
    setStyle(name: string, opts: any): void;
    style(name: string): any;
    format(str: string, style?: string, strip?: boolean): string;
}

export interface WebThemeOptions {
    skin?: string | undefined;
    panels?: string[] | undefined;
    rtl: boolean;
    lang?: string | undefined;
    styles?: string[] | undefined;
    scripts?: string[] | undefined;
    format?: string | undefined;
    static?: {
        mount?: string | undefined;
    } | undefined;
    version?: string | undefined;
    favicon?: string | undefined;
    nav?: string[] | undefined;
    "static.mount": string;
}
export class WebTheme extends fractal.core.mixins.ConfigurableEmitter<WebThemeOptions> {
    constructor(viewPaths: string[], options?: WebThemeOptions);
    options(): WebThemeOptions;
    options(value: WebThemeOptions): this;
    setOption<K extends keyof WebThemeOptions>(key: K, value: WebThemeOptions[K]): this;
    getOption<K extends keyof WebThemeOptions>(key: K): WebThemeOptions[K];
    addLoadPath(path: string): this;
    loadPaths(): string[];
    setErrorView(view: string): void;
    errorView(): string;
    setRedirectView(view: string): void;
    redirectView(): string;
    addStatic(path: string, mount: string): void;
    static(): Array<{ path: string; mount: string }>;
    addRoute(path: string, opts: {
        handle?: string | undefined;
    }, resolver?: any): this;
    addResolver(handle: string, resolvers: any): this;
    routes(): any[];
    resolvers(): any;
    matchRoute(urlPath: string): {
        route: {
            handle: string;
            view: string;
        };
        params: any;
    } | false;
    urlFromRoute(handle: string, params: any, noRedirect?: boolean): string | null;
}

export abstract class Adapter<TEngine> extends EventEmitter {
    constructor(engine: TEngine, source: fractal.core.entities.EntitySource<any>);
    protected _source: fractal.core.entities.EntitySource<any>;
    readonly engine: TEngine;
    readonly views: Array<{
        handle: string;
        path: string;
        content: string;
    }>;
    setHandlePrefix(prefix: string): this;
    load(): void;
    getReferencesForView(handle: string): any[];
    getView(handle: string): any;

    protected _resolve<T>(value: PromiseLike<T> | T): Promise<T>;

    abstract render(path: string, str: string, context: any, meta: any): Promise<string>;
}

export namespace utils {
    function lang(filePath: string): {
        name: string;
        mode: string;
        scope: string | null;
        color: string | null;
    };
    function titlize(str: string): string;
    function slugify(str: string): string;
    function toJSON(item: any): {};
    function escapeForRegexp(str: string): string;
    function parseArgv(): {
        command: string;
        args: string[];
        opts: any;
    };
    function stringify(data: any, indent?: number): string;
    function fileExistsSync(path: string): boolean;
    function isPromise<T>(value: T | PromiseLike<T>): value is PromiseLike<T>;
    function isPromise(value: any): value is PromiseLike<any>;
    function md5(str: string): string;
    function mergeProp(prop: any, upstream: any): any;
    function defaultsDeep<T>(...args: T[]): T;
    function relUrlPath(toPath: string, fromPath: string, opts?: any): string;
}

export namespace core {
    type Component = fractal.api.components.Component;
    const Component: typeof fractal.api.components.Component;
    type Variant = fractal.api.variants.Variant;
    const Variant: typeof fractal.api.variants.Variant;
    type Doc = fractal.api.docs.Doc;
    const Doc: typeof fractal.api.docs.Doc;
}
