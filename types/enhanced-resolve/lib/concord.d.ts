export interface Dictionary<T> {
    [key: string]: T;
}

export interface Concord {
    '[server] main': string;
    extensions: string[];
    main: string;
    modules: Dictionary<string>;
    types: Dictionary<string>;
}

export interface Type {
    type: string | null | undefined;
    features: string[];
}

export interface ConcordContext {
    environments?: string[];
    referrer?: string;
    supportedResourceTypes?: string[];
}

declare function parseType(type: string): Type;
declare function isTypeMatched(baseType: string | Type, testedType: string | Type): boolean;
declare function isResourceTypeSupported(context: ConcordContext, type: string): boolean;
declare function isEnvironment(context: ConcordContext, env: string | Type): boolean;
declare function isGlobMatched(glob: string, relativePath: string): boolean;
declare function isConditionMatched(context: ConcordContext, condition: string): boolean;
declare function isKeyMatched(context: ConcordContext, key: string): string | boolean;
declare function getField(context: ConcordContext, configuration: Concord, field: string): any;
declare function getMain(context: ConcordContext, configuration: Concord): any;
declare function getExtensions(context: ConcordContext, configuration: Concord): any;
declare function matchModule(context: ConcordContext, configuration: Concord, request: string): any;
declare function matchType(context: ConcordContext, configuration: Concord, relativePath: string): string | undefined;

export {
    getExtensions,
    getField,
    getMain,
    isConditionMatched,
    isEnvironment,
    isGlobMatched,
    isKeyMatched,
    isResourceTypeSupported,
    isTypeMatched,
    matchModule,
    matchType,
    parseType
};
