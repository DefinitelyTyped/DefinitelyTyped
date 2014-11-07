// Type definitions for Knockout.Mapping 2.0
// Project: https://github.com/SteveSanderson/knockout.mapping
// Definitions by: Boris Yankov <https://github.com/borisyankov/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../knockout/knockout.d.ts" />

interface KnockoutMappingCreateOptions {
    data: any;
    parent: any;
}

interface KnockoutMappingUpdateOptions {
    data: any;
    parent: any;
    observable: KnockoutObservable<any>;
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
    visitModel(rootObject: any, callback: Function, options?: { visitedObjects?; parentName?; ignore?; copy?; include?; }): any;
}

interface KnockoutStatic {
    mapping: KnockoutMapping;
}

declare module "knockout.mapping" {
    export = mapping;
}
declare var mapping: KnockoutMapping;
