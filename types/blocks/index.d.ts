// Type definitions for jsblocks v0.3.0
// Project: http://jsblocks.com/
// Definitions by: Krzysztof Śmigiel <https://github.com/ksmigiel>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/////////////////////////////////////////
// blocks methods
/////////////////////////////////////////

interface BlocksStatic {
	(obj: any): any;
	
	/**
	 * Performs a query operation on the DOM. Executes all data-query attributes
	 * and renders the html result to the specified HTMLElement if not specified
	 * uses document.body by default.
	 * 
	 * @param model The model that will be used to query the DOM.
	 */
	query(model: any): void;
	/**
	 * @param model The model that will be used to query the DOM.
	 * @param element Optional element on which to execute the query.
	 */
	query(model: any, element: HTMLElement): void;

	/**
	 * Copies properties from all provided objects into the first object parameter
	 */
	extend(obj: Object, ...objects: any[]): void;

	/**
	 * Iterates over the collection
	 * 
	 * @param collection The array or object to iterate over
	 * @param callback The callback that will be executed for each element in the collection
	 * @param thisArg Optional this context for the callback
	 */
	each(collection: any, callback: (value: any, index: any, collection: any) => void, thisArg?: any): void;
	
	/**
	 * Iterates over the collection from end to start
	 * 
	 * @param collection The array or object to iterate over
	 * @param callback The callback that will be executed for each element in the collection
	 * @param thisArg Optional this context for the callback
	 */
	eachRight(collection: any, callback: (value: any, index: any, collection: any) => void, thisArg?: any): void;
	
	/**
	 * Determines if a value is an array.
	 * Returns false for array like objects (for example arguments object).
	 * 
	 * @param value The value to check if it is an array
	 */
	isArray(value: any): boolean;
	
	/**
	 * Represents a dummy empty function
	 */
	noop(): Function;
	
	/**
	 * Determines the true type of an object.
	 * Returns the type of the value as a string.
	 * 
	 * @param value The value for which to determine its type
	 */
	type(value: any): string;
	
	/**
	 * Determines if a specific value is the specified type
	 * 
	 * @param value The value
	 * @param type The type
	 */
	is(value: any, type: string): boolean;
	
	/**
	 * Checks if a variable has the specified property. Uses hasOwnProperty internally
	 * 
	 * @param obj The object to call hasOwnPrototype for
	 * @param key The key to check if exists in the object
	 */
	has(obj: any, key: string): boolean;

	/**
	 * Unwraps a jsblocks value to its raw representation.
	 * Unwraps blocks.observable() and blocks() values
	 * 
	 * @param value The value that will be unwrapped
	 */
	unwrap(value: any): any;
	
	/**
	 * Converts a value to an array. Arguments object is converted to array and primitive values
	 * are wrapped in an array.
	 * Does nothing when value is already an array
	 * 
	 * @param value The value to be converted to an array
	 */
	toArray(value: any): any[];
	
	/**
	 * Converts an integer or string to a unit. If the value could not be parsed to a number it is not converted
	 * 
	 * @param value The value to be converted to the specified unit
	 */
	toUnit(value: any): any;
	/**
	 * @param value The value to be converted to the specified unit
	 * @param unit Optionally provide a unit to convert to. Default value is 'px'
	 */
	toUnit(value: any, unit: string): any;
	
	/**
	 * Clones value. If deepClone is set to true the value will be cloned recursively
	 * 
	 * @param value Value/object to be cloned
	 */
	clone(value: any): any;
	/**
	 * @param value Value/object to be cloned
	 * @param deepClone By default false
	 */
	clone(value: any, deepClone: boolean): any;
	
	/**
   	 * Determines if the specified value is a HTML elements collection.
	 * Returns whether the value is elements collection.
	 * 
	 * @param value The value to check if it is elements collection
	 */
	isElements(value: any): boolean;
	
	/**
	 * Determines if the specified value is a HTML element.
	 * Returns whether the value is a HTML element.
	 * 
	 * @param value The value to check if it is a HTML element
	 */
	isElement(value: any): boolean;
	
	/**
	 * Determines if a the specified value is a boolean.
	 * Whether the value is a boolean or not.
	 *
	 * @param value The value to be checked if it is a boolean
	 */
	isBoolean(value: any): boolean;
	
	/**
	 * Determines if the specified value is an object.
	 * Returns whether the value is an object.
	 * 
	 * @param obj The value to check for if it is an object
	 */
	isObject(obj: any): boolean;

	/**
	 * Determines if a value is a object created using {} or new Object.
	 * Whether the value is a plain object or not.
	 * 
	 * @param obj The value that will be checked
	 */
	isPlainObject(obj: any): boolean;

	/**
	 * Changes the this binding to a function and optionally passes additional parameters to the function.
	 * Returns the newly created function having the new this binding and optional arguments.
	 * 
	 * @param func The function for which to change the this binding and optionally add arguments
	 * @param thisArg The new this binding context value
	 * @param args Optional arguments that will be passed to the function
	 */
	bind(func: Function, thisArg: any, ...args: any[]): Function;
	
	/**
	 * Determines if two values are deeply equal. Set deepEqual to false to stop recusively equality checking
	 * 
	 * @param a The first object to be campared
	 * @param b The second object to be compared
	 */
	equals(a: any, b: any): boolean;
	/**
	 * @param a The first object to be campared
	 * @param b The second object to be compared
	 * @param deepEqual Determines if the equality check will recursively check all child properties
	 */
	equals(a: any, b: any, deepEqual: boolean): boolean;
	
	/**
	 * Gets the context for a particular element. Searches all parents until it finds the context.
	 * 
	 * @param element The element from which to search for a context
	 * 
	 */
	context(element: any): any;
	
	/**
	 * Gets the associated dataItem for a particlar element. Searches all parents until it finds the context
	 * 
	 * @param element The element from which to search for a dataItem
	 */
	dataItem(element: any): any;

	/**
	 * Determines if particular value is an blocks.observable
	 * 
	 * @param value The value to check if the value is observable
	 */
	isObservable(value: any): boolean;
	
	/**
	 * Gets the raw value of an observable or returns the value if the specified object is not an observable
	 * 
	 * @param value The value that could be any object observable or not
	 */
	unwrapObservable(value: any): any;

	route(route: string): BlocksStatic;

	optional(param: string): BlocksStatic;
	optional(param: string, defaultValue: any): BlocksStatic;

	range(start: number, end: number): BlocksStatic;

	/**
	 * Creates the server which will automatically handle server-side rendering.
	 */
	server(): { express(): any };
	/**
	 * @param options Overrides default jsblocks options
	 */
	server(options: Server): { express(): any };
	
	/**
	* Make observable property. You can specify initial value in parentheses.
	*/
	observable(): BlocksObservable;
	observable(value: any[]): BlocksArray;
	observable(value: any): BlocksObservable;

	/**
	* Use blocks.Application and its MVC(Model-View-Collection) structure to create better architecture and maintainability for your application.
	*/
	Application(): App;
	Application(options: { history: string }): App;
}

/////////////////////////////////////////
// blocks observable
/////////////////////////////////////////

interface BlocksObservable extends Extendable<BlocksObservable> {
	(arg: any): BlocksObservable;
	
	/**
	 * Updates all elements, expressions and dependencies where the observable is used
	 */
	update(): BlocksObservable;
	
	/**
	 * If event in prototype is not defined use this function instead.
	 * 
	 * @param event Name of the event to raise
	 * @param trigger Function to be called when event is fired
	 */
	on(event: string, trigger: Function): BlocksObservable;
}

/////////////////////////////////////////
// blocks array
/////////////////////////////////////////

interface BlocksArray extends BlocksObservable {

	/**
	 * Updates all elements, expressions and dependencies where the observable is used
	 */
	update(): BlocksArray;
	
	/**
	 * Extends the current observable with particular functionality depending on the parameters specified.
	 * If the method is called without arguments and jsvalue framework is included the observable will be
	 * extended with the methods available in jsvalue for the current type.
	 * 
	 * @param options Optional options
	 */
	extend(...options: any[]): BlocksArray;
	/**
	 * @param name Name of the extender
	 * @param options Optional options
	 */
	extend(name: string, ...options: any[]): BlocksArray;

	/**
	 * Removes all items from the collection and replaces them with the new value provided.
	 * The value could be Array, observable array or jsvalue.Array
	 * 
	 * @param value The new value that will be populated
	 */
	reset(value: any[]): BlocksArray;
	
	/**
	 * Adds values to the end of the observable array
	 * 
	 * @param value The values that will be added to the end of the array
	 */
	add(value: any): BlocksArray;
	/**
	 * @param value The values that will be added to the end of the array
	 * @param index Optional index specifying where to insert the value
	 */
	add(value: any, index: number): BlocksArray;
	
	/**
	 * Adds the values from the provided array(s) to the end of the collection
	 * 
	 * @param value The array that will be added to the end of the array
	 */
	addMany(value: any[]): BlocksArray;
	/**
	 * @param value The array that will be added to the end of the array
	 * @param index Optional position where the array of values to be inserted
	 */
	addMany(value: any[], index: number): BlocksArray;

	/**
	 * Swaps two values in the observable array. Note: Faster than removing the items and adding them at the locations
	 * 
	 * @param indexA The first index that points to the index in the array that will be swapped
	 * @param indexB The second index that points to the index in the array that will be swapped
	 */
	swap(indexA: number, indexB: number): BlocksArray;
	
	/**
	 * Moves an item from one location to another in the array. Note: Faster than removing the item and adding it at the location
	 * 
	 * @param sourceIndex The index pointing to the item that will be moved
	 * @param targetIndex The index where the item will be moved to
	 */
	move(sourceIndex: number, targetIndex: number): BlocksArray;
	
	/**
	 * Removes an item from the observable array
	 * 
	 * @param value The value that will be removed or a callback function which returns true or false to determine if the value should be removed
	 */
	remove(value: any): BlocksArray;
	/**
	 * @param value The value that will be removed or a callback function which returns true or false to determine if the value should be removed
	 * @param thisArg Optional this context for the callback
	 */
	remove(value: any, thisArg: Function): BlocksArray;
	
	/**
	 * Removes an item at the specified index
	 * 
	 * @param index The index location of the item that will be removed
	 */
	removeAt(index: number): BlocksArray;
	/**
	 * @param index The index location of the item that will be removed
	 * @param count Optional parameter that if specified will remove the next items starting from the specified index
	 */
	removeAt(index: number, count: number): BlocksArray;

	/**
	 * Removes all items from the observable array and optionally filter which items to be removed by providing a callback
	 */
	removeAll(): BlocksArray;
	/**
	 * @param callback Optional callback function which filters which items to be removed. Returning a truthy value will remove the item and vice versa
	 */
	removeAll(callback: Function): BlocksArray;
	/**
	 * @param callback Optional callback function which filters which items to be removed. Returning a truthy value will remove the item and vice versa
	 * @param thisArg Optional this context for the callback function
	 */
	removeAll(callback: Function, thisArg: any): BlocksArray;
	
	/**
	 * The concat() method is used to join two or more arrays
	 * 
	 * @param arrays The arrays to be joined
	 */
	concat(...arrays: any[]): any[]
	
	/**
	 * The slice() method returns the selected elements in an array, as a new array object
	 * 
	 * @param start An integer that specifies where to start the selection (The first element has an index of 0)
	 */
	slice(start: number): any[];
	/**
	 * @param start An integer that specifies where to start the selection (The first element has an index of 0)
	 * @param end An integer that specifies where to end the selection. If omitted, all elements from the start position and to the end of the array will be selected.
	 *            Use negative numbers to select from the end of an array
	 */
	slice(start: number, end: number): any[];

	/**
	 * The join() method joins the elements of an array into a string, and returns the string
	 */
	join(): string;
	/**
	 * @param separator The separator to be used. If omitted, the elements are separated with a comma
	 */
	join(seperator: string): string;
	
	/**
	 * The pop() method removes the last element of a observable array, and returns that element
	 */
	pop(): any;
	
	/** 
	 * The push() method adds new items to the end of the observable array, and returns the new length
	 * 
	 * @param values The item(s) to add to the observable array
	 */
	push(...values: any[]): number;
	
	/**
	 * Reverses the order of the elements in the observable array
	 */
	reverse(): any[];
	
	/**
	 * Removes the first element of a observable array, and returns that element
	 */
	shift(): any
	
	/**
	 * Sorts the elements of an array
	 */
	sort(): any[];
	/**
	 * @param sortfunction A function that defines the sort order
	 */
	sort(sortfunction: Function): any[];
	
	/**
	 * Adds and/or removes elements from the observable array
	 * Returns A new array containing the removed items, if any.
	 * 
	 * @param index An integer that specifies at what position to add/remove items. Use negative values to specify the position from the end of the array.
	 * @param howMany The number of items to be removed. If set to 0, no items will be removed.
	 * @param items The new item(s) to be added to the array.
	 */
	splice(index: number, howMany: number, ...items: any[]): any[];

	/**
	 * The unshift() method adds new items to the beginning of an array, and returns the new length.
	 * 
	 * @param items
	 */
	unshift(...items: any[]): number;
}

/////////////////////////////////////////
// blocks MVC App
/////////////////////////////////////////

interface App extends Extendable<App> {
	
	/**
	 * Creates an application property for a Model.
	 */
	Property(): any;
	/**
	 * @param options Configuration options for property
	 */
	Property(options: PropertyPrototype): any;
	
	/**
	 * Defines a view that will be part of the Application.
	 * 
	 * @param name The name of the View you are creating
	 * @param prototype The object that will represent the View
	 */
	View(name: string, prototype: ViewPrototype): any;
	/**
	 * Defines a view that will be part of the Application.
	 * 
	 * @param parentViewName Provide this parameter only if you are creating nested views. This is the name of the parent View
	 * @param name The name of the View you are creating
	 * @param prototype The object that will represent the View
	 */
	View(parentViewName: string, name: string, prototype: ViewPrototype): any;
	
	/**
	 * Creates a new Model
	 * 
	 * @param prototype The Model object properties that will be created
	 */
	Model(prototype: ModelPrototype): Model;
	
	/**
	 * Creates a new Collection
	 * 
	 * @param prototype The Collection object properties that will be created.
	 */
	Collection(prototype: CollectionPrototype): Collection;
	Collection(model: Model, prototype: CollectionPrototype): Collection;
}

/////////////////////////////////////////
// App.Property
/////////////////////////////////////////

interface PropertyPrototype {
	defaultValue?: any;
	isObservable?: boolean;
	field?: string;
	value?: any;
	validateOnChange?: boolean;
	maxErrors?: number;
	validateInitially?: boolean

	// Validators
	required?: Validator;
	minlength?: Validator;
	maxlength?: Validator;
	min?: Validator;
	max?: Validator;
	email?: Validator;
	url?: Validator;
	date?: Validator;
	creditcard?: Validator;
	regexp?: Validator;
	number?: Validator;
	digits?: Validator;
	letters?: Validator;
	equals?: Validator;
}

interface Validator { }

/////////////////////////////////////////
// App.View
/////////////////////////////////////////

interface ViewPrototype {
	parentView?: any;
	
	/**
	 * Routes to a specific URL and actives the appropriate views associated with the URL
	 * 
	 * @param name Name of the route
	 */
	route?(name: string): ViewPrototype;

	
	/**
	 * Determines if the view is visible
	 */
	isActive?(): boolean;
	
	/**
	 * Override the init method to perform actions when the View is first created and shown on the page
	 */
	init?: Function;

	/**
	 * Override the routed method to perform actions when the View have routing and routing mechanism actives it.
	 */
	routed?: Function;

	navigateTo?: Function;

	/**
     * Override the ready method to perform actions when the DOM is ready and
     * all data-query have been executed.
	 */
	ready?: Function;

	options?: {
		route?: any;
		url?: string
	};

	[propertyName: string]: any;
}

/////////////////////////////////////////
// App.Model
/////////////////////////////////////////

interface Model {
	(): Model;
	(props: Object): Model;
	
	/**
	 * Fires a request to the server to populate the Model based on the read URL specified
	 */
	read(): Model;
	/**
	 * @param params The parameters Object that will be used to populate the Model from the specified options.read URL. If the URL does not contain parameters
	 */
	read(params: Object): Model;
	
	/**
	 * Synchronizes the changes with the server by sending requests to the provided URL's
	 */
	sync(): Model;
}

interface ModelPrototype {
	
	/**
	 * Override the init method to perform actions on creation for each Model instance
	 */
	init?: Function;
	
	/**
	 * Validates all observable properties that have validation and returns true if all values are valid otherwise returns false
	 */
	validate?(): boolean;
	
	/**
	 * Extracts the raw(non observable) dataItem object values from the Model
	 */
	dataItem?(): Object;
	
	/**
	 * Applies new properties to the Model by providing an Object
	 * 
	 * @param dataItem The object from which the new values will be applied
	 */
	reset?(dataItem: ModelPrototype): ModelPrototype;
	
	/**
	 * Determines whether the instance is new. If true when syncing the item will send for insertion instead of updating it.
	 * The check is determined by the idAttr value specified in the options. If idAttr is not specified the item will always be considered new.
	 * 
	 */
	isNew?(): boolean;

	options?: {
		idAttr?: string;
		baseUrl?: string;
		read?: { url?: string };
		create?: { url?: string };
		destroy?: { url?: string };
		update?: { url?: string };
	};

	[propertyName: string]: string | boolean | Object | Validator;
}

/////////////////////////////////////////
// App.Collection
/////////////////////////////////////////

interface Collection extends Extendable<Collection> {
	(): Collection;
	(props: Object[]): Collection;
	
	/**
	 * Fires a request to the server to populate the Model based on the read URL specified
	 */
	read(): Collection;
	/**
	 * @param params The parameters Object that will be used to populate the Collection from the specified options.read URL. If the URL does not contain parameters
	 */
	read(params: Object): Collection;
	
	/**
	 * Clear all changes made to the collection
	 */
	clearChanges(): Collection;
	
	/**
	 * Performs an ajax request for all create, update and delete operations in order to sync them with a database.
	 */
	sync(): Collection;

	update(id: number, newValues: Object): Collection;
}

interface CollectionPrototype {
	options?: {
		read?: { url?: string };
		create?: { url?: string };
		destroy?: { url?: string };
		update?: { url?: string };
	};
	[propertyName: string]: any;
}

interface Extendable<T> {
	
	/**
	 * Extends the current observable with particular functionality depending on the parameters specified.
	 * If the method is called without arguments and jsvalue framework is included the observable will be
	 * extended with the methods available in jsvalue for the current type.
	 * 
	 * @param name Name of the extender
	 * @param options Optional options
	 */
	extend(name?: string, ...options: any[]): T;
	extend(arg: any): T;
}

interface Server {
	
	/**
	 * The port at which your application will be run
	 */
	port?: number;
	
	/**
	 * The folder where your application files like .html; .js and .css are going to be.
     * The value is passed to express.static() middleware.
	 */
	static?: string;
	
	/**
	 * Caches pages result instead of executing them each time.
     * Disabling cache could impact performance.
	 */
	cache?: boolean;
	
	/**
	 * Provide an express middleware function or an array of middleware functions.
	 * Use: [compression(); bodyParser()]
	 */
	use?: any;
}

declare var blocks: BlocksStatic;

declare module "blocks" {
	export = blocks;
}