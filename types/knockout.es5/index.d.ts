// Type definitions for Knockout-ES5
// Project: https://github.com/SteveSanderson/knockout-es5
// Definitions by: Sebastián Galiano <https://github.com/sgaliano>
//                 Michael Kriese <https://github.com/viceice>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.2

/// <reference types="knockout" />

type KnockoutStatic = typeof ko;

interface KnockoutEs5 {
    getAllObservablesForObject<T>(obj: T, createIfNotDefined?: boolean): T;
    notifyWhenPresentOrFutureArrayValuesMutate<T>(ko: KnockoutStatic, observable: ko.Subscribable<T>): void;
    isTracked<T>(obj: T, propertyName: string): boolean;
}

interface KnockoutDefinePropertyOptions {
	get(): any;
	set?(value: any): void;
}

interface Array<T> {
	remove(item: T): T[];
	removeAll(items: T[]): T[];
	removeAll(): T[];

	destroy(item: T): void;
	destroyAll(items: T[]): void;
	destroyAll(): void;
}


declare namespace ko {
    function track<T>(obj: T, propertyNames?: Array<string>): T;
    function untrack(obj: any, propertyNames?: Array<string>): void;
    function defineProperty<T>(obj: T, propertyName: string, evaluator: Function): T;
    function defineProperty<T>(obj: T, propertyName: string, options: KnockoutDefinePropertyOptions): T;
    function getObservable(obj: any, propertyName: string): Subscribable;
    function valueHasMutated(obj: any, propertyName: string): void;
    const es5: KnockoutEs5;
}
