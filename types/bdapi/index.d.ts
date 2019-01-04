// Type definitions for bdapi x.x
// Project: https://github.com/baz/foo (Does not have to be to GitHub, but prefer linking to a source code repository rather than to a project website.)
// Definitions by: Ari Seyhun <https://github.com/Acidic9>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

type ReactInstance = typeof React
type ReactDOMInstance = typeof ReactDOM
type BdApiInstance = typeof BdApiModule

declare var BdApi: BdApiInstance

declare module BdApiModule {
	/**
	 * The React module being used inside Discord.
	 */
	export const React: ReactInstance

	/**
	 * The ReactDOM module being used inside Discord.
	 */
	export const ReactDOM: ReactDOMInstance

	/**
	 * Creates an shows an alert modal to the user. A preview of how it may look can be found [here](https://i.zackrauen.com/7qnnNC.png).
	 *
	 * @param {string} title - The title to show on the modal.
	 * @param {string} content - Content to show in the modal (can be html string).
	 */
	export function alert(title: string, content: string): void

	/**
	 * Removes a style added with [`injectCSS`](#injectcssid-css) below.
	 *
	 * @param {string} id - ID of the node to remove.
	 */
	export function clearCSS(id: string): void

	/**
	 * Deletes some saved data for plugin `pluginName` with key `key`.
	 *
	 * @param {string} pluginName - Which plugin this is being used for.
	 * @param {string} key - Key for which data should be deleted.
	 */
	export function deleteData(pluginName: string, key: string): void

	/**
	 * Searches for an internal Discord webpack module based on `filter`.
	 *
	 * @param {function} filter - A function to use to filter modules.
	 * @returns {any|null} - the module found or null if none were found.
	 */
	export function findModule(filter: () => void): any|null

	/**
	 * Searches for multiple internal Discord webpack module based on `filter`. It's the same as [`findModule`](#findmodulefilter) but will return all matches
	 *
	 * @param {function} filter - A function to use to filter modules.
	 * @returns {Array<any>} - the modules found or null if none were found.
	 */
	export function findAllModules(filter: () => void): Array<any>

	/**
	 * Searches for an internal Discord webpack module that has every property passed.
	 *
	 * @returns {any|null} - the module found or null if none were found.
	 */
	export function findModuleByProps(): any|null

	/**
	 * Returns BandagedBD's instance of the core module. Only use this if you know what you are doing.
	 *
	 * @returns {Core} - BBD's instantiated core module.
	 */
	export function getCore(): any

	/**
	 * Alias for [loadData(pluginName, key)](#loaddatapluginname-key)
	 *
	 */
	export function getData(): void

	/**
	 * Gets the internal react instance for a particular node.
	 *
	 * @param {HTMLElement} node - jQuery|Node to find the react instance for.
	 * @returns {object|undefined} - the instance if found or undefined otherwise.
	 */
	export function getInternalInstance(node: HTMLElement): object|undefined

	/**
	 * Gets the instance of another plugin with the name `name`.
	 *
	 * @param {string} name - Name of the plugin to retreive.
	 * @returns {object|null} - the plugin if found or null otherwise.
	 */
	export function getPlugin(name: string): object|null

	/**
	 * Adds a block of css to the current document's `head`.
	 *
	 * @param {string} id - Identifier for the node to be added. Can be used later with [`clearCSS`](#clearcssid) from above.
	 * @param {string} css - String of css to be added.
	 * @returns {object|null} - the plugin if found or null otherwise.
	 */
	export function injectCSS(id: string, css: string): object|null

	/**
	 * Links some remote JavaScript to be added to the page. Useful for libraries like `Sortable.js`.
	 *
	 * @param {string} id - Identifier for the node to be added. Can be used later with [`unlinkJS`](#unlinkjsid) below.
	 * @param {string} url - URL of the js.
	 */
	export function linkJS(id: string, url: string): void

	/**
	 * Gets some saved data for plugin `pluginName` with key `key`. Data can be saved with [`saveData`](#savedatapluginname-key-data).
	 *
	 * @param {string} pluginName - Which plugin this is being used for.
	 * @param {string} key - Key for which data should be returned.
	 * @returns {any|null} - The information that was saved previously, or null otherwise.
	 */
	export function loadData(pluginName: string, key: string): any|null

	/**
	 * This function monkey-patches a method on an object. The patching callback may be run before, after or instead of target method.
	 * - Be careful when monkey-patching. Think not only about original functionality of target method and your changes, but also about developers of other plugins, who may also patch this method before or after you. Try to change target method behaviour as little as possible, and avoid changing method signatures.
	 * - Display name of patched method is changed, so you can see if a function has been patched (and how many times) while debugging or in the stack trace. Also, patched methods have property `__monkeyPatched` set to `true`, in case you want to check something programmatically.
	 *
	 * @param {object} module - Object to be patched. You can can also pass class prototypes to patch all class instances.
	 * @param {string} methodName - The name of the target message to be patched.
	 * @param {object} options - Options object. You should provide at least one of `before`, `after` or `instead` parameters. Other parameters are optional.
	 */
	export function monkeyPatch(module: object, methodName: string, options: object): void

	/**
	 * Adds a listener for when the node is removed from the document body.
	 *
	 * @param {HTMLElement} node - Node to wait for.
	 * @param {function} callback - Function to be performed on event.
	 */
	export function onRemoved(node: HTMLElement, callback: () => void): void

	/**
	 * Saved some `data` for plugin `pluginName` under `key` key. Gets saved in the plugins folder under `pluginName.config.json`. Data can be saved with [`loadData`](#loaddatapluginname-key).
	 *
	 * @param {string} pluginName - Which plugin this is being used for.
	 * @param {string} key - Key for the data should be saved under.
	 * @param {any} data - Data to save.
	 */
	export function saveData(pluginName: string, key: string, data: any): void

	/**
	 * Alias for [saveData(pluginName, key, data)](#savedatapluginname-key-data)
	 *
	 */
	export function setData(): void

	/**
	 * Shows a simple toast message similar to on Android. An example of the `success` toast can be seen [here](https://i.zackrauen.com/zIagVa.png).
	 *
	 * @param {string} content - Content to show inside the toast.
	 */
	export function showToast(content: string): void

	/**
	 * Wraps a function in a try catch block.
	 *
	 * @param {function} method - Function to wrap.
	 * @returns {function} - The wrapped version of the original function.
	 */
	export function suppressErrors(method: () => void): () => void

	/**
	 * Determines if the input is valid and parseable JSON.
	 *
	 * @param {string} data - Data to test.
	 * @returns {boolean} - True if the data is valid, false otherwise.
	 */
	export function testJSON(data: string): boolean

	/**
	 * Removes some previously linked JS by [`linkJS`](#linkjsid-url).
	 *
	 * @param {string} id - ID of the node to remove.
	 */
	export function unlinkJS(id: string): void
}
