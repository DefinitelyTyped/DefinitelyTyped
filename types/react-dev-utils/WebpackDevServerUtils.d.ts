import webpack = require('webpack');
import WebpackDevServer = require('webpack-dev-server');

export interface Urls {
    lanUrlForConfig?: string;
    lanUrlForTerminal?: string;
    localUrlForTerminal: string;
    localUrlForBrowser: string;
}

/**
 * Returns a Promise resolving to either `defaultPort` or next available port
 * if the user confirms it is okay to do. If the port is taken and the user has
 * refused to use another port, or if the terminal is not interactive and can’t
 * present user with the choice, resolves to `null`.
 */
export function choosePort(host: string, defaultPort: number): Promise<number | null>;

export interface CreateCompilerOptions {
    /**
     * The name that will be printed to the terminal.
     */
    appName: string;
    /**
     * The webpack configuration options to be provided to the webpack constructor.
     */
    config: webpack.Configuration;
    /**
     * To provide the `urls` argument, use `prepareUrls()` described below.
     */
    urls: Urls;
    /**
     * If `true`; yarn instructions will be emitted in the terminal instead of npm.
     */
    useYarn?: boolean;
    /**
     * Takes the `require('webpack')` entry point.
     */
    webpack: typeof webpack;
}
export interface CreateCompilerOptionsTypescript extends CreateCompilerOptions {
    /**
     * Required if useTypeScript is `true`.
     * This is useful when running fork-ts-checker-webpack-plugin with `async: true` to
     * report errors that are emitted after the webpack build is complete.
     */
    devSocket: {
        /**
         * Called when there are build errors.
         */
        errors: (errors: string[]) => void;
        /**
         * Called when there are build warnings.
         */
        warnings: (warnings: string[]) => void;
    };
    /**
     * If `true`, TypeScript type checking will be enabled.
     * Be sure to provide the `devSocket` argument above if this is set to `true`.
     */
    useTypeScript: boolean;
}

/**
 * Creates a Webpack compiler instance for WebpackDevServer with built-in
 * helpful messages.
 */
export function createCompiler(opts: CreateCompilerOptions): webpack.Compiler;
// if the signatures are merged, TS will not enforce that both useTypeScript and devSocket are provided
// tslint:disable-next-line:unified-signatures
export function createCompiler(opts: CreateCompilerOptionsTypescript): webpack.Compiler;

/**
 * Creates a WebpackDevServer `proxy` configuration object from the `proxy`
 * setting in `package.json`.
 */
export function prepareProxy(
    proxySetting: string | undefined,
    appPublicFolder: string,
    servedPathname: string,
): WebpackDevServer.ProxyConfigArray;

/**
 * Returns an object with local and remote URLs for the development server.
 * Pass this object to `createCompiler()` described above.
 */
export function prepareUrls(protocol: string, host: string, port: number): Urls;
