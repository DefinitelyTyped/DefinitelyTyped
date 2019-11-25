// Type definitions for puppeteer-extra 2.1
// Project: https://github.com/berstend/puppeteer-extra#readme
// Definitions by: Emily Klassen <https://github.com/forivall>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.0

export * from 'puppeteer';
import * as Puppeteer from 'puppeteer';

/**
 * Get all registered plugins.
 */
export const plugins: PuppeteerExtraPlugin[];

type PuppeteerExtra = typeof import('.');

/**
 * Outside interface to register plugins.
 *
 * @return `this` For chaining
 *
 * @example
 * const puppeteer = require('puppeteer-extra')
 * puppeteer.use(require('puppeteer-extra-plugin-anonymize-ua')())
 * puppeteer.use(require('puppeteer-extra-plugin-user-preferences')())
 * const browser = await puppeteer.launch(...)
 */
export function use(plugin: PuppeteerExtraPlugin): PuppeteerExtra;

/**
 * Collects the exposed `data` property of all registered plugins.
 * Will be reduced/flattened to a single array.
 *
 * Can be accessed by plugins that listed the `dataFromPlugins` requirement.
 *
 * Implemented mainly for plugins that need data from other plugins (e.g. `user-preferences`).
 *
 * @see puppeteer-extra-plugin/data
 * @param name - Filter data by name property
 */
export function getPluginData(name?: string): PluginData[];

/**
 * Launch a new browser instance with given arguments.
 *
 * Augments the original `puppeteer.launch` method with plugin lifecycle methods.
 *
 * All registered plugins that have a `beforeLaunch` method will be called
 * in sequence to potentially update the `options` Object before launching the browser.
 *
 * The browser will be closed when the parent node.js process is closed.
 *
 * @param options - Regular [Puppeteer launch options](https://github.com/GoogleChrome/puppeteer/blob/master/docs/api.md#puppeteerlaunchoptions)
 */
export function launch(options?: Puppeteer.LaunchOptions): Promise<Puppeteer.Browser>;

/**
 * Attach Puppeteer to an existing Chromium instance.
 *
 * Augments the original `puppeteer.connect` method with plugin lifecycle methods.
 *
 * All registered plugins that have a `beforeConnect` method will be called
 * in sequence to potentially update the `options` Object before launching the browser.
 */
export function connect(options?: Puppeteer.ConnectOptions): Promise<Puppeteer.Browser>;

// The following types are manually imported from `puppeteer-extra-plugins`

export interface PluginOptions {
  [key: string]: any;
}
export interface PluginData {
  name: {
      [key: string]: any;
  };
  value: {
      [key: string]: any;
  };
}
export type PluginDependencies = Set<string>;
export type PluginRequirements = Set<'launch' | 'headful' | 'dataFromPlugins' | 'runLast'>;
export interface PuppeteerExtraPlugin {
  /**
   * Plugin name (required).
   *
   * Convention:
   * - Package: `puppeteer-extra-plugin-anonymize-ua`
   * - Name: `anonymize-ua`
   *
   * @example
   * ```js
   * get name () { return 'anonymize-ua' }
   * ```
   */
  readonly name: string;
  /**
   * Plugin requirements (optional).
   *
   * Signal certain plugin requirements to the base class and the user.
   *
   * Currently supported:
   * - `launch`
   *   - If the plugin only supports locally created browser instances (no `puppeteer.connect()`),
   *     will output a warning to the user.
   * - `headful`
   *   - If the plugin doesn't work in `headless: true` mode,
   *     will output a warning to the user.
   * - `dataFromPlugins`
   *   - In case the plugin requires data from other plugins.
   *     will enable usage of `this.getDataFromPlugins()`.
   * - `runLast`
   *   - In case the plugin prefers to run after the others.
   *     Useful when the plugin needs data from others.
   *
   * @example
   * ```js
   * get requirements () {
   *   return new Set(['runLast', 'dataFromPlugins'])
   * }
   * ```
   */
  readonly requirements: PluginRequirements;
  /**
   * Plugin dependencies (optional).
   *
   * Missing plugins will be required() by puppeteer-extra.
   *
   * @example
   * ```js
   * get dependencies () {
   *   return new Set(['user-preferences'])
   * }
   * // Will ensure the 'puppeteer-extra-plugin-user-preferences' plugin is loaded.
   * ```
   */
  readonly dependencies: PluginDependencies;
  /**
   * Plugin data (optional).
   *
   * Plugins can expose data (an array of objects), which in turn can be consumed by other plugins,
   * that list the `dataFromPlugins` requirement (by using `this.getDataFromPlugins()`).
   *
   * Convention: `[ {name: 'Any name', value: 'Any value'} ]`
   *
   * @see [[getDataFromPlugins]]
   *
   * @example
   * ```js
   * // plugin1.js
   * get data () {
   *   return [
   *     {
   *       name: 'userPreferences',
   *       value: { foo: 'bar' }
   *     },
   *     {
   *       name: 'userPreferences',
   *       value: { hello: 'world' }
   *     }
   *   ]
   *
   * // plugin2.js
   * get requirements () { return new Set(['dataFromPlugins']) }
   *
   * async beforeLaunch () {
   *   const prefs = this.getDataFromPlugins('userPreferences').map(d => d.value)
   *   this.debug(prefs) // => [ { foo: 'bar' }, { hello: 'world' } ]
   * }
   * ```
   */
  readonly data: PluginData[];
  /**
   * Access the plugin options (usually the `defaults` merged with user defined options)
   *
   * To skip the auto-merging of defaults with user supplied opts don't define a `defaults`
   * property and set the `this._opts` Object in your plugin constructor directly.
   *
   * @see [[defaults]]
   *
   * @example
   * ```js
   * get defaults () { return { foo: "bar" } }
   *
   * async onPageCreated (page) {
   *   this.debug(this.opts.foo) // => bar
   * }
   * ```
   */
  readonly opts: PluginOptions;
  /**
   * Before a new browser instance is created/launched.
   *
   * Can be used to modify the puppeteer launch options by modifying or returning them.
   *
   * Plugins using this method will be called in sequence to each
   * be able to update the launch options.
   *
   * @example
   * ```js
   * async beforeLaunch (options) {
   *   if (this.opts.flashPluginPath) {
   *     options.args.push(`--ppapi-flash-path=${this.opts.flashPluginPath}`)
   *   }
   * }
   * ```
   *
   * @param options - Puppeteer launch options
   */
  beforeLaunch?(options: any): Promise<void>;
  /**
   * After the browser has launched.
   *
   * Note: Don't assume that there will only be a single browser instance during the lifecycle of a plugin.
   * It's possible that `pupeeteer.launch` will be  called multiple times and more than one browser created.
   * In order to make the plugins as stateless as possible don't store a reference to the browser instance
   * in the plugin but rather consider alternatives.
   *
   * E.g. when using `onPageCreated` you can get a browser reference by using `page.browser()`.
   *
   * Alternatively you could expose a class method that takes a browser instance as a parameter to work with:
   *
   * ```es6
   * const fancyPlugin = require('puppeteer-extra-plugin-fancy')()
   * puppeteer.use(fancyPlugin)
   * const browser = await puppeteer.launch()
   * await fancyPlugin.killBrowser(browser)
   * ```
   *
   * @param  browser - The `puppeteer` browser instance.
   * @param  opts.options - Puppeteer launch options used.
   *
   * @example
   * ```js
   * async afterLaunch (browser, opts) {
   *   this.debug('browser has been launched', opts.options)
   * }
   * ```
   */
  afterLaunch?(browser: Puppeteer.Browser, opts?: {
      options: Puppeteer.LaunchOptions;
  }): Promise<void>;
  /**
   * Before connecting to an existing browser instance.
   *
   * Can be used to modify the puppeteer connect options by modifying or returning them.
   *
   * Plugins using this method will be called in sequence to each
   * be able to update the launch options.
   */
  beforeConnect?(options: Puppeteer.ConnectOptions): Promise<void>;
  /**
   * After connecting to an existing browser instance.
   *
   * > Note: Don't assume that there will only be a single browser instance during the lifecycle of a plugin.
   *
   * @param browser - The `puppeteer` browser instance.
   */
  afterConnect?(browser: Puppeteer.Browser, opts?: {}): Promise<void>;
  /**
   * Called when a browser instance is available.
   *
   * This applies to both `puppeteer.launch()` and `puppeteer.connect()`.
   *
   * Convenience method created for plugins that need access to a browser instance
   * and don't mind if it has been created through `launch` or `connect`.
   *
   * > Note: Don't assume that there will only be a single browser instance during the lifecycle of a plugin.
   *
   * @param browser - The `puppeteer` browser instance.
   */
  onBrowser?(browser: Puppeteer.Browser, opts: any): Promise<void>;
  /**
   * Called when a target is created, for example when a new page is opened by window.open or browser.newPage.
   *
   * > Note: This includes target creations in incognito browser contexts.
   *
   * > Note: This includes browser instances created through `.launch()` as well as `.connect()`.
   */
  onTargetCreated?(target: Puppeteer.Target): Promise<void>;
  /**
   * Same as `onTargetCreated` but prefiltered to only contain Pages, for convenience.
   *
   * > Note: This includes page creations in incognito browser contexts.
   *
   * > Note: This includes browser instances created through `.launch()` as well as `.connect()`.
   *
   * @example
   * ```js
   * async onPageCreated (page) {
   *   let ua = await page.browser().userAgent()
   *   if (this.opts.stripHeadless) {
   *     ua = ua.replace('HeadlessChrome/', 'Chrome/')
   *   }
   *   this.debug('new ua', ua)
   *   await page.setUserAgent(ua)
   * }
   * ```
   */
  onPageCreated?(page: Puppeteer.Page): Promise<void>;
  /**
   * Called when the url of a target changes.
   *
   * > Note: This includes target changes in incognito browser contexts.
   *
   * > Note: This includes browser instances created through `.launch()` as well as `.connect()`.
   */
  onTargetChanged?(target: Puppeteer.Target): Promise<void>;
  /**
   * Called when a target is destroyed, for example when a page is closed.
   *
   * > Note: This includes target destructions in incognito browser contexts.
   *
   * > Note: This includes browser instances created through `.launch()` as well as `.connect()`.
   */
  onTargetDestroyed?(target: Puppeteer.Target): Promise<void>;
  /**
   * Called when Puppeteer gets disconnected from the Chromium instance.
   *
   * This might happen because of one of the following:
   * - Chromium is closed or crashed
   * - The `browser.disconnect` method was called
   */
  onDisconnected?(): Promise<void>;
  /**
   * **Deprecated:** Since puppeteer v1.6.0 `onDisconnected` has been improved
   * and should be used instead of `onClose`.
   *
   * In puppeteer < v1.6.0 `onDisconnected` was not catching all exit scenarios.
   * In order for plugins to clean up properly (e.g. deleting temporary files)
   * the `onClose` method had been introduced.
   *
   * > Note: Might be called multiple times on exit.
   *
   * > Note: This only includes browser instances created through `.launch()`.
   */
  onClose?(): Promise<void>;
  /**
   * After the plugin has been registered in `puppeteer-extra`.
   *
   * Normally right after `puppeteer.use(plugin)` is called
   */
  onPluginRegistered?(): Promise<void>;
  /**
   * @hidden
   */
  readonly _isPuppeteerExtraPlugin: boolean;
}
