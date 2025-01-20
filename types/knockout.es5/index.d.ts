/// <reference types="knockout" />

interface KnockoutStatic {
    track<T>(obj: T, propertyNames?: string[]): T;
    untrack(obj: any, propertyNames?: string[]): void;
    defineProperty<T>(obj: T, propertyName: string, evaluator: Function): T;
    defineProperty<T>(obj: T, propertyName: string, options: KnockoutDefinePropertyOptions): T;
    getObservable(obj: any, propertyName: string): KnockoutObservable<any>;
    valueHasMutated(obj: any, propertyName: string): void;
    es5: KnockoutEs5;
}

interface KnockoutEs5 {
    getAllObservablesForObject<T>(obj: T, createIfNotDefined?: boolean): T;
    notifyWhenPresentOrFutureArrayValuesMutate<T>(ko: KnockoutStatic, observable: KnockoutObservable<T>): void;
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
