// Type definitions for typeahead.js 0.11.1
// Project: http://twitter.github.io/typeahead.js/
// Definitions by: Ivaylo Gochkov <https://github.com/igochkov/>, Gidon Junge <https://github.com/gjunge/>, Nathan Pitman <https://github.com/Seltzer/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../jquery/jquery.d.ts"/>

interface JQuery {
	/**
	 * Removes typeahead functionality and reverts the input element back to its original state.
	 */
	typeahead(methodName: 'destroy'): JQuery;

	/**
	 * Opens the suggestion menu.
	 */
	typeahead(methodName: 'open'): JQuery;

	/**
	 * Closes the suggestion menu.
	 */
	typeahead(methodName: 'close'): JQuery;

	/**
	 * Returns the current value of the typeahead. The value is the text the user has entered into the input element.
	 */
	typeahead(methodName: 'val'): string;

	/**
	 * Sets the value of the typeahead. This should be used in place of jQuery#val.
	 */
	typeahead(methodName: 'val', val: string): JQuery;
	
	/**
	 * For a given input[type="text"], enables typeahead functionality. options is an options hash that's 
	 * used for configuration. Refer to Options for more info regarding the available configs. Subsequent 
	 * arguments (*datasets), are individual option hashes for datasets. For more details regarding datasets, refer to Datasets.
	 */
	typeahead<TDatum>(options: Twitter.Typeahead.Options, datasets: Twitter.Typeahead.Dataset<TDatum>[]): JQuery;

	/**
	 * For a given input[type="text"], enables typeahead functionality. options is an options hash that's 
	 * used for configuration. Refer to Options for more info regarding the available configs. Subsequent 
	 * arguments (*datasets), are individual option hashes for datasets. For more details regarding datasets, refer to Datasets.
	 */
	typeahead<TDatum>(options: Twitter.Typeahead.Options, ... datasets: Twitter.Typeahead.Dataset<TDatum>[]): JQuery;

	/**
	 * Required to accommodate above overloads
	 */
	typeahead(methodName: string): string;

	/**
	 * Required to accommodate above overloads
	 */
	typeahead(methodName: string, query: string): JQuery;
}


declare module Twitter.Typeahead {
	/**
	 * A dataset is an object that defines a set of data that hydrates
	 * suggestions. Typeaheads can be backed by multiple datasets.
	 * Given a query, a typeahead instance will inspect its backing
	 * datasets and display relevant suggestions to the end-user.
	 */
	interface Dataset<TDatum> {
		/**
		 * The backing data source for suggestions. Expected to be a function with the signature 
		 * (query, syncResults, asyncResults). syncResults should be called with suggestions computed synchronously 
		 * and asyncResults should be called with suggestions computed asynchronously (e.g. suggestions that come 
		 * for an AJAX request). source can also be a Bloodhound instance. Required.
		 */
		source: Bloodhound<TDatum>
			| ((query: string, syncResults?: (results: TDatum[]) => void, asyncResults?: (results: TDatum[]) => void) => void);

		/**
		 * Lets the dataset know if async suggestions should be expected. If not set, this information is inferred 
		 * from the signature of source i.e. if the source function expects 3 arguments, async will be set to true.
		 */
		async?: boolean;
		
		/**
		 * The name of the dataset. This will be appended to {{classNames.dataset}}- to form the class name of the 
		 * containing DOM element. Must only consist of underscores, dashes, letters (a-z), and numbers. Defaults 
		 * to a random number.
		 */
		name?: string;

		/**
		 * The max number of suggestions to be displayed. Defaults to 5.
		 */
		limit?: number;

		/**
		 * For a given suggestion, determines the string representation of it. This will be used when setting the 
		 * value of the input control after a suggestion is selected. Can be either a key string or a function 
		 * that transforms a suggestion object into a string. Defaults to stringifying the suggestion.
		 */
		display?: string | ((suggestion: any) => string);

		/**
		 * A hash of templates to be used when rendering the dataset.
		 */
		templates?: Templates;
	}

	
	/**
	 * Note a precompiled template is a function that takes a JavaScript object as its first argument and returns a HTML string.
	 */
	type PrecompiledTemplate = (obj: any) => string;

	interface Templates {
		/**
		 * Rendered when 0 suggestions are available for the given query. Can be either a HTML string or a precompiled 
		 * template. If it's a precompiled template, the passed in context will contain query
		 */
		notFound?: string | PrecompiledTemplate;

		/**
		 * Rendered when 0 synchronous suggestions are available but asynchronous suggestions 
		 * are expected. Can be either a HTML string or a precompiled template. If it's a 
		 * precompiled template, the passed in context will contain query.
		 */
		pending?: string | PrecompiledTemplate;
		
		/**
		 * Rendered at the bottom of the dataset when suggestions are present. Can be either a HTML string 
		 * or a precompiled template. If it's a precompiled template, the passed in context will contain 
		 * query and suggestions.
		 */
		footer?: string | PrecompiledTemplate;

		/**
		* Rendered at the top of the dataset when suggestions are present. Can be either a HTML string 
		 * or a precompiled template. If it's a precompiled template, the passed in context will contain 
		 * query and suggestions.
		*/
		header?: string | PrecompiledTemplate;

		/**
		 * Used to render a single suggestion. If set, this has to be a precompiled template. The associated 
		 * suggestion object will serve as the context. Defaults to the value of display wrapped in a div tag i.e. <div>{{value}}</div>.
		 */
		suggestion?: PrecompiledTemplate;
	}


	interface ClassNames {
		/**
		 * Added to input that's initialized into a typeahead. Defaults to tt-input.
		 */
		input?: string;

		/**
		 * Added to hint input. Defaults to tt-hint.
		 */
		hint?: string;

		/**
		 * Added to menu element. Defaults to tt-menu.
		 */
		menu?: string;

		/**
		 * Added to dataset elements. to Defaults to tt-dataset.
		 */
		dataset?: string;

		/**
		 * Added to suggestion elements. Defaults to tt-suggestion.
		 */
		suggestion?: string;

		/**
		 * Added to menu element when it contains no content. Defaults to tt-empty.
		 */
		empty?: string;

		/**
		 *  Added to menu element when it is opened. Defaults to tt-open.
		 */
		open?: string;

		/**
		 * Added to suggestion element when menu cursor moves to said suggestion. Defaults to tt-cursor.
		 */
		cursor?: string;

		/**
		 * Added to the element that wraps highlighted text. Defaults to tt-highlight.
		 */
		highlight?: string;		
	}

	
	/**
	 * When initializing a typeahead, there are a number of options you can configure.
	 */
	interface Options {
		/**
		 * If true, when suggestions are rendered, pattern matches for the current query in text nodes 
		 * will be wrapped in a strong element with its class set to {{classNames.highlight}}. Defaults to false.
		 */
		highlight?: boolean;

		/**
		 * If false, the typeahead will not show a hint. Defaults to true.
		 */
		hint?: boolean;

		/**
		 * The minimum character length needed before suggestions start getting rendered. Defaults to 1.
		 */
		minLength?: number;
		
		/**
		 * For overriding the default class names used. See Class Names for more details.
		 */
		classNames?: ClassNames;
	}
}


declare module Bloodhound {
	/**
	 * When instantiating a Bloodhound suggestion engine, there are a number of options you can configure.
	 */
	interface BloodhoundOptions<TDatum>	{
		/**
		 * A function with the signature (datum) that transforms a datum into an array of string tokens. Required.
		 */
		datumTokenizer: (datum: TDatum) => string[];
	  
		/**
		 * A function with the signature (query) that transforms a query into an array of string tokens. Required.
		 */
		queryTokenizer: (query: string) => string[];

		/**
		 * If set to false, the Bloodhound instance will not be implicitly initialized by the constructor function. Defaults to true.
		 */
		initialize?: boolean;

		/**
		 * Given a datum, this function is expected to return a unique id for it. Defaults to JSON.stringify. Note that it is highly 
		 * recommended to override this option.
		 */
		identify?: (datum: TDatum) => any;

		/**
		 * If the number of datums provided from the internal search index is less than sufficient, remote will be used to 
		 * backfill search requests triggered by calling #search. Defaults to 5.
		 */
		sufficient?: number;

		/**
		 * A compare function used to sort data returned from the internal search index.
		 */
		sorter?: (a: TDatum, b: TDatum) => number;
		
		/**
		 * An array of data or a function that returns an array of data. The data will be added to the internal search index when 
		 * #initialize is called.
		 */
		local?: TDatum[] | (() => TDatum[]);

		/**
		 * Can be a URL to a JSON file containing an array of datums or, if more configurability is needed, a prefetch options hash.
		 */
		prefetch?: string | PrefetchOptions<TDatum>;
		
		/**
		 * Can be a URL to fetch suggestions from when the data provided by local and prefetch is insufficient or, if 
		 * more configurability is needed, a remote options hash.
		 */
		remote?: string | RemoteOptions<TDatum>;
	}

	
	/**
	 * Prefetched data is fetched and processed on initialization. If the browser supports local storage, the processed data will 
	 * be cached there to prevent additional network requests on subsequent page loads.
	 */
	interface PrefetchOptions<TDatum> {
		/**
		 * The URL prefetch data should be loaded from. Required.
		 */
		url: string;

		/**
		 * If false, will not attempt to read or write to local storage and will always load prefetch data 
		 * from url on initialization. Defaults to true.
		 */
		cache?: boolean;
		
		/**
		 * The time (in milliseconds) the prefetched data should be cached in local storage. Defaults to 86400000 (1 day).
		 */
		ttl?: number;

		/**
		 * The key that data will be stored in local storage under. Defaults to value of url.
		 */
		cacheKey?: string;

		/**
		 * A string used for thumbprinting prefetched data. If this doesn't match what's stored in local storage, the data will be refetched.
		 */
		thumbprint?: string;

		/**
		 * A function that provides a hook to allow you to prepare the settings object passed to transport 
		 * when a request is about to be made. The function signature should be prepare(settings) where 
		 * settings is the default settings object created internally by the Bloodhound instance. The 
		 * prepare function should return a settings object. Defaults to the identity function.
		 */
		prepare?: ((settings: BloodhoundOptions<TDatum>) => BloodhoundOptions<TDatum>);

		/**
		 * A function with the signature transform(response) that allows you to transform the prefetch response 
		 * before the Bloodhound instance operates on it. Defaults to the identity function.
		 */
		transform?: (response: any) => void;
	}

	
	/**
	 * Bloodhound only goes to the network when the internal search engine cannot provide a sufficient number of results.
	 * In order to prevent an obscene number of requests being made to the remote endpoint, requests are rate-limited.
	 */
	interface RemoteOptions<TDatum>	{
		/**
		 * The URL remote data should be loaded from. Required.
		 */
		url: string;

		/**
		 * A function that provides a hook to allow you to prepare the settings object passed to transport 
		 * when a request is about to be made. The function signature should be prepare(settings) where 
		 * settings is the default settings object created internally by the Bloodhound instance. The 
		 * prepare function should return a settings object. Defaults to the identity function.
		 */
		prepare?: ((query: string, settings: BloodhoundOptions<TDatum>) => BloodhoundOptions<TDatum>);
		
		/**
		 * A convenience option for prepare. If set, prepare will be a function that replaces the value of 
		 * this option in url with the URI encoded query.
		 */
		wildcard?: string;
				
		/**
		 * The function used for rate-limiting network requests.
		 * Can be either 'debounce' or 'throttle'. Defaults to 'debounce'.
		 */
		rateLimitBy?: string;

		/**
		 * The time interval in milliseconds that will be used by rateLimitBy. Defaults to 300.
		 */
		rateLimitWait?: number;

		/**
		 * A function with the signature transform(response) that allows you to transform the prefetch response 
		 * before the Bloodhound instance operates on it. Defaults to the identity function.
		 */
		transform?: (response: any) => void;
	}

	
	/**
	 * The most common tokenization methods.
	 */
	interface Tokenizers {
		/**
		 * Split a given string on whitespace characters.
		 */
		whitespace(query: string): string[];
		
		/**
		 * Split a given string on non-word characters.
		 */
		nonword(query: string): string[];

		/**
		 * Instances of the most common tokenization methods.
		 */
		obj: ObjTokenizer;
	}
	

	interface ObjTokenizer {
		/**
		 * Split a given string on whitespace characters.
		 */
		whitespace(query: string): string[];
		
		/**
		 * Split a given string on non-word characters.
		 */
		nonword(query: string): string[];
	}
}


declare class Bloodhound<TDatum> {
	constructor(options: Bloodhound.BloodhoundOptions<TDatum>)
	

	/**
	 * Kicks off the initialization of the suggestion engine. Initialization entails adding the data provided 
	 * by local and prefetch to the internal search index as well as setting up transport mechanism used by
	 * remote. Before #initialize is called, the #get and #search methods will effectively be no-ops.
	 * 
	 * Note, unless the initialize option is false, this method is implicitly called by the constructor.
	 * 
	 * After initialization, how subsequent invocations of #initialize behave depends on the reinitialize 
	 * argument. If reinitialize is falsy, the method will not execute the initialization logic and will 
	 * just return the same jQuery promise returned by the initial invocation. If reinitialize is truthy, 
	 * the method will behave as if it were being called for the first time.
	 */
	public initialize(reinitialize?: boolean): JQueryPromise<any>;
	
	/**
	 * Takes one argument, data, which is expected to be an array. The data passed in will get added to the 
	 * internal search index.
	 */
	public add(data: TDatum[]): Bloodhound<TDatum>;
	
	/**
	 * Clears the internal search index that's powered by local, prefetch, and #add.
	 */
	public clear(): Bloodhound<TDatum>;
	
	/**
	 * Returns a reference to the Bloodhound constructor and reverts window.Bloodhound to its previous value. Can be used to avoid naming collisions.
	 */
	public noConflict(): any;

	/**
	 * Returns the data in the local search index corresponding to ids.
	 */
	public get(ids: any[]): TDatum[];

	/**
	 * Unofficial
	 */
	public get(... ids: any[]): TDatum[];

	/**
	 * Returns the data that matches query. Matches found in the local search index will be passed to the sync callback. 
	 * If the data passed to sync doesn't contain at least sufficient number of datums, remote data will be requested 
	 * and then passed to the async callback.
	 */
	public search(query: string, sync: (result: TDatum[]) => void, async?: (result: TDatum[]) => void): Bloodhound<TDatum>;
	
	/**
	 * The Bloodhound suggestion engine is token-based, so how datums and queries are tokenized plays a vital role in the quality 
	 * of search results. Specify how you want datums and queries tokenized.
	 */
	public static tokenizers: Bloodhound.Tokenizers;

	/**
	 * Unofficial
	 */
	public clearPrefetchCache(): Bloodhound<TDatum>;

	/**
	 * Unofficial
	 */
	public clearRemoteCache(): void;

	/**
	 * Unofficial
	 */
	public ttAdapter(): any;
}
