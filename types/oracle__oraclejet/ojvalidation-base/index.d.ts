import Message = require('../ojmessaging');
import Color = require('../ojcolor');
export interface AsyncValidator<V> {
    hint: Promise<(string | null)>;
    validate(value: V): Promise<boolean>;
}
export class ColorConverter implements Converter<Color> {
    constructor(options?: ColorConverter.ConverterOptions);
    format(color: Color): string | null;
    getHint(): string;
    parse(value: string): Color;
    resolvedOptions(): ColorConverter.ConverterOptions;
}
export namespace ColorConverter {
    // tslint:disable-next-line interface-over-type-literal
    type ConverterOptions = {
        format?: 'rgb' | 'hsl' | 'hsv' | 'hex' | 'hex3';
    };
}
export interface ColorConverterFactory {
    createConverter(options?: ColorConverter.ConverterOptions): ColorConverter;
}
export interface Converter<V> {
    format(value: V): string | null;
    getHint?(): string | null;
    getOptions?(): object;
    parse(value: string): V | null;
    resolvedOptions?(): object;
}
export interface ConverterError {
    // constructor(summary: string, detail: string);
    getMessage(): Message;
}
export interface ConverterFactory<V> {
    // static CONVERTER_TYPE_COLOR: string;
    // static CONVERTER_TYPE_DATETIME: string;
    // static CONVERTER_TYPE_NUMBER: string;
    createConverter(options: object | null): Converter<V>;
}
export namespace IntlConverterUtils {
    function dateToLocalIso(date: Date): string;
    function getConverterInstance<T>(converterOption: string | Validation.RegisteredConverter | Converter<T>): Converter<T> | null;
    function getInitials(firstName?: string, lastName?: string): string | undefined;
    function getLocalTimeZoneOffset(): string;
    function isoToDate(isoString: string): Date;
    function isoToLocalDate(isoString: string): Date;
}
export class LengthValidator implements Validator<number | string> {
    static defaults: {
        countBy: string;
    };
    constructor(options?: LengthValidator.ValidatorOptions);
    getHint(): string | null;
    validate(value: string | number): void;
}
export namespace LengthValidator {
    // tslint:disable-next-line interface-over-type-literal
    type ValidatorOptions = {
        countBy?: 'codeUnit' | 'codePoint';
        min?: number;
        max?: number;
        hint?: {
            max?: string;
            min?: string;
            inRange?: string;
            exact?: string;
        };
        messageDetail?: {
            tooLong?: string;
            tooShort?: string;
        };
        messageSummary?: {
            tooLong?: string;
            tooShort?: string;
        };
    };
}
export interface LengthValidatorFactory {
    createValidator(options?: LengthValidator.ValidatorOptions): LengthValidator;
}
export class RegExpValidator implements Validator<string | number> {
    constructor(options?: RegExpValidator.ValidatorOptions);
    getHint(): string | null;
    validate(value: string | number): void;
}
export namespace RegExpValidator {
    // tslint:disable-next-line interface-over-type-literal
    type ValidatorOptions = {
        pattern?: string;
        hint?: string;
        messageSummary?: string;
        messageDetail?: string;
    };
}
export interface RegExpValidatorFactory {
    createValidator(options: RegExpValidator.ValidatorOptions): RegExpValidator;
}
export class RequiredValidator implements Validator<object | string | number> {
    constructor(options?: RequiredValidator.ValidatorOptions);
    getHint(): string | null;
    validate(value: object | string | number): void;
}
export namespace RequiredValidator {
    // tslint:disable-next-line interface-over-type-literal
    type ValidatorOptions = {
        hint?: string;
        messageSummary?: string;
        messageDetail?: string;
    };
}
export interface RequiredValidatorFactory {
    createValidator(options?: RequiredValidator.ValidatorOptions): RequiredValidator;
}
export namespace Validation {
    function converterFactory<CF extends ConverterFactory<any>>(type: 'number' | 'color' | 'datetime' | string, instance?: CF): CF | null;
    function validatorFactory<VF extends ValidatorFactory<any>>(type: 'required' | 'regexp' | 'numberRange' | 'length' | 'dateTimeRange' | 'dateRestriction' | string, instance?: VF): VF | null;
    // tslint:disable-next-line interface-over-type-literal
    type RegisteredConverter = {
        type: string;
        options?: object;
    };
    // tslint:disable-next-line interface-over-type-literal
    type RegisteredValidator = {
        type: string;
        options?: object;
    };
}
export interface Validator<V> {
    getHint?(): string | null;
    validate(value: V): void;
}
export interface ValidatorError {
    // constructor(summary: string, detail: string);
    getMessage(): Message;
}
export interface ValidatorFactory<V> {
    // static VALIDATOR_TYPE_DATERESTRICTION: string;
    // static VALIDATOR_TYPE_DATETIMERANGE: string;
    // static VALIDATOR_TYPE_LENGTH: string;
    // static VALIDATOR_TYPE_NUMBERRANGE: string;
    // static VALIDATOR_TYPE_REGEXP: string;
    // static VALIDATOR_TYPE_REQUIRED: string;
    createValidator(options: object | null): Validator<V>;
}
