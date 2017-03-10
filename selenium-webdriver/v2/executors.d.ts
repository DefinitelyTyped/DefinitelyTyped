/* tslint:disable */
import * as webdriver from './index';

/**
 * Creates a command executor that uses WebDriver's JSON wire protocol.
 * @param {(string|!promise.Promise<string>)} url The server's URL,
 *     or a promise that will resolve to that URL.
 * @param {?string=} opt_proxy (optional) The URL of the HTTP proxy for the
 *     client to use.
 * @returns {!./lib/command.Executor} The new command executor.
 */
export function createExecutor(url: string | webdriver.promise.Promise<string>, opt_agent?: string, opt_proxy?: string): webdriver.Executor;
