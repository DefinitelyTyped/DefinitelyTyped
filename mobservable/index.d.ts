// Type definitions for mobservable 0.6
// Project: https://mweststrate.github.io/mobservable
// Definitions by: Michel Weststrate <https://github.com/mweststrate/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace Mobservable {
    interface Static extends MakeReactive {
        /**
         * Turns an object, array or function into a reactive structure.
         * @param value the value which should become observable.
         */
        makeReactive: MakeReactive;

        /**
         * Extends an object with reactive capabilities.
         * @param target the object to which reactive properties should be added
         * @param properties the properties that should be added and made reactive
         * @returns targer
         */
        extendReactive(target: Object, properties: Object): Object;

        /**
         * Returns true if the provided value is reactive.
         * @param value object, function or array
         * @param propertyName if propertyName is specified, checkes whether value.propertyName is reactive.
         */
        isReactive(value: any, propertyName?: string): boolean;

        /**
         * Can be used in combination with makeReactive / extendReactive.
         * Enforces that a reference to 'value' is stored as property,
         * but that 'value' itself is not turned into something reactive.
         * Future assignments to the same property will inherit this behavior.
         * @param value initial value of the reactive property that is being defined.
         */
        asReference<T>(value: any): {value: T};

        /**
         * ES6 / Typescript decorator which can to make class properties and getter functions reactive.
         */
        observable(target: Object, key: string): any; // decorator / annotation

        /**
         * Creates a reactive view and keeps it alive, so that the view is always
         * updated if one of the dependencies changes, even when the view is not further used by something else.
         * @param func The reactive view
         * @param scope (optional)
         * @returns disposer function, which can be used to stop the view from being updated in the future.
         */
        observe(func: Mobservable.Lambda, scope?: any): Mobservable.Lambda;

        /**
         * Deprecated, use mobservable.observe instead.
         */
        sideEffect(func: Mobservable.Lambda, scope?: any): Mobservable.Lambda;

        /**
         * Similar to 'observer', observes the given predicate until it returns true.
         * Once it returns true, the 'effect' function is invoked an the observation is cancelled.
         * @param predicate
         * @param effect
         * @param scope (optional)
         * @returns disposer function to prematurely end the observer.
         */
        observeUntil(predicate: () => boolean, effect: Mobservable.Lambda, scope?: any): Mobservable.Lambda;

        /**
         * During a transaction no views are updated until the end of the transaction.
         * The transaction will be run synchronously nonetheless.
         * @param action a function that updates some reactive state
         * @returns any value that was returned by the 'action' parameter.
         */
        transaction<T>(action: () => T): T;

        /**
         * Converts a reactive structure into a non-reactive structure.
         * Basically a deep-clone.
         */
        toJSON<T>(value: T): T;

        /**
         * Sets the reporting level Defaults to 1. Use 0 for production or 2 for increased verbosity.
         */
        logLevel: number;  // 0 = production, 1 = development, 2 = debugging

        extras: {
            getDependencyTree(thing: any, property?: string): Mobservable.DependencyTree;

            getObserverTree(thing: any, property?: string): Mobservable.ObserverTree;

            trackTransitions(extensive?: boolean, onReport?: (lines: Mobservable.TransitionEvent) => void): Mobservable.Lambda;
        };
    }

    interface MakeReactive {
        <T>(value: T[], opts?: Mobservable.MakeReactiveOptions): Mobservable.ObservableArray<T>;
        <T>(value: () => T, opts?: Mobservable.MakeReactiveOptions): Mobservable.ObservableValue<T>;
        <T extends string|number|boolean|Date|RegExp|Function|undefined>(value: T, opts?: Mobservable.MakeReactiveOptions): Mobservable.ObservableValue<T>;
        <T extends Object>(value: Object, opts?: Mobservable.MakeReactiveOptions): T;
    }

    interface MakeReactiveOptions {
        as?: string; /* "auto" | "reference" | TODO: see #8 "structure" */
        scope?: Object;
        context?: Object;
        recurse?: boolean;
        name?: string;
        // protected: boolean TODO: see #9
    }

    type ContextInfo = { object: Object; name: string } | string;

    interface Lambda {
        (): void;
        name?: string;
    }

    interface Observable {
        observe(callback: (...args: any[]) => void, fireImmediately?: boolean): Lambda;
    }

    interface ObservableValue<T> extends Observable {
        (): T;
        (value: T): void;
        observe(callback: (newValue: T, oldValue: T) => void, fireImmediately?: boolean): Lambda;
    }

    interface ObservableArray<T> extends Observable, Array<T> {
        spliceWithArray(index: number, deleteCount?: number, newItems?: T[]): T[];
        observe(listener: (changeData: ArrayChange<T>|ArraySplice<T>) => void, fireImmediately?: boolean): Lambda;
        clear(): T[];
        replace(newItems: T[]): T[];
        find(predicate: (item: T, index: number, array: ObservableArray<T>) => boolean, thisArg?: any, fromIndex?: number): T;
        remove(value: T): boolean;
    }

    interface ArrayChange<T> {
        type: string; // Always: 'update'
        object: ObservableArray<T>;
        index: number;
        oldValue: T;
    }

    interface ArraySplice<T> {
        type: string; // Always: 'splice'
        object: ObservableArray<T>;
        index: number;
        removed: T[];
        addedCount: number;
    }

    interface DependencyTree {
        id: number;
        name: string;
        context: any;
        dependencies?: DependencyTree[];
    }

    interface ObserverTree {
        id: number;
        name: string;
        context: any;
        observers?: ObserverTree[];
        listeners?: number; // amount of functions manually attached using an .observe method
    }

    interface TransitionEvent {
        id: number;
        name: string;
        context: Object;
        state: string;
        changed: boolean;
        newValue: string;
    }
}

declare const Mobservable: Mobservable.Static;
export = Mobservable;
