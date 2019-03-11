declare function isDateObject(value: Date): true;
declare function isDateObject(value: object): boolean;
declare function isDateObject(value: undefined | null | boolean | string | number | symbol | bigint | []): false;

export = isDateObject;
