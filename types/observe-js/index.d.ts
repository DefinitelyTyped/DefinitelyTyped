// Type definitions for observe-js v0.5.5
// Project: https://github.com/Polymer/observe-js
// Definitions by: Oliver Herrmann <https://github.com/herrmanno/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace observejs {

	/*----------------------
		Observable
	----------------------*/

	interface Observable {
		/**
		 * Begins observation.
		 * @param onChange the function that gets invoked if a change is detected
		 * @param the target of observation
		 */
		open(onChange:(newValue:any, oldValue:any)=>any, receiver?:any):void

		/**
		 * Report any changes now (does nothing if there are no changes to report).
		 */
		deliver(): void

		/**
		 * If there are changes to report, ignore them. Returns the current value of the observation.
		 */
		discardChanges():void

		/**
		 * Ends observation. Frees resources and drops references to observed objects.
		 */
		close():void
	}


	/*----------------------
		PathObserver
	----------------------*/

	interface PathObserver_static {
		/**
		 * Constructor
		 * @param receiver the target for observation
		 * @param path specifies the paht to observe. If path === '' the receiver itself gets observed.
		 * @param defaultValue the defaultValue
		 */
		new(receiver:any, path:string, defaultValue?:any): PathObserver_instance
	}

	interface PathObserver_instance extends Observable {
		/**
		 * sets the observed value without notifying about the change.
		 * @param value the value to set
		 */
		setValue(value:any): void
	}

	/**
	 * Observes a "value-at-a-path" from a given object:
	 */
	var PathObserver: PathObserver_static


	/*----------------------
		ArrayObserver
	----------------------*/

	interface splice {

		/**
		 * the index position that the change occured
		 */
		index:number

		/**
		 * an array of values representing the sequence of removed elements
		 */
		removed: Array<any>

		/**
		 * the number of element which were inserted
		 */
		addedCount:number
	}

	interface ArrayObserver_static {

		/**
		 * Constructor
		 * @param receiver the target for observation
		 */
		new(receiver:Array<any>): ArrayObserver_instance

		/**
		 * transforms a copy of an old state of an array into a copy of its current state.
		 * @param previous array of old state
		 * @param current array of current state
		 * @param splices  splices to apply
		 */
		applySplices(previous:Array<any>, current:Array<any>, splices:Array<splice>):void
	}

	interface ArrayObserver_instance extends Observable {
		open(onChange: (splices: Array<splice>, oldSplices: Array<splice>) => any): void
	}

	/**
	 * ArrayObserver observes the index-positions of an Array and reports changes as the minimal set of "splices" which would have had the same effect.
	 */
	var ArrayObserver: ArrayObserver_static


	/*----------------------
		ObjectObserver
	----------------------*/

	interface Properties {
		[key:string]:any
	}

	interface ObjectObserver_static {

		/**
		 * Constructor
		 * @param receiver the target for observation
		 */
		new(receiver:any): ObjectObserver_instance
	}

	interface ObjectObserver_instance extends Observable {
		open(onChange:(added:Properties, removed:Properties, changed:Properties, getOldValueFn:(property:string)=>any)=>any):void
	}

	/**
	 * Observes the set of own-properties of an object and their values
	 */
	var ObjectObserver: ObjectObserver_static


	/*----------------------
		CompounObserver
	----------------------*/

	interface CompoundObserver_static {

		/**
		 * Constructor
		 */
		new(): CompoundObserver_instance
	}

	interface CompoundObserver_instance extends Observable {
		open(onChange:(newValues:Array<any>, oldValue:Array<any>)=>any):void

		/**
		 * Adds the receivers property at the specified path to the list of observables.
		 * @param receiver the target for observation
		 * @param path specifies the paht to observe. If path === '' the receiver itself gets observed.
		 */
		addPath(receiver:any, path:string):void

		/**
		 * Adds an Observer to the list of observables.
		 */
		addObserver(observer:Observable):void

	}

	/**
	 * CompoundObserver allows simultaneous observation of multiple paths and/or Observables.
	 */
	var CompoundObserver: CompoundObserver_static



	/*----------------------
		ObserverTransform
	----------------------*/

	interface ObserverTransform_static {

		/**
		 * Constructor
		 * @param observer the observer to transform
		 * @param getValue function that proxys getting a value
		 * @param setValue function that proxys setting a value
		 */
		new(observer:Observable, getValue:(value:any)=>any, setValue:(value:any)=>any): ObserverTransform_instance

		/**
		 * Constructor
		 * @param observer the observer to transform
		 * @param valueFn function that gets invoked with all observed values. May return a single new value.
		 */
		new(observer:Observable, valueFn:(values:Array<any>)=>any): ObserverTransform_instance
	}

	interface ObserverTransform_instance extends Observable {
		/**
		 * sets the observed value without notifying about the change.
		 * @param value the value to set
		 */
		setValue(value:any): void
	}

	/**
	 * CompoundObserver allows simultaneous observation of multiple paths and/or Observables.
	 */
	var ObserverTransform: ObserverTransform_static


	/*----------------------
		Path
	----------------------*/

	interface Path {

		/**
		 * Returns the current value of the path from the provided object. If eval() is available,
  		 * a compiled getter will be used for better performance. Like PathObserver above, undefined
  		 * is returned unless you provide an overriding defaultValue.
		 */
		getValueFrom(object:any, defaultValue:any): any

		/**
		 * Attempts to set the value of the path from the provided object. Returns true IFF the path
  		 * was reachable and set.
		 */
		getValueFrom(object:any, newValue:any): any
	}
}

declare var PathObserver: typeof observejs.PathObserver;
declare var ArrayObserver: typeof observejs.ArrayObserver;
declare var ObjectObserver: typeof observejs.ObjectObserver;
declare var CompoundObserver: typeof observejs.CompoundObserver;
declare var ObserverTransform: typeof observejs.ObserverTransform;
declare var Path: observejs.Path;

export {
	PathObserver,
	ArrayObserver,
	ObjectObserver,
	CompoundObserver,
	ObserverTransform,
	Path
};
