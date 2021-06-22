import type {
    GenericDescriptor as ESGenericDescriptor,
    AccessorDescriptor as ESAccessorDescriptor,
    DataDescriptor as ESDataDescriptor,
    PropertyDescriptor as ESPropertyDescriptor,
} from './index';

interface ES5 {
    readonly 'Abstract Equality Comparison': typeof import('./5/AbstractEqualityComparison');
    readonly 'Abstract Relational Comparison': typeof import('./5/AbstractRelationalComparison');
    readonly 'Strict Equality Comparison': typeof import('./5/StrictEqualityComparison');
    readonly CheckObjectCoercible: typeof import('./5/CheckObjectCoercible');
    readonly DateFromTime: typeof import('./5/DateFromTime');
    readonly Day: typeof import('./5/Day');
    readonly DayFromYear: typeof import('./5/DayFromYear');
    readonly DaysInYear: typeof import('./5/DaysInYear');
    readonly DayWithinYear: typeof import('./5/DayWithinYear');
    readonly FromPropertyDescriptor: typeof import('./5/FromPropertyDescriptor');
    readonly HourFromTime: typeof import('./5/HourFromTime');
    readonly InLeapYear: typeof import('./5/InLeapYear');
    readonly IsAccessorDescriptor: typeof import('./5/IsAccessorDescriptor');
    readonly IsCallable: typeof import('./5/IsCallable');
    readonly IsDataDescriptor: typeof import('./5/IsDataDescriptor');
    readonly IsGenericDescriptor: typeof import('./5/IsGenericDescriptor');
    readonly IsPropertyDescriptor: typeof import('./5/IsPropertyDescriptor');
    readonly MakeDate: typeof import('./5/MakeDate');
    readonly MakeDay: typeof import('./5/MakeDay');
    readonly MakeTime: typeof import('./5/MakeTime');
    readonly MinFromTime: typeof import('./5/MinFromTime');
    readonly modulo: typeof import('./5/modulo');
    readonly MonthFromTime: typeof import('./5/MonthFromTime');
    readonly msFromTime: typeof import('./5/msFromTime');
    readonly SameValue: typeof import('./5/SameValue');
    readonly SecFromTime: typeof import('./5/SecFromTime');
    readonly TimeClip: typeof import('./5/TimeClip');
    readonly TimeFromYear: typeof import('./5/TimeFromYear');
    readonly TimeWithinDay: typeof import('./5/TimeWithinDay');
    readonly ToBoolean: typeof import('./5/ToBoolean');
    readonly ToInt32: typeof import('./5/ToInt32');
    readonly ToInteger: typeof import('./5/ToInteger');
    readonly ToNumber: typeof import('./5/ToNumber');
    readonly ToObject: typeof import('./5/ToObject');
    readonly ToPrimitive: typeof import('./5/ToPrimitive');
    readonly ToPropertyDescriptor: typeof import('./5/ToPropertyDescriptor');
    readonly ToString: typeof import('./5/ToString');
    readonly ToUint16: typeof import('./5/ToUint16');
    readonly ToUint32: typeof import('./5/ToUint32');
    readonly Type: typeof import('./5/Type');
    readonly WeekDay: typeof import('./5/WeekDay');
    readonly YearFromTime: typeof import('./5/YearFromTime');
}

declare namespace ES5 {
    type GenericDescriptor = ESGenericDescriptor;
    type AccessorDescriptor<T = unknown> = ESAccessorDescriptor<T>;
    type DataDescriptor<T = unknown> = ESDataDescriptor<T>;
    type PropertyDescriptor<T = unknown> = ESPropertyDescriptor<T>;
}

declare const ES5: ES5;
export = ES5;
