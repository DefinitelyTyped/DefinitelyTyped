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

/**
 * Creates a Webpack compiler instance for WebpackDevServer with built-in
 * helpful messages. Takes the `require('webpack')` entry point as the first
 * argument. To provide the `urls` argument, use `prepareUrls()` described
 * below.
 */
export function createCompiler(
    _webpack: typeof webpack,
    config: webpack.Configuration,
    appName: string,
    urls: Urls,
    useYarn: boolean,
): webpack.Compiler;

/**
 * Creates a WebpackDevServer `proxy` configuration object from the `proxy`
 * setting in `package.json`.
 */
export function prepareProxy(
    proxySetting: any,
    appPublicFolder: string,
): WebpackDevServer.Configuration;

/**
 * Returns an object with local and remote URLs for the development server.
 * Pass this object to `createCompiler()` described above.
 */
export function prepareUrls(protocol: string, host: string, port: number): Urls;
