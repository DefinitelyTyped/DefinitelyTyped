export = validateString;
declare function validateString(
    value: any,
    type: any,
    max?: number | Date,
    min?: number | Date,
    caseType?: string,
    classKey?: number,
    dateFormat?: any,
    ...args: any[]
): any;
declare namespace validateString {
    function registerType(type: string | string[], handler: any): void;
}
