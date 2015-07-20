// Type definitions for jsdom 2.0.0
// Project: https://github.com/tmpvar/jsdom
// Definitions by: Asana <https://asana.com>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare module "jsdom" {
	/**
	 * The do-what-I-mean API.
	 *
	 * Example:
	 * jsdom.env(html, function (errors, window) {
	 *  // free memory associated with the window
	 *  window.close();
	 * });
	 *
	 * @param urlOrSource may be a URL, file name, or HTML fragment
	 * @param scriptUrlsOrSources a string or array of strings, containing file names or URLs that will be inserted as
	 * @param config  Configuration object
	 * @param callback 
	 */
	export function env(urlOrHtml: string, scripts: string, config: Config, callback?: Callback): void;
	export function env(urlOrHtml: string, scripts: string, callback: Callback): void;
	export function env(urlOrHtml: string, scripts: string[], config: Config, callback?: Callback): void;
	export function env(urlOrHtml: string, scripts: string[], callback: Callback): void;
	export function env(urlOrHtml: string, callback: Callback): void;
	export function env(urlOrHtml: string, config: Config, callback?: Callback): void;
	export function env(config: Config, callback?: Callback): void;

	/**
	 * The jsdom.jsdom method does less things automatically; it takes in only HTML source, and does not let you to
	 * separately supply script that it will inject and execute. It just gives you back a document object,
	 * with usable document.parentWindow, and starts asynchronously executing any <script>s included in the HTML source.
	 * You can listen for the 'load' event to wait until scripts are done loading and executing, just like you would in a
	 * normal HTML page.
	 *
	 * @param markup	is a HTML document to be parsed. You can also pass undefined to get the basic document,
	 *					equivalent to what a browser will give if you open up an empty .html file.
	 * @param options	see the explanation of the config object above.
	 */
	export function jsdom(markup: string, config?: Config): Document;

	/**
	 * Before creating any documents, you can modify the defaults for all future documents:
	 */
	export var defaultDocumentFeatures: FeatureOptions;

    export interface Callback {
        (errors: Error[], window: Window): any;
    }
	
	export interface FeatureOptions {
		/**
		 * Enables/disables fetching files over the file system/HTTP
		 * Allowed: ["script", "img", "css", "frame", "iframe", "link"] or false
		 * Default for jsdom.env: false
		 */
		FetchExternalResources?: any;

		/**
		 * Enables/disables JavaScript execution
		 * Default: ["script"]
		 * Allowed: ["script"] or false, 
		 * Default for jsdom.env: false
		 */
		ProcessExternalResources?: any;

		/**
		 * Filters resource downloading and processing to disallow those matching the given regular expression
		 * Default: false (allow all)
		 * Allowed: /url to be skipped/ or false
		 * Example: /http:\/\/example.org/js/bad\.js/
		 */
		SkipExternalResources?: any;
	}

	export interface EnvDocument {
		/**
		 * the new document will have this referrer.
		 */
		referrer?: string;
		/**
		 * manually set a cookie value, e.g. 'key=value; expires=Wed, Sep 21 2011 12:00:00 GMT; path=/'.
		 */
		cookie?: string;
		/**
		 * a cookie domain for the manually set cookie; defaults to 127.0.0.1.
		 */
		cookieDomain?: string;
	}
	
    export interface Config {
		/**
		 * a HTML fragment
		 */
		html?: string;
		/**
		 * a file which jsdom will load HTML from; the resulting window's location.href will be a file:// URL.
		 */
		file?: string;
		/**
		 * sets the resulting window's location.href; if config.html and config.file are not provided, jsdom will load HTML from this URL
		 */
		url?: string;
		/**
		 * a string or array of strings, containing file names or URLs that will be inserted as <script> tags
		 */
		scripts?: string[];
		/**
		 * an array of JavaScript strings that will be evaluated against the resulting document. Similar to scripts, but it accepts JavaScript instead of paths/URLs.
		 */
		src?: string[];
		/**
		 * a custom cookie jar, if desired; see mikeal/request documentation.
		 */
		jar?: any;
		/**
		 *  either "auto", "html", or "xml". The default is "auto", which uses HTML behavior unless config.url responds with an XML Content-Type, or config.file contains a filename ending in .xml or .xhtml. Setting to "xml" will attempt to parse the document as an XHTML document. (jsdom is currently only OK at doing that.)
		 */
		parsingMode?: string;
		document?: EnvDocument;
		/**
		 * Note: the default feature set for jsdom.env does not include fetching remote JavaScript and executing it. This is something that you will need to carefully enable yourself.
		 */
		features?: FeatureOptions;
		
		/**
		 * Now that you know about created and loaded, you can see that done is essentially both of them smashed together:
		 * If window creation succeeds and no <script>s cause errors, then errors will be null, and window will be usable.
		 * If window creation succeeds but there are script errors, then errors will be an array containing those errors, but window will still be usable.
		 * If window creation fails, then errors will be an array containing the creation error, and window will not be passed.
		 */
		done?: Callback;
		/**
		 * The loaded callback is called along with the window's 'load' event. This means it will only be called if creation succeeds without error. Note that by the time it has called, any external resources will have been downloaded, and any <script>s will have finished executing. If errors is non-null, it will contain an array of all JavaScript errors that occured during script execution. window will still be passed, however.
		 */
		loaded?: Callback;
		
		/**
		 * The created callback is called as soon as the window is created, or if that process fails. You may access all window properties here; however, window.document is not ready for use yet, as the HTML has not been parsed. The primary use-case for created is to modify the window object (e.g. add new functions on built-in prototypes) before any scripts execute. You can also set an event handler for 'load' or other events on the window if you wish. But the loaded callback, below, can be more useful, since it includes script errors. If the error argument is non-null, it will contain whatever loading error caused the window creation to fail; in that case window will not be passed.
		 */
		created?: (error: Error, window: Window) => void;
    }
}