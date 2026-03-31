export = validateString;
declare function validateString(
    value: any,
    type: string,
    options?: {
        max?: number | Date;
        min?: number | Date;
        caseType?: string;
        classKey?: number;
        displayFormat?: DateFormat | LatitudeFormat | LongitudeFormat | AngleFormat;
        locale?: 'pt-br' | 'en-us';
    },
    ...args: any[]
): any;
declare namespace validateString {
    export { registerType, DateFormat, LatitudeFormat, LongitudeFormat, AngleFormat };
}
declare function registerType(type: any): void;
type DateFormat = import('../date/DateFormat').DateFormatType;
type LatitudeFormat = import('../geo/LatitudeFormat').LatitudeFormatType;
type LongitudeFormat = import('../geo/LongitudeFormat').LongitudeFormatType;
type AngleFormat = import('../geo/AngleFormat').AngleFormatType;
