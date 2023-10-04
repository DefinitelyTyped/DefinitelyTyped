// Type definitions for dasherize 2.0
// Project: https://github.com/shahata/dasherize
// Definitions by: Julio Cordeiro <https://github.com/juliomrc>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 4.5

declare function dasherize<T>(data: T): DasherizeReturnType<T>;
export = dasherize;

type DasherizeReturnType<T> = T extends string ? DashCase<T, string>
    : T extends Record<string, unknown> ? ParseObjToDashCase<T>
    : T extends Array<infer TArrayData> ? Array<DasherizeReturnType<TArrayData>>
    : T;

type ParseObjToDashCase<TObj extends Record<string, unknown>> = {
    [Key in keyof TObj as DashCase<Key & string>]: DasherizeReturnType<TObj[Key]>;
};

type DashCase<
    TStringToParse extends string,
    TAlreadyParsedString extends string = "",
> = TStringToParse extends `${infer F}${infer R}` ? F extends Lowercase<F> ? DashCase<R, `${TAlreadyParsedString}${F}`>
    : DashCase<LowerCasedFirstWord<R>, `${AddHyphenSuffixIfNotTheEmptyString<TAlreadyParsedString>}${Lowercase<F>}`>
    : TAlreadyParsedString;

type AddHyphenSuffixIfNotTheEmptyString<T extends string> = T extends "" ? "" : `${T}-`;

type LowerCasedFirstWord<T extends string> = T extends `${infer F}${infer R}`
    ? `${F extends Lowercase<F> ? `${F}${R}` : `${Lowercase<F>}${LowerCasedFirstWord<R>}`}`
    : "";
