// Type definitions for poi 12.5
// Project: https://github.com/egoist/poi/
// Definitions by: c4605 <https://github.com/bolasblack>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import { ICompiler, Configuration as WebpackConfig } from "webpack";
import { Configuration as WebpackDevServerConfig } from "webpack-dev-server";
import { Options as HtmlWebpackPluginOptions } from "html-webpack-plugin";
import * as WebpackChainConfig from "webpack-chain";
import CAC from "cac/types/CAC";

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
        files: ReadonlyArray<string>
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
        entry?: Config.Entry;
        output?: Config.Output;
        pages?: Config.Pages;
        babel?: Config.Babel;
        css?: Config.Css;
        assets?: Config.Assets;
        envs?: Config.Envs;
        constants?: Config.Constants;
        chainWebpack?: Config.ChainWebpack;
        configureWebpack?: Config.ConfigureWebpack;
        publicFolder?: Config.PublicFolder;
        devServer?: Config.DevServer;
        plugins?: Config.Plugins;
    }

    namespace Config {
        type Entry = WebpackConfig["entry"];

        interface Output {
            dir?: string;
            clean?: boolean;
            format?: "iife" | "cjs" | "umd";
            moduleName?: string;
            sourceMap?: boolean;
            minimize?: boolean;
            publicUrl?: string;
            fileNames?: Output.FileNames;
            target?:
                | "web"
                | "electron"
                | "electron-renderer"
                | "electron-main"
                | "node"
                | "node-webkit"
                | "async-node"
                | "webworker";
            html?: Output.Html;
        }
        namespace Output {
            interface FileNames {
                js?: string;
                css?: string;
                font?: string;
                image?: string;
            }

            interface HtmlOptions {
                title?: string;
                filename?: string;
                template?: string;
                inject?: boolean;
            }

            type Html = boolean | HtmlOptions;
        }

        interface Pages {
            [pageName: string]:
                | string
                | Partial<HtmlWebpackPluginOptions> & {
                      entry: string;
                      chunks?: string[];
                  };
        }

        interface Babel {
            jsx?: string;
            transpileModules?: string | string[];
            namedImports?: string | Babel.NamedImportsOptions;
        }
        namespace Babel {
            interface NamedImportsOptions {
                [fileExt: string]: {
                    [ComponentName: string]: string;
                };
            }
        }

        interface Css {
            extract?: boolean;
            sourceMap?: boolean;
            loaderOptions?: Css.LoaderOptions;
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
            inlineImageMaxSize?: number;
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
            host?: string;
            port?: string | number;
            hot?: boolean;
            hotOnly?: boolean;
            hotEntries?: string[];
            historyApiFallback?: WebpackDevServerConfig["historyApiFallback"];
            open?: boolean;
            proxy?: string | WebpackDevServerConfig["proxy"];
            https?: WebpackDevServerConfig["https"];
            before?: WebpackDevServerConfig["before"];
            after?: WebpackDevServerConfig["after"];
            headers?: WebpackDevServerConfig["headers"];
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
            stopDir?: string
        ): string | null;
        resolve(options?: ConfigLoader.Options): string | null;

        load(
            files?: ReadonlyArray<string>,
            cwd?: string,
            stopDir?: string
        ): any;
        load(options?: ConfigLoader.Options): any;
    }
    namespace ConfigLoader {
        interface Options {
            files?: string[];
            cwd?: string;
            stopDir?: string;
            packageKey?: string;
            parseJSON?: (str: string) => any;
        }
    }

    interface HookHandler {
        (config: WebpackChainConfig, opts: Opts): void;
    }
}

export = PoiCore;
