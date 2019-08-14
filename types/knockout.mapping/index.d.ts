// Type definitions for Knockout.Mapping 2.0
// Project: https://github.com/SteveSanderson/knockout.mapping
// Definitions by: Boris Yankov <https://github.com/borisyankov>, 
//                 Mathias Lorenzen <https://github.com/ffMathy>
//                 Leonardo Lombardi <https://github.com/ltlombardi>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="knockout" />

export as namespace mapping;

declare var self: KnockoutMapping;
export = self;


declare global {
    // the idea behind this is good, but doesn't work as intended. This will make object properties T | Observable<T>, 
    //and you will have to put the correct Type in each property to use them, what defeats the purpose. Besides, this gives  
    //RangeError: Maximum call stack size exceeded in TSC when used in all the mapping signatures. Maybe this can be used with TS 2.8 and conditional typing
    type KnockoutObservableType<T> = {
        [P in keyof T]: KnockoutObservable<KnockoutObservableType<T[P]>> | T[P];
    };

    type KnockoutMappingOptions<T> = KnockoutMappingSpecificOptions<T> | KnockoutMappingStandardOptions

    interface KnockoutMappingStandardOptions {
        ignore?: string[];
        include?: string[];
        copy?: string[];
        observe?: string[];
        mappedProperties?: string[]; // Undocumented
        deferEvaluation?: boolean; // Undocumented
    }

    type KnockoutMappingSpecificOptions<T> = {
        [P in keyof T]?: KnockoutPropertyMappingCallBack
    }

    interface KnockoutPropertyMappingCallBack {
        create?: (options: KnockoutMappingCreateOptions) => void;
        update?: (options: KnockoutMappingUpdateOptions) => void;
        key?: (data: any) => any;
    }

    interface KnockoutMappingCreateOptions {
        data: any;
        parent: any;
    }

    interface KnockoutMappingUpdateOptions {
        data: any;
        parent: any;
        target: any;
        observable?: KnockoutObservable<any>;
    }

    interface KnockoutMapping {
        /**
         * Checks if an object was created using KnockoutMapping
         * @param viewModel View model object to be checked.
         */
        isMapped(viewModel: any): boolean;

        //fromJS could be reduced the number of declarations, but KnockoutObservableType<T> would have to use Conditional Types available only on TS v2.8

        /**
         * Creates a view model object with observable properties for each of the properties on the source. 
         * If 'target' is supplied, instead, target's observable properties are updated.
         * @param source Plain JavaScript object to be mapped.
         * @param options Options on mapping behavior.
         * @param target View model object previosly mapped to be updated.
         */
        fromJS(source: string, options?: KnockoutMappingOptions<string>, target?: KnockoutObservable<string>): KnockoutObservable<string>;
        /**
         * Updates target's observable properties with those of the sources.
         * @param source Plain JavaScript object to be mapped.
         * @param target View model object previosly mapped to be updated.
         */
        fromJS(source: string, target: KnockoutObservable<string>): KnockoutObservable<string>;
        /**
         * Creates a view model object with observable properties for each of the properties on the source. 
         * If 'target' is supplied, instead, target's observable properties are updated.
         * @param source Plain JavaScript object to be mapped.
         * @param options Options on mapping behavior.
         * @param target View model object previosly mapped to be updated.
         */
        fromJS(source: number, options?: KnockoutMappingOptions<number>, target?: KnockoutObservable<number>): KnockoutObservable<number>;
        /**
         * Updates target's observable properties with those of the sources.
         * @param source Plain JavaScript object to be mapped.
         * @param target View model object previosly mapped to be updated.
         */
        fromJS(source: number, target: KnockoutObservable<number>): KnockoutObservable<number>;
        /**
         * Creates a view model object with observable properties for each of the properties on the source. 
         * If 'target' is supplied, instead, target's observable properties are updated.
         * @param source Plain JavaScript object to be mapped.
         * @param options Options on mapping behavior.
         * @param target View model object previosly mapped to be updated.
         */
        fromJS(source: boolean, options?: KnockoutMappingOptions<boolean>, target?: KnockoutObservable<boolean>): KnockoutObservable<boolean>;
        /**
         * Updates target's observable properties with those of the sources.
         * @param source Plain JavaScript object to be mapped.
         * @param target View model object previosly mapped to be updated.
         */
        fromJS(source: boolean, target: KnockoutObservable<boolean>): KnockoutObservable<boolean>;
        /**
         * Creates a view model object with observable properties for each of the properties on the source. 
         * If 'target' is supplied, instead, target's observable properties are updated.
         * @param source Plain JavaScript object to be mapped.
         * @param options Options on mapping behavior.
         * @param target View model object previosly mapped to be updated.
         */
        fromJS<T>(source: T[], options?: KnockoutMappingOptions<T[]>, target?: KnockoutObservableArray<any>): KnockoutObservableArray<any>;
        /**
         * Updates target's observable properties with those of the sources.
         * @param source Plain JavaScript object to be mapped.
         * @param target View model object previosly mapped to be updated.
         */
        fromJS<T>(source: T[], target: KnockoutObservableArray<any>): KnockoutObservableArray<any>;
        /**
         * Creates a view model object with observable properties for each of the properties on the source. 
         * If 'target' is supplied, instead, target's observable properties are updated.
         * @param source Plain JavaScript object to be mapped.
         * @param options Options on mapping behavior.
         * @param target View model object previosly mapped to be updated.
         */
        fromJS<T>(source: T, options?: KnockoutMappingOptions<T>, target?: any): any;
        /**
         * Updates target's observable properties with those of the sources.
         * @param source Plain JavaScript object to be mapped.
         * @param target View model object previosly mapped to be updated.
         */
        fromJS<T>(source: T, target: any): any;
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
        visitModel(rootObject: any, callback: Function, options?: { visitedObjects?: any; parentName?: string; ignore?: string[]; copy?: string[]; include?: string[]; }): any;
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
