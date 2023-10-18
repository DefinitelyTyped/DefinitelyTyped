import { EventEmitter } from "events";
import moment = require("moment");
import { ParsedArgs } from "minimist";
import Logger = require("bunyan");
import underscore = require("underscore");
import connect = require("connect");
import Stream = require("stream");
import util = require("hexo-util");
import fs = require("fs");
import Bluebird = require("bluebird");

declare global {
    const hexo: Hexo;
}

interface HexoConfig {
    [key: string]: any;
    /**
     * The title of your website
     */
    readonly title: string;

    /**
     * The subtitle of your website
     */
    readonly subtitle: string;

    /**
     * The description of your website
     */
    readonly description: string;

    /*
     * Your name
     */
    readonly author: string;

    /**
     * The language of your website. Use a 2-lettter ISO-639-1 code. Default is en.
     */
    readonly language: string;

    /**
     * The timezone of your website. Hexo uses the setting on your computer by default.
     * You can find the list of available timezones [here]{@link https://en.wikipedia.org/wiki/List_of_tz_database_time_zones} .
     * Some examples are `America/New_York` , `Japan` , and `UTC` .
     */
    readonly timezone: string;

    /*
     * The URL of your website
     */
    readonly url: string;

    /**
     * The root directory of your website
     */
    readonly root: string;

    /**
     * The permalink format of articles
     */
    readonly permalink: string;

    /**
     * Default values of each segment in permalink
     */
    readonly permalink_defaults: string | null;

    /**
     * Source folder. Where your content is stored
     */
    readonly source_dir: string;

    /**
     * Public folder. Where the static site will be generated
     */
    readonly public_dir: string;

    /**
     * Tag directory
     */
    readonly tag_dir: string;

    /**
     * Archive directory
     */
    readonly archive_dir: string;

    /**
     * Category directory
     */
    readonly category_dir: string;

    /**
     * Include code directory (subdirectory of source_dir)
     */
    readonly code_dir: string;

    /**
     * i18n directory
     */
    readonly i18n_dir: string;

    /**
     * Paths that will be copied to public raw, without being rendered. You can use glob expressions for path matching.
     */
    readonly skip_render: string | string[] | null;

    /**
     * The filename format for new posts
     */
    readonly new_post_name: string;

    /**
     * Default layout
     */
    readonly default_layout: string;

    /**
     * Transform titles into title case?
     */
    readonly titlecase: boolean;

    /**
     * Open external links in a new tab?
     */
    readonly external_link: boolean;

    /**
     * Transform filenames to 1 lower case; 2 upper case
     */
    readonly filename_case: number;

    /**
     * Display drafts?
     */
    readonly render_drafts: boolean;

    /**
     * Enable the Asset Folder?
     */
    readonly post_asset_folder: boolean;

    /**
     * Make links relative to the root folder?
     */
    readonly relative_link: boolean;

    /**
     * Display future posts?
     */
    readonly future: boolean;

    /**
     * Code block settings
     */
    readonly highlight: {
        readonly enable: boolean;
        readonly line_number: boolean;
        readonly auto_detect: boolean;
        readonly tab_replace: string | null;
    };

    /**
     * Default category
     */
    readonly default_category: string;

    /**
     * Category slugs
     */
    readonly category_map: { [key: string]: string | number };

    /**
     * Tag slugs
     */
    readonly tag_map: { [key: string]: string | number };

    /**
     * Date format
     * https://momentjs.com/
     */
    readonly date_format: string;

    /**
     * Time format
     * https://momentjs.com/
     */
    readonly time_format: string;

    /**
     * The amount of posts displayed on a single page. 0 disables pagination
     */
    readonly per_page: number;

    /**
     * Pagination directory
     */
    readonly pagination_dir: string;

    /**
     * Theme name. false disables theming
     */
    readonly theme: string | false;

    /**
     * Theme configuration. Include any custom theme settings under this key to override theme defaults.
     */
    readonly theme_config: { [key: string]: string | number };

    /**
     * Deployment settings
     */
    readonly deploy: Hexo.extend.Deployer.Config | Hexo.extend.Deployer.Config | null;

    /**
     * Hexo by default ignores hidden files and folders, but setting this field will make Hexo process them
     */
    readonly include?: string[] | undefined;

    /**
     * Hexo process will ignore files list under this field
     */
    readonly exclude?: string[] | undefined;
    readonly ignore: string[];
}

interface Model<T> {
    /**
     * Warehouse method
     * https://hexojs.github.io/warehouse/
     */
    toArray(): T[];
    /**
     * Warehouse method
     * https://hexojs.github.io/warehouse/
     */
    count(): number;
    /**
     * Warehouse method
     * https://hexojs.github.io/warehouse/
     */
    forEach(fn: (v: T, i: number) => void): void;
    /**
     * Warehouse method
     * https://hexojs.github.io/warehouse/
     */
    filter(fn: (v: T, i: number) => boolean): Model<T>;
    /**
     * Warehouse method
     * https://hexojs.github.io/warehouse/
     */
    map<U>(fn: (v: T, i: number) => U): U[];
}

interface Site {
    posts: Model<Hexo.Locals.Post>;
    pages: Model<Hexo.Locals.Page>;
    categories: Model<Hexo.Locals.Category>;
    tags: Model<Hexo.Locals.Tag>;
    data: { [key: string]: any };
}

declare class Hexo extends EventEmitter {
    /**
     * Create a Hexo instance.
     * @param base the root directory of the website, `base_dir` .
     * @param args an object containing the initialization options.
     */
    constructor(base?: string, args?: Hexo.InstanceOptions);

    /**
     * Load configuration and plugins.
     */
    init(): Promise<void>;

    /**
     * Loading all files in the `source` folder as well as the theme data.
     */
    load(fn?: (err: any, value: any) => void): Promise<any>;

    /**
     * The same things `load` does, but will also start watching for file changes continuously.
     */
    watch(fn?: (err: any, value: any) => void): Promise<any>;

    unwatch(): void;

    /**
     * Any console command can be called explicitly using the call method on the Hexo instance.
     */
    call(name: string, args?: any, fn?: (err: any, value: any) => void): Promise<any>;
    call(name: string, fn?: (err: any, value: any) => void): Promise<any>;

    /**
     * You should call the `exit` method upon successful or unsuccessful completion of a console command.
     * This allows Hexo to exit gracefully and finish up important things such as saving the database.
     */
    exit(err?: any): Promise<void>;

    /**
     * Site settings in `_config.yml`
     */
    readonly config: HexoConfig;

    readonly theme: Hexo.Theme;
    readonly source: Hexo.Box;
    readonly post: Hexo.Post;
    readonly render: Hexo.Render;

    /**
     * Local variables are used for template rendering, which is the `site` variable in templates.
     * https://hexo.io/api/locals
     */
    readonly locals: Hexo.Locals;

    readonly base_dir: string;

    /**
     * Public folder. Where the static site will be generated
     */
    readonly public_dir: string;

    /**
     * Source folder. Where your content is stored
     */
    readonly source_dir: string;

    readonly plugin_dir: string;
    readonly script_dir: string;
    readonly scaffold_dir: string;
    readonly theme_dir: string;
    readonly theme_script_dir: string;
    readonly config_path: string;
    readonly env: {
        readonly args: ParsedArgs;
        readonly debug: boolean;
        readonly safe: boolean;
        readonly silent: boolean;
        readonly env: string;
        readonly version: string;
        readonly init: boolean;
    };

    /**
     * Logger object
     * https://www.npmjs.com/package/bunyan
     */
    readonly log: Logger;

    readonly extend: {
        /**
         * The console forms the bridge between Hexo and its users. It registers and describes the available console commands.
         */
        readonly console: Hexo.extend.Console;
        /**
         * A deployer helps users quickly deploy their site to a remote server without complicated commands.
         */
        readonly deployer: Hexo.extend.Deployer;
        /**
         * A filter is used to modify some specified data. Hexo passes data to filters in sequence and the filters then modify the data one after the other.
         */
        readonly filter: Hexo.extend.Filter;
        /**
         * A generator builds routes based on processed files.
         */
        readonly generator: Hexo.extend.Generator;
        /**
         * A helper makes it easy to quickly add snippets to your templates. We recommend using helpers instead of templates when you’re dealing with more complicated code.
         */
        readonly helper: Hexo.extend.Helper;
        /**
         * A migrator helps users migrate from other systems to Hexo.
         */
        readonly migrator: Hexo.extend.Migrator;
        /**
         * A processor is used to process source files in the source folder.
         */
        readonly processor: Hexo.extend.Processor;
        /**
         * A renderer is used to render content.
         */
        readonly renderer: Hexo.extend.Renderer;
        /**
         * A tag allows users to quickly and easily insert snippets into their posts.
         */
        readonly tag: Hexo.extend.Tag;
    };

    readonly route: Hexo.Router;
    readonly scaffold: Hexo.Scaffold;

    /**
     * Emitted before deployment begins.
     */
    on(ev: "deployBefore", fn: () => void): this;

    /**
     * Emitted after deployment finishes.
     */
    on(ev: "deployAfter", fn: () => void): this;

    /**
     * Emitted before Hexo exits.
     */
    on(ev: "exit", fn: (err: any) => void): this;

    /**
     * Emitted before generation begins.
     */
    on(ev: "generateBefore", fn: () => void): this;

    /**
     * Emitted after generation finishes.
     */
    on(ev: "generateAfter", fn: () => void): this;

    /**
     * Emitted after a new post has been created. This event returns the post data:
     */
    on(ev: "new", fn: (post: { path: string; content: string }) => void): this;

    /**
     * Emitted before processing begins. This event returns a path representing the root directory of the box.
     */
    on(ev: "processBefore", fn: (type: Hexo.Box.File["type"], path: string) => void): this;

    /**
     * Emitted after processing finishes. This event returns a path representing the root directory of the box.
     */
    on(ev: "processAfter", fn: (type: Hexo.Box.File["type"], path: string) => void): this;

    /**
     * Emitted after initialization finishes.
     */
    on(ev: "ready", fn: () => void): this;
}

declare namespace Hexo {
    interface InstanceOptions {
        debug?: boolean | undefined;
        safe?: boolean | undefined;
        silent?: boolean | undefined;
        config?: string | undefined;
        draft?: boolean | undefined;
        drafts?: boolean | undefined;
    }

    interface Locals {
        get(type: "posts"): Model<Locals.Post>;
        get(type: "pages"): Model<Locals.Page>;
        get(type: "categories"): Model<Locals.Category>;
        get(type: "tags"): Model<Locals.Tag>;
        /**
         * Get a Variable
         */
        get(type: string): any;

        /**
         * Set a Variable
         */
        set(type: string, fn: () => any): this;

        /**
         * Remove a Variable
         */
        remove(type: string): this;

        /**
         * Get All Variable
         */
        toObject(): any;

        /**
         * Invalidate the cache
         */
        invalidate(): this;
    }
    namespace Locals {
        interface Page {
            title: string;
            date: moment.Moment;
            updated?: moment.Moment | undefined;
            comments: boolean;
            layout: string;
            content: string;
            excerpt?: string | undefined;
            more?: string | undefined;
            source: string;
            full_source: string;
            path: string;
            permalink: string;
            prev?: null | Page | undefined;
            next?: null | Page | undefined;
            raw?: string | undefined;
            photos?: string[] | undefined;
            link?: string | undefined;
            [key: string]: any;
        }

        interface Post extends Page {
            published?: boolean | undefined;
            categories?: string[] | undefined;
            tags: string[];
        }

        interface Tag {
            name: string;
            slug: string;
            path: string;
            permalink: string;
            posts: Model<Post>;
            length: number;
        }
        interface Category extends Tag {
            parent: string;
        }
    }

    namespace extend {
        interface Console {
            register(name: string, desc: string, options: Console.Options, fn: (args: ParsedArgs) => void): void;
            register(name: string, options: Console.Options, fn: (args: ParsedArgs) => void): void;
            register(name: string, desc: string, fn: (args: ParsedArgs) => void): void;
            register(name: string, fn: (args: ParsedArgs) => void): void;
        }
        namespace Console {
            interface Options {
                /**
                 * The usage of a console command.
                 */
                usage?: string | undefined;

                /**
                 * The description of each argument of a console command.
                 */
                arguments?: Array<{ name: string; desc: string }> | undefined;

                /**
                 * The description of each option of a console command.
                 */
                options?: Array<{ name: string; desc: string }> | undefined;

                /**
                 * More detailed information about a console command.
                 */
                desc?: string | undefined;
            }
        }

        interface Deployer {
            register(name: string, fn: (args: Deployer.Config) => void): void;
        }
        namespace Deployer {
            interface Config {
                readonly type: string | undefined;
                readonly [key: string]: any;
            }
        }

        interface Filter {
            register(type: string, fn: (data: any, ...args: any[]) => any, priority?: number): void;

            /**
             * Executed before a post is rendered. Refer to post rendering to learn the execution steps.
             */
            register(
                type: "before_post_render",
                fn: (data: { content: string; [key: string]: any }) => { content: string; [key: string]: any } | void,
                priority?: number,
            ): void;

            /**
             * Executed after a post is rendered. Refer to post rendering to learn the execution steps.
             */
            register(
                type: "after_post_render",
                fn: (data: { content: string; [key: string]: any }) => { content: string; [key: string]: any } | void,
                priority?: number,
            ): void;

            /**
             * Executed before Hexo is about to exit – this will run right after `hexo.exit` is called.
             */
            register(type: "before_exit", fn: () => void, priority?: number): void;

            /**
             * Executed before generation begins.
             */
            register(type: "before_generate", fn: (data: any) => any, priority?: number): void;

            /**
             * Executed after generation finishes.
             */
            register(type: "after_generate", fn: () => void, priority?: number): void;

            /**
             * Modify [local variables](https://hexo.io/docs/variables) in templates.
             */
            register(
                type: "template_locals",
                fn: (locals: TemplateLocals) => TemplateLocals | void,
                priority?: number,
            ): void;

            /**
             * Executed after Hexo is initialized – this will run right after `hexo.init` completes.
             */
            register(type: "after_init", fn: () => void, priority?: number): void;

            /**
             * Executed when creating a post to determine the path of new posts.
             */
            register(
                type: "new_post_path",
                fn: (data: Post.Data, replace: boolean | undefined) => void,
                priority?: number,
            ): void;

            /**
             * Used to determine the permalink of posts.
             */
            register(type: "post_permalink", fn: (permalink: string) => string, priority?: number): void;

            /**
             * Executed after rendering finishes. You can see rendering for more info.
             */
            register(
                type: "after_render:html",
                fn: (result: string, data: { path: string; text: string; [key: string]: any }) => string | void,
                priority?: number,
            ): void;

            /**
             * Executed after generated files and cache are removed with hexo clean command.
             */
            register(type: "after_clean", fn: () => void, priority?: number): void;

            /**
             * Add middleware to the server. app is a Connect instance.
             */
            register(
                type: "server_middleware",
                fn: (app: connect.Server) => connect.Server | void,
                priority?: number,
            ): void;

            unregister(type: string, fn: (...args: any[]) => any): void;
            exec(type: string, data?: any, options?: Filter.Options): any;
            execSync(type: string, data?: any, options?: Filter.Options): any;
        }
        namespace Filter {
            interface Options {
                /**
                 * `hexo` object.
                 */
                context?: Hexo | undefined;
                /**
                 * Arguments. This must be an array.
                 */
                args?: any[] | undefined;
            }
        }

        interface Generator {
            register(
                name: string,
                fn: (
                    locals: Site,
                ) => Generator.Return | Generator.Return[] | Bluebird<Generator.Return> | Bluebird<Generator.Return[]>,
            ): void;
        }
        namespace Generator {
            interface Return {
                /**
                 * Path not including the prefixing `/` .
                 */
                path: string;

                /**
                 * Layout. Specify the layouts for rendering. The value can be a string or an array. If it’s ignored then the route will return data directly.
                 */
                layout?: string | string[];

                data: any;
            }
        }

        interface Helper {
            register(name: string, fn: (...args: any[]) => any): void;
            list(): { [name: string]: (...args: any[]) => any };
            get(name: string): ((...args: any[]) => any) | undefined;
        }

        interface Migrator {
            register(name: string, fn: (args: ParsedArgs, fn: (err: any) => void) => void): void;
        }

        interface Processor {
            register(pattern: RegExp | string | ((str: string) => any), fn: (file: Box.File) => void): void;
            register(fn: (file: Box.File) => void): void;
        }

        interface Renderer {
            register(
                srcExt: string,
                outExt: string,
                fn: (this: Hexo, data: RendererData, options: any) => string,
                sync: true,
            ): void;
            register(
                srcExt: string,
                outExt: string,
                fn: (this: Hexo, data: RendererData, options: any) => Promise<string>,
                sync?: false,
            ): void;
            register(
                srcExt: string,
                outExt: string,
                fn: (this: Hexo, data: RendererData, options: any) => Promise<string>,
            ): void;
        }

        interface RendererData {
            /**
             * File content.
             */
            readonly text: string;
            /**
             * File path.
             */
            readonly path?: string | undefined;
        }

        interface Tag {
            register(
                name: string,
                fn: (args: string[], content: string | undefined) => string,
                options?: Tag.Options,
            ): void;
        }
        namespace Tag {
            interface Options {
                ends?: boolean | undefined;
                async?: boolean | undefined;
            }
        }
    }

    interface Router {
        /**
         * The `get` method returns a `Stream`.
         */
        get(path: string): Router.RouteStream | undefined;

        /**
         * The `set` method takes a string, a `Buffer` or a function.
         */
        set(path: string, data: string | Buffer | util.Pattern<boolean> | Router.Data): this;

        /**
         * Remove a Path
         */
        remove(path: string): this;

        /**
         * Get the List of Routes
         */
        list(): string[];

        /**
         * The `format` method transforms a string to a valid path.
         */
        format(path: string): string;
    }
    namespace Router {
        interface Data {
            data: string | Buffer | Callback;
            modified: boolean;
        }

        interface RouteStream extends Stream.Readable {
            readonly modified: boolean;
        }

        type Callback = ((err: any, result: string) => void) | (() => Promise<string>);
    }

    interface Scaffold {
        /**
         * Get a Scaffold
         */
        get(name: string, fn?: (err: any, result: string) => void): Promise<string>;
        /**
         * Set a Scaffold
         */
        set(name: string, content: string, fn?: (err: any) => void): Promise<void>;
        /**
         * Remove a Scaffold
         */
        remove(name: string, fn?: (err: any) => void): Promise<void>;
    }

    interface Box extends EventEmitter {
        /**
         * Loads all files in the folder.
         */
        process(fn: (err: any) => void): Promise<void>;
        /**
         * Loads all files in the folder and start watching for file changes.
         */
        watch(fn?: (err: any) => void): Promise<void>;
        /**
         * Stop watching.
         */
        unwatch(): void;

        /**
         * A processor is an essential element of `Box` and is used to process files.
         * You can use path matching as described above to restrict what exactly the processor should process.
         * Register a new processor with the `addProcessor` method.
         */
        addProcessor(pattern: string | RegExp | util.Pattern<boolean>, fn: (file: Box.File) => void): void;
    }
    namespace Box {
        interface File {
            /**
             * Full path of the file
             */
            readonly source: string;

            /**
             * Relative path to the box of the file
             */
            readonly path: string;

            /**
             * File type. The value can be `create` , `update` , `skip`, `delete` .
             */
            readonly type: "create" | "update" | "skip" | "delete";

            /**
             * The information from path matching.
             */
            readonly params: any;

            /**
             * Read a file
             */
            read(
                option?: { encoding?: string | null | undefined; flag?: string | undefined },
                fn?: (err: any, result: string | Buffer) => void,
            ): Promise<string | Buffer>;
            read(fn?: (err: any, result: string | Buffer) => void): Promise<string | Buffer>;

            /**
             * Read a file synchronously
             */
            readSync(option?: { encoding?: string | null | undefined; flag?: string | undefined }): string | Buffer;

            /**
             * Read the status of a file
             */
            stat(fn?: (err: any, result: fs.Stats) => void): Promise<fs.Stats>;

            /**
             * Read the status of a file synchronously
             */
            statSync(): fs.Stats;

            /**
             * Render a file
             */
            render(fn?: (err: any, result: string) => void): Promise<string>;
            render(option?: any, fn?: (err: any, result: string) => void): Promise<string>;

            /**
             * Render a file synchronously
             */
            renderSync(option?: any): string;
        }
    }

    interface Render {
        render(data: Render.Data, option?: any, fn?: (err: any, result: string) => void): Promise<string>;
        render(data: Render.Data, fn?: (err: any, result: string) => void): Promise<string>;
        renderSync(data: Render.Data, option?: any): string;

        /**
         * Check whether a file is renderable synchronously.
         */
        isRenderable(path: string): boolean;

        /**
         * Check whether a file is renderable.
         */
        isRenderableSync(path: string): boolean;

        /**
         * Get the Output Extension
         */
        getOutput(path: string): string;
    }
    namespace Render {
        interface Data {
            text?: string | undefined;
            engine?: string | undefined;
            path?: string | undefined;
        }
    }

    interface Post {
        /**
         * Create a Post
         */
        create(data: Post.Data, replace?: boolean, fn?: (err: any) => void): Promise<void>;
        create(data: Post.Data, fn?: (err: any) => void): Promise<void>;

        /**
         * Publish a Draft
         */
        publish(data: Post.Data, replace?: boolean, fn?: (err: any) => void): Promise<void>;
        publish(data: Post.Data, fn?: (err: any) => void): Promise<void>;

        render(source: string | null | undefined, data: Post.RenderData, fn: (err: any) => void): Promise<void>;
    }
    namespace Post {
        interface Data {
            title?: string | undefined;
            slug?: string | undefined;
            layout?: string | undefined;
            path?: string | undefined;
            date?: moment.MomentInput | undefined;
        }
        interface RenderData {
            engine?: string | undefined;
            content?: string | undefined;
        }
    }

    interface Theme extends Box {
        config: HexoConfig;

        /**
         * Get a View
         */
        getView(path: string): View | undefined;

        /**
         * Set a View
         */
        setView(path: string, data: any): void;

        /**
         * Remove a View
         */
        removeView(path: string): void;
    }

    interface View {
        readonly path: string;
        readonly source: string;

        /**
         * Remove a View
         */
        render(options?: any, fn?: (err: any, result: string) => void): Promise<string>;
        render(fn: (err: any, result: string) => void): Promise<any>;

        /**
         * Remove a View synchronously.
         */
        renderSync(options?: any): string;
    }
}

interface TemplateLocals {
    /**
     * Underscore object
     */
    _: underscore.UnderscoreStatic;
    page:
        | Hexo.Locals.Post
        | Hexo.Locals.Page
        | Hexo.Locals.Category
        | Hexo.Locals.Tag
        | IndexPage
        | ArchivePage
        | CategoryPage
        | TagPage;
    path: string;
    url: string;

    /**
     * Site settings in `_config.yml`
     */
    config: HexoConfig;
    theme: HexoConfig;
    env: Hexo["env"];
    layout: string;
    view_dir: string;
    site: any;
}

interface IndexPage {
    per_page?: number | undefined;
    total?: number | undefined;
    current?: number | undefined;
    current_url?: string | undefined;
    posts?: object | undefined;
    prev?: number | undefined;
    prev_link?: string | undefined;
    next?: number | undefined;
    next_link?: string | undefined;
    path?: string | undefined;
}

interface ArchivePage extends IndexPage {
    archive?: boolean | undefined;
    year?: number | undefined;
    month?: number | undefined;
}

interface CategoryPage extends IndexPage {
    category: string;
}

interface TagPage extends IndexPage {
    tag: string;
}

export = Hexo;
