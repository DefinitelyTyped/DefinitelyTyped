export declare function validateBasicType(
    param: number | undefined,
    paramName: string,
    expectedType: BasicArgumentType.NUMBER,
    paramOptional: true,
): any;
export declare function validateBasicType(
    param: boolean | undefined,
    paramName: string,
    expectedType: BasicArgumentType.BOOLEAN,
    paramOptional: true,
): any;
export declare function validateBasicType(
    param: string,
    paramName: string,
    expectedType: BasicArgumentType.STRING,
    paramOptional?: false | undefined,
): any;
/**
 * For convenience pretend that token = string
 * @hidden
 */
export declare function retrieveUXPFileToken(entry: File): string;
