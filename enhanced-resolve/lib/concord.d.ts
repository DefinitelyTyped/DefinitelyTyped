export interface Type {
    type: string | null | undefined;
    features: string[];
}
export interface Context {
    supportedResourceTypes?: string[];
    environments?: string[];
    referrer: string;
}
declare function parseType(type: string): Type;
declare function isTypeMatched(baseType: string | Type, testedType: string | Type): boolean;
declare function isResourceTypeSupported(context: Context, type: string): boolean | undefined;
declare function isEnvironment(context: Context, env: string | Type): boolean | undefined;
declare function isGlobMatched(glob: string, relativePath: string): boolean;
declare function isConditionMatched(context: Context, condition: string): boolean;
declare function isKeyMatched(context: Context, key: string): string | boolean;
declare function getField(context: Context, configuration: any, field: string): undefined;
declare function getMain(context: Context, configuration: any): undefined;
declare function getExtensions(context: Context, configuration: any): undefined;
declare function matchModule(context: Context, configuration: any, request: string): any;
declare function matchType(context: Context, configuration: any, relativePath: string): undefined;
export {
    parseType,
    isTypeMatched,
    isResourceTypeSupported,
    isEnvironment,
    isGlobMatched,
    isConditionMatched,
    isKeyMatched,
    getField,
    getMain,
    getExtensions,
    matchModule,
    matchType
};
