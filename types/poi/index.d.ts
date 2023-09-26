import CAC from "cac/types/CAC";
import { Options as HtmlWebpackPluginOptions } from "html-webpack-plugin";
import { Configuration as WebpackConfig, ICompiler } from "webpack";
import * as WebpackChainConfig from "webpack-chain";
import { Configuration as WebpackDevServerConfig } from "webpack-dev-server";

/**
 * https://poi.js.org/api.html#constructor-argv
 */
declare class PoiCore {
    mode: PoiCore.Mode;

    cli: CAC;

    /** The current running command */
    command: CAC["command"];

    config: PoiCore.Config;

    isProd: boolean;

    configLoader: PoiCore.ConfigLoader;

    constructor(argv?: string[]);

    /** Check if a package is included in the `dependencies` or `devDependencies` field your `package.json` */
    hasDependency(name: string): boolean;

    hasPlugin(name: string): boolean;

    hook(hookName: string, handler: PoiCore.HookHandler): void;

    resolveCwd(...args: string[]): string;

    resolveOutDir(...args: string[]): string;

    run(): Promise<void>;

    getCacheConfig(
        dir: string,
        keys: { [k: string]: string },
        files: ReadonlyArray<string>,
    ): {
        cacheDirectory: string;
        cacheIdentifier: string;
    };

    createWebpackChain(opts?: { [k: string]: any }): WebpackChainConfig;

    createWebpackCompiler(config: WebpackConfig): ICompiler;

    localResolve(pkg: string, cwd?: string): string | null;

    localRequire(pkg: string, cwd?: string): any;
}

declare namespace PoiCore {
    type Mode = "production" | "development" | "test";

    interface Opts {
        type: string;
        mode: Mode;
        [k: string]: any;
    }

    /**
     * https://poi.js.org/config.html
     */
    interface Config {
        entry?: Config.Entry | undefined;
        output?: Config.Output | undefined;
        pages?: Config.Pages | undefined;
        babel?: Config.Babel | undefined;
        css?: Config.Css | undefined;
        assets?: Config.Assets | undefined;
        envs?: Config.Envs | undefined;
        constants?: Config.Constants | undefined;
        chainWebpack?: Config.ChainWebpack | undefined;
        configureWebpack?: Config.ConfigureWebpack | undefined;
        publicFolder?: Config.PublicFolder | undefined;
        devServer?: Config.DevServer | undefined;
        plugins?: Config.Plugins | undefined;
    }

    namespace Config {
        type Entry = WebpackConfig["entry"];

        interface Output {
            dir?: string | undefined;
            clean?: boolean | undefined;
            format?: "iife" | "cjs" | "umd" | undefined;
            moduleName?: string | undefined;
            sourceMap?: boolean | undefined;
            minimize?: boolean | undefined;
            publicUrl?: string | undefined;
            fileNames?: Output.FileNames | undefined;
            target?:
                | "web"
                | "electron"
                | "electron-renderer"
                | "electron-main"
                | "node"
                | "node-webkit"
                | "async-node"
                | "webworker"
                | undefined;
            html?: Output.Html | undefined;
        }
        namespace Output {
            interface FileNames {
                js?: string | undefined;
                css?: string | undefined;
                font?: string | undefined;
                image?: string | undefined;
            }

            interface HtmlOptions {
                title?: string | undefined;
                filename?: string | undefined;
                template?: string | undefined;
                inject?: boolean | undefined;
            }

            type Html = boolean | HtmlOptions;
        }

        interface Pages {
            [pageName: string]:
                | string
                | Partial<HtmlWebpackPluginOptions> & {
                    entry: string;
                    chunks?: string[] | undefined;
                };
        }

        interface Babel {
            jsx?: string | undefined;
            transpileModules?: string | string[] | undefined;
            namedImports?: string | Babel.NamedImportsOptions | undefined;
        }
        namespace Babel {
            interface NamedImportsOptions {
                [fileExt: string]: {
                    [ComponentName: string]: string;
                };
            }
        }

        interface Css {
            extract?: boolean | undefined;
            sourceMap?: boolean | undefined;
            loaderOptions?: Css.LoaderOptions | undefined;
        }
        namespace Css {
            interface LoaderOptions {
                css?: any;
                sass?: any;
                postcss?: any;
                less?: any;
                stylus?: any;
            }
        }

        interface Assets {
            inlineImageMaxSize?: number | undefined;
        }

        interface Envs {
            [envName: string]: string;
        }

        interface Constants {
            [constantName: string]: string;
        }

        interface ChainWebpack {
            (config: WebpackChainConfig, opts: Opts): void;
        }

        type ConfigureWebpack =
            | WebpackConfig
            | ((config: WebpackConfig, opts: Opts) => void | WebpackConfig);

        type PublicFolder = string | boolean;

        interface DevServer {
            host?: string | undefined;
            port?: string | number | undefined;
            hot?: boolean | undefined;
            hotOnly?: boolean | undefined;
            hotEntries?: string[] | undefined;
            historyApiFallback?: WebpackDevServerConfig["historyApiFallback"] | undefined;
            open?: boolean | undefined;
            proxy?: string | WebpackDevServerConfig["proxy"] | undefined;
            https?: WebpackDevServerConfig["https"] | undefined;
            before?: WebpackDevServerConfig["before"] | undefined;
            after?: WebpackDevServerConfig["after"] | undefined;
            headers?: WebpackDevServerConfig["headers"] | undefined;
        }

        interface PluginOption {
            resolve: string;
            options?: any;
        }
        type Plugins = Array<string | PluginOption>;
    }

    interface ConfigLoader {
        resolve(
            files?: ReadonlyArray<string>,
            cwd?: string,
            stopDir?: string,
        ): string | null;
        resolve(options?: ConfigLoader.Options): string | null;

        load(
            files?: ReadonlyArray<string>,
            cwd?: string,
            stopDir?: string,
        ): any;
        load(options?: ConfigLoader.Options): any;
    }
    namespace ConfigLoader {
        interface Options {
            files?: string[] | undefined;
            cwd?: string | undefined;
            stopDir?: string | undefined;
            packageKey?: string | undefined;
            parseJSON?: ((str: string) => any) | undefined;
        }
    }

    interface HookHandler {
        (config: WebpackChainConfig, opts: Opts): void;
    }
}

export = PoiCore;
