import toPrimitive = require('es-to-primitive/es5');
import isCallable = require('is-callable');

import {
    GenericDescriptor as ESGenericDescriptor,
    AccessorDescriptor as ESAccessorDescriptor,
    DataDescriptor as ESDataDescriptor,
    PropertyDescriptor as ESPropertyDescriptor,
} from './index';

interface ES5 {
    readonly ToPrimitive: typeof toPrimitive;
    ToBoolean(value: unknown): boolean;
    ToNumber(value: unknown): number;
    ToInteger(value: unknown): number;
    ToInt32(value: unknown): number;
    ToUint32(value: unknown): number;
    ToUint16(value: unknown): number;
    ToString(value: unknown): string;
    // tslint:disable: ban-types
    ToObject<T>(value: T): T extends object ? T
        : T extends null | undefined ? never
        : T extends string ? String
        : T extends number ? Number
        : T extends boolean ? Boolean
        : T extends symbol ? Symbol
        : T extends bigint ? BigInt
        : object;
    // tslint:enable: ban-types
    CheckObjectCoercible<T>(value: T, errorMessage?: string): NonNullable<T>;

    readonly IsCallable: typeof isCallable;
    SameValue(x: unknown, y: unknown): boolean;

    Type<T>(x: T): T extends string ? 'String'
        : T extends number ? 'Number'
        : T extends boolean ? 'Boolean'
        : T extends null ? 'Null'
        : T extends undefined ? 'Undefined'
        : T extends object ? 'Object'
        : 'String' | 'Number' | 'Boolean' | 'Null' | 'Undefined' | 'Object' | undefined;

    IsPropertyDescriptor(Desc: unknown): Desc is ESPropertyDescriptor;
    IsAccessorDescriptor<T = unknown>(Desc: ESPropertyDescriptor<T>): Desc is ESAccessorDescriptor<T>;
    IsAccessorDescriptor(Desc: unknown): Desc is ESAccessorDescriptor;
    IsDataDescriptor<T = unknown>(Desc: ESPropertyDescriptor<T>): Desc is ESDataDescriptor<T>;
    IsDataDescriptor(Desc: unknown): Desc is ESDataDescriptor;
    IsGenericDescriptor(Desc: unknown): Desc is ESGenericDescriptor;

    FromPropertyDescriptor<T = unknown>(Desc: ESPropertyDescriptor<T>): TypedPropertyDescriptor<T>;
    ToPropertyDescriptor<T = unknown>(Desc: TypedPropertyDescriptor<T>): ESPropertyDescriptor<T>;

    'Abstract Equality Comparison'(x: unknown, y: unknown): boolean;
    'Strict Equality Comparison'(x: unknown, y: unknown): boolean;
    'Abstract Relational Comparison'(x: unknown, y: unknown, LeftFirst: boolean): boolean;

    msFromTime(t: number): number;
    SecFromTime(t: number): number;
    MinFromTime(t: number): number;
    HourFromTime(t: number): number;
    Day(t: number): number;
    TimeWithinDay(t: number): number;
    DayFromYear(t: number): number;
    TimeFromYear(t: number): number;
    YearFromTime(t: number): number;
    WeekDay(t: number): number;
    DaysInYear(t: number): number;
    InLeapYear(t: number): 0 | 1;
    DayWithinYear(t: number): number;
    MonthFromTime(t: number): number;
    DateFromTime(t: number): number;
    MakeDay(year: number, month: number, date: number): number;
    MakeDate(day: number, time: number): number;
    MakeTime(hour: number, min: number, sec: number, ms: number): number;
    TimeClip(time: number): number;

    modulo(x: number, y: number): number;
}

declare namespace ES5 {
    type GenericDescriptor = ESGenericDescriptor;
    type AccessorDescriptor<T = unknown> = ESAccessorDescriptor<T>;
    type DataDescriptor<T = unknown> = ESDataDescriptor<T>;
    type PropertyDescriptor<T = unknown> = ESPropertyDescriptor<T>;
}

declare const ES5: ES5;
export = ES5;
