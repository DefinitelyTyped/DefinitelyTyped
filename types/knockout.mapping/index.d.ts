// Type definitions for Knockout.Mapping 2.0
// Project: https://github.com/SteveSanderson/knockout.mapping
// Definitions by: Boris Yankov <https://github.com/borisyankov>, 
//                 Mathias Lorenzen <https://github.com/ffMathy>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="knockout" />

export as namespace mapping;

declare var self: KnockoutMapping;
export = self;

declare global {
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

    interface KnockoutMappingOptions {
        ignore?: string[];
        include?: string[];
        copy?: string[];
        mappedProperties?: string[];
        deferEvaluation?: boolean;
        create?: (options: KnockoutMappingCreateOptions) => void;
        update?: (options: KnockoutMappingUpdateOptions) => void;
        key?: (data: any) => any;
    }
    
    type KnockoutObservableType<T> = {
        [P in keyof T]: KnockoutObservable<T[P]>;
    };

    interface KnockoutMapping {
        isMapped(viewModel: any): boolean;
        fromJS<T>(jsObject: T[]): KnockoutObservableType<T>[];
        fromJS<T>(jsObject: T[], targetOrOptions: any): KnockoutObservableType<T>[];
        fromJS<T>(jsObject: T[], inputOptions: any, target: any): KnockoutObservableType<T>[];
        fromJS<T>(jsObject: T): KnockoutObservableType<T>;
        fromJS<T>(jsObject: T, targetOrOptions: any): KnockoutObservableType<T>;
        fromJS<T>(jsObject: T, inputOptions: any, target: any): KnockoutObservableType<T>;
        fromJSON(jsonString: string): any;
        fromJSON(jsonString: string, targetOrOptions: any): any;
        fromJSON(jsonString: string, inputOptions: any, target: any): any;
        toJS<T>(rootObject: KnockoutObservableArray<T>|T, options?: KnockoutMappingOptions): T[];
        toJS<T>(rootObject: KnockoutObservableType<T>|T, options?: KnockoutMappingOptions): T;
        toJSON(rootObject: any, options?: KnockoutMappingOptions): string;
        defaultOptions(): KnockoutMappingOptions;
        resetDefaultOptions(): void;
        getType(x: any): any;
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

    interface KnockoutStatic {
        mapping: KnockoutMapping;
    }
}
