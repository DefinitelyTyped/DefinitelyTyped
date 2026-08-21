import * as Hapi from "hapi";

declare module "hapi" {
    interface Server {
        /**
         * Initializes the server views manager
         * @see {@link https://github.com/hapijs/vision/blob/master/API.md#serverviewsoptions}
         */
        views(options: ServerViewsConfiguration): ViewManager;
        /**
         * Utilizes the server views manager to render a template
         * @see {@link https://github.com/hapijs/vision/blob/master/API.md#serverrendertemplate-context-options-callback}
         */
        render: RenderMethod;
    }

    interface Request {
        /**
         * request.render() works the same way as server.render() but is for use inside of request handlers. server.render() does not work inside request handlers when called via request.server.render() if the view manager was created by a plugin. This is because the request.server object does not have access to the plugin realm where the view manager was configured. request.render() gets its realm from the route that the request was bound to.
         * Note that this will not work in onRequest extensions added by the plugin because the route isn't yet set at this point in the request lifecycle and the request.render() method will produce the same limited results server.render() can.
         * @see {@link https://github.com/hapijs/vision/blob/master/API.md#requestrendertemplate-context-options-callback}
         */
        render: RenderMethod;
    }

    interface RouteHandlerPlugins {
        /**
         * The view handler can be used with routes registered in the same realm as the view manager. The handler takes an options parameter that can be either a string or an object. When the options parameter is a string, it should be the filename and path of the template relative to the templates path configured via the views manager. When the options parameter is an object, it may have the following keys:
         * The rendering context contains the `params`, `payload`, `query`, and `pre` values from the request by default (these can be overriden by values explicitly set via the options).
         * @see {@link https://github.com/hapijs/vision/blob/master/API.md#the-view-handler}
         */
        view?: string | {
            /** the template filename and path, relative to the templates path configured via the server views manager. */
            template: string;
            /** optional object used by the template to render context-specific result. Defaults to no context {}. */
            context?: Object | undefined;
            /**
             * optional object used to override the server's views manager configuration for this response. Cannot override isCached, partialsPath, or helpersPath which are only loaded at initialization.
             * TODO check if it can have `defaultExtension`.
             */
            options?: ViewHandlerOrReplyOptions | undefined;
        } | undefined;
    }

    interface Base_Reply {
        /**
         * Concludes the handler activity by returning control over to the router with a templatized view response
         * Returns a response object. The generated response will have the variety property set to view.
         * The response flow control rules apply.
         * @param template  the template filename and path, relative to the templates path configured via the server views manager.
         * @param context  optional object used by the template to render context-specific result. Defaults to no context {}.
         * @param options  optional object used to override the server's views manager configuration for this response. Cannot override isCached, partialsPath, or helpersPath which are only loaded at initialization.
         * @see {@link https://github.com/hapijs/vision/blob/master/API.md#replyviewtemplate-context-options}
         */
        view(templatePath: string, context?: any, options?: ViewHandlerOrReplyOptions): Response;
    }
}

/**
 * Options for initialising server views manager
 * @see {@link https://github.com/hapijs/vision/blob/master/API.md#serverviewsoptions}
 */
export interface ServerViewsConfiguration extends ServerViewsAdditionalOptions {
    /** required object where each key is a file extension (e.g. 'html', 'hbr'), mapped to the npm module used for rendering the templates. Alternatively, the extension can be mapped to an object */
    engines: { [fileExtension: string]: NpmModule } | ServerViewsEnginesOptions;
    /** defines the default filename extension to append to template names when multiple engines are configured and no explicit extension is provided for a given template. No default value. */
    defaultExtension?: string | undefined;
}

/**
 * Includes `module` and any of the views options listed below (@see ServerViewsAdditionalOptions) (except defaultExtension) to override the defaults for a specific engine.
 */
export interface ServerViewsEnginesOptions extends ServerViewsAdditionalOptions {
    /**
     * The npm module used for rendering the templates. The module object must contain the compile() function
     * @see {@link https://github.com/hapijs/vision/blob/master/API.md#serverviewsoptions} > options > engines > module
     */
    module: NpmModule;
}
export interface ServerViewsAdditionalOptions extends ViewHandlerOrReplyOptions {
    /** the root file path, or array of file paths, where partials are located. Partials are small segments of template code that can be nested and reused throughout other templates. Defaults to no partials support (empty path). */
    partialsPath?: string | string[] | undefined;
    /** the directory path, or array of directory paths, where helpers are located. Helpers are functions used within templates to perform transformations and other data manipulations using the template context or other inputs. Each '.js' file in the helpers directory is loaded and the file name is used as the helper name. The files must export a single method with the signature function(context) and return a string. Sub-folders are not supported and are ignored. Defaults to no helpers support (empty path). Note that jade does not support loading helpers this way. */
    helpersPath?: string | string[] | undefined;
    /** if set to false, templates will not be cached (thus will be read from file on every use). Defaults to true. */
    isCached?: boolean | undefined;
}

/**
 * @see {@link https://github.com/hapijs/vision/blob/master/API.md#the-view-handler} > options for the list of attributes it can not have (isCached, partialsPath, helpersPath)
 */
export interface ViewHandlerOrReplyOptions {
    /** the root file path, or array of file paths, used to resolve and load the templates identified when calling reply.view(). Defaults to current working directory. */
    path?: string | string[] | undefined;
    /**
     * a base path used as prefix for path and partialsPath. No default.
     * TODO update if PR for updating docs is accepted.
     */
    relativeTo?: string | undefined;
    /** if set to true or a layout filename, layout support is enabled. A layout is a single template file used as the parent template for other view templates in the same engine. If true, the layout template name must be 'layout.ext' where 'ext' is the engine's extension. Otherwise, the provided filename is suffixed with the engine's extension and loaded. Disable layout when using Jade as it will handle including any layout files independently. Defaults to false. */
    layout?: boolean | undefined;
    /** the root file path, or array of file paths, where layout templates are located (using the relativeTo prefix if present). Defaults to path. */
    layoutPath?: string | string[] | undefined;
    /** the key used by the template engine to denote where primary template content should go. Defaults to 'content'. */
    layoutKeyword?: string | undefined;
    /** the text encoding used by the templates when reading the files and outputting the result. Defaults to 'utf8'. */
    encoding?: string | undefined;
    /** if set to true, allows absolute template paths passed to reply.view(). Defaults to false. */
    allowAbsolutePaths?: boolean | undefined;
    /** if set to true, allows template paths passed to reply.view() to contain '../'. Defaults to false. */
    allowInsecureAccess?: boolean | undefined;
    /** options object passed to the engine's compile function. Defaults to empty options {}. */
    compileOptions?: CompileOptions | undefined;
    /** options object passed to the returned function from the compile operation. Defaults to empty options {}. */
    runtimeOptions?: RuntimeOptions | undefined;
    /** the content type of the engine results. Defaults to 'text/html'. */
    contentType?: string | undefined;
    /** specify whether the engine compile() method is 'sync' or 'async'. Defaults to 'sync'. */
    compileMode?: "sync" | "async" | undefined;
    /** a global context used with all templates. The global context option can be either an object or a function that takes the request as its only argument and returns a context object. The request object is only provided when using the view handler or reply.view(). When using server.render() or request.render(), the request argument will be null. When rendering views, the global context will be merged with any context object specified on the handler or using reply.view(). When multiple context objects are used, values from the global context always have lowest precedence. */
    context?: Object | ((request: Hapi.Request) => Object) | undefined;
}

/**
 * Options passed to module when compiling template.
 * Cast your options to this interface or extend it with:
 *      declare module 'hapi' {
 *          interface CompileOptions {
 *              noEscape: boolean;
 *          }
 *      }
 */
export interface CompileOptions {}
export interface RuntimeOptions {}

/**
 * the rendering function. The required function signature depends on the compileMode settings (see below).
 * If compileMode is 'sync', the signature is compile(template, options), the return value is a function with signature function(context, options) (the compiled sync template), and the method is allowed to throw errors.
 * If compileMode is 'async', the signature is compile(template, options, next) where next has the signature function(err, compiled), compiled is a function with signature function(context, options, callback) (the compiled async template) and callback has the signature function(err, rendered).
 */
export interface ServerViewCompile {
    (template: string, options: any): (context: any, options: any) => void;
    (
        template: string,
        options: any,
        next: (
            err: Error | null,
            compiled: (
                context: any,
                options: any,
                callback: (err: null | Error, rendered: string | null) => void,
            ) => void,
        ) => void,
    ): void;
}

/**
 * The npm module used for rendering the templates. The module object must contain the compile() function
 * @see {@link https://github.com/hapijs/vision/blob/master/API.md#serverviewsoptions} > options > engines > module
 */
interface NpmModule {
    /** the rendering function. The required function signature depends on the compileMode settings */
    compile: ServerViewCompile;
    /** initializes additional engine state. The config object is the engine configuration object allowing updates to be made. This is useful for engines like Nunjucks that rely on additional state for rendering. next has the signature function(err). */
    prepare(config: EngineConfigurationObject, next: (err?: Error) => void): void;
    /** registers a partial for use during template rendering. The name is the partial path that templates should use to reference the partial and src is the uncompiled template string for the partial. */
    registerPartial(name: string, src: string): void;
    /** registers a helper for use during template rendering. The name is the name that templates should use to reference the helper and helper is the function that will be invoked when the helper is called. */
    registerHelper(name: string, helper: Function): void;
}
export interface EngineConfigurationObject {}

/**
 * Renders a template
 * @param template - the template filename and path, relative to the views manager templates path (path or relativeTo).
 * @param context - optional object used by the template to render context-specific result. Defaults to no context ({}).
 * @param options - optional object used to override the views manager configuration.
 * @param callback - the callback function with signature function (err, rendered, config) where:
 *      * err - the rendering error if any.
 *      * rendered - the result view string or undefined if error.
 *      * config - the configuration used to render the template or undefined if error.
 * If no `callback` is provided, a `Promise` object is returned. The returned promise is resolved with only the rendered content and not the configuration object.
 * @see {@link https://github.com/hapijs/vision/blob/master/API.md#serverrendertemplate-context-options-callback}
 * @see {@link https://github.com/hapijs/vision/blob/master/API.md#managerrendertemplate-context-options-callback}
 */
interface RenderMethod {
    (template: string, context?: any, options?: ServerViewsAdditionalOptions, callback?: RenderCallBack): void;
    (template: string, context?: any, options?: ServerViewsAdditionalOptions): Promise<string>;
}
export interface RenderCallBack {
    (err: null | Error, rendered?: string, options?: ServerViewsAdditionalOptions): void;
}

/**
 * View Manager
 * @see {@link https://github.com/hapijs/vision/blob/master/API.md#view-manager}
 */
export interface ViewManager {
    /**
     * Registers a helper, on all configured engines that have a registerHelper() method, for use during template rendering. Engines without a registerHelper() method will be skipped. The name is the name that templates should use to reference the helper and helper is the function that will be invoked when the helper is called.
     * @param name
     * @param helper
     * @see {@link https://github.com/hapijs/vision/blob/master/API.md#managerregisterhelpername-helper}
     */
    registerHelper(name: string, helper: Function): void;
    /**
     * Renders a template. This is typically not needed and it is usually more convenient to use server.render().
     * @see {@link https://github.com/hapijs/vision/blob/master/API.md#managerrendertemplate-context-options-callback}
     */
    render: RenderMethod;
}

// Has no plugin registration options
declare var visionPlugin: Hapi.PluginFunction<{}>;

export default visionPlugin;
