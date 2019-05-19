/**
 * Definition from Puppeteer.js
 * https://github.com/GoogleChrome/puppeteer/blob/master/lib/Puppeteer.js
 */

import { EventEmitter } from "events";
import { ChildProcess } from "child_process";
import { Device } from "./DeviceDescriptors";
import { BrowserFetcher, FetcherOptions } from "./BrowserFetcher";
import { Browser, ConnectOptions } from "./Browser";
import { ChromeArgOptions, LaunchOptions } from "./Launcher";

/** Attaches Puppeteer to an existing Chromium instance */
export function connect(options?: ConnectOptions): Promise<Browser>;
/** The default flags that Chromium will be launched with */
export function defaultArgs(options?: ChromeArgOptions): string[];
/** Path where Puppeteer expects to find bundled Chromium */
export function executablePath(): string;
/** The method launches a browser instance with given arguments. The browser will be closed when the parent node.js process is closed. */
export function launch(options?: LaunchOptions): Promise<Browser>;
/** This methods attaches Puppeteer to an existing Chromium instance. */
export function createBrowserFetcher(options?: FetcherOptions): BrowserFetcher;
/**
 * Predefigned puppeter devices as `Nexus 7`, `Nexus 7 landscape`, `iPhone X`, `iPhone X landscape`...
 *
 * see https://github.com/GoogleChrome/puppeteer/blob/master/lib/DeviceDescriptors.js for full list
 *
 * @since 1.15.0
 */
export const devices: {
  [key: string]: Device;
};
/**
 * Puppeteer methods might throw errors if they are unable to fufill a request. For example, page.waitForSelector(selector[, options])
 * might fail if the selector doesn't match any nodes during the given timeframe.
 *
 * For certain types of errors Puppeteer uses specific error classes. These classes are available via puppeteer.errors
 *
 * @since 1.15.0
 */
export const error: Error | undefined;
