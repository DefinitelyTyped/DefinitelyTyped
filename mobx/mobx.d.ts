// Type definitions for mobx v1.0.0
// Project: https://mweststrate.github.io/mobservable
// Definitions by: Michel Weststrate <https://github.com/mweststrate/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped


interface _IMobxStatic {
    /**
     * Extends an object with reactive capabilities.
     * @param target the object to which reactive properties should be added
     * @param properties the properties that should be added and made reactive
     * @returns targer
     */
    extendObservable(target: Object, properties: Object): Object;

    /**
     * Returns true if the provided value is reactive.
     * @param value object, function or array
     * @param propertyName if propertyName is specified, checkes whether value.propertyName is reactive.
     */
    isObservable(value: any, propertyName?:string): boolean;

    /**
     * Returns true if the provided value is reactive.
     * @param value map
     * @param propertyName if propertyName is specified, checkes whether value.propertyName is reactive.
     */
    isObservableMap(value: Map<string, any>, propertyName?:string): boolean;

    /**
     * Returns true if the provided value is reactive.
     * @param value array
     * @param propertyName if propertyName is specified, checkes whether value.propertyName is reactive.
     */
    isObservableArray(value: Array<any>, propertyName?:string): boolean;

    /**
     * Returns true if the provided value is reactive.
     * @param value object
     * @param propertyName if propertyName is specified, checkes whether value.propertyName is reactive.
     */
    isObservableObject(value: Object, propertyName?:string): boolean;

    /**
     * Can be used in combination with makeReactive / extendReactive.
     * Enforces that a reference to 'value' is stored as property,
     * but that 'value' itself is not turned into something reactive.
     * Future assignments to the same property will inherit this behavior.
     * @param value initial value of the reactive property that is being defined.
     */
    asReference<T>(value: any): {value:T};

    /**
     * ES6 / Typescript decorator which can to make class properties and getter functions reactive.
     */
    observable(target: Object, key?: string): any; // decorator / annotation

    /**
     * Technically the same as @observable but for getter properties.
     * @param expression or object {asStructure: true}
     */
    computed(expression: Mobx.Lambda|{asStructure: boolean}): any; // decorator / annotation

    /**
     * Similar to Mobx.observe() but much faster when adding items but doesn't support enumerability
     * @param target The array to make observable
     */
    fastArray(target: Array<any>):any;

    /**
     * ES6 / Typescript decorator to help you to structure your code better.
     * It is advised to use them on any function that modifies observables or has side effects.
     */
    action(value: string|Mobx.Lambda, fn?: Mobx.Lambda): any; // decorator / annotation

    /**
     * Observes an observable for changes.
     * @param target The observable to observe
     * @param listener func callback that will be invoked for each change that is made to the observable
     * @param invokeImmediately (optional) boolean
     * @returns disposer function, which can be used to stop the view from being updated in the future
     */
    observe(target: Mobx.IObservable, listener: Mobx.Lambda, invokeImmediately?: boolean): Mobx.Lambda;

    /**
     * Creates a reactive view and keeps it alive, so that the view is always
     * updated if one of the dependencies changes, even when the view is not further used by something else.
     * @param func The reactive view
     * @param scope (optional)
     * @returns disposer function, which can be used to stop the view from being updated in the future.
     */
    autorun(func: Mobx.Lambda, scope?: any): Mobx.Lambda;

    /**
     * Deprecated, use mobservable.observe instead.
     */
    sideEffect(func: Mobx.Lambda, scope?: any): Mobx.Lambda;

    /**
     * Similar to 'observer', observes the given predicate until it returns true.
     * Once it returns true, the 'effect' function is invoked an the observation is cancelled.
     * @param predicate
     * @param effect
     * @param scope (optional)
     * @returns disposer function to prematurely end the observer.
     */
    autorunUntil(predicate: ()=>boolean, effect: Mobx.Lambda, scope?: any): Mobx.Lambda;

    /**
     * Just like autorun except that the action won't be invoked synchronously
     * but asynchronously after the minimum amount of milliseconds has passed
     * @param action a function that updates some reactive state
     * @param minimumDelay (optional) awaited before re-executing the action again.
     * @param scope (optional)
     * @returns disposer function, which can be used to cancel the autorun.
     */
    autorunAsync(action: ()=>void, minimumDelay?: number, scope?: any): Mobx.Lambda;

    /**
     * During a transaction no views are updated until the end of the transaction.
     * The transaction will be run synchronously nonetheless.
     * @param action a function that updates some reactive state
     * @returns any value that was returned by the 'action' parameter.
     */
    transaction<T>(action: ()=>T): T;

    /**
     * Converts a reactive structure into a non-reactive structure.
     * Basically a deep-clone.
     * @param value any type accepted by Mobx
     * @param supportCycles (optional) enabled by default
     */
    toJS<T>(value: T, supportCycles?: boolean): T;

    /**
     * (DEPRECATED! Use toJS() instead)
     * @param value any type accepted by Mobx
     * @param supportCycles (optional) enabled by default
     */
    toJSON<T>(value: T, supportCycles?: boolean): T;

    /**
     * Sets the reporting level Defaults to 1. Use 0 for production or 2 for increased verbosity.
     */
    logLevel:  number;  // 0 = production, 1 = development, 2 = debugging

    extras: {
        getDependencyTree(thing:any, property?:string): Mobx.IDependencyTree;

        getObserverTree(thing:any, property?:string): Mobx.IObserverTree;

        trackTransitions(extensive?:boolean, onReport?:(lines:Mobx.ITransitionEvent) => void) : Mobx.Lambda;
    }
}

interface IObservable {
    <T>(value: string|number|boolean|Date|RegExp|Function|void, opts?: Mobx.IObservableOptions): Mobx.IObservableValue<T>;
    <T>(value: T[], opts?: Mobx.IObservableOptions): Mobx.IObservableArray<T>;
    <T>(value: ()=>T, opts?: Mobx.IObservableOptions): Mobx.IObservableValue<T>;
    <T>(value: Map<string, any>, opts?: Mobx.IObservableOptions): Mobx.IObservableMap<T>;
    <T extends Object>(value: Object, opts?: Mobx.IObservableOptions): T;
}

interface IMobservableStatic extends _IMobxStatic, IObservable {
}

declare namespace Mobx {
    interface IObservableOptions {
        as?:  string /* "auto" | "reference" | TODO:  see #8 "structure" */
        scope?:  Object,
        context?: Object,
        recurse?:  boolean;
        name?: string;
        // protected:  boolean TODO:  see #9
    }

    export interface IContextInfoStruct {
        object: Object;
        name: string;
    }

    export type IContextInfo = IContextInfoStruct | string;

    interface Lambda {
        (): void;
        name?: string;
    }

    interface IObservable {
        autorun(callback: (...args: any[])=>void, fireImmediately?: boolean): Lambda;
    }

    interface IObservableValue<T> extends IObservable {
        (): T;
        (value: T):void;
        observe(callback: (newValue: T, oldValue: T)=>void, fireImmediately?: boolean): Lambda;
    }

    interface IObservableArray<T> extends IObservable, Array<T> {
        spliceWithArray(index: number, deleteCount?: number, newItems?: T[]): T[];
        autorun(listener: (changeData: IArrayChange<T>|IArraySplice<T>)=>void, fireImmediately?: boolean): Lambda;
        clear(): T[];
        peek(): T[];
        replace(newItems: T[]): T[];
        find(predicate: (item: T,index: number,array: IObservableArray<T>)=>boolean,thisArg?: any,fromIndex?: number): T;
        remove(value: T): boolean;
    }
    interface IObservableMap<T> extends IObservable, Map<string, any> {
        toJS(): Object;
        intercept(interceptor: Lambda): Lambda;
        observe(listener: Lambda, fireImmediately?: boolean): Lambda;
        merge(target: Object|Map<string, any>): void;
    }

    interface IArrayChange<T> {
        type:  string; // Always:  'update'
        object:  IObservableArray<T>;
        index:  number;
        oldValue:  T;
    }

    interface IArraySplice<T> {
        type:  string; // Always:  'splice'
        object:  IObservableArray<T>;
        index:  number;
        removed:  T[];
        addedCount:  number;
    }

    interface IDependencyTree {
        id: number;
        name: string;
        context: any;
        dependencies?: IDependencyTree[];
    }

    interface IObserverTree {
        id: number;
        name: string;
        context: any;
        observers?: IObserverTree[];
        listeners?: number; // amount of functions manually attached using an .observe method
    }

    interface ITransitionEvent {
        id: number;
        name: string;
        context: Object;
        state: string;
        changed: boolean;
        newValue: string;
    }
}

declare module "mobx" {
	var m : IMobservableStatic;
	export = m;
}
