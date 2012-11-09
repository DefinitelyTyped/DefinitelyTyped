// Type definitions for Knockout.Mapping 2.0
// Project: https://github.com/SteveSanderson/knockout.mapping
// Definitions by: Boris Yankov <https://github.com/borisyankov/>
// Definitions https://github.com/borisyankov/DefinitelyTyped


interface KnockoutMappingOptions {
    ignore;
    include;
    copy;
    mappedProperties;
    deferEvaluation;
}

interface KnockoutMapping {
    isMapped(viewModel: any): bool;
    fromJS(jsObject: any): any;
    fromJS(jsObject: any, targetOrOptions: any): any;
    fromJS(jsObject: any, inputOptions: any, target: any): any;
    fromJSON(jsonString: string): any;
    toJS(rootObject: any, options?: KnockoutMappingOptions): any;
    toJSON(rootObject: any, options?: KnockoutMappingOptions): any;
    defaultOptions(): KnockoutMappingOptions;
    resetDefaultOptions(): void;
    getType(x: any): any;
    visitModel(rootObject: any, callback: Function, options?: { visitedObjects?; parentName?; ignore?; copy?; include?; } ): any;
}

interface KnockoutStatic {
    mapping: KnockoutMapping;
}