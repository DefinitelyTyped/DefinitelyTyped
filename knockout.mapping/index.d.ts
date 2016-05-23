// Type definitions for Knockout.Mapping 2.0
// Project: https://github.com/SteveSanderson/knockout.mapping
// Definitions by: Boris Yankov <https://github.com/borisyankov/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

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

    interface KnockoutMapping {
        isMapped(viewModel: any): boolean;
        fromJS(jsObject: any): any;
        fromJS(jsObject: any, targetOrOptions: any): any;
        fromJS(jsObject: any, inputOptions: any, target: any): any;
        fromJSON(jsonString: string): any;
        fromJSON(jsonString: string, targetOrOptions: any): any;
        fromJSON(jsonString: string, inputOptions: any, target: any): any;
        toJS(rootObject: any, options?: KnockoutMappingOptions): any;
        toJSON(rootObject: any, options?: KnockoutMappingOptions): any;
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
