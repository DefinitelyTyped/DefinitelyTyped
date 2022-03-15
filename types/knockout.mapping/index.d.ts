// Type definitions for Knockout.Mapping 2.0
// Project: https://github.com/SteveSanderson/knockout.mapping
// Definitions by: Boris Yankov <https://github.com/borisyankov> 
//                 Mathias Lorenzen <https://github.com/ffMathy>
//                 Leonardo Lombardi <https://github.com/ltlombardi>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

/// <reference types="knockout" />

export as namespace mapping;

declare var self: KnockoutMapping;
export = self;

type Primitives = string | number | boolean | symbol;

declare global {

    type MappedType<T> =
        [T] extends [Primitives] ? KnockoutObservable<T> :
        [T] extends [object] ? KnockoutObservableType<T> :
        any;

    type KnockoutObservableType<T> = {
        [P in keyof T]: T[P] extends Primitives ? KnockoutObservable<T[P]> :
                        T[P] extends any[] ? KnockoutObservableArrayType<T[P][number]> :
                        T[P] extends ReadonlyArray<any> ? KnockoutReadonlyObservableArrayType<T[P][number]> :
                        MappedType<T[P]>;
    };

    // Could not get this to return any when T is any. It returns a Union type of the possible values.
    type KnockoutObservableArrayType<T> = T extends Primitives ? KnockoutObservableArray<T> : KnockoutObservableArray<KnockoutObservableType<T>>;

    type KnockoutReadonlyObservableArrayType<T> = T extends Primitives ? KnockoutReadonlyObservableArray<T> : KnockoutReadonlyObservableArray<KnockoutObservableType<T>>;

    type KnockoutMappingOptions<T> = KnockoutMappingSpecificOptions<T> | KnockoutMappingStandardOptions;

    interface KnockoutMappingStandardOptions {
        ignore?: string[] | undefined;
        include?: string[] | undefined;
        copy?: string[] | undefined;
        observe?: string[] | undefined;
        mappedProperties?: string[] | undefined; // Undocumented
        deferEvaluation?: boolean | undefined; // Undocumented
    }

    type KnockoutMappingSpecificOptions<T> = {
        [P in keyof T]?: KnockoutPropertyMappingCallBack
    }

    interface KnockoutPropertyMappingCallBack {
        create?: ((options: KnockoutMappingCreateOptions) => void) | undefined;
        update?: ((options: KnockoutMappingUpdateOptions) => void) | undefined;
        key?: ((data: any) => any) | undefined;
    }

    interface KnockoutMappingCreateOptions {
        data: any;
        parent: any;
    }

    interface KnockoutMappingUpdateOptions {
        data: any;
        parent: any;
        target: any;
        observable?: KnockoutObservable<any> | undefined;
    }

    interface KnockoutMapping {
        /**
         * Checks if an object was created using KnockoutMapping
         * @param viewModel View model object to be checked.
         */
        isMapped(viewModel: any): boolean;
        /**
         * Creates an observable array view model. Objects on the source array are also converted to observables. Primitive types and arrays are not. 
         * If 'target' is supplied, instead, target's observable properties are updated.
         * @param source Array to be mapped.
         * @param options Options on mapping behavior.
         * @param target View model object previosly mapped to be updated.
         */
        fromJS<T>(source: T[], options?: KnockoutMappingOptions<T[]>, target?: KnockoutObservableArrayType<T>): KnockoutObservableArrayType<T>;
        /**
         * Updates target's observable properties with those of the sources.
         * @param source Array to be mapped.
         * @param target View model object previosly mapped to be updated.
         */
        fromJS<T>(source: T[], target: KnockoutObservableArrayType<T>): KnockoutObservableArrayType<T>;
        /**
         * Creates an readonly observable array view model. Objects on the source array are also converted to observables. Primitive types and arrays are not. 
         * If 'target' is supplied, instead, target's observable properties are updated.
         * @param source Array to be mapped.
         * @param options Options on mapping behavior.
         * @param target View model object previosly mapped to be updated.
         */
        fromJS<T>(source: ReadonlyArray<T>, options?: KnockoutMappingOptions<ReadonlyArray<T>>, target?: KnockoutReadonlyObservableArrayType<T>): KnockoutReadonlyObservableArrayType<T>;
        /**
         * Updates target's observable properties with those of the sources.
         * @param source Array to be mapped.
         * @param target View model object previosly mapped to be updated.
         */
        fromJS<T>(source: ReadonlyArray<T>, target: KnockoutReadonlyObservableArrayType<T>): KnockoutReadonlyObservableArrayType<T>;
        /**
         * Creates a view model object with observable properties for each of the properties on the source. 
         * If 'target' is supplied, instead, target's observable properties are updated.
         * @param source Plain JavaScript object to be mapped.
         * @param options Options on mapping behavior.
         * @param target View model object previosly mapped to be updated.
         */
        fromJS<T>(source: T, options?: KnockoutMappingOptions<T>, target?: MappedType<T>): MappedType<T>;
        /**
         * Updates target's observable properties with those of the sources.
         * @param source Plain JavaScript object to be mapped.
         * @param target View model object previosly mapped to be updated.
         */
        fromJS<T>(source: T, target: MappedType<T>): MappedType<T>;
        /**
         * Creates a view model object with observable properties for each of the properties on the source. 
         * If 'target' is supplied, instead, target's observable properties are updated.
         * @param source JSON of a JavaScript object to be mapped.
         * @param options Options on mapping behavior.
         * @param target View model object previosly mapped to be updated.
         */
        fromJSON(source: string, options?: KnockoutMappingOptions<any>, target?: any): any;
        /**
         * Updates target's observable properties with those of the sources.
         * @param source JSON of a JavaScript object to be mapped.
         * @param target View model object previosly mapped to be updated.
         */
        fromJSON(source: string, target: any): any;
        /**
         * Creates an unmapped object containing only the properties of the mapped object that were part of your original JS object. 
         * @param viewModel View model object previosly mapped.
         * @param options Options on mapping behavior.
         */
        toJS<T>(viewModel: KnockoutObservable<T>, options?: KnockoutMappingOptions<T>): T;
        toJS<T>(viewModel: KnockoutObservableArray<T>, options?: KnockoutMappingOptions<T>): T[];
        toJS<T>(viewModel: KnockoutObservableType<T>, options?: KnockoutMappingOptions<T>): T;
        toJS(viewModel: any, options?: KnockoutMappingOptions<any>): any;
        /**
         * Creates an unmapped object containing only the properties of the mapped object that were part of your original JS object. Stringify the result.
         * @param viewModel Object with observables to be converted.
         * @param options Options on mapping behavior.
         */
        toJSON<T>(viewModel: T, options?: KnockoutMappingOptions<T>): string;
        /**
         * Get the default mapping options
         */
        defaultOptions(): KnockoutMappingStandardOptions;
        /**
         * Undocumented. Reset Mapping default options.
         */
        resetDefaultOptions(): void;
        /**
         * Undocumented. Custom implementation of JavaScript's typeof.
         * @param x object to check type
         */
        getType(x: any): any;
        /**
         * Undocumented.
         */
        visitModel(
            rootObject: any,
            callback: Function,
            options?: { visitedObjects?: any; parentName?: string | undefined; ignore?: string[] | undefined; copy?: string[] | undefined; include?: string[] | undefined; }
        ): any;
    }

    interface KnockoutObservableArrayFunctions<T> {
        mappedCreate(item: T): T;

        mappedRemove(item: T): T[];
        mappedRemove(removeFunction: (item: T) => boolean): T[];
        mappedRemoveAll(items: T[]): T[];
        mappedRemoveAll(): T[];

        mappedDestroy(item: T): void;
        mappedDestroy(destroyFunction: (item: T) => boolean): void;
        mappedDestroyAll(items: T[]): void;
        mappedDestroyAll(): void;
    }

    interface KnockoutStatic { // this is a declaration merging with knockout's interface
        mapping: KnockoutMapping;
    }
}
